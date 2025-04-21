# Amazon DocumentDB

### **Amazon DocumentDB Overview**

- **Definition**: Amazon DocumentDB is a fully managed, MongoDB-compatible NoSQL database service designed for scalability, performance, and high availability, optimized for JSON-like document storage.
- **Key Features**:
    - Compatible with MongoDB 3.6, 4.0, and 5.0 APIs.
    - Scales compute and storage independently.
    - Managed backups, replication, and patching.
- **Use Cases**: Content management, user profiles, real-time analytics, e-commerce catalogs.

---

### **1. DocumentDB Core Concepts**

### **Architecture**

- **Cluster**: One primary instance (read/write) + up to 15 read replicas.
    - **Explanation**: Similar to Aurora—decouples compute from storage for scalability.
- **Storage**:
    - Auto-scales from 10 GB to 64 TB.
    - Replicates 6 copies across 3 Availability Zones (AZs).
    - **Explanation**: No manual provisioning—grows with data; 11 9s durability.
- **Documents**: JSON-like (BSON), up to 16 MB per document.
    - **Explanation**: Flexible schema—e.g., { "userId": "123", "name": "Alice", "orders": [...] }.

### **Instances**

- **Types**:
    - **General Purpose (e.g., db.t3, db.m5)**: Burstable (t3), balanced (m5).
    - **Memory Optimized (e.g., db.r5)**: High memory for large datasets.
    - **Explanation**: t3.medium is Free Tier-eligible; r5 for high-throughput apps.
- **Scaling**:
    - **Vertical**: Change instance type (brief downtime).
    - **Horizontal**: Add read replicas.
    - **Explanation**: Replicas scale reads; primary handles writes.

### **MongoDB Compatibility**

- **Purpose**: Run MongoDB workloads with minimal changes.
- **Features**:
    - Supports MongoDB drivers, tools (e.g., mongodump).
    - Not all MongoDB features (e.g., no sharding, limited aggregation pipeline).
- **Explanation**: Drop-in for most apps—check compatibility for advanced features.

### **Key Notes**:

- **Exam Relevance**: Understand cluster model and MongoDB compatibility.
- **Mastery Tip**: Compare DocumentDB vs. MongoDB self-managed (e.g., on EC2).

---

### **2. DocumentDB Performance Features**

DocumentDB supports high-performing NoSQL workloads.

### **Low Latency**

- **Purpose**: Fast document reads/writes.
- **Features**: Millisecond latency, SSD-based storage.
- **Explanation**: Optimized for JSON queries—e.g., find user by userId.

### **Read Replicas**

- **Purpose**: Scale read traffic.
- **Features**:
    - Up to 15 replicas, sub-second replication lag.
    - Auto-scaling replicas based on load.
    - Cross-region replicas for global reads.
- **Explanation**: Offloads queries—e.g., analytics on replica, writes on primary.

### **Indexing**

- **Purpose**: Speed up queries.
- **Types**:
    - Primary index (unique key).
    - Secondary indexes (single field, compound, multikey).
    - **Explanation**: E.g., index on email for fast lookups.
- **Limit**: 64 indexes per collection.
- **Explanation**: Balance indexes—too many slow writes.

### **Global Clusters**

- **Purpose**: Low-latency reads across regions.
- **How It Works**: Primary Region (read/write), secondary Regions (read-only, < 1s lag).
- **Explanation**: Similar to Aurora Global Database—e.g., U.S. writes, EU reads.

### **Key Notes**:

- **Performance**: Replicas + indexes = scalable queries.
- **Exam Tip**: Know read replica setup for read-heavy apps.

---

### **3. DocumentDB Resilience Features**

Resilience ensures high availability and data recovery.

### **Multi-AZ Storage**

- **Purpose**: Survive AZ failures.
- **How It Works**: 6 copies across 3 AZs, tolerates 2 copy losses.
- **Explanation**: Built-in—no Multi-AZ config needed (unlike RDS).

### **Failover**

- **Purpose**: High availability.
- **How It Works**:
    - Primary fails, replica promoted in ~30-120 seconds.
    - Automatic DNS switch.
- **Explanation**: Fast due to shared storage—similar to Aurora.

### **Backups**

- **Automated**:
    - Continuous, restore to any point in last 35 days.
    - Stored in S3, incremental.
    - **Explanation**: PITR for granular recovery—e.g., undo bad update.
- **Manual Snapshots**:
    - User-triggered, persist until deleted.
    - **Explanation**: Use for long-term backups, cross-region copy.

### **Global Clusters**

- **Purpose**: Regional DR.
- **Explanation**: Promote secondary Region to primary if needed—manual process.

### **Key Notes**:

- **Resilience**: 6-copy storage + fast failover = robust HA.
- **Exam Tip**: Compare failover time (~30-120s) vs. RDS (~1-2 min).

---

### **4. DocumentDB Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **At Rest**: AWS KMS (default, cannot disable).
- **In Transit**: TLS for client connections (MongoDB drivers).
- **Explanation**: Meets compliance—e.g., GDPR, HIPAA.

### **Access Control**

- **Authentication**:
    - Native MongoDB users (username/password).
    - IAM roles (MongoDB 4.0+).
    - **Explanation**: IAM simplifies app auth—e.g., Lambda to DocumentDB.
- **Authorization**:
    - Role-based access control (RBAC) for collections.
    - **Explanation**: Fine-grained—e.g., read-only for analytics users.
- **VPC**:
    - Deploy in private subnets, control via security groups.
    - **Example**: Allow port 27017 from app subnet only.
