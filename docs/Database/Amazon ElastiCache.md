# Amazon ElastiCache

### **Amazon ElastiCache Overview**

- **Definition**: Amazon ElastiCache is a fully managed in-memory caching service that accelerates application performance by storing frequently accessed data in memory.
- **Key Features**:
    - Supports two engines: Redis and Memcached.
    - Sub-millisecond latency for reads/writes.
    - Integrates with AWS services (e.g., RDS, DynamoDB).
- **Use Cases**: Caching database queries, session stores, real-time analytics, leaderboards.

---

### **1. ElastiCache Core Concepts**

### **Engines**

- **Redis**:
    - Persistent, supports data structures (e.g., lists, sets, hashes).
    - Features: Replication, Multi-AZ, pub/sub, Lua scripting.
    - **Explanation**: Ideal for complex apps needing persistence—e.g., session stores.
- **Memcached**:
    - Non-persistent, simpler, multi-threaded.
    - Features: High throughput, no replication.
    - **Explanation**: Pure caching, faster for simple key-value—e.g., query results.
- **Versions**: Redis 6.x, 7.x; Memcached 1.6.x.
    - **Explanation**: Redis is more feature-rich; Memcached is lightweight.

### **Architecture**

- **Cluster**: Group of nodes running Redis or Memcached.
    - **Redis**: Single primary node (read/write) + replicas (read-only).
    - **Memcached**: Multiple nodes, no replication (data sharded across nodes).
- **Nodes**: Individual instances (e.g., cache.t3.micro, cache.r6g.large).
    - **Explanation**: Node size affects memory/CPU—e.g., t3 for dev, r6g for prod.
- **Shards**: Redis splits data across primary nodes (Cluster Mode enabled); Memcached splits keys across nodes.
    - **Explanation**: Sharding scales capacity—e.g., 10 shards = 10x memory.

### **Key Notes**:

- **Exam Relevance**: Know Redis vs. Memcached trade-offs.
- **Mastery Tip**: Understand cluster vs. node-level scaling.

---

### **2. ElastiCache Performance Features**

ElastiCache excels in high-performing architectures.

### **Sub-Millisecond Latency**

- **Purpose**: Accelerate data access.
- **How It Works**: In-memory storage (RAM) vs. disk-based DBs.
- **Explanation**: E.g., cache RDS query results—100µs vs. 10ms.

### **Redis Features**

- **Replication**: Primary + replicas (up to 5 per shard).
    - **Explanation**: Scales reads—e.g., leaderboard queries to replicas.
- **Cluster Mode**: Shards data across multiple primaries (up to 500 nodes).
    - **Explanation**: Scales writes—e.g., 100M ops/sec for gaming.
- **Pub/Sub**: Real-time messaging.
    - **Explanation**: E.g., chat app notifications.

### **Memcached Features**

- **Multi-Threading**: High throughput for simple key-value.
    - **Explanation**: Faster for basic caching—e.g., static HTML fragments.
- **Auto-Discovery**: Clients find nodes dynamically.
    - **Explanation**: Simplifies app config—e.g., no hard-coded IPs.

### **Scaling**

- **Vertical**: Upgrade node type (e.g., cache.t3.micro to cache.m5.large).
    - **Horizontal**: Add shards (Redis Cluster Mode) or nodes (Memcached).
    - **Explanation**: Redis scales both reads/writes; Memcached scales capacity.

### **Key Notes**:

- **Performance**: Redis for features, Memcached for simplicity.
- **Exam Tip**: Know when to use Cluster Mode vs. replicas.

---

### **3. ElastiCache Resilience Features**

Resilience ensures cache availability.

### **Redis Resilience**

- **Multi-AZ**:
    - Primary + replicas in different AZs.
    - Auto-failover in ~30-60 seconds if primary fails.
    - **Explanation**: Ensures HA—e.g., session store survives AZ outage.
- **Replication**:
    - Asynchronous, low lag (< 1s).
    - **Explanation**: Replicas stay current—promote for DR.
- **Snapshots**:
    - Automated/manual backups to S3.
    - **Explanation**: Restore cluster—e.g., recover cached sessions.
- **Persistence**:
    - RDB (point-in-time) or AOF (log-based).
    - **Explanation**: Survives reboots—unlike Memcached.

### **Memcached Resilience**

- **No Replication**: Data lost on node failure.
    - **Explanation**: Rebuild cache from source—e.g., re-query RDS.
- **Multi-Node**: Spread keys across nodes.
    - **Explanation**: Partial data loss—e.g., 1/4 nodes fails, lose 25% keys.

### **Key Notes**:

- **Resilience**: Redis for HA, Memcached for non-critical data.
- **Exam Tip**: Compare Redis Multi-AZ vs. Memcached’s limitations.

---

### **4. ElastiCache Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **Redis**:
    - **At Rest**: Enabled with Redis 6.0+ (AES-256).
    - **In Transit**: TLS for client connections.
    - **Explanation**: Protects sensitive data—e.g., user sessions.
- **Memcached**:
    - No encryption (neither at rest nor in transit).
    - **Explanation**: Use for non-sensitive data—e.g., public HTML.

### **Access Control**

- **IAM Authentication** (Redis 6.0+):
    - Password-less via IAM roles.
    - **Explanation**: Secure for apps—e.g., ECS to Redis.
- **Redis AUTH**:
    - Password-based (Redis 3.2+).
    - **Explanation**: Legacy—combine with IAM for hybrid.
- **VPC**:
    - Deploy in private subnets, control via security groups.
    - **Example**: Allow port 6379 (Redis) or 11211 (Memcached) from app subnet.
- **Explanation**: No public access—secure by design.

