# AWS Backup

### **AWS Backup Overview**

- **Definition**: AWS Backup is a fully managed, centralized service that simplifies and automates backups across AWS services, on-premises resources, and hybrid environments, enabling policy-based data protection and recovery.
- **Key Features**:
    - Centralized management of backups for multiple AWS services (e.g., EBS, RDS, DynamoDB, S3).
    - Supports policy-driven backup schedules, retention, and replication.
    - Integrates with on-premises and VMware Cloud on AWS via AWS Backup Gateway.
    - Provides immutable backup vaults for ransomware protection.
    - Offers cross-account and cross-region backup capabilities.
- **Use Cases**: Disaster recovery (DR), compliance (e.g., HIPAA, GDPR), data migration, ransomware protection, hybrid cloud backups.

---

### **1. AWS Backup Core Concepts**

### **Components**

- **Backup Plan**:
    - Defines backup schedules, frequency, retention periods, and target vault.
    - Includes rules (e.g., daily backups, retain 35 days).
    - **Explanation**: E.g., “Daily-Monthly” plan for EBS volumes.
- **Backup Vault**:
    - Secure storage for backup data, encrypted by default.
    - Supports immutability (lock mode) for ransomware protection.
    - **Explanation**: E.g., store RDS snapshots in a locked vault.
- **Backup Policy**:
    - Organization-wide rules applied via AWS Organizations for consistent protection.
    - **Explanation**: E.g., mandate backups for all DynamoDB tables.
- **Recovery Point**:
    - Point-in-time snapshot or backup of a resource (e.g., EBS volume snapshot).
    - **Explanation**: E.g., restore EC2 instance to yesterday’s state.
- **AWS Backup Gateway**:
    - Virtual appliance for backing up on-premises or VMware Cloud on AWS environments.
    - Supports VMware vSphere, Microsoft Hyper-V, and KVM.
    - **Explanation**: E.g., back up on-premises VMs to AWS.

### **Supported Services**

- **AWS Services**:
    - Compute: EC2, EBS.
    - Databases: RDS (Aurora, MySQL, PostgreSQL, etc.), DynamoDB, DocumentDB, Neptune.
    - Storage: S3, EFS, FSx (Lustre, Windows File Server, ONTAP, OpenZFS), Storage Gateway.
    - Other: Redshift, Timestream, CloudFormation, SAP HANA on EC2.
- **Hybrid/On-Premises**:
    - VMware Cloud on AWS (vSphere 8, Flex Storage, FSx datastores).
    - On-premises VMware, Hyper-V, KVM via Backup Gateway.
- **Explanation**: Broad coverage; notable exclusions include Lambda, ElastiCache.

### **Recent Updates (2024–2025)**:

- **Immutable Vaults**: Lock mode for ransomware protection, compliance (February 2024).
- **VMware Cloud on AWS**: Support for vSphere 8, Flex Storage, FSx datastores (March 2024).
- **Cost Allocation Tags**: Tag backup resources for cost tracking (October 2024).
- **Cross-Account Management**: Enhanced monitoring/reporting via AWS Organizations (April 2024).
- **DynamoDB Advanced Features**: Back up PITR, on-demand settings, tags (June 2024).

### **Key Notes**:

- **Exam Relevance**: Understand backup plans, vaults, supported services, and hybrid backup.
- **Mastery Tip**: Compare AWS Backup vs. native service backups (e.g., RDS snapshots).

---

### **2. AWS Backup Performance Features**

AWS Backup supports efficient and scalable backup operations.

### **Centralized Management**

- **Purpose**: Streamline backup operations.
- **Features**:
    - Single console for managing backups across services.
    - Automated scheduling via backup plans.
- **Explanation**: E.g., manage EBS, RDS, and S3 backups in one place.

### **Scalability**

- **Purpose**: Handle large-scale environments.
- **Features**:
    - Scales to thousands of resources without performance degradation.
    - Supports cross-region and cross-account backups.
- **Explanation**: E.g., back up 1000 EC2 instances across us-east-1, us-west-2.

### **Incremental Backups**

- **Purpose**: Minimize data transfer.
- **Features**:
    - Captures only changed data after initial full backup.
    - Reduces backup time and storage.
- **Explanation**: E.g., daily EBS backups store only deltas.

### **Parallel Processing**

- **Purpose**: Speed up backups.
- **Features**: Concurrent backup jobs for multiple resources.
- **Explanation**: E.g., back up 10 RDS instances simultaneously.

