# Amazon EFS

### **Amazon EFS Overview**

- **Definition**: Amazon Elastic File System (EFS) is a fully managed, scalable file storage service that provides a simple, serverless NFS (Network File System) for use with AWS Cloud services and on-premises resources, designed for shared access across multiple EC2 instances or containers.
- **Key Features**:
    - Supports NFSv4.0/4.1, enabling shared access for thousands of connections.
    - Offers Standard and Infrequent Access (IA) storage classes for cost optimization.
    - Provides elastic capacity, scaling automatically without provisioning.
    - Integrates with AWS Backup, VPC, and IAM for robust management.
- **Use Cases**: Content management, web serving, home directories, media processing, container storage, big data analytics.

---

### **1. EFS Core Concepts**

### **Components**

- **File System**:
    - Logical container for files and directories, accessible via NFS.
    - Regional resource, spans multiple AZs for high availability.
    - **Explanation**: E.g., file system for shared web content.
- **Mount Target**:
    - Network endpoint (IP address) in a VPC subnet for accessing the file system.
    - One mount target per AZ for Multi-AZ access.
    - **Explanation**: E.g., mount target in us-east-1a for EC2 access.
- **Access Point**:
    - Application-specific entry point with enforced root directory and permissions.
    - Simplifies container and Lambda access.
    - **Explanation**: E.g., access point for /app1 with read-only access.
- **Storage Classes**:
    - **Standard**: Low-latency, high-throughput access.
    - **Infrequent Access (IA)**: Lower-cost, for rarely accessed data.
    - **Explanation**: E.g., Standard for active files, IA for archives.
- **Lifecycle Policies**:
    - Automatically move files between Standard and IA based on access patterns.
    - **Explanation**: E.g., move files to IA after 30 days without access.

### **Performance Modes**

- **General Purpose (default)**:
    - Low latency, suitable for most workloads (e.g., web servers, CMS).
    - **Explanation**: E.g., use for latency-sensitive apps.
- **Max I/O**:
    - Higher throughput, higher latency, for parallel processing (e.g., big data).
    - **Explanation**: E.g., use for Hadoop analytics.

### **Throughput Modes**

- **Bursting**:
    - Scales throughput with file system size (e.g., 100 MiB/s baseline per TB).
    - Uses burst credits for spikes.
    - **Explanation**: E.g., bursts to 300 MiB/s for small file systems.
- **Provisioned**:
    - Fixed throughput (up to 20 GiB/s), independent of size.
    - **Explanation**: E.g., provision 1 GiB/s for media processing.
- **Elastic (new)**:
    - Automatically scales throughput with demand, no provisioning needed.
    - **Explanation**: E.g., auto-scale for unpredictable workloads.

### **Recent Updates (2024–2025)**:

- **Elastic Throughput**: Auto-scaling throughput for unpredictable workloads (October 2024).
- **Lower-Cost IA Storage**: Reduced pricing for Standard-IA and One Zone-IA (March 2024).
- **AWS Backup Enhancements**: PITR, cross-region replication for EFS (April 2024).
- **Security Enhancements**: Default encryption, fine-grained IAM policies (February 2024).

### **Key Notes**:

- **Exam Relevance**: Understand file systems, mount targets, storage classes, and throughput modes.
- **Mastery Tip**: Compare EFS vs. EBS vs. FSx for specific workloads.

---

### **2. EFS Performance Features**

EFS supports high-performing shared storage.

### **Scalability**

- **Purpose**: Handle dynamic workloads.
- **Features**:
    - Elastic capacity (1 GiB to petabytes) without provisioning.
    - Supports thousands of concurrent connections.
- **Explanation**: E.g., scale from 10 GB to 1 PB for media storage.

### **High Throughput**

- **Bursting**: Up to 100 MiB/s baseline, bursts to 300 MiB/s per TB.
- **Provisioned**: Up to 20 GiB/s (e.g., 1 GiB/s for 100 GB file system).
- **Elastic**: Auto-scales to meet demand (no burst credits needed).
- **Explanation**: E.g., Elastic mode for spiky web traffic.

### **Low Latency**

- **General Purpose**: Sub-millisecond latency for most workloads.
- **Explanation**: E.g., fast access for CMS files.

### **Access Points**

