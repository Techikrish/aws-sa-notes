# Amazon RDS

### **Amazon RDS Overview**

- **Definition**: Amazon RDS is a managed relational database service that simplifies setup, operation, and scaling of databases in the cloud.
- **Key Features**:
    - Supports multiple database engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server.
    - Automates backups, patching, and failover.
    - Scales compute and storage independently.
- **Use Cases**: Web applications, e-commerce, enterprise systems, data analytics.

---

### **1. RDS Core Concepts**

### **Database Engines**

- **Supported Engines**:
    - MySQL, PostgreSQL, MariaDB (open-source).
    - Oracle, SQL Server (commercial).
    - **Explanation**: Each engine has version support—e.g., MySQL 8.0, PostgreSQL 15.
- **Custom Options**:
    - **RDS Custom for Oracle**: Full control over OS/DB.
    - **RDS Custom for SQL Server**: Limited customization.
    - **Explanation**: Niche—focus on standard RDS for SAA-C03.

### **Instances**

- **Instance Types**:
    - **General Purpose (e.g., db.m5, db.t3)**: Balanced CPU/memory, burstable (t3).
    - **Memory Optimized (e.g., db.r5)**: High memory for query-heavy workloads.
    - **Burstable (e.g., db.t3)**: Cost-effective, Free Tier-eligible (e.g., db.t3.micro).
    - **Explanation**: Match to workload—e.g., db.r5 for large joins.
- **Scaling**:
    - **Vertical**: Change instance type (e.g., db.m5.large to db.m5.xlarge).
    - **Horizontal**: Add read replicas.
    - **Explanation**: Vertical scaling causes brief downtime; replicas scale reads.

### **Storage**

- **Types**:
    - **General Purpose SSD (gp2/gp3)**: gp2 ties IOPS to size (3 IOPS/GB), gp3 decouples (up to 16,000 IOPS).
    - **Provisioned IOPS SSD (io1)**: High-performance, up to 64,000 IOPS.
    - **Magnetic**: Legacy, avoid for new deployments.
    - **Explanation**: gp3 is default—cost-effective, scalable to 64 TB.
- **Auto-Scaling**: Increase storage dynamically (cannot decrease).
    - **Explanation**: Prevents out-of-space errors—e.g., grow from 100 GB to 200 GB.

### **Key Notes**:

- **Exam Relevance**: Know engine differences, instance/storage options.
- **Mastery Tip**: Practice selecting instance/storage for a workload (e.g., OLTP vs. analytics).

---

### **2. RDS Performance Features**

RDS supports high-performing database workloads.

### **Read Replicas**

- **Purpose**: Offload read traffic.
- **Features**:
    - Asynchronous replication, up to 5 replicas per primary.
    - Promote to standalone DB for DR.
    - Cross-region replicas for global reads.
- **Explanation**: Lowers primary load—e.g., reporting queries to replica.
- **Performance**: Sub-second lag, region-dependent.

### **Enhanced Monitoring**

- **Purpose**: Track performance metrics.
- **Features**: Granular OS-level metrics (e.g., CPU, memory) via CloudWatch.
- **Explanation**: Helps optimize—e.g., detect IOPS bottleneck.

### **Storage IOPS**

- **Purpose**: Ensure fast disk access.
- **Features**: gp3/io1 allow high IOPS (e.g., 16,000 for gp3, 64,000 for io1).
- **Explanation**: Critical for OLTP—e.g., high transaction rates.

### **Caching**

- **Purpose**: Speed up queries.
- **Features**: Engine-specific (e.g., MySQL query cache, PostgreSQL shared buffers).
- **Explanation**: Managed by RDS—tune parameters for performance.

### **Key Notes**:

- **Performance**: Replicas + high IOPS = scalable throughput.
- **Exam Tip**: Know read replica setup for read-heavy apps.

---

### **3. RDS Resilience Features**

Resilience ensures high availability and data recovery.

### **Multi-AZ Deployment**