### **Key Notes**:

- **Performance**: Centralized + incremental = efficient backups.
- **Exam Tip**: Know how incremental backups reduce costs and time.

---

### **3. AWS Backup Resilience Features**

Resilience ensures reliable data protection and recovery.

### **Cross-Region Replication**

- **Purpose**: Disaster recovery.
- **Features**:
    - Copy backups to another Region (e.g., us-east-1 to us-west-2).
    - Configured in backup plan rules.
- **Explanation**: E.g., replicate RDS snapshots for DR.

### **Cross-Account Backup**

- **Purpose**: Centralized management.
- **Features**:
    - Store backups in a central AWS account via AWS Organizations.
    - Supports cross-account restore.
- **Explanation**: E.g., back up dev account resources to a backup account.

### **Immutable Backup Vaults**

- **Purpose**: Ransomware protection.
- **Features**:
    - Lock mode prevents deletion/modification for a set period.
    - Compliance with SEC Rule 17a-4, CFTC, FINRA.
- **Explanation**: E.g., lock EBS backups for 1 year.

### **Point-in-Time Recovery (PITR)**:

- **Purpose**: Granular restores.
- **Features**:
    - Supported for RDS, Aurora, DynamoDB, EFS, Redshift, Timestream.
    - Restore to any point within retention period.
- **Explanation**: E.g., recover DynamoDB table to 2 hours ago.

### **Hybrid Backup**

- **Purpose**: Protect on-premises/VMware.
- **Features**:
    - AWS Backup Gateway backs up VMware Cloud on AWS, on-premises VMs.
    - Supports vSphere 8, Flex Storage, FSx datastores.
- **Explanation**: E.g., back up VMware VMs to AWS for DR.

### **Key Notes**:

- **Resilience**: Cross-region + immutable vaults = robust DR.
- **Exam Tip**: Design DR with cross-region replication and locked vaults.

---

### **4. AWS Backup Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **At Rest**:
    - Backup vaults encrypted with KMS (AWS-managed or customer-managed keys).
    - **Explanation**: E.g., encrypt EBS snapshots with custom KMS key.
- **In Transit**:
    - TLS for data transfer to/from vaults.
    - **Explanation**: E.g., secure S3 backup transfer.

### **Access Control**

- **IAM**:
    - Controls backup/restore operations (e.g., backup:StartBackupJob).
    - Resource-based policies for vaults (e.g., restrict access to specific accounts).
    - **Example**: {"Effect": "Allow", "Action": "backup:Restore", "Resource": "arn:aws:backup:us-east-1:123456789012:backup-vault:my-vault"}.
- **AWS Organizations**:
    - Delegate backup admin roles to member accounts.
    - **Explanation**: E.g., central account manages all backups.
- **Vault Lock**:
    - Enforces immutability, prevents policy changes.
    - **Explanation**: E.g., lock vault for compliance.

### **Monitoring and Auditing**

- **CloudTrail**: Logs all backup/restore actions.
- **CloudWatch**: Metrics for job success/failure, storage usage.
- **AWS Backup Audit Manager**: Monitors compliance with backup policies.
- **Explanation**: E.g., audit vault access for SOC compliance.

### **Key Notes**:

- **Security**: KMS + IAM + Vault Lock = compliant backups.
- **Exam Tip**: Practice IAM policies and vault lock for ransomware protection.

---

### **5. AWS Backup Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Backup Storage**:
    - Warm: ~$0.05/GB-month (frequent access, e.g., EBS, RDS).
    - Cold: ~$0.01/GB-month (infrequent access, e.g., S3, EFS after 90 days).
- **Data Transfer**:
    - Cross-region: ~$0.02/GB.
    - Cross-account: Free within Region.
- **Requests**:
    - Backup: ~$0.10/1000 requests.
    - Restore: ~$0.50/1000 requests.
- **Free Tier**: None.
- **Example**: 100 GB EBS backups (warm), 10 restores ~$5.50/month.

### **Cost Strategies**

- **Retention Optimization**:
    - Set shorter retention for non-critical data (e.g., 7 days for dev).
    - Use cold storage for long-term retention (e.g., S3 after 90 days).
- **Tagging**:
    - Use cost allocation tags to track backup costs by resource/project.
    - **Explanation**: E.g., tag backups with “Project:Finance”.
- **Selective Backups**:
    - Exclude non-critical resources (e.g., temp S3 buckets).
    - Use tag-based backup policies (e.g., back up only “Environment:Prod”).
