# dynamo db

### **Amazon DynamoDB Overview**

- **Definition**: Amazon DynamoDB is a fully managed NoSQL database service designed for low-latency, scalable, and highly available key-value and document-based workloads.
- **Key Concepts**:
    - **Tables**: Containers for data (items).
    - **Items**: Individual records (up to 400 KB).
    - **Attributes**: Key-value pairs within items.
- **Use Cases**: Real-time applications (e.g., gaming leaderboards, IoT, e-commerce carts).

---

### **1. DynamoDB Core Concepts**

### **Tables, Items, and Attributes**

- **Tables**: Logical collections of items (no fixed schema).
    - **Explanation**: Flexible—items in a table can have different attributes.
- **Items**: Rows of data, like JSON documents (e.g., { "userId": "123", "name": "Alice" }).
    - **Explanation**: Max size 400 KB—split large data into multiple items or use S3.
- **Attributes**: Name-value pairs within an item (e.g., "score": 95).
    - **Explanation**: Can be scalar (string, number), set, or nested (document).

### **Primary Keys**

- **Types**:
    - **Partition Key**: Single attribute (e.g., userId)—distributes data across partitions.
    - **Composite Key**: Partition key + sort key (e.g., userId + orderDate)—organizes data within a partition.
- **Explanation**: Partition key determines data distribution; sort key enables range queries (e.g., all orders for userId in 2023).
- **Design Tip**: Choose keys for even distribution (e.g., avoid status as partition key—hot partitions).

### **Key Notes**:

- **Exam Relevance**: Know key types and their impact on scalability.
- **Mastery Tip**: Practice designing keys for a use case (e.g., user sessions).

---

### **2. Capacity Modes**

### **Provisioned Capacity**

- **Purpose**: Pre-allocate read/write throughput.
- **Units**:
    - **RCU (Read Capacity Unit)**: 1 strong consistent read (4 KB) or 2 eventually consistent reads per second.
    - **WCU (Write Capacity Unit)**: 1 write (1 KB) per second.
- **Auto-Scaling**: Adjusts RCU/WCU based on demand (e.g., target 70% utilization).
- **Explanation**: Predictable workloads—cheaper if usage is steady.

### **On-Demand Capacity**

- **Purpose**: Pay per request, no capacity planning.
- **Features**: Scales instantly, no limits.
- **Explanation**: Flexible—ideal for unpredictable traffic (e.g., new app launches).

### **Key Notes**:

- **Performance**: On-Demand for bursts, Provisioned for consistency.
- **Exam Tip**: Calculate RCU/WCU for a workload (e.g., 10 KB item = 3 RCUs strongly consistent).

---

### **3. DynamoDB Indexes**

Indexes enhance query flexibility.

### **Local Secondary Index (LSI)**

- **Purpose**: Alternate sort key for a partition key.
- **Features**:
    - Max 5 per table, created at table creation.
    - Shares capacity with base table.
- **Explanation**: Query within a partition (e.g., userId with timestamp instead of orderId).
- **Use Case**: Sort orders by date for a user.

### **Global Secondary Index (GSI)**

- **Purpose**: Alternate partition key and/or sort key.
- **Features**:
    - Max 20 per table, add/remove anytime.
    - Separate capacity (RCU/WCU) from base table.
- **Explanation**: Query across partitions (e.g., email as partition key instead of userId).
- **Use Case**: Find users by email, not just ID.

### **Key Notes**:

- **Exam Relevance**: LSI for intra-partition queries, GSI for cross-partition.
- **Mastery Tip**: Design a table with LSI and GSI for a multi-access app.

---

### **4. DynamoDB Resilience Features**

Resilience ensures data durability and availability.

### **Multi-AZ Replication**

- **Purpose**: High availability and durability.
- **How It Works**: Data replicated across 3 AZs in a Region (11 9s durability).
- **Explanation**: Automatic—no config needed, survives AZ failures.

### **Global Tables**

- **Purpose**: Multi-region replication.
- **How It Works**: Replicates table to other Regions (eventual consistency).
- **Explanation**: Enables low-latency reads globally and DR—e.g., us-east-1 + eu-west-1.
- **Requirement**: On-Demand or Provisioned with auto-scaling.

### **Point-in-Time Recovery (PITR)**

- **Purpose**: Restore to any second in the last 35 days.
- **How It Works**: Continuous backups, enabled manually.
- **Explanation**: Protects against accidental deletes—restores to new table.

### **Key Notes**:

- **Resilience**: Global Tables for DR, PITR for recovery.
- **Exam Tip**: Know PITR setup and Global Table consistency model.

---

### **5. DynamoDB Performance Features**

DynamoDB excels in high-performing architectures.

### **Low Latency**

