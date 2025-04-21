# Amazon EBS

### **Amazon EBS Overview**

- **Definition**: Amazon Elastic Block Store (EBS) is a high-performance, scalable block storage service designed for use with Amazon EC2 instances, providing persistent storage for a wide range of workloads.
- **Key Features**:
    - Offers multiple volume types optimized for different performance and cost needs (e.g., SSD, HDD).
    - Supports snapshots for backups, stored in Amazon S3.
    - Provides encryption, Multi-Attach, and elasticity (resize without downtime).
    - Integrates with AWS Backup, Auto Scaling, and other services.
- **Use Cases**: Databases (e.g., MySQL, Oracle), enterprise applications (e.g., SAP), big data analytics, boot volumes for EC2, file systems.

---

### **1. EBS Core Concepts**

### **Components**

- **EBS Volume**:
    - Block storage device attached to an EC2 instance via NVMe or iSCSI.
    - Persistent, independent of instance lifecycle.
    - **Explanation**: E.g., 100 GB volume for EC2 database storage.
- **Snapshot**:
    - Point-in-time backup of a volume, stored in S3.
    - Incremental, only changed blocks are saved.
    - **Explanation**: E.g., snapshot of a 100 GB volume for DR.
- **Volume Types**:
    - SSD-backed: gp3, gp2, io2, io1 (high performance).
    - HDD-backed: st1, sc1 (cost-effective for throughput-intensive).
    - **Explanation**: E.g., gp3 for general-purpose, io2 for mission-critical.
- **Availability Zone (AZ)**:
    - Volumes are AZ-specific; must be in the same AZ as the EC2 instance.
    - **Explanation**: E.g., volume in us-east-1a for EC2 in us-east-1a.

### **Volume Types**

| **Type** | **Use Case** | **Performance** | **Size** | **Cost** |
| --- | --- | --- | --- | --- |
| **gp3** (SSD) | General-purpose, databases | 3,000–16,000 IOPS, 125–1,000 MB/s | 1 GB–16 TB | ~$0.08/GB-month |
| **gp2** (SSD) | Boot volumes, dev/test | 3,000–16,000 IOPS (burst), 250 MB/s | 1 GB–16 TB | ~$0.10/GB-month |
| **io2** (SSD) | Mission-critical (SAP, Oracle) | Up to 256,000 IOPS, 4,000 MB/s | 4 GB–64 TB | ~$0.125/GB-month |
| **io1** (SSD) | High-performance, legacy | 50–64,000 IOPS, 1,000 MB/s | 4 GB–16 TB | ~$0.125/GB-month |
| **st1** (HDD) | Big data, streaming | 500 MB/s, 500 IOPS | 125 GB–16 TB | ~$0.045/GB-month |
| **sc1** (HDD) | Cold data, backups | 250 MB/s, 250 IOPS | 125 GB–16 TB | ~$0.015/GB-month |
- **Explanation**: gp3 is default for cost/performance; io2 for high IOPS; st1/sc1 for large, sequential workloads.

### **Key Updates (2024–2025)**:

- **io2 Block Express**: Up to 256,000 IOPS, 4,000 MB/s, sub-millisecond latency for io2 volumes (available on Nitro-based instances).
- **Snapshot Encryption**: Default encryption for new snapshots; re-encryption support for existing snapshots (March 2024).
- **Multi-Attach Enhancements**: Supports up to 16 Nitro-based instances for io2/io1 (e.g., Oracle RAC).
- **Cost Allocation Tags**: Track snapshot costs by project/environment (October 2024).

### **Key Notes**:

- **Exam Relevance**: Understand volume types, snapshots, and encryption.
- **Mastery Tip**: Compare gp3 vs. gp2 and io2 vs. io1 for performance/cost.

---

### **2. EBS Performance Features**

EBS supports high-performing workloads.

### **High IOPS and Throughput**

- **gp3**: 3,000 IOPS, 125 MB/s baseline; up to 16,000 IOPS, 1,000 MB/s.
- **io2 Block Express**: Up to 256,000 IOPS, 4,000 MB/s, sub-ms latency.
- **Explanation**: E.g., io2 for SAP HANA with high transactional throughput.

### **Elasticity**

- **Purpose**: Adjust performance dynamically.
- **Features**:
    - Modify volume size, type, or IOPS/throughput without downtime.
    - **Explanation**: E.g., resize gp3 from 100 GB to 200 GB in seconds.

### **Burst Performance**

