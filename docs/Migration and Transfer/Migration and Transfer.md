# Migration and Transfer

### **AWS Application Discovery Service**

### **Overview**

- **Definition**: Service to gather configuration, usage, and behavior data from on-premises servers and databases to plan cloud migrations.
- **Key Features**:
    - Agent-based (Discovery Agent) and agentless (Agentless Collector for VMware) discovery.
    - Collects server specs, performance, TCP connections, and database metadata.
    - Integrates with Migration Hub, DMS Fleet Advisor.
- **Use Cases**: Inventory discovery, dependency mapping, migration planning.
- **Updates (2024–2025)**: Security Hub for compliance (Jan 2025).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Core Concepts**

- **Discovery Agent**: Software on servers for detailed data (e.g., CPU, RAM, processes).
- **Agentless Collector**: VMware VM scans without agents.
- **Data Store**: Encrypted storage for collected data, exportable as CSV for TCO analysis.
- **Explanation**: E.g., map server dependencies for a data center migration.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Performance**

- **Low Latency**: Real-time data collection.
- **Scalability**: Handles thousands of servers.

### **Resilience**

- **Availability**: Multi-AZ data store.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS in transit, KMS at rest.
- **Access**: IAM policies.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: Security Hub (2025).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Cost Optimization**

- **Pricing**: Free for discovery; pay for storage ($0.023/GB-month).
    - **Example**: 10 GB data = $0.23/month.
- **Free Tier**: None.
- **Strategies**: Delete unused data, limit collection scope.
- **Explanation**: E.g., export CSV to avoid long-term storage costs.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Key Notes**

- **Use Case**: Plan migration of 1,000 servers.
- **Exam Tip**: Know agent vs. agentless and Migration Hub integration.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

---

### **AWS Application Migration Service (AWS MGN)**

### **Overview**