- **Purpose**: Single-digit millisecond reads/writes.
- **Explanation**: SSD-based, distributed design—scales with partitions.

### **DynamoDB Accelerator (DAX)**

- **Purpose**: In-memory caching for reads.
- **Features**:
    - Microsecond latency (vs. milliseconds).
    - Write-through cache (updates table + cache).
- **Explanation**: Offloads read traffic—e.g., leaderboard queries.
- **Use Case**: Read-heavy apps (e.g., social media).

### **Streams**

- **Purpose**: Capture table changes in near real-time.
- **Features**:
    - 24-hour retention.
    - Triggers Lambda or processes via Kinesis.
- **Explanation**: Enables event-driven apps—e.g., update cache on item change.

### **Key Notes**:

- **Performance**: DAX for reads, Streams for reactivity.
- **Exam Tip**: Compare DAX vs. ElastiCache (DAX is DynamoDB-specific).

---

### **6. DynamoDB Security Features**

Security is critical for SAA-C03.

### **Encryption**

- **At Rest**: AWS KMS (default or custom key).
- **In Transit**: HTTPS/TLS.
- **Explanation**: Meets compliance needs (e.g., GDPR).

### **Access Control**

- **IAM Policies**: Fine-grained access (e.g., allow reads on specific attributes).
    - **Example**: {"Effect": "Allow", "Action": "dynamodb:GetItem", "Resource": "table/users", "Condition": {"ForAllValues:StringEquals": {"dynamodb:Attributes": ["name"]}}}.
- **VPC Endpoints**: Private access via AWS PrivateLink.
- **Explanation**: Keeps traffic off the internet—secure for enterprise apps.

### **Key Notes**:

- **Security**: IAM + VPC Endpoints = least privilege.
- **Exam Tip**: Practice IAM policy for attribute-level access.

---

### **7. DynamoDB Cost Optimization**

Cost efficiency is a key exam domain.

### **Capacity Modes**

- **Provisioned**: Cheaper for steady loads (e.g., $1.25/100 WCUs/month).
- **On-Demand**: Flexible but pricier (e.g., $1.25/million writes).
- **Explanation**: Over-provisioning wastes money—use auto-scaling.

### **Time to Live (TTL)**

- **Purpose**: Auto-delete expired items (free).
- **How It Works**: Set TTL attribute (e.g., expireAt epoch time).
- **Explanation**: Reduces storage costs—e.g., session data cleanup.

### **DAX**

- **Cost**: Extra charge (~$0.02/hour per node).
- **Explanation**: Use only for high-read apps to justify expense.

### **Key Notes**:

- **Cost Savings**: TTL + right capacity mode = efficient usage.
- **Exam Tip**: Calculate cost for Provisioned vs. On-Demand.

---

### **8. DynamoDB Use Cases**

Understand practical applications.

### **Real-Time Analytics**

- **Setup**: Table + Streams + Lambda.
- **Features**: Millisecond latency, event-driven.
- **Explanation**: Leaderboards, live metrics.

### **Session Management**

- **Setup**: Table with TTL.
- **Features**: Scalable, auto-expiry.
- **Explanation**: Web app sessions—e.g., cart data.

### **IoT Data Store**

- **Setup**: Global Tables + DAX.
- **Features**: Low latency, global access.
- **Explanation**: Sensor data across regions.

---

### **9. DynamoDB Operations**

- **Batch Operations**: Write/Get up to 25 items per request.
    - **Explanation**: Reduces API calls—faster, cheaper.
- **Transactions**: Atomic writes/reads (up to 25 items).
    - **Explanation**: Ensures consistency—e.g., deduct stock + log sale.

---

### **Detailed Explanations for Mastery**

- **Partition Key Design**:
    - **Example**: userId (good), status (bad—hot partitions).
    - **Why It Matters**: Uneven distribution throttles performance—key exam pitfall.
- **RCU/WCU Calculation**:
    - **Example**: 10 KB item, strongly consistent read = 3 RCUs (10 ÷ 4, rounded up).
    - **Why It Matters**: Miscalculate, and you over/under-provision.
- **Streams Use Case**:
    - **Example**: Item update → Lambda → update S3 aggregate.
    - **Why It Matters**: Event-driven pattern—common in SAA-C03.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Primary Keys | Data access | Partition, Composite | Core Concept |
| Capacity Modes | Throughput | Provisioned, On-Demand | Cost, Performance |
| LSI/GSI | Query flexibility | 5 LSI, 20 GSI | Performance |
| Global Tables | Multi-region | Eventual consistency | Resilience |
| DAX | Read acceleration | Microsecond latency | Performance |
| Streams | Change capture | 24-hour retention | Performance |
| Encryption | Security | KMS, TLS | Security |
| TTL | Auto-delete | Free, attribute-based | Cost Optimization |