- **gp2**: Burst credits for up to 3,000 IOPS (based on volume size).
- **T3 Instances**: Aligns with burstable EC2 for cost-efficient performance.
- **Explanation**: E.g., gp2 bursts for dev/test spikes.

### **Multi-Attach**

- **Purpose**: Shared access.
- **Features**:
    - io2/io1 volumes attach to up to 16 Nitro-based instances (same AZ).
    - Requires cluster-aware file system (e.g., GFS2, OCFS2).
- **Explanation**: E.g., shared io2 volume for Oracle RAC cluster.

### **Key Notes**:

- **Performance**: io2 Block Express + elasticity = enterprise-grade.
- **Exam Tip**: Know IOPS/throughput limits and Multi-Attach use cases.

---

### **3. EBS Resilience Features**

Resilience ensures data availability and recovery.

### **Multi-AZ Snapshots**

- **Purpose**: Survive AZ failures.
- **Features**:
    - Snapshots stored in S3, replicated across AZs in a Region.
    - Restore volumes in any AZ within the Region.
- **Explanation**: E.g., restore snapshot from us-east-1a to us-east-1b.

### **Cross-Region Replication**

- **Purpose**: Disaster recovery.
- **Features**:
    - Copy snapshots to another Region (manual or via AWS Backup).
    - **Explanation**: E.g., replicate EBS snapshot to us-west-2 for DR.

### **Fast Snapshot Restore (FSR)**:

- **Purpose**: Speed up recovery.
- **Features**:
    - Pre-initializes snapshots for instant restores (bypasses lazy loading).
    - Costs ~$0.0125/snapshot/AZ/hour.
- **Explanation**: E.g., enable FSR for critical database snapshots.

### **Integration with AWS Backup**

- **Purpose**: Centralized DR.
- **Features**:
    - Policy-driven backups, cross-region replication, PITR.
    - **Explanation**: E.g., daily EBS backups with 35-day retention.

### **Key Notes**:

- **Resilience**: Snapshots + FSR + AWS Backup = robust DR.
- **Exam Tip**: Design DR with cross-region snapshots and AWS Backup.

---

### **4. EBS Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **At Rest**:
    - All volume types support KMS encryption (AWS-managed or customer-managed keys).
    - Snapshots encrypted by default for new volumes (March 2024).
    - **Explanation**: E.g., encrypt root volume with custom KMS key.
- **In Transit**:
    - NVMe/TLS for data between EC2 and EBS.
    - **Explanation**: E.g., secure data during volume access.

### **Access Control**

- **IAM**:
    - Controls volume/snapshot operations (e.g., ec2:CreateVolume).
    - Snapshot sharing with specific accounts or public.
    - **Example**: {"Effect": "Allow", "Action": "ec2:CreateSnapshot", "Resource": "arn:aws:ec2:us-east-1::volume/vol-123"}.
- **Resource-Based Policies**:
    - Restrict snapshot access (e.g., allow only dev account).
- **Explanation**: E.g., share encrypted snapshot with partner account.

### **Compliance**

- **Certifications**: HIPAA, PCI, SOC, ISO.
- **Explanation**: E.g., deploy healthcare app with encrypted EBS.

### **Key Notes**:

- **Security**: KMS + IAM = compliant storage.
- **Exam Tip**: Practice snapshot sharing and encryption policies.

---

### **5. EBS Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Volumes**:
    - gp3: ~$0.08/GB-month, $0.005/provisioned IOPS, $0.04/provisioned MB/s.
    - gp2: ~$0.10/GB-month.
    - io2: ~$0.125/GB-month, $0.065/provisioned IOPS.
    - st1: ~$0.045/GB-month.
    - sc1: ~$0.015/GB-month.
- **Snapshots**:
    - ~$0.05/GB-month (incremental, S3-based).
- **FSR**: ~$0.0125/snapshot/AZ/hour.
- **Free Tier**: 30 GB gp2, 1 GB snapshots for 12 months.
- **Example**: 100 GB gp3 (3,000 IOPS, 125 MB/s) + 50 GB snapshots ~$9.50/month.

### **Cost Strategies**

- **Right-Sizing**:
    - Use gp3 for cost/performance (20% cheaper than gp2).
    - Choose st1/sc1 for non-critical, sequential workloads.
- **Snapshot Management**:
    - Delete unused snapshots to reduce S3 costs.
    - Use incremental snapshots to minimize storage.
- **Elasticity**:
    - Resize volumes dynamically to avoid over-provisioning.
