# Amazon Keyspaces

### **Amazon Keyspaces Overview**

- **Definition**: Amazon Keyspaces (for Apache Cassandra) is a scalable, highly available, fully managed, serverless NoSQL database service compatible with Apache Cassandra, using Cassandra Query Language (CQL) for semi-structured data workloads.
- **Key Features**:
    - Compatible with Apache Cassandra 3.11.2 APIs, drivers, and tools.
    - Serverless, eliminating server provisioning, patching, or management.
    - Automatic scaling of throughput and storage.
    - 99.99% availability SLA within a Region.
    - Data encrypted by default; supports point-in-time recovery (PITR).
- **Use Cases**: IoT device data, gaming profiles, time-series data (e.g., logs, chat histories), real-time analytics, fleet management.

---

### **1. Keyspaces Core Concepts**

### **Data Model**

- **Keyspaces**: Collections of tables, similar to a database schema (e.g., catalog keyspace for related tables).
    - **Explanation**: Group tables by application or environment—e.g., production vs. staging.
- **Tables**: Store rows with a primary key (partition key + optional clustering columns).
    - **Partition Key**: Distributes data across partitions (simple or compound).
    - **Clustering Columns**: Sort rows within a partition.
    - **Explanation**: E.g., user_id (partition key) + timestamp (clustering column) for time-series data.
- **Cassandra Query Language (CQL)**:
    - SQL-like, supports DDL (create keyspaces/tables) and DML (insert, select, update, delete).
    - **Example**: SELECT * FROM catalog.book_awards WHERE isbn = '123';.
    - **Explanation**: Familiar to SQL users, optimized for NoSQL.

### **Architecture**

- **Serverless**: No nodes to manage; AWS handles infrastructure.
- **Storage**: Virtually unlimited, auto-scales with no size limit per table.
- **Replication**: Data replicated 3x across multiple AZs per Region.
    - **Explanation**: Built-in high availability—e.g., survives AZ failure.

### **Access**

- **Drivers**: Apache Cassandra 2.0-licensed drivers (Java, Python, Ruby, .NET, Node.js, PHP, C++, Perl).
- **Tools**: CQLSH, AWS Management Console, AWS CLI, SDK, CloudFormation, Terraform.
- **Explanation**: Minimal code changes—update hostname to Keyspaces endpoint.

### **Keyspaces vs. Other Databases**

| **Feature** | **Keyspaces** | **DynamoDB** | **DocumentDB** |
| --- | --- | --- | --- |
| **Type** | NoSQL (Cassandra) | NoSQL (Key-Value) | NoSQL (Document) |
| **Data Model** | Keyspaces/Tables | Key-Value, JSON | JSON/BSON |
| **API** | CQL | AWS SDK | MongoDB API |
| **Scaling** | Serverless | Serverless | Instance-based |
| **Latency** | Single-digit ms | Single-digit ms | Milliseconds |
| **Cost** | IO + storage | IO + storage | Instance + storage |

### **Explanation**:

- **Keyspaces**: Cassandra-compatible, semi-structured data, serverless.
- **DynamoDB**: Simple key-value, AWS-native, serverless.
- **DocumentDB**: Document-oriented, MongoDB-compatible, instance-based.