# AWS Wavelength

### **AWS Wavelength Overview**

- **Definition**: AWS Wavelength is an infrastructure service that embeds AWS compute and storage capabilities within telecommunications providers’ 5G networks, enabling developers to build ultra-low-latency applications for mobile and edge devices.
- **Key Features**:
    - Deploys EC2, EBS, and VPC resources in Wavelength Zones at the edge of 5G networks.
    - Supports ultra-low latency (single-digit milliseconds) for 5G and 4G/LTE devices.
    - Integrates with AWS Regions via VPC for seamless access to services like S3, DynamoDB.
    - Uses familiar AWS APIs, tools, and services (e.g., CloudFormation, EKS).
- **Use Cases**: Real-time gaming, AR/VR, autonomous vehicles, IoT, live video streaming, ML inference at the edge.

---

### **1. AWS Wavelength Core Concepts**

### **Components**

- **Wavelength Zone**:
    - AWS infrastructure deployed in a telecom provider’s data center (e.g., Verizon, Vodafone, Sonatel).
    - Logical extension of an AWS Region, managed by the Region’s control plane.
    - **Explanation**: E.g., Wavelength Zone in Dakar extends af-south-1.
- **Wavelength Subnet**:
    - Subnet created in a Wavelength Zone to host resources (e.g., EC2 instances).
    - **Explanation**: E.g., deploy EC2 in a subnet for low-latency gaming.
- **Carrier Gateway**:
    - Connects Wavelength Zone to the telecom provider’s network and the internet.
    - Supports inbound traffic from the carrier and outbound to the internet/Region.
    - **Explanation**: E.g., routes 5G device traffic to EC2 in Wavelength Zone.
- **Network Border Group**:
    - Set of Wavelength Zones, Local Zones, or AZs for IP address advertisement.
    - **Explanation**: E.g., assign carrier IPs from a specific border group.
- **VPC Integration**:
    - Extend a VPC to Wavelength Zones via subnets.
    - Resources in Wavelength Zones communicate with Region services over a high-bandwidth link.
    - **Explanation**: E.g., EC2 in Wavelength Zone accesses DynamoDB in us-east-1.

### **Supported Services**

- **Compute**: EC2 (T3, R5, M5, C5, G4dn for ML/GPU), EKS, ECS, Auto Scaling.
- **Storage**: EBS gp2 volumes (encrypted, snapshot/restore capable).
- **Networking**: VPC, carrier gateway, ALB (select zones).
- **Management**: CloudWatch, CloudTrail, CloudFormation, Systems Manager.
- **Partner Solutions**: Available via AWS Marketplace (e.g., third-party NLB, S3 alternatives).
- **Explanation**: Limited compared to Regions; no RDS or S3 natively in Wavelength Zones.

### **Recent Updates (2024–2025)**:

- **New Wavelength Zone in Dakar, Senegal**: General availability with Sonatel (Orange affiliate), extending af-south-1 (April 16, 2025).
    
    ![](https://pbs.twimg.com/profile_images/1527030582093312001/HwfKvu7r_normal.png)
    
- **ThousandEyes Cloud Agents**: Deployed in Wavelength Zones for performance monitoring (October 2024).
    
    [](https://imgs.search.brave.com/fnIsVmbnoEAQpaNbKDT6WgqLVIap1TbjLk0UsjRAtso/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMThmN2ViNjky/Y2UwYmIzZDg4YmE5/YjFhZmU4OTQyODdh/NGYzNjgzZTVlYzcx/NWRiYmE1ZTYxNDE5/OGRkOWU1MS9kb2Nz/LnRob3VzYW5kZXll/cy5jb20v)
    
- **Edge Discovery Service API/MEC Performance API**: Enhance 5G edge deployments (April 2025).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Global Expansion**: Available in 7+ US cities (e.g., Boston, Miami), Europe, Japan, South Korea, and now Africa.