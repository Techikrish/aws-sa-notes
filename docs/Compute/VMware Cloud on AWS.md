# VMware Cloud on AWS

### **VMware Cloud on AWS Overview**

- **Definition**: VMware Cloud on AWS is a managed hybrid cloud service that integrates VMware’s Software-Defined Data Center (SDDC) software (vSphere, vSAN, NSX, vCenter) with AWS’s global infrastructure, enabling seamless migration and operation of VMware-based workloads in the cloud.
- **Key Features**:
    - Runs VMware Cloud Foundation (VCF) on AWS bare-metal EC2 instances.
    - Supports hybrid cloud with consistent infrastructure across on-premises and AWS.
    - Integrates with 200+ AWS services (e.g., S3, RDS, Lambda).
    - Managed by Broadcom (post-VMware acquisition); AWS no longer resells as of April 30, 2024.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Use Cases**: Data center extension, disaster recovery, application modernization, virtual desktop infrastructure (VDI), low-latency workloads.

---

### **1. VMware Cloud on AWS Core Concepts**

### **Components**

- **Software-Defined Data Center (SDDC)**:
    - Virtualized compute (vSphere), storage (vSAN), and networking (NSX) managed via vCenter.
    - Deployed on dedicated EC2 bare-metal instances (e.g., i3.metal, m7i.metal-24xl).
    - **Explanation**: E.g., an SDDC with 2 hosts running vSphere 8.0.
- **Cluster**:
    - Group of hosts (min 1 for dev/test, 2 for production; max 16 per cluster).
    - Supports single-AZ or stretched clusters (Multi-AZ for HA).
    - **Explanation**: E.g., 3-host cluster in us-east-1a.
- **Organization**:
    - Logical entity to manage SDDCs, users, and policies.
    - **Explanation**: E.g., company’s VMware Cloud account.
- **VMware Cloud Services**:
    - Includes VMware Live Recovery, VMware Aria Suite, VMware HCX (migration tool).
    - **Explanation**: E.g., HCX for workload mobility.
- **Amazon Elastic VMware Service (EVS)**:
    - New AWS-native service (preview at re:Invent 2024) to run VCF in a VPC, offering license portability and self-managed/managed options.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
        [](https://imgs.search.brave.com/d5aI6a8P3VxyL-fJI8l3XCuRMrdFzEyT0oWZx0WdJ8M/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjhkYjViOTRh/NzMwOGYxYzBmNGU4/MTJjOTE3YjE2NTBj/NmVkZGQyYjMwNTlj/YzAxNzI0NzcyMzQz/ZDc0YTY0ZC93d3cu/dGVjaHRhcmdldC5j/b20v)
        
    - **Explanation**: Alternative to Broadcom-managed VMware Cloud on AWS.

### **Connectivity**

- **Service Link**: Connects SDDC to AWS Region for management (via Direct Connect or public internet).
- **ENI (Elastic Network Interface)**: Connects SDDC to VPC for AWS service integration.
- **VMware Transit Connect**: Simplifies VPC peering and Transit Gateway connectivity.
- **Explanation**: E.g., route traffic from SDDC to S3 via ENI.

### **Key Updates (2024–2025)**:

- **M7i.metal-24xl Instances**: 4th Gen Intel Xeon (Sapphire Rapids), 48 cores, 384 GiB memory, supports NFS storage (VMware Cloud Flex Storage, FSx for NetApp ONTAP). Available in 5 regions as of February 2024.
    
    [](https://imgs.search.brave.com/xParKtumWMY54TlaEFuh9RYig3E6xjPicXbZFjY356E/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzU5ZWMxYjFi/NDNlM2Y2MGNjNDEy/MjU5YWNhZDQxNWU3/ZGM2MjA4YmQzYTIx/MmIzY2JkZDM1MTEz/YzlmOTBiMC9kb2Nz/LnZtd2FyZS5jb20v)
    
- **vSAN ESA (Express Storage Architecture)**: Supports up to 500 VMs/host, NVMe-based, deep rekey for encryption (tech preview).
    
    [](https://imgs.search.brave.com/xParKtumWMY54TlaEFuh9RYig3E6xjPicXbZFjY356E/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzU5ZWMxYjFi/NDNlM2Y2MGNjNDEy/MjU5YWNhZDQxNWU3/ZGM2MjA4YmQzYTIx/MmIzY2JkZDM1MTEz/YzlmOTBiMC9kb2Nz/LnZtd2FyZS5jb20v)
    
- **Advanced Security**: NSX Firewall (Layer 7 App ID, Identity Firewall, FQDN Filtering) included at no cost since February 1, 2024.
    
    [](https://imgs.search.brave.com/_Gl4hvYROVmVpg252Yp8NGVyDqtYgAKJoZOvixqLpaU/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGE4Mzk2ODY4/ZjQxYjg5MmUwZTAy/ODNhYjYzYmIyN2Vk/ZTAzMWQzNWExMTFm/M2ZhN2RjOWUxZmI4/MmRlNDIwOS9ibG9n/cy52bXdhcmUuY29t/Lw)
    
- **Aria Suite Advanced**: Cloud management (Aria Automation, Operations, Logs) included for SDDCs post-August 31, 2023.
    
    [](https://imgs.search.brave.com/_Gl4hvYROVmVpg252Yp8NGVyDqtYgAKJoZOvixqLpaU/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGE4Mzk2ODY4/ZjQxYjg5MmUwZTAy/ODNhYjYzYmIyN2Vk/ZTAzMWQzNWExMTFm/M2ZhN2RjOWUxZmI4/MmRlNDIwOS9ibG9n/cy52bXdhcmUuY29t/Lw)
    
- **Amazon EVS**: Native AWS alternative, simplifies VCF deployment, supports license portability.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Key Notes**:

- **Exam Relevance**: Understand SDDC deployment, connectivity, and EVS vs. VMware Cloud on AWS.
- **Mastery Tip**: Compare VMware Cloud on AWS (Broadcom-managed) vs. EVS (AWS-native).

### **VMware Cloud on AWS vs. Other Services**

| **Feature** | **VMware Cloud on AWS** | **Amazon EVS** | **EC2 Auto Scaling** |
| --- | --- | --- | --- |
| **Type** | Managed VCF (Broadcom) | AWS-native VCF | Instance Scaling |
| **Workload** | VMware VMs | VMware VMs | Any EC2 workload |
| **Management** | Broadcom-managed | Self-managed/managed | AWS-managed |
| **Cost** | Host-based | Resource-based | EC2-based |
| **Use Case** | Hybrid VMware | Native AWS VMware | Scalable cloud apps |