- **Purpose**: High availability.
- **How It Works**:
    - Synchronous replication to standby instance in another AZ.
    - Failover in ~1-2 minutes if primary fails (DNS switch).
- **Explanation**: Standby not readable—used only for failover.
- **Use Case**: Production apps needing uptime (e.g., e-commerce).

### **Read Replicas**

- **Purpose**: Read scaling + secondary DR.
- **Explanation**: Promote replica to primary if needed—manual process.

### **Backups**

- **Automated**:
    - Daily snapshots + transaction logs.
    - Retention: 0-35 days (default 7).
    - **Explanation**: Restore to any point in time (PITR) within retention.
- **Manual Snapshots**:
    - User-triggered, persist until deleted.
    - **Explanation**: Use for long-term backups, cross-region copy.

### **Cross-Region Replication**

- **Purpose**: Disaster recovery, global reads.
- **How It Works**: Asynchronous read replicas in another Region.
- **Explanation**: Higher lag (seconds)—e.g., us-east-1 to eu-west-1.

### **Key Notes**:

- **Resilience**: Multi-AZ for HA, snapshots for DR.
- **Exam Tip**: Compare Multi-AZ (sync) vs. read replicas (async).

---

### **4. RDS Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **At Rest**: AWS KMS (default or custom key).
- **In Transit**: SSL/TLS for client connections.
- **Explanation**: Enabled at creation—meets compliance (e.g., GDPR, HIPAA).

### **Access Control**

- **IAM Authentication**:
    - Password-less login for MySQL/PostgreSQL.
    - **Explanation**: Uses IAM tokens—secure for apps.
- **Database Users**: Native credentials for each engine.
    - **Explanation**: Combine with IAM for hybrid auth.
- **VPC**:
    - Deploy in private subnets, control via security groups.
    - **Example**: Allow port 3306 from app subnet only.
- **Explanation**: Isolates DB—public access rare in production.

### **Audit Logging**

- **Purpose**: Track activity.
- **Features**: Engine-specific (e.g., MariaDB audit plugin, PostgreSQL pgAudit).
- **Explanation**: Logs to CloudWatch or DB—e.g., monitor failed logins.

### **Key Notes**:

- **Security**: KMS + IAM + VPC = enterprise-grade protection.
- **Exam Tip**: Practice IAM policy for RDS access + security group rules.

---

### **5. RDS Cost Optimization**

Cost efficiency is a key exam domain.

### **Instance Sizing**

- **Purpose**: Match compute to workload.
- **Cost Tips**:
    - Use db.t3.micro for dev/test (Free Tier).
    - Reserved Instances (1- or 3-year) for production (up to 70% savings).
- **Explanation**: Over-sizing wastes money—e.g., db.m5.large vs. db.t3.medium.

### **Storage**

- **Purpose**: Optimize disk costs.
- **Cost Tips**:
    - gp3 over io1 unless high IOPS needed (~$0.08/GB vs. $0.125/GB).
    - Avoid over-provisioning—auto-scaling adds capacity.
- **Explanation**: Storage is fixed at creation—plan for growth.

### **Multi-AZ/Replicas**

- **Purpose**: Balance HA vs. cost.
- **Cost Tips**:
    - Skip Multi-AZ for non-critical apps.
    - Use replicas only for read scaling or DR.
- **Explanation**: Multi-AZ doubles instance cost—e.g., $0.20/hour vs. $0.40/hour.

### **Backups**

- **Purpose**: Control snapshot costs.
- **Cost Tips**: Set retention to minimum (e.g., 7 days), delete manual snapshots.
- **Explanation**: Snapshots incur S3 costs—e.g., $0.05/GB-month.

### **Key Notes**:

- **Cost Savings**: gp3 + Reserved Instances + minimal HA.
- **Exam Tip**: Calculate cost for Multi-AZ vs. single-AZ.

---

### **6. RDS Advanced Features**

### **RDS Proxy**