- **Definition**: Automated service for rehosting applications from physical, virtual, or cloud infrastructure to AWS with minimal downtime.
- **Key Features**:
    - Lift-and-shift migration for servers (Windows/Linux, SAP, Oracle, SQL Server).
    - Agent-based replication to EC2, supports non-disruptive testing.
    - Integrates with Migration Hub, EC2, ELB.
    - Replaces CloudEndure Migration (2021).
        
        [](https://imgs.search.brave.com/DctBuCUa7RjXnzCeh8q8snQv4CHRefJB6J4iHr_JKM4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzY0ZWVjZDQ1/YTgyODg1ZDZjNDlh/MDk1ZDU1YzAxOTY3/YzY1ZTYzMmRhZTVh/ZjYyZTg4MjkwYzY1/ZTBkZmUyNy9tYW5h/Z2VkLmdtb2Nsb3Vk/LmNvbS8)
        
- **Use Cases**: Migrate enterprise apps, minimize downtime, test migrations.
- **Updates (2024–2025)**: Enhanced automation for SAP migrations (2024).

### **Core Concepts**

- **Replication Agent**: Installed on source servers to replicate data to AWS staging servers.
- **Staging Servers**: Temporary EC2 instances for data sync.
- **Test/Cutover**: Launch test instances or final cutover to production EC2.
- **Migration Workflow**:
    1. Install agent on source server.
    2. Replicate data to staging servers (incremental sync).
    3. Test migration with temporary EC2 instances.
    4. Perform cutover to production EC2.
- **Explanation**: E.g., migrate a SQL Server app to EC2 with <1 hour downtime.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

### **Detailed Features**

- **Supported Sources**:
    - Physical servers, VMware, Hyper-V, other clouds (e.g., Azure, GCP).
    - OS: Windows Server 2003+, Linux (Ubuntu, CentOS, RHEL, etc.).
- **Replication**:
    - Continuous, block-level replication via agent.
    - Uses lightweight EC2 instances for staging (e.g., t3.micro).
    - Supports encrypted data transfer (TLS).
- **Testing**:
    - Non-disruptive test launches to validate app functionality.
    - Converts source server to AWS-native AMIs.
- **Cutover**:
    - Launches production EC2 instances with minimal downtime.
    - Supports post-migration configurations (e.g., ELB, Auto Scaling).
- **Integration**:
    - Migration Hub for tracking.
    - CloudFormation for infrastructure automation.
    - CloudWatch for monitoring replication health.
- **Limitations**:
    - Requires agent installation.
    - Not for refactoring or re-platforming (use AWS App2Container instead).
- **Explanation**: E.g., replicate a VMware-based SAP app to EC2, test, and cutover in 2 hours.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

### **Performance**

- **Low Latency**: Near-real-time replication.
- **High Throughput**: Handles large server workloads.
- **Scalability**: Scales with EC2 instance types for staging.

### **Resilience**

- **Availability**: Multi-AZ staging servers.
- **Monitoring**: CloudWatch (replication lag), CloudTrail (API calls).
- **Recovery**: Test instances ensure reliable cutover.

### **Security**

- **Encryption**: TLS for replication, KMS for EBS volumes.
- **Access**: IAM for MGN actions (e.g., mgn:StartCutover).
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: Security Hub (2025).
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

### **Cost Optimization**

- **Pricing**:
    - Free for 90 days per server (replication, testing, cutover).
    - Post-90 days: $0.042/hour per replicating server.
    - EC2/EBS costs for staging/production.
    - **Example**: 10 servers, 30 days = $0 (free tier); 100 days = 10 × 10 × 24 × $0.042 = $1,008.
- **Free Tier**: 90 days free per server.
- **Strategies**:
    - Complete migrations within 90 days.
    - Use Spot Instances for staging.
    - Delete staging servers post-cutover.
- **Explanation**: E.g., migrate 5 servers in 60 days for $0 (excluding EC2).
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

### **Key Notes**

- **Use Case**: Migrate 50 VMware servers to EC2 with minimal downtime.
- **Exam Tip**: Know replication, testing, free tier, and Migration Hub integration.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

---

### **AWS Database Migration Service (AWS DMS)**

### **Overview**

- **Definition**: Service to migrate databases to AWS with minimal downtime, supporting homogeneous and heterogeneous migrations.
- **Key Features**:
    - Migrates to RDS, Aurora, Redshift, S3.
    - Continuous replication for high availability.
    - Schema conversion via AWS SCT.
- **Use Cases**: Database migration, data warehouse consolidation.
- **Updates (2024–2025)**: Enhanced DMS Fleet Advisor (2024).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Core Concepts**

- **Replication Instance**: EC2-based engine for migration.
- **Source/Target Endpoints**: Databases (e.g., Oracle, MySQL).
- **Tasks**: Migration or replication jobs.
- **Explanation**: E.g., migrate Oracle to Aurora with <1 hour downtime.
    
    [](https://imgs.search.brave.com/wFXSzE3sFGNNTlrs_NtKlno2oVpKoYScXB7UyJ1imbA/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGI1N2VmYTJl/NjI5OTcxMmI4NmFi/Y2QxMjNjNDMzYmVj/N2E1OTY5MDAwMzRi/YjJiNTMyOTNjYTZk/MzdmOWQzZi92aWJs/by5hc2lhLw)
    

### **Performance**

- **Low Latency**: Real-time replication.
- **Scalability**: Scales with replication instance size.

### **Resilience**

- **Availability**: Multi-AZ replication instances.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM, VPC endpoints.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.

### **Cost Optimization**

- **Pricing**: $0.018/hour (t3.micro), $0.75/GB transferred.
    - **Example**: 1,000 hours, 10 GB = $18 + $7.50 = $25.50.
- **Free Tier**: None.
- **Strategies**: Use smallest instance, schedule migrations.
- **Explanation**: E.g., use t3.micro for small databases.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Key Notes**

- **Use Case**: Migrate MySQL to RDS.
- **Exam Tip**: Know homogeneous vs. heterogeneous and SCT.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

---

### **AWS DataSync**

### **Overview**

- **Definition**: Online data transfer service to automate and accelerate moving data between on-premises and AWS storage (S3, EFS, FSx).
- **Key Features**:
    - Up to 10x faster than open-source tools.
    - Supports NFS, SMB, HDFS, Snowcone.
    - Handles encryption, integrity validation.
- **Use Cases**: Data migration, replication, archival.
- **Updates (2024–2025)**: Support for FSx for OpenZFS (2024).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Core Concepts**

- **Agent**: Software on-premises or EC2 for data transfer.
- **Task**: Defines source, destination, and schedule.
- **Explanation**: E.g., sync NFS share to S3 for backup.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Performance**

- **Low Latency**: High-speed transfers.
- **Scalability**: Scales with agent resources.

### **Resilience**

- **Availability**: Multi-AZ with Direct Connect.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM.
- **Compliance**: HIPAA, PCI, GDPR.

### **Cost Optimization**

- **Pricing**: $0.0125/GB transferred.
    - **Example**: 1 TB = 1,024 GB × $0.0125 = $12.80.
- **Free Tier**: None.
- **Strategies**: Use Direct Connect, schedule transfers.
- **Explanation**: E.g., transfer 100 GB for $1.25.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Key Notes**

- **Use Case**: Migrate 10 TB to S3.
- **Exam Tip**: Know supported storage and speed advantage.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **AWS Migration Hub**

### **Overview**

- **Definition**: Centralized service to track and manage migrations across AWS and partner tools.
- **Key Features**:
    - Tracks servers, apps, and databases.
    - Network visualization for dependencies.
    - Integrates with MGN, DMS, ADS.
- **Use Cases**: Monitor multi-tool migrations, visualize progress.
- **Updates (2024–2025)**: Improved visualization (2024).
    
    [](https://imgs.search.brave.com/wFXSzE3sFGNNTlrs_NtKlno2oVpKoYScXB7UyJ1imbA/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGI1N2VmYTJl/NjI5OTcxMmI4NmFi/Y2QxMjNjNDMzYmVj/N2E1OTY5MDAwMzRi/YjJiNTMyOTNjYTZk/MzdmOWQzZi92aWJs/by5hc2lhLw)
    

### **Core Concepts**

- **Application**: Group of servers/databases to track.
- **Network Visualization**: Maps dependencies from ADS data.
- **Explanation**: E.g., track migration of 100 servers across regions.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

### **Performance**

- **Low Latency**: Real-time tracking.
- **Scalability**: Handles thousands of resources.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM.
- **Compliance**: HIPAA, PCI, GDPR.

### **Cost Optimization**

- **Pricing**: Free; pay for integrated services (e.g., MGN, DMS).
- **Strategies**: Limit tracked resources.
- **Explanation**: E.g., track 50 apps for $0.
    
    [](https://imgs.search.brave.com/dyYT1koNXasCWsvUkCsaLJeoecoalPTjqPgc6z7Ddvw/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGMxYmUwMjRh/Y2UxNzUwMTUxYmRh/NzRjMDQ4OGRhNmU4/Y2VlODlmNmNhNDM0/ZDIyZTA2ZTY5MmRl/MDQyYzAzZi9hbGxj/b2RlLmNvbS8)
    

### **Key Notes**

- **Use Case**: Monitor MGN and DMS migrations.
- **Exam Tip**: Know tracking and visualization.
    
    [](https://imgs.search.brave.com/wFXSzE3sFGNNTlrs_NtKlno2oVpKoYScXB7UyJ1imbA/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGI1N2VmYTJl/NjI5OTcxMmI4NmFi/Y2QxMjNjNDMzYmVj/N2E1OTY5MDAwMzRi/YjJiNTMyOTNjYTZk/MzdmOWQzZi92aWJs/by5hc2lhLw)
    

---

### **AWS Snow Family**

### **Overview**

- **Definition**: Physical devices for offline data transfer and edge computing (Snowcone, Snowball, Snowmobile).
- **Key Features**:
    - Snowcone: 8 TB, portable, edge compute.
    - Snowball: 50–80 TB, ruggedized.
    - Snowmobile: Exabytes, truck-based.
    - Supports EC2, Lambda, DataSync.
- **Use Cases**: Large-scale data transfer, edge computing in remote areas.
- **Updates (2024–2025)**: Snowcone compute enhancements (2024).
    
    [](https://imgs.search.brave.com/pDaBiYHm_eNMg4u_e3ACWbSuBkMT_RWyTn-uZ7K76-M/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTdjYWRkZjJm/ZjRlODIwNTU1MjI1/ZGQ5ZDZkZDQxNjEx/YWQ1YjI1Y2UyZjM1/MTQ3ZGZlNDIzYjZh/NWEwZDhjMi93d3cu/ZmxlbnRhcy5jb20v)
    

### **Core Concepts**

- **Snowcone**: Small, 8 TB, for IoT/drone use.
- **Snowball**: Medium, for data centers.
- **Snowmobile**: Massive, for exabyte migrations.
- **Explanation**: E.g., transfer 50 TB to S3 via Snowball.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

### **Performance**

- **Low Latency**: Fast physical transfer.
- **Scalability**: Multiple devices for large datasets.

### **Resilience**

- **Availability**: Device redundancy.
- **Monitoring**: CloudWatch, GPS tracking (Snowmobile).

### **Security**

- **Encryption**: 256-bit, KMS.
- **Access**: IAM, physical security (Snowmobile).
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

### **Cost Optimization**

- **Pricing**:
    - Snowcone: $4/day, $0.03/GB.
    - Snowball: $200–$300/job, $0.03/GB.
    - Snowmobile: Custom quote.
    - **Example**: 50 TB Snowball = $300 + 50,000 × $0.03 = $1,800.
- **Strategies**: Minimize rental days, use DataSync for small transfers.
- **Explanation**: E.g., 10 TB Snowcone for $150.
    
    [](https://imgs.search.brave.com/pDaBiYHm_eNMg4u_e3ACWbSuBkMT_RWyTn-uZ7K76-M/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTdjYWRkZjJm/ZjRlODIwNTU1MjI1/ZGQ5ZDZkZDQxNjEx/YWQ1YjI1Y2UyZjM1/MTQ3ZGZlNDIzYjZh/NWEwZDhjMi93d3cu/ZmxlbnRhcy5jb20v)
    

### **Key Notes**

- **Use Case**: Migrate 100 TB from remote site.
- **Exam Tip**: Know device types and edge computing.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

---

### **AWS Transfer Family**

### **Overview**

- **Definition**: Managed file transfer service supporting SFTP, FTPS, FTP to S3/EFS.
- **Key Features**:
    - Fully managed, protocol-based transfers.
    - Integrates with IAM, Cognito, CloudWatch.
    - Supports custom domains, VPC endpoints.
- **Use Cases**: Secure file transfers, replace legacy FTP.
- **Updates (2024–2025)**: FTPS enhancements (2024).
    
    [](https://imgs.search.brave.com/DctBuCUa7RjXnzCeh8q8snQv4CHRefJB6J4iHr_JKM4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzY0ZWVjZDQ1/YTgyODg1ZDZjNDlh/MDk1ZDU1YzAxOTY3/YzY1ZTYzMmRhZTVh/ZjYyZTg4MjkwYzY1/ZTBkZmUyNy9tYW5h/Z2VkLmdtb2Nsb3Vk/LmNvbS8)
    

### **Core Concepts**

- **Server**: Managed endpoint for file transfers.
- **Protocol**: SFTP, FTPS, or FTP.
- **Explanation**: E.g., transfer files to S3 via SFTP.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Performance**

- **Low Latency**: Fast transfers.
- **Scalability**: Auto-scales.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM, Cognito.
- **Compliance**: HIPAA, PCI, GDPR.

### **Cost Optimization**

- **Pricing**: $0.04/hour (endpoint), $0.30/GB transferred.
    - **Example**: 1,000 hours, 10 GB = $40 + $3 = $43.
- **Free Tier**: None.
- **Strategies**: Use SFTP for efficiency, delete unused endpoints.
- **Explanation**: E.g., 100 GB transfer for $30.
    
    [](https://imgs.search.brave.com/DctBuCUa7RjXnzCeh8q8snQv4CHRefJB6J4iHr_JKM4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzY0ZWVjZDQ1/YTgyODg1ZDZjNDlh/MDk1ZDU1YzAxOTY3/YzY1ZTYzMmRhZTVh/ZjYyZTg4MjkwYzY1/ZTBkZmUyNy9tYW5h/Z2VkLmdtb2Nsb3Vk/LmNvbS8)
    

### **Key Notes**

- **Use Case**: Replace on-premises FTP with SFTP to S3.
- **Exam Tip**: Know protocols and S3/EFS integration.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Comparison**

| **Service** | **Type** | **Focus** | **Cost** | **Use Case** |
| --- | --- | --- | --- | --- |
| **Discovery Service** | Migration Planning | Server inventory | Free (storage $0.023/GB) | Plan data center migration |
| **Migration Service** | App Migration | Lift-and-shift | Free 90 days, $0.042/hour | Migrate VMware to EC2 |
| **DMS** | Database Migration | DB to RDS/Aurora | $0.018/hour, $0.75/GB | Migrate Oracle to Aurora |
| **DataSync** | Data Transfer | Online storage sync | $0.0125/GB | Sync NFS to S3 |
| **Migration Hub** | Migration Tracking | Centralized monitoring | Free | Track MGN/DMS migrations |
| **Snow Family** | Offline Data Transfer | Physical devices | $300/job (Snowball) | Transfer 50 TB to S3 |
| **Transfer Family** | File Transfer | SFTP/FTPS/FTP | $0.04/hour, $0.30/GB | Replace FTP with S3 |

### **Explanation**:

- **Discovery/Migration Hub**: Planning and tracking migrations.
- **MGN/DMS**: Server and database rehosting.
- **DataSync/Transfer Family**: Online file transfers.
- **Snow Family**: Offline data transport.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)