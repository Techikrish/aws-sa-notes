# AWS Outposts

### **AWS Outposts Overview**

- **Definition**: AWS Outposts is a fully managed service that extends AWS infrastructure, services, APIs, and tools to on-premises locations, enabling a consistent hybrid cloud experience.
- **Key Features**:
    - Deploys AWS compute, storage, and networking at customer sites.
    - Supports EC2, EBS, S3, RDS, ECS, EKS, and more locally.
    - Available in 42U racks, 1U/2U servers, or multi-rack deployments (up to 96 racks).
    - Managed by AWS (patching, monitoring, maintenance).
- **Use Cases**: Low-latency applications (e.g., gaming, manufacturing), local data processing, data residency compliance (e.g., healthcare, finance), hybrid cloud migrations.

---

### **1. AWS Outposts Core Concepts**

### **Components**

- **Outpost**:
    - Pool of AWS compute/storage capacity at a customer site.
    - Extension of an AWS Region and Availability Zone (AZ).
    - **Explanation**: E.g., Outpost in a data center connects to us-east-1.
- **Outpost Site**:
    - Customer-managed physical location (e.g., data center).
    - Must meet power, cooling, and networking requirements.
    - **Explanation**: E.g., 10 kW power, 1 Gbps uplink.
- **Outpost Equipment**:
    - **Racks**: 42U, include servers, switches, power shelf, patch panel.
    - **Servers**: 1U/2U, for edge locations with limited space (e.g., retail stores).
    - **ACE Racks**: Aggregation, Core, Edge racks for multi-rack deployments (required for 4+ racks).
    - **Explanation**: Racks for large setups, servers for small sites.
- **Service Link**:
    - Network route connecting Outpost to its AWS Region (via Direct Connect or public internet).
    - **Explanation**: Enables control plane and data sync.
- **Local Gateway (LGW)**:
    - Virtual router for Outpost racks, connects to on-premises network.
    - **Explanation**: Routes traffic between Outpost and local systems.
- **Local Network Interface**:
    - For Outpost servers, connects to on-premises network.
    - **Explanation**: E.g., server in a store connects to local POS system.

### **Form Factors**

- **Outposts Racks**: 42U, for data centers, supports EC2, EBS, S3, RDS.
- **Outposts Servers**: 1U/2U, for edge locations, supports EC2 with instance storage.
- **Multi-Rack**: Up to 96 racks with ACE for large-scale deployments.
- **Explanation**: Choose based on capacity and space.

### **Supported Services**