- **Purpose**: Manage database connections.
- **Features**:
    - Pools connections, reduces failover time.
    - Integrates with IAM, Secrets Manager.
- **Explanation**: Improves scalability—e.g., Lambda to RDS.

### **Performance Insights**

- **Purpose**: Analyze query performance.
- **Features**: Visualizes bottlenecks (e.g., slow queries, locks).
- **Explanation**: Free for 7 days, then $0.01-$0.10/hour—tune DB parameters.

### **Blue/Green Deployments**

- **Purpose**: Zero-downtime upgrades.
- **How It Works**: Create staging (green) DB, sync with production (blue), switch over.
- **Explanation**: Safe for major version upgrades—e.g., MySQL 5.7 to 8.0.

### **Custom Engine Versions**

- **Purpose**: Run specific versions.
- **Explanation**: Niche—e.g., Oracle 19c with custom patches.

### **Key Notes**:

- **Flexibility**: Proxy + Insights = better management.
- **Exam Tip**: Know RDS Proxy for serverless apps.

---

### **7. RDS Use Cases**

Understand practical applications.

### **Web Applications**

- **Setup**: RDS MySQL + EC2/ALB.
- **Features**: Scalable, managed relational DB.
- **Explanation**: CMS, e-commerce—e.g., WordPress backend.

### **Enterprise Systems**

- **Setup**: RDS Oracle + Multi-AZ.
- **Features**: HA, compliance-ready.
- **Explanation**: ERP, CRM—e.g., SAP.

### **Analytics Reporting**

- **Setup**: RDS PostgreSQL + read replicas.
- **Features**: Offload analytics queries.
- **Explanation**: Dashboards—e.g., sales reports.

### **Serverless Apps**

- **Setup**: RDS + RDS Proxy + Lambda.
- **Features**: Connection pooling, IAM auth.
- **Explanation**: Microservices—e.g., API backend.

---

### **8. RDS vs. Other Databases**

| **Feature** | **RDS** | **Aurora** | **Redshift** |
| --- | --- | --- | --- |
| **Type** | Relational (OLTP) | Relational (OLTP) | Data Warehouse (OLAP) |
| **Engines** | MySQL, PostgreSQL, etc. | MySQL, PostgreSQL | Redshift |
| **Performance** | Moderate | Up to 15x faster | Massively parallel |
| **Storage** | EBS, max 64 TB | Auto-scales, 128 TB | S3-backed, petabytes |
| **Failover** | ~1-2 minutes | < 30 seconds | Seconds (Multi-AZ) |
| **Cost** | Lower | Higher | Node-based |

### **Explanation**:

- **RDS**: General-purpose, cost-effective relational DB.
- **Aurora**: High-performance, premium relational DB.
- **Redshift**: Analytics, not transactional.

---

### **Detailed Explanations for Mastery**

- **Multi-AZ Failover**:
    - **Example**: Primary in us-east-1a fails, standby in us-east-1b takes over.
    - **Why It Matters**: DNS switch is automatic—know ~1-2 minute window.
- **Read Replicas**:
    - **Example**: Primary in us-east-1, replica in ap-southeast-1 for APAC reads.
    - **Why It Matters**: Scales reads, not writes—exam tests this distinction.
- **RDS Proxy**:
    - **Example**: Lambda connects via Proxy, reuses connections.
    - **Why It Matters**: Solves connection limits—key for serverless.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Engines | Database support | MySQL, PostgreSQL, Oracle | Core Concept |
| Multi-AZ | High availability | Sync standby, ~1-2 min failover | Resilience |
| Read Replicas | Read scaling | Async, max 5, cross-region | Performance, Resilience |
| Storage | Data persistence | gp3, io1, auto-scaling | Cost, Performance |
| Encryption | Security | KMS, SSL/TLS | Security |
| IAM Auth | Secure access | Password-less for MySQL/PG | Security |
| RDS Proxy | Connection management | Pools, IAM integration | Performance |
| Backups | Recovery | Automated, 0-35 days | Resilience |