### **Audit Logging**

- **Purpose**: Track commands (Redis only).
- **Features**: Slowlog, engine logs to CloudWatch.
- **Explanation**: Debug or monitor—e.g., detect misuse.

### **Key Notes**:

- **Security**: Redis encryption + IAM = secure caching.
- **Exam Tip**: Practice security group for ElastiCache access.

---

### **5. ElastiCache Cost Optimization**

Cost efficiency is a key exam domain.

### **Instance Sizing**

- **Pricing**: Per node-hour (e.g., cache.t3.micro ~$0.017/hour, cache.r6g.large ~$0.25/hour).
- **Cost Tips**:
    - Use cache.t3.micro for dev/test (Free Tier-eligible).
    - Reserved Nodes (1- or 3-year) for production (~50% savings).
- **Explanation**: Right-size nodes—e.g., t3 for small cache.

### **Scaling Strategy**

- **Purpose**: Avoid over-provisioning.
- **Cost Tips**:
    - Start with minimal nodes/shards, scale out as needed.
    - Redis replicas cheaper than primary upgrades.
- **Explanation**: One replica often enough—e.g., 1 primary + 1 replica.

### **Redis Snapshots**

- **Pricing**: S3 storage (~$0.023/GB-month).
- **Cost Tips**: Limit retention, delete unused snapshots.
- **Explanation**: Snapshots add cost—manage carefully.

### **Memcached Simplicity**

- **Purpose**: Lower cost for volatile data.
- **Explanation**: No backups/replication = cheaper—e.g., $0.034/hour for 2 t3.micro vs. Redis’s $0.068/hour with HA.

### **Key Notes**:

- **Cost Savings**: t3 + Memcached for non-critical, Reserved Nodes for prod.
- **Exam Tip**: Calculate cost for Redis Multi-AZ vs. Memcached.

---

### **6. ElastiCache Advanced Features**

### **Redis Cluster Mode**

- **Purpose**: Scale writes and capacity.
- **Features**:
    - Up to 500 shards, 500 nodes.
    - Data partitioned across shards.
- **Explanation**: High-scale apps—e.g., gaming leaderboards.

### **Redis Pub/Sub**

- **Purpose**: Real-time messaging.
- **Explanation**: E.g., push notifications for chat apps.

### **Redis Data Structures**

- **Purpose**: Flexible storage.
- **Features**: Lists, sets, sorted sets, hashes.
- **Explanation**: E.g., store user rankings in sorted set.

### **Global Datastore (Redis)**

- **Purpose**: Cross-region replication.
- **Features**: Primary Region (read/write), secondary Regions (read-only).
- **Explanation**: Low-latency global reads—e.g., cache sessions worldwide.

### **Key Notes**:

- **Flexibility**: Cluster Mode + Pub/Sub = advanced use cases.
- **Exam Tip**: Know Global Datastore for global apps.

---

### **7. ElastiCache Use Cases**

Understand practical applications.

### **Database Caching**

- **Setup**: ElastiCache + RDS/DynamoDB.
- **Features**: Cache query results, reduce DB load.
- **Explanation**: E.g., cache product details from RDS.

### **Session Stores**

- **Setup**: Redis + ECS.
- **Features**: Persistent, fast reads/writes.
- **Explanation**: E.g., user login sessions for web apps.

### **Real-Time Analytics**

- **Setup**: Redis + Lambda.
- **Features**: Sorted sets, low latency.
- **Explanation**: E.g., live leaderboards for gaming.

### **Message Queues**

- **Setup**: Redis Pub/Sub.
- **Features**: Lightweight messaging.
- **Explanation**: E.g., chat app notifications.

---

### **8. ElastiCache vs. Other Services**

| **Feature** | **ElastiCache** | **DynamoDB DAX** | **RDS** |
| --- | --- | --- | --- |
| **Type** | In-Memory Cache | In-Memory Cache | Relational DB |
| **Engines** | Redis, Memcached | DynamoDB-specific | MySQL, PostgreSQL, etc. |
| **Latency** | Sub-millisecond | Microseconds | Milliseconds |
| **Persistence** | Redis (optional) | No | Yes |
| **Cost** | Node-based | Node-based | Instance + storage |

### **Explanation**:

- **ElastiCache**: General-purpose caching, flexible engines.
- **DAX**: DynamoDB-specific, microsecond latency.
- **RDS**: Persistent, relational storage.

---

### **Detailed Explanations for Mastery**

- **Redis Multi-AZ**:
    - **Example**: Primary in us-east-1a, replica in us-east-1b—failover in ~30s.
    - **Why It Matters**: Ensures HA—exam tests failover scenarios.
- **Memcached Sharding**:
    - **Example**: 4 nodes, keys hashed across—lose 1 node, lose 25% data.
    - **Why It Matters**: No HA—use for volatile data only.
- **Cluster Mode**:
    - **Example**: 2 shards, 2 replicas each—scales to 4x capacity.
    - **Why It Matters**: Handles large datasets—key for scale scenarios.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Engines | Caching | Redis (persistent), Memcached | Core Concept |
| Multi-AZ (Redis) | High availability | Auto-failover, ~30-60s | Resilience |
| Replication (Redis) | Read scaling | Up to 5 replicas/shard | Performance, Resilience |
| Cluster Mode (Redis) | Write scaling | Up to 500 shards | Performance |
| Encryption (Redis) | Security | At rest (6.0+), TLS | Security |
| IAM Auth (Redis) | Secure access | Password-less, 6.0+ | Security |
| Snapshots (Redis) | Backup | S3, automated/manual | Resilience |
| Global Datastore | Global reads | Cross-region replication | Performance, Resilience |