- EC2 (M5, C5, R5, G4dn instances), EBS (gp2 volumes), S3 on Outposts, RDS, ECS, EKS, EMR, ElastiCache, ALB.
- **Explanation**: Limited subset of AWS services; Lambda/Step Functions not supported.
    
    [](https://imgs.search.brave.com/uZ-D-ILf3e7do2iP_QdA_HLqcmYrVwBWJ0oiYDgIqeI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzk3ZWRlYjU0/YTkzMWIyMGFhMTY3/ZjI1NWM1YWU3MjNi/NmY1YzNmNWQ1OTFk/OTc2NDFiMGZiOTA4/OTUyYjA5Ny9yZXBv/c3QuYXdzLw)
    

### **Key Notes**:

- **Exam Relevance**: Understand form factors, supported services, and connectivity.
- **Mastery Tip**: Compare Outposts vs. on-premises EC2 vs. Local Zones.

---

### **2. Outposts Performance Features**

Outposts supports high-performing hybrid workloads.

### **Low Latency**

- **Purpose**: Support real-time apps.
- **Features**: Local compute/storage delivers single-digit millisecond latency.
- **Explanation**: E.g., manufacturing execution systems (MES) on factory floor.
    
    [](https://imgs.search.brave.com/Z857c7LlSA_UwLyw84hJKSUVoOMTnEgA2ob-CkjFQQw/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGJmYjAyMjBh/Y2UzZjQ0MjgyNTFm/MmM0ZGEwYTM2MWYy/NGFiOWY5YzU0MTIz/NWRhNzY3MjI2ZjY1/ZjNmMzU4NC93d3cu/a2xvaWEuY29tLw)
    

### **Instance Types**

- **General Purpose (M5/M5d)**: Balanced compute/memory (e.g., web servers).
- **Compute Optimized (C5/C5d)**: CPU-intensive (e.g., batch processing).
- **Memory Optimized (R5/R5d)**: Large datasets (e.g., analytics).
- **GPU (G4dn)**: ML inference, graphics.
- **Explanation**: Match instance to workload—e.g., C5 for HPC.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Storage**

- **EBS (gp2)**: Persistent block storage, encrypted by default (11 TB, 33 TB, 55 TB tiers).
- **S3 on Outposts**: Object storage (26 TB to 380 TB), supports up to 100 buckets.
- **Instance Storage**: NVMe SSDs on servers, tied to instance lifecycle.
- **Explanation**: E.g., S3 for local data residency, EBS for RDS.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
    [](https://imgs.search.brave.com/RZ9xPuN87dYqtYCk4TONd4taMtlovCl-Zq_UDgaeg6s/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWZkOTdiMmU0/NmQ1MmFmNjEyOWEz/M2VjNmQ4YzFlM2Zk/MjBmYWNlYjJiNjMx/YjI2YmQxNzIyYmFi/NGU1NzM1NC9rMjFh/Y2FkZW15LmNvbS8)
    

### **Networking**

- **Top-of-Rack (TOR) Switches**: Support Link Aggregation Control Protocol (LACP), BGP routing.
- **Connectivity**: Private (Direct Connect) or public (ISP) to AWS Region.
- **Explanation**: E.g., LACP bundles links for high throughput.
    
    [](https://imgs.search.brave.com/u6pwVkiM1x_OoFzIdyE2NhCctf8Ic3GU0iajA1U8yuA/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzQ1NGY5MjRh/YTRmN2RmMTVlMzEy/MGFlMzc1Y2YwYTg4/NTMxNzhjYTJiYjI3/ZTI0MzAyNjYxOTcz/YTRlMjZlZi9pbmZv/aHViLmRlbGx0ZWNo/bm9sb2dpZXMuY29t/Lw)
    

### **Telco Offerings (2025)**:

- **New Racks**: 4th Gen Intel Xeon (Sapphire Rapids), Nitro-based, for 5G Core/RAN workloads.
- **New Servers**: Optimized for Cloud RAN (CU/DU), edge deployments.
- **Explanation**: Supports telco virtualization, high-throughput 5G networks.
    
    [](https://imgs.search.brave.com/jgTEfvFUKoKBzY4FW6BItLkCTk-mq2w1KRd9Uayp3EA/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWExOThiMTc3/OTg4N2IwNDMwZTBm/NjBkNzk1ZTk2Y2Q1/OTUxZWY2NjEwZWEw/MGI0Njc2MTBjZjk3/MmQwMTNlYy93d3cu/ZGF0YWNlbnRlcmR5/bmFtaWNzLmNvbS8)
    

### **Key Notes**:

- **Performance**: Local processing + high-throughput networking = low latency.
- **Exam Tip**: Know instance/storage types and telco use cases.

---

### **3. Outposts Resilience Features**

Resilience ensures reliable on-premises operations.

### **High Availability**

- **Purpose**: Survive failures.
- **Features**:
    - S3 on Outposts stores data redundantly across devices.
    - EC2 instances spread across Outpost capacity.
- **Explanation**: E.g., data remains safe during hardware failure.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Health Monitoring**

- **Purpose**: Track system status.
- **Features**:
    - CloudWatch metrics (e.g., AvailableInstanceType_Count).
    - AWS Health Dashboard for Outpost health.
- **Explanation**: E.g., alert on low capacity.
    
    [](https://imgs.search.brave.com/uZ-D-ILf3e7do2iP_QdA_HLqcmYrVwBWJ0oiYDgIqeI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzk3ZWRlYjU0/YTkzMWIyMGFhMTY3/ZjI1NWM1YWU3MjNi/NmY1YzNmNWQ1OTFk/OTc2NDFiMGZiOTA4/OTUyYjA5Ny9yZXBv/c3QuYXdzLw)
    
    [](https://imgs.search.brave.com/d5aI6a8P3VxyL-fJI8l3XCuRMrdFzEyT0oWZx0WdJ8M/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjhkYjViOTRh/NzMwOGYxYzBmNGU4/MTJjOTE3YjE2NTBj/NmVkZGQyYjMwNTlj/YzAxNzI0NzcyMzQz/ZDc0YTY0ZC93d3cu/dGVjaHRhcmdldC5j/b20v)
    

### **Managed Maintenance**

- **Purpose**: Reduce downtime.
- **Features**: AWS handles patches, upgrades, hardware replacement.
- **Explanation**: E.g., automatic OS updates during maintenance windows.
    
    [](https://imgs.search.brave.com/d5aI6a8P3VxyL-fJI8l3XCuRMrdFzEyT0oWZx0WdJ8M/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjhkYjViOTRh/NzMwOGYxYzBmNGU4/MTJjOTE3YjE2NTBj/NmVkZGQyYjMwNTlj/YzAxNzI0NzcyMzQz/ZDc0YTY0ZC93d3cu/dGVjaHRhcmdldC5j/b20v)
    

### **Disconnection Handling**:

- **Purpose**: Operate during network loss.
- **Features**:
    - Local services (EC2, EBS) function without Region connectivity.
    - S3 on Outposts inaccessible (requires IAM authentication via Region).
    - Metrics/logs may be lost during extended disconnects.
- **Explanation**: E.g., local apps continue, but S3 needs connectivity restored.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Key Notes**:

- **Resilience**: Local redundancy + managed maintenance = reliable hybrid.
- **Exam Tip**: Understand behavior during network disconnects.

---

### **4. Outposts Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **At Rest**: EBS volumes, S3 on Outposts encrypted with KMS.
- **In Transit**: HTTPS/TLS for service link, local network traffic.
- **Explanation**: E.g., encrypt patient data for HIPAA compliance.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Access Control**

- **IAM**:
    - Controls Outpost resources (e.g., outposts:CreateOutpost).
    - Instance roles grant app access (e.g., s3:PutObject).
    - **Example**: {"Effect": "Allow", "Action": "ec2:RunInstances", "Resource": "arn:aws:outposts:us-east-1:123456789012:outpost/op-1234"}.
- **Resource Sharing**: AWS RAM shares Outpost capacity with other accounts.
- **Explanation**: E.g., share EC2 capacity with a partner account.
    
    [](https://imgs.search.brave.com/eamlPvnAcO-LuuMc8RmEbOfx5SU7NOfzBOYHOUFURw4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmMzMWQzM2Uy/YzlkNjMwYWJhNTg0/MDhlY2FhYjc0NGE3/ZDgwNGVkMmJhYzZj/MjNkM2IyM2VjOTlh/NmQwNDFiNi90dXRv/cmlhbHNkb2pvLmNv/bS8)
    

### **VPC Integration**

- **Purpose**: Secure networking.
- **Features**:
    - Outpost subnets extend VPC (same CIDR range).
    - Route tables support LGW for on-premises traffic.
    - **Explanation**: E.g., private subnet for EC2, LGW routes to local ERP system.
        
        [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
        

### **Compliance**

- **Certifications**: HIPAA, PCI, SOC, ISO, CSA STAR, HITRUST.
- **Explanation**: E.g., deploy healthcare apps with HIPAA compliance.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Monitoring**

- **CloudTrail**: Logs API actions (e.g., EC2 launches).
- **VPC Flow Logs**: Tracks Outpost traffic.
- **Traffic Mirroring**: Inspects network traffic.
- **Explanation**: E.g., audit access for compliance.
    
    [](https://imgs.search.brave.com/eamlPvnAcO-LuuMc8RmEbOfx5SU7NOfzBOYHOUFURw4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmMzMWQzM2Uy/YzlkNjMwYWJhNTg0/MDhlY2FhYjc0NGE3/ZDgwNGVkMmJhYzZj/MjNkM2IyM2VjOTlh/NmQwNDFiNi90dXRv/cmlhbHNkb2pvLmNv/bS8)
    

### **Key Notes**:

- **Security**: KMS + IAM + VPC = enterprise-grade.
- **Exam Tip**: Practice IAM policies and VPC subnet configs for Outposts.

---

### **5. Outposts Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Outposts**: 3-year term (All, Partial, No Upfront).
    - Racks: ~$250K (dev/test) to $900K (memory-optimized).
        
        [](https://imgs.search.brave.com/slHv11i6SxIb99iQc1ia1RerjipRZWe4gU539OoSZAQ/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZWQ0ODBjMTM2/NDQ0ZWI5YmE3Zjg1/MzQzNGQ4MDljYTAx/YWFiNGNkZWY0MGY2/N2VhOGZlMzYzYjI1/YThhNTAyZC9haGwu/bWVkaXVtLmNvbS8)
        
    - Servers: Per-unit pricing (varies by config).
- **Resources**:
    - EC2: Same as Region pricing (e.g., m5.24xlarge ~$3.60/hour for RDS).
    - EBS: Per GB-month.
    - S3 on Outposts: Per TB ordered.
- **Data Transfer**: Free from Outpost to Region; charged for Region to Outpost.
- **Free Tier**: None.
- **Example**: Small rack (11 TB EBS, 26 TB S3) ~$300K over 3 years.

### **Cost Strategies**

- **Right-Sizing**:
    - Choose smallest viable config (e.g., 1U server for edge).
    - **Explanation**: E.g., 2U server for retail vs. rack for data center.
- **Capacity Planning**:
    - Add racks or upgrade (small → medium → large) as needed.
    - **Explanation**: E.g., start with 1 rack, add via catalog.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Spot Instances**:
    - Use Spot for non-critical EC2 workloads.
    - **Explanation**: E.g., batch processing on Outpost.
- **No Upfront Option**:
    - Pay monthly for flexibility (higher cost).
    - **Explanation**: E.g., test Outpost before committing.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        

### **Key Notes**:

- **Cost Savings**: Right-size + Spot + capacity planning = efficient spend.
- **Exam Tip**: Calculate costs for rack vs. server deployments.

---

### **6. Outposts Advanced Features**

### **S3 on Outposts**

- **Purpose**: Local object storage.
- **Features**: Uses S3 APIs, supports data residency, 26 TB–380 TB.
- **Explanation**: E.g., store IoT data locally for compliance.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **EBS Local Snapshots**

- **Purpose**: Local backups.
- **Features**: Store snapshots on Outpost S3 (vs. Region S3).
- **Explanation**: E.g., reduce latency for restores.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Hybrid Architecture**

- **Purpose**: Combine cloud and on-premises.
- **Features**: Use DataSync/Storage Gateway for data sync, Direct Connect for connectivity.
- **Explanation**: E.g., sync local data to S3 in Region.
    
    [](https://imgs.search.brave.com/Ha-phYpIpgGEFy9FSvGMoBVghwxtiI1phRerMRRLTig/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGQ0MGI0ZjNh/YzFmOWY1MmViZTRm/ZDhiMmNjZTAxMWI3/YWYyNmNmOTQyMTY3/ZmY2MDhkNmY1MDdi/Y2IwODg4Yi9pbnRl/bGxpcGFhdC5jb20v)
    

### **Resource Sharing**

- **Purpose**: Multi-account access.
- **Features**: AWS RAM shares Outpost capacity, LGW route tables.
- **Explanation**: E.g., share EC2 with dev team account.
    
    [](https://imgs.search.brave.com/eamlPvnAcO-LuuMc8RmEbOfx5SU7NOfzBOYHOUFURw4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmMzMWQzM2Uy/YzlkNjMwYWJhNTg0/MDhlY2FhYjc0NGE3/ZDgwNGVkMmJhYzZj/MjNkM2IyM2VjOTlh/NmQwNDFiNi90dXRv/cmlhbHNkb2pvLmNv/bS8)
    

### **Key Notes**:

- **Flexibility**: S3 + DataSync = hybrid data management.
- **Exam Tip**: Know S3 on Outposts and EBS snapshot options.

---

### **7. Outposts Use Cases**

Understand practical applications.

### **Low-Latency Apps**

- **Setup**: Outpost rack + EC2 + G4dn.
- **Features**: Single-digit ms latency.
- **Explanation**: E.g., real-time gaming servers.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Data Residency**

- **Setup**: Outpost rack + S3 + RDS.
- **Features**: Local storage for compliance.
- **Explanation**: E.g., HIPAA-compliant healthcare data.
    
    [](https://imgs.search.brave.com/Z857c7LlSA_UwLyw84hJKSUVoOMTnEgA2ob-CkjFQQw/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGJmYjAyMjBh/Y2UzZjQ0MjgyNTFm/MmM0ZGEwYTM2MWYy/NGFiOWY5YzU0MTIz/NWRhNzY3MjI2ZjY1/ZjNmMzU4NC93d3cu/a2xvaWEuY29tLw)
    

### **Manufacturing**

- **Setup**: Outpost server + IoT + EKS.
- **Features**: Local processing of IoT data.
- **Explanation**: E.g., factory automation with MES.
    
    [](https://imgs.search.brave.com/Z857c7LlSA_UwLyw84hJKSUVoOMTnEgA2ob-CkjFQQw/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGJmYjAyMjBh/Y2UzZjQ0MjgyNTFm/MmM0ZGEwYTM2MWYy/NGFiOWY5YzU0MTIz/NWRhNzY3MjI2ZjY1/ZjNmMzU4NC93d3cu/a2xvaWEuY29tLw)
    

### **Telco (5G)**

- **Setup**: Outpost rack/server + EC2 (Xeon).
- **Features**: Supports 5G Core, RAN (CU/DU).
- **Explanation**: E.g., virtualized 5G network at edge.
    
    [](https://imgs.search.brave.com/jgTEfvFUKoKBzY4FW6BItLkCTk-mq2w1KRd9Uayp3EA/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWExOThiMTc3/OTg4N2IwNDMwZTBm/NjBkNzk1ZTk2Y2Q1/OTUxZWY2NjEwZWEw/MGI0Njc2MTBjZjk3/MmQwMTNlYy93d3cu/ZGF0YWNlbnRlcmR5/bmFtaWNzLmNvbS8)
    

---

### **8. Outposts vs. Other Services**

| **Feature** | **AWS Outposts** | **EC2 Auto Scaling** | **Elastic Beanstalk** |
| --- | --- | --- | --- |
| **Type** | Hybrid Cloud | Instance Scaling | PaaS |
| **Workload** | On-premises apps | Cloud EC2 apps | Web/worker apps |
| **Management** | Fully managed | Granular | High-level |
| **Cost** | Rack/server + resources | EC2-based | Resource-based |
| **Use Case** | Low latency, residency | Scalable cloud apps | Simplified deployment |

### **Explanation**:

- **Outposts**: On-premises AWS for hybrid/low-latency needs.
- **EC2 Auto Scaling**: Cloud-only, dynamic scaling.
- **Elastic Beanstalk**: Managed PaaS for cloud apps.

---

### **Detailed Explanations for Mastery**

- **Service Link**:
    - **Example**: Direct Connect links Outpost to us-east-1 for control plane.
    - **Why It Matters**: Required for management—exam tests connectivity.
        
        [](https://imgs.search.brave.com/Ha-phYpIpgGEFy9FSvGMoBVghwxtiI1phRerMRRLTig/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGQ0MGI0ZjNh/YzFmOWY1MmViZTRm/ZDhiMmNjZTAxMWI3/YWYyNmNmOTQyMTY3/ZmY2MDhkNmY1MDdi/Y2IwODg4Yi9pbnRl/bGxpcGFhdC5jb20v)
        
- **S3 on Outposts**:
    - **Example**: Store 48 TB of local data, inaccessible during disconnect.
    - **Why It Matters**: Data residency—key SAA-C03 scenario.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Telco Racks**:
    - **Example**: Deploy 5G Core on Xeon-based rack at edge.
    - **Why It Matters**: Emerging use case—new for 2025.
        
        [](https://imgs.search.brave.com/jgTEfvFUKoKBzY4FW6BItLkCTk-mq2w1KRd9Uayp3EA/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWExOThiMTc3/OTg4N2IwNDMwZTBm/NjBkNzk1ZTk2Y2Q1/OTUxZWY2NjEwZWEw/MGI0Njc2MTBjZjk3/MmQwMTNlYy93d3cu/ZGF0YWNlbnRlcmR5/bmFtaWNzLmNvbS8)
        

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Outpost Rack/Server | On-premises AWS | 42U, 1U/2U, up to 96 racks | Core Concept |
| Service Link | Region connectivity | Direct Connect/public internet | Core Concept |
| Local Gateway | On-premises routing | Connects rack to local network | Core Concept |
| EC2/S3/EBS | Local compute/storage | M5/C5/R5, gp2, S3 APIs | Performance |
| Disconnection Handling | Local operation | EC2 works, S3 needs Region | Resilience |
| Encryption/IAM | Security | KMS, VPC subnets, RAM sharing | Security |
| Spot Instances | Cost savings | Use for non-critical workloads | Cost |
| Telco Offerings | 5G/edge support | Xeon-based, Nitro, RAN workloads | Performance |