- **Cross-Region Efficiency**:
    - Replicate only critical data to save transfer costs.
- **Explanation**: E.g., retain EBS backups for 30 days, use cold storage for S3.

### **Key Notes**:

- **Cost Savings**: Short retention + tags + cold storage = low costs.
- **Exam Tip**: Calculate costs for warm vs. cold storage and cross-region replication.

---

### **6. AWS Backup Advanced Features**

### **AWS Backup Audit Manager**

- **Purpose**: Ensure compliance.
- **Features**:
    - Pre-built frameworks (e.g., HIPAA, NIST).
    - Custom frameworks for specific policies.
    - Reports non-compliant resources.
- **Explanation**: E.g., verify daily backups for all RDS instances.

### **Cross-Account Management**

- **Purpose**: Centralize backups.
- **Features**:
    - Monitor/restore backups across AWS Organizations.
    - Delegate admin roles to member accounts.
- **Explanation**: E.g., central account restores dev account’s EBS snapshot.

### **Tag-Based Policies**

- **Purpose**: Automate backups.
- **Features**:
    - Apply backup plans based on resource tags.
    - **Explanation**: E.g., back up all resources tagged “Backup:Daily”.

### **Legal Holds**

- **Purpose**: Preserve backups.
- **Features**:
    - Prevent deletion for legal/compliance needs.
    - **Explanation**: E.g., hold DynamoDB backups for litigation.

### **Key Notes**:

- **Flexibility**: Audit Manager + cross-account = enterprise-grade.
- **Exam Tip**: Know tag-based policies and Audit Manager for compliance.

---

### **7. AWS Backup Use Cases**

Understand practical applications.

### **Disaster Recovery**

- **Setup**: Backup plan + cross-region replication.
- **Features**: PITR, cross-account restore.
- **Explanation**: E.g., recover RDS database after outage.

### **Ransomware Protection**

- **Setup**: Immutable vaults + Vault Lock.
- **Features**: Prevent deletion/modification.
- **Explanation**: E.g., protect EBS backups from malware.

### **Hybrid Cloud Backup**

- **Setup**: Backup Gateway + VMware Cloud on AWS.
- **Features**: Back up vSphere VMs to AWS.
- **Explanation**: E.g., DR for on-premises VMware.

### **Compliance**

- **Setup**: Audit Manager + legal holds.
- **Features**: Meet HIPAA, GDPR, SEC standards.
- **Explanation**: E.g., audit S3 backups for regulatory reporting.

---

### **8. AWS Backup vs. Other Services**

| **Feature** | **AWS Backup** | **RDS Snapshots** | **EBS Snapshots** |
| --- | --- | --- | --- |
| **Type** | Centralized Backup | Database-specific | Volume-specific |
| **Workload** | Multiple services | RDS/Aurora only | EBS only |
| **Management** | Policy-driven | Manual/automated | Manual/automated |
| **Cost** | Storage + requests | Storage only | Storage only |
| **Use Case** | Enterprise backup | Database DR | Volume DR |

### **Explanation**:

- **AWS Backup**: Centralized, policy-driven, supports multiple services.
- **RDS Snapshots**: Native, database-focused, manual or scheduled.
- **EBS Snapshots**: Native, volume-focused, no centralized management.

---

### **Detailed Explanations for Mastery**

- **Immutable Vaults**:
    - **Example**: Lock vault for 1 year, prevent deletion even by admins.
    - **Why It Matters**: Ransomware protection—exam favorite.
- **Cross-Account Backup**:
    - **Example**: Back up dev account’s DynamoDB to central account.
    - **Why It Matters**: Enterprise management—key SAA-C03 scenario.
- **Backup Gateway**:
    - **Example**: Back up VMware Cloud on AWS vSphere 8 VMs.
    - **Why It Matters**: Hybrid cloud—new for 2024.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Backup Plan | Automate backups | Schedules, retention, vault | Core Concept |
| Backup Vault | Store backups | Immutable, KMS-encrypted | Core Concept |
| Cross-Region | Disaster recovery | Replicate to another Region | Resilience |
| Immutable Vaults | Ransomware protection | Lock mode, compliance | Security |
| Backup Gateway | Hybrid backup | VMware, Hyper-V, KVM | Flexibility |
| Cost Allocation Tags | Track costs | Tag backups by project | Cost |
| Audit Manager | Compliance | Pre-built/custom frameworks | Security |
| PITR | Granular restore | RDS, DynamoDB, EFS | Resilience |