- **Purpose**: Simplify app access.
- **Features**: Enforce directory paths, permissions for containers/Lambda.
- **Explanation**: E.g., Lambda reads /data via access point.

### **Key Notes**:

- **Performance**: Elastic throughput + access points = flexible, fast storage.
- **Exam Tip**: Know when to use Elastic vs. Provisioned throughput.

---

### **3. EFS Resilience Features**

Resilience ensures data availability and recovery.

### **Multi-AZ Architecture**

- **Purpose**: High availability.
- **Features**:
    - Standard storage class spans multiple AZs in a Region.
    - Mount targets in each AZ for failover.
- **Explanation**: E.g., EC2 in us-east-1a accesses EFS if us-east-1b fails.

### **One Zone Storage Class**

- **Purpose**: Cost-effective resilience.
- **Features**:
    - Data stored in a single AZ, lower cost (~$0.043/GB-month vs. $0.30).
    - Suitable for non-critical workloads.
- **Explanation**: E.g., use One Zone-IA for dev backups.

### **Backups with AWS Backup**

- **Purpose**: Disaster recovery.
- **Features**:
    - Policy-driven backups, PITR, cross-region replication.
    - Daily backups with retention (e.g., 35 days).
- **Explanation**: E.g., restore EFS to 2 hours ago after accidental deletion.

### **Data Durability**

- **Purpose**: Prevent data loss.
- **Features**: 99.999999999% (11 9s) durability for Standard class.
- **Explanation**: E.g., reliable storage for critical files.

### **Key Notes**:

- **Resilience**: Multi-AZ + AWS Backup = robust file storage.
- **Exam Tip**: Design HA with Standard class and PITR backups.

---

### **4. EFS Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **At Rest**:
    - Default encryption with KMS (AWS-managed or customer-managed keys).
    - **Explanation**: E.g., encrypt CMS files with custom KMS key.
- **In Transit**:
    - TLS for NFS connections (mandatory since February 2024).
    - **Explanation**: E.g., secure file transfers between EC2 and EFS.

### **Access Control**

- **IAM**:
    - Controls file system access (e.g., elasticfilesystem:ClientMount).
    - Fine-grained policies for access points (e.g., read-only for Lambda).
    - **Example**: {"Effect": "Allow", "Action": "elasticfilesystem:ClientRead", "Resource": "arn:aws:elasticfilesystem:us-east-1:123456789012:access-point/fsap-123"}.
- **POSIX Permissions**:
    - Standard Linux permissions (user, group, mode).
    - **Explanation**: E.g., set 644 for read-only web files.
- **VPC Security**:
    - Mount targets in private subnets, secured by security groups.
    - **Explanation**: E.g., allow port 2049 (NFS) from EC2 security group.

### **Compliance**

- **Certifications**: HIPAA, PCI, SOC, ISO, GDPR.
- **Explanation**: E.g., deploy healthcare app with encrypted EFS.

### **Key Notes**:

- **Security**: KMS + IAM + TLS = compliant file storage.
- **Exam Tip**: Practice IAM policies and security group configs for EFS.

---

### **5. EFS Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Storage**:
    - Standard: ~$0.30/GB-month.
    - Standard-IA: ~$0.013/GB-month.
    - One Zone: ~$0.043/GB-month.
    - One Zone-IA: ~$0.008/GB-month.
- **Requests**:
    - ~$0.06/1000 read/write requests (Standard).
    - ~$0.01/1000 for IA.
- **Throughput**:
    - Provisioned: ~$6.00/MiB/s-month.
    - Elastic: Pay-as-you-go, scales with usage.
- **Data Transfer**: Free within Region; charged for cross-region or on-premises.
- **Free Tier**: None.
- **Example**: 100 GB Standard, 50 GB Standard-IA, Elastic throughput ~$30.65/month.

### **Cost Strategies**

- **Infrequent Access**:
    - Use lifecycle policies to move files to IA after 7–30 days.
    - **Explanation**: E.g., move logs to Standard-IA after 14 days.
- **One Zone**:
    - Use for non-critical data to save ~85% vs. Standard.
    - **Explanation**: E.g., One Zone-IA for backups.
- **Elastic Throughput**:
    - Avoid over-provisioning with auto-scaling throughput.
    - **Explanation**: E.g., Elastic for unpredictable CMS traffic.