- **Explanation**: No public access by default—secure by design.

### **Audit Logging**

- **Purpose**: Track activity.
- **Features**: Profiler logs queries, saved to CloudWatch.
- **Explanation**: Monitor for security—e.g., detect unauthorized access.

### **Key Notes**:

- **Security**: KMS + IAM + VPC = enterprise-grade protection.
- **Exam Tip**: Practice IAM role for DocumentDB access.

---

### **5. DocumentDB Cost Optimization**

Cost efficiency is a key exam domain.

### **Instance Sizing**

- **Pricing**: Pay for instance hours (e.g., db.t3.medium ~$0.07/hour, db.r5.large ~$0.29/hour).
- **Cost Tips**:
    - Use db.t3.medium for dev/test (Free Tier-eligible).
    - Reserved Instances (1- or 3-year) for production (~50% savings).
- **Explanation**: Right-size instances—e.g., t3 for low traffic.

### **Storage**

- **Pricing**: ~$0.10/GB-month, pay for used capacity.
- **Cost Tips**: Monitor growth—cannot shrink storage.
- **Explanation**: Auto-scaling avoids over-provisioning.

### **Replicas**

- **Purpose**: Scale reads without over-sizing primary.
- **Cost Tips**: Add replicas only for load or DR—each costs instance price.
- **Explanation**: One replica often enough for HA.

### **Backups**

- **Pricing**: ~$0.02/GB-month for snapshots.
- **Cost Tips**: Set retention to minimum (e.g., 7 days), delete manual snapshots.
- **Explanation**: Snapshots add cost—manage carefully.

### **Key Notes**:

- **Cost Savings**: t3 + minimal replicas + short retention.
- **Exam Tip**: Calculate cost for cluster with 1 replica vs. primary-only.

---

### **6. DocumentDB Advanced Features**

### **Change Streams**

- **Purpose**: Capture real-time updates.
- **Features**: Monitor insert/update/delete (MongoDB 4.0+).
- **Explanation**: Event-driven—e.g., trigger Lambda on new order.

### **Tunable Consistency**

- **Purpose**: Balance performance vs. accuracy.
- **Options**: Eventual, strong consistency (per query).
- **Explanation**: Default eventual—use strong for critical reads (e.g., inventory).

### **Aggregation Pipeline**

- **Purpose**: Transform/query documents.
- **Features**: Supports most MongoDB operators (e.g., $group, $match).
- **Explanation**: Complex analytics—e.g., sum orders by region.

### **Cluster Clones**

- **Purpose**: Create instant copies.
- **Features**: Copy-on-write for testing/dev.
- **Explanation**: Fast, cost-efficient—e.g., test schema changes.

### **Key Notes**:

- **Flexibility**: Change Streams + Aggregation = powerful NoSQL.
- **Exam Tip**: Know Change Streams for event-driven apps.

---

### **7. DocumentDB Use Cases**

Understand practical applications.

### **Content Management**

- **Setup**: DocumentDB + ECS.
- **Features**: Flexible schema for articles, metadata.
- **Explanation**: CMS—e.g., blog posts with nested comments.

### **User Profiles**

- **Setup**: DocumentDB + Lambda.
- **Features**: Fast reads, JSON storage.
- **Explanation**: Social apps—e.g., user settings, preferences.

### **E-Commerce Catalogs**

- **Setup**: DocumentDB + Global Clusters.
- **Features**: Scalable, global reads.
- **Explanation**: Product data—e.g., nested attributes (size, color).

### **Real-Time Analytics**

- **Setup**: DocumentDB + Change Streams.
- **Features**: Event-driven updates.
- **Explanation**: Dashboards—e.g., live order tracking.

---

### **8. DocumentDB vs. Other Databases**

| **Feature** | **DocumentDB** | **DynamoDB** | **Aurora** |
| --- | --- | --- | --- |
| **Type** | NoSQL (Document) | NoSQL (Key-Value) | Relational |
| **Data Model** | JSON/BSON | Key-value, JSON | Tables |
| **Workload** | Document queries | Key lookups, simple queries | SQL transactions |
| **Storage** | 64 TB | Unlimited | 128 TB |
| **Latency** | Milliseconds | Milliseconds | Milliseconds |
| **Cost** | Instance + storage | Request-based | Instance + storage |

### **Explanation**:

- **DocumentDB**: Nested documents, MongoDB apps.
- **DynamoDB**: Simple key-value, infinite scale.
- **Aurora**: Structured data, SQL.

---

### **Detailed Explanations for Mastery**

- **Read Replicas**:
    - **Example**: Primary in us-east-1, replica in eu-west-1 for EU reads.
    - **Why It Matters**: Scales reads, supports DR—exam tests replica use.
- **Change Streams**:
    - **Example**: New order → Lambda → update dashboard.
    - **Why It Matters**: Enables real-time—common SAA-C03 pattern.
- **Indexes**:
    - **Example**: Index email for login queries—speeds up finds.
    - **Why It Matters**: Over-indexing slows writes—balance is key.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Cluster Architecture | Scalability | Primary + 15 replicas | Core Concept |
| Storage | Data persistence | Auto-scales to 64 TB | Cost, Performance |
| Read Replicas | Read scaling | Sub-second lag, cross-region | Performance, Resilience |
| Global Clusters | Global reads | < 1s replication | Resilience, Performance |
| Failover | High availability | ~30-120 seconds | Resilience |
| Encryption | Security | KMS, TLS | Security |
| IAM Auth | Secure access | MongoDB 4.0+ | Security |
| Change Streams | Real-time updates | Event-driven | Performance |