- **Tagging**:
    - Use cost allocation tags for volume/snapshot cost tracking.
- **Explanation**: E.g., tag snapshots with “Project:Analytics” for budgeting.

### **Key Notes**:

- **Cost Savings**: gp3 + incremental snapshots + tags = low costs.
- **Exam Tip**: Calculate costs for gp3 vs. io2 and snapshot retention.

---

### **6. EBS Advanced Features**

### **io2 Block Express**

- **Purpose**: Ultra-high performance.
- **Features**:
    - 256,000 IOPS, 4,000 MB/s, sub-ms latency.
    - Available on Nitro-based instances (e.g., m5, r5).
- **Explanation**: E.g., use for Oracle database with high IOPS.

### **Multi-Attach**

- **Purpose**: Shared storage.
- **Features**:
    - io2/io1 volumes attach to 16 instances (Nitro-only).
    - Supports cluster-aware file systems.
- **Explanation**: E.g., shared volume for high-availability SQL Server.

### **Elastic Volumes**

- **Purpose**: Dynamic resizing.
- **Features**:
    - Modify size, IOPS, throughput, or type (e.g., gp2 to gp3) without detaching.
    - **Explanation**: E.g., upgrade to io2 during peak load.

### **Snapshot Archive**

- **Purpose**: Long-term storage.
- **Features**:
    - Move snapshots to lower-cost archive tier (~$0.0125/GB-month).
    - 24–72 hour restore time.
- **Explanation**: E.g., archive old database snapshots for compliance.

### **Key Notes**:

- **Flexibility**: Block Express + Multi-Attach = advanced workloads.
- **Exam Tip**: Know snapshot archive and Multi-Attach limitations.

---

### **7. EBS Use Cases**

Understand practical applications.

### **Databases**

- **Setup**: EC2 + io2 + AWS Backup.
- **Features**: High IOPS, PITR via snapshots.
- **Explanation**: E.g., MySQL with io2 for low-latency queries.

### **Boot Volumes**

- **Setup**: EC2 + gp3.
- **Features**: Reliable, burstable performance.
- **Explanation**: E.g., Amazon Linux 2 root volume.

### **Big Data**

- **Setup**: EC2 + st1.
- **Features**: High throughput, low cost.
- **Explanation**: E.g., Hadoop cluster with st1 volumes.

### **Disaster Recovery**

- **Setup**: Snapshots + cross-region replication.
- **Features**: Fast restores, cross-AZ/Region.
- **Explanation**: E.g., replicate EBS snapshots for DR.

---

### **8. EBS vs. Other Storage Services**

| **Feature** | **EBS** | **EFS** | **S3** |
| --- | --- | --- | --- |
| **Type** | Block Storage | File Storage | Object Storage |
| **Workload** | Databases, boot volumes | Shared file systems | Backups, archives |
| **Performance** | High IOPS, low latency | Scalable, shared | High durability |
| **Cost** | $0.015–$0.125/GB-month | $0.30/GB-month | $0.023/GB-month |
| **Use Case** | EC2-attached storage | NFS for containers | Data lakes |

### **Explanation**:

- **EBS**: Low-latency block storage for EC2.
- **EFS**: Shared file system for multiple instances.
- **S3**: Durable object storage for backups/archives.

---

### **Detailed Explanations for Mastery**

- **io2 Block Express**:
    - **Example**: Provision io2 with 100,000 IOPS for SAP HANA.
    - **Why It Matters**: High performance—exam favorite.
- **Snapshot Encryption**:
    - **Example**: Re-encrypt existing snapshot with new KMS key.
    - **Why It Matters**: Compliance—new for 2024.
- **Multi-Attach**:
    - **Example**: Share io2 volume across 4 EC2 instances for Oracle RAC.
    - **Why It Matters**: Advanced HA—common scenario.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Volume Types | Optimize performance | gp3, io2, st1, sc1 | Core Concept |
| Snapshots | Backup/restore | Incremental, S3-based | Core Concept |
| io2 Block Express | Ultra-high performance | 256,000 IOPS, 4,000 MB/s | Performance |
| Cross-Region | Disaster recovery | Replicate snapshots | Resilience |
| Encryption | Security | KMS, default for snapshots | Security |
| Snapshot Archive | Cost savings | $0.0125/GB-month, slow restore | Cost |
| Multi-Attach | Shared storage | io2/io1, 16 instances | Flexibility |
| Fast Snapshot Restore | Quick recovery | Pre-initialized snapshots | Resilience |