- **Tagging**:
    - Use cost allocation tags to track file system costs.
    - **Explanation**: E.g., tag file system with “Project:Web”.
- **Clean Up**:
    - Delete unused file systems to avoid charges.

### **Key Notes**:

- **Cost Savings**: IA + One Zone + Elastic = low costs.
- **Exam Tip**: Calculate costs for Standard vs. IA and lifecycle policies.

---

### **6. EFS Advanced Features**

### **Lifecycle Policies**

- **Purpose**: Automate cost savings.
- **Features**:
    - Transition files to IA or One Zone-IA based on last access.
    - Options: 7, 14, 30, 60, 90, 180, 270, 365 days.
- **Explanation**: E.g., move media files to IA after 30 days.

### **Access Points**

- **Purpose**: Secure, simplified access.
- **Features**:
    - Enforce root directory, UID/GID, and permissions.
    - Ideal for ECS, EKS, Lambda.
- **Explanation**: E.g., ECS task accesses /app via access point.

### **Cross-Region Replication**

- **Purpose**: Disaster recovery.
- **Features**:
    - Replicate file system to another Region via AWS Backup.
    - **Explanation**: E.g., replicate EFS to us-west-2 for DR.

### **On-Premises Access**

- **Purpose**: Hybrid cloud.
- **Features**:
    - Access EFS via Direct Connect or VPN.
    - Requires mount target in VPC.
- **Explanation**: E.g., on-premises server mounts EFS for shared storage.

### **Key Notes**:

- **Flexibility**: Access points + replication = versatile file storage.
- **Exam Tip**: Know access points for containers and lifecycle policies for cost.

---

### **7. EFS Use Cases**

Understand practical applications.

### **Content Management**

- **Setup**: EFS + EC2 + General Purpose.
- **Features**: Shared access, low latency.
- **Explanation**: E.g., WordPress media storage.

### **Container Storage**

- **Setup**: EFS + EKS + access points.
- **Features**: Persistent volumes, secure access.
- **Explanation**: E.g., Kubernetes pods share /data.

### **Big Data Analytics**

- **Setup**: EFS + Max I/O + Provisioned.
- **Features**: High throughput, parallel access.
- **Explanation**: E.g., Spark cluster processes large datasets.

### **Home Directories**

- **Setup**: EFS + One Zone + IA.
- **Features**: Cost-effective, scalable.
- **Explanation**: E.g., user home directories for enterprise.

---

### **8. EFS vs. Other Storage Services**

| **Feature** | **EFS** | **EBS** | **S3** |
| --- | --- | --- | --- |
| **Type** | File Storage | Block Storage | Object Storage |
| **Workload** | Shared file systems | Databases, boot volumes | Backups, archives |
| **Performance** | Scalable, shared | High IOPS, low latency | High durability |
| **Cost** | $0.008–$0.30/GB-month | $0.015–$0.125/GB-month | $0.023/GB-month |
| **Use Case** | CMS, containers | EC2 storage | Data lakes |

### **Explanation**:

- **EFS**: Shared, scalable file storage for multiple instances.
- **EBS**: High-performance block storage for single EC2.
- **S3**: Durable object storage for unstructured data.

---

### **Detailed Explanations for Mastery**

- **Elastic Throughput**:
    - **Example**: Auto-scale throughput for a CMS during traffic spikes.
    - **Why It Matters**: Cost/performance optimization—new for 2024.
- **Access Points**:
    - **Example**: Restrict EKS pod to /app with read-only access.
    - **Why It Matters**: Security for containers—exam favorite.
- **Lifecycle Policies**:
    - **Example**: Move logs to IA after 14 days, saving ~95% on storage.
    - **Why It Matters**: Cost optimization—common scenario.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| File System | Shared storage | NFSv4, Multi-AZ | Core Concept |
| Mount Target | Network access | One per AZ, VPC subnet | Core Concept |
| Elastic Throughput | Auto-scale performance | No provisioning, pay-as-you-go | Performance |
| Multi-AZ | High availability | Standard class spans AZs | Resilience |
| Encryption/IAM | Security | KMS, TLS, fine-grained policies | Security |
| IA/One Zone | Cost savings | $0.008–$0.043/GB-month | Cost |
| Access Points | Secure app access | Enforce directory/permissions | Flexibility |
| AWS Backup | Disaster recovery | PITR, cross-region replication | Resilience |