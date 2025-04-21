# S3

### **Amazon S3 Overview**

- **Definition**: Amazon Simple Storage Service (S3) is an object storage service offering scalability, durability, and flexibility.
- **Key Concepts**:
    - **Buckets**: Containers for objects (globally unique names).
    - **Objects**: Files stored in buckets (key + data + metadata).
    - **Keys**: Unique identifiers for objects within a bucket.
- **Durability**: 99.999999999% (11 9s) across all storage classes.
- **Availability**: Varies by storage class (e.g., 99.99% for Standard).
- **Use Cases**: Backup, archiving, static websites, data lakes, content distribution.

---

### **1. S3 Storage Classes**

S3 offers multiple storage classes tailored to different access patterns and cost needs. These are critical for cost optimization and performance.

### **S3 Standard**

- **Purpose**: Frequently accessed data.
- **Availability**: 99.99%.
- **Latency**: Milliseconds.
- **Use Case**: Active content, big data analytics, gaming.
- **Note**: Default storage class, no retrieval fees.

### **S3 Intelligent-Tiering**

- **Purpose**: Data with unpredictable access patterns.
- **Features**: Automatically moves objects between Frequent Access and Infrequent Access tiers based on usage.
- **Availability**: 99.9%.
- **Cost**: Small monitoring fee ($0.0025 per 1,000 objects).
- **Use Case**: Workloads with changing access (e.g., machine learning datasets).

### **S3 Standard-Infrequent Access (Standard-IA)**

- **Purpose**: Infrequently accessed but requiring fast retrieval.
- **Availability**: 99.9%.
- **Retrieval Fee**: Yes ($0.01 per GB).
- **Minimum Storage Duration**: 30 days.
- **Use Case**: Backups, disaster recovery data.

### **S3 One Zone-Infrequent Access (One Zone-IA)**

- **Purpose**: Infrequent access, lower cost, single Availability Zone (AZ).
- **Availability**: 99.5%.
- **Retrieval Fee**: Yes ($0.01 per GB).
- **Minimum Storage Duration**: 30 days.
- **Use Case**: Secondary backups, non-critical data.

### **S3 Glacier**

- **Purpose**: Long-term storage with retrieval in minutes to hours.
- **Availability**: 99.99%.
- **Retrieval Options**:
    - Expedited (1-5 minutes).
    - Standard (3-5 hours).
    - Bulk (5-12 hours).
- **Minimum Storage Duration**: 90 days.
- **Use Case**: Media archives, compliance data.

### **S3 Glacier Deep Archive**

- **Purpose**: Rarely accessed data with retrieval in hours.
- **Availability**: 99.99%.
- **Retrieval Options**:
    - Standard (12 hours).
    - Bulk (48 hours).
- **Minimum Storage Duration**: 180 days.
- **Use Case**: Regulatory archives, digital preservation.

### **Key Notes**:

- **Cost Optimization**: Match storage class to access frequency (e.g., Glacier for archival saves money).
- **Resilience**: All classes replicate across multiple AZs except One Zone-IA.

---

### **2. S3 Security**

Security is a major focus for SAA-C03, and S3 offers robust mechanisms.

### **Encryption**

- **Server-Side Encryption (SSE)**:
    - **SSE-S3**: AWS-managed keys (AES-256).
    - **SSE-KMS**: AWS Key Management Service keys (customizable, auditable).
    - **SSE-C**: Customer-provided keys (you manage the key).
- **Client-Side Encryption**: Encrypt data before uploading.
- **Default Encryption**: Enable on bucket to encrypt all new objects.
- **Use Case**: Compliance (e.g., HIPAA with SSE-KMS).

### **Access Control**

- **IAM Policies**: Control user/service access to S3.
    - Example: Allow specific IAM role to read from a bucket.
- **Bucket Policies**: JSON-based policies at the bucket level.
    - Example: {"Effect": "Deny", "Principal": "*", "Action": "s3:GetObject", "Condition": {"Bool": {"aws:SecureTransport": "false"}}} (enforce HTTPS).
- **Access Control Lists (ACLs)**: Legacy, less granular (object/bucket level).
- **Block Public Access**: Prevents accidental public exposure.

### **Key Notes**:

- **Secure Design**: Combine IAM and bucket policies for least privilege.
- **Exam Tip**: Practice writing bucket policies for scenarios (e.g., deny unencrypted uploads).

---

### **3. S3 Features for Resilience**

Resilience is key for fault-tolerant architectures.

### **Versioning**

- **Purpose**: Protect against accidental deletes/overwrites.
- **How It Works**: Each object gets a version ID; old versions are retained.
- **MFA Delete**: Extra layer requiring MFA to delete versions.
- **Use Case**: Recover deleted files, audit changes.

### **Replication**

- **Cross-Region Replication (CRR)**:
    - Replicates objects to another region.
    - Use Case: Disaster recovery, latency reduction.
- **Same-Region Replication (SRR)**:
    - Replicates within the same region.
    - Use Case: Compliance, data redundancy.
- **Requirements**: Versioning enabled, IAM role for replication.
- **Note**: Only new objects are replicated unless manually triggered.

### **Key Notes**:

- **Resilience**: CRR ensures data survives regional failures.
- **Exam Tip**: Know setup steps (e.g., replication rules in console).

---

### **4. S3 Performance Features**

High-performing architectures often leverage S3 optimizations.

### **Transfer Acceleration**

- **Purpose**: Speed up uploads/downloads using AWS edge locations.
- **How It Works**: Routes traffic via CloudFront’s edge network.
- **Use Case**: Global teams uploading large files.
- **Cost**: Additional fee applies.

### **Multipart Upload**

- **Purpose**: Upload large objects (up to 5 TB) in parts.
- **Benefits**: Parallel uploads, resumable on failure.
- **Use Case**: Video files, backups.
- **Threshold**: Recommended for objects > 100 MB.

### **S3 Select**

- **Purpose**: Query data in S3 without full retrieval.
- **How It Works**: Uses SQL-like queries on CSV, JSON, Parquet.
- **Use Case**: Data lakes, analytics.

### **Integration with CloudFront**

- **Purpose**: Cache S3 content at edge locations.
- **Benefits**: Reduced latency, lower S3 costs.
- **Use Case**: Static websites, media streaming.

### **Key Notes**:

- **Performance**: Multipart + Transfer Acceleration for large uploads.
- **Exam Tip**: Know when to use CloudFront vs. Transfer Acceleration.

---

### **5. S3 Cost Optimization**

Cost optimization is a core SAA-C03 domain.

### **Lifecycle Policies**

- **Purpose**: Automate transitions/deletions of objects.
- **Examples**:
    - Transition Standard → Glacier after 30 days.
    - Delete expired objects after 365 days.
- **Use Case**: Reduce costs for aging data.
- **Note**: Applies to specific prefixes or tags.

### **Storage Class Analysis**

- **Purpose**: Monitor access patterns.
- **Output**: Recommendations for transitions (e.g., to Intelligent-Tiering).
- **Use Case**: Optimize unpredictable workloads.

### **Key Notes**:

- **Cost Savings**: Glacier Deep Archive is cheapest for long-term storage.
- **Exam Tip**: Calculate costs for lifecycle scenarios.

---

### **6. S3 Event Notifications**

S3 integrates with other services for automation.

### **Event Types**

- Object created (e.g., s3:ObjectCreated:*).
- Object deleted (e.g., s3:ObjectRemoved:*).

### **Destinations**

- **AWS Lambda**: Trigger functions (e.g., resize images).
- **SQS/SNS**: Queue or notify on events.
- **Use Case**: Real-time processing (e.g., ETL pipelines).

### **Key Notes**:

- **Automation**: Lambda + S3 for serverless workflows.
- **Exam Tip**: Know event configuration steps.

---

### **7. S3 Use Cases**

Understand how S3 fits into architectures.

### **Static Website Hosting**

- **Setup**: Enable in bucket properties, specify index/error documents.
- **Access**: Public via bucket policy or CloudFront.
- **Use Case**: Blogs, single-page apps.

### **Backup and Disaster Recovery**

- **Features**: Versioning, CRR, lifecycle policies.
- **Use Case**: Enterprise backups with regional failover.

### **Data Lakes**

- **Features**: S3 Select, integration with Athena.
- **Use Case**: Store and analyze unstructured data.

### **Content Distribution**

- **Features**: CloudFront + S3.
- **Use Case**: Video streaming, software downloads.

---

### **8. S3 Data Transfer**

Large-scale data movement is a common exam topic.

### **AWS Snowball**

- **Purpose**: Transfer petabytes to/from S3.
- **Use Case**: Data migration from on-premises.

### **S3 Transfer Acceleration**

- Covered under performance.

### **Key Notes**:

- **Scale**: Snowball for TB/PB, Transfer Acceleration for GB.
- **Exam Tip**: Compare with Direct Connect.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Storage Classes | Cost/performance balance | 6 options, varying retrieval times | Cost, Performance |
| Encryption | Data security | SSE-S3, SSE-KMS, SSE-C | Security |
| Versioning | Resilience | Retains old versions | Resilience |
| Replication | DR/redundancy | CRR (cross-region), SRR | Resilience |
| Transfer Acceleration | Speed up transfers | Uses edge locations | Performance |
| Lifecycle Policies | Cost management | Automates transitions | Cost Optimization |
| Event Notifications | Automation | Triggers Lambda, SQS, SNS | Performance, Operations |
| Static Hosting | Web hosting | Public bucket + CloudFront | Performance |

---

### **Study Tips**

- **Hands-On**: Create a bucket in the AWS Free Tier, test versioning, lifecycle rules, and static hosting.
- **Scenarios**: Practice questions like “Choose the best storage class for X” or “Secure a bucket for Y.”
- **Memorize**: Retrieval times, minimum durations, and costs for storage classes.