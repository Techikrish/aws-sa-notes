# AWS Site-to-Site VPN

### **AWS Site-to-Site VPN Overview**

- **Definition**: AWS Site-to-Site VPN is a managed service that creates a secure, encrypted connection between an on-premises network and an AWS VPC over the public internet using IPsec tunnels. It enables hybrid cloud connectivity for applications and data.
- **Key Features**:
    - Uses two redundant IPsec tunnels for high availability.
    - Supports static or dynamic routing (BGP) for on-premises integration.
    - Integrates with Virtual Private Gateway (VGW), Transit Gateway, and Direct Connect for enhanced connectivity.
    - Provides monitoring via CloudWatch and supports accelerated VPN for improved performance.
    - Compatible with customer gateways (e.g., Cisco, Palo Alto, Check Point).
- **Use Cases**: Hybrid cloud workloads, secure data transfer, backup and disaster recovery, branch office connectivity to AWS.
- **Key Updates (2024–2025)**:
    - **Enhanced Tunnel Options**: Support for custom IPsec parameters (e.g., IKEv2, custom ciphers) (October 2024).
    - **Accelerated VPN Improvements**: Global accelerator integration for lower latency (March 2024).
    - **CloudWatch Monitoring Enhancements**: Detailed tunnel metrics (e.g., packet loss, jitter) (January 2025).
    - **FIPS 140-2 Compliance**: Available in AWS GovCloud for VPN endpoints (October 2024).

---

### **1. Site-to-Site VPN Core Concepts**

### **Components**

- **Virtual Private Gateway (VGW)**:
    - AWS-side VPN endpoint attached to a VPC.
    - Terminates IPsec tunnels and routes traffic to VPC resources.
    - **Explanation**: E.g., VGW in us-east-1 for VPC 172.31.0.0/16.
- **Transit Gateway**:
    - Alternative AWS-side endpoint for connecting multiple VPCs or on-premises networks.
    - Simplifies routing for large-scale hybrid deployments.
    - **Explanation**: E.g., Transit Gateway connects 10 VPCs to on-premises.
- **Customer Gateway**:
    - On-premises device (physical or virtual) that terminates the VPN connection.
    - Requires public IP and supports IPsec (e.g., Cisco ISR, Fortinet).
    - **Explanation**: E.g., customer gateway at 203.0.113.1 in data center.
- **VPN Connection**:
    - Logical connection between VGW/Transit Gateway and customer gateway.
    - Includes two IPsec tunnels for redundancy (active/passive or active/active with BGP).
    - **Explanation**: E.g., VPN connection with tunnels to VGW.
- **IPsec Tunnels**:
    - Two encrypted tunnels using IKE (Internet Key Exchange) and ESP (Encapsulating Security Payload).
    - Configurable parameters: IKE version, encryption (AES), integrity (SHA), DH group.
    - **Explanation**: E.g., Tunnel 1: AES-256, SHA-256, DH Group 14.
- **Routing**:
    - **Static**: Manually configured routes for VPC and on-premises CIDRs.
    - **Dynamic**: Uses BGP for automatic route propagation.
    - **Explanation**: E.g., BGP advertises 10.0.0.0/16 from on-premises to AWS.

### **Networking Concepts**

- **IPsec Configuration**:
    - Supports IKEv1/IKEv2, AES-128/256, SHA-1/2, Diffie-Hellman (DH) groups.
    - Customizable (2024): Dead Peer Detection (DPD), NAT traversal, rekeying.
    - **Explanation**: E.g., configure IKEv2 with AES-256 for stronger security.
- **Accelerated VPN**:
    - Uses AWS Global Accelerator to route traffic via AWS edge locations.
    - Reduces latency and jitter compared to public internet.
    - **Explanation**: E.g., accelerated VPN for low-latency data transfer.
- **BGP (Dynamic Routing)**:
    - Exchanges routes between AWS and on-premises using Autonomous System Numbers (ASNs).
    - Supports Equal-Cost Multi-Path (ECMP) for active/active tunnels.
    - **Explanation**: E.g., BGP ASN 65000 for AWS, 65001 for on-premises.

### **Key Notes**:

- **Exam Relevance**: Understand VGW, Transit Gateway, IPsec tunnels, and routing.
- **Mastery Tip**: Compare Site-to-Site VPN vs. Direct Connect vs. Client VPN for connectivity.

---

### **2. Site-to-Site VPN Performance Features**

Site-to-Site VPN optimizes secure hybrid connectivity.

### **Low Latency with Acceleration**

- **Purpose**: Improve performance over public internet.
- **Features**:
    - Accelerated VPN uses AWS Global Accelerator for optimized routing.
    - Reduces packet loss, jitter, and latency.
- **Explanation**: E.g., accelerated VPN for real-time app data sync.
- **Exam Tip**: Use accelerated VPN for performance-sensitive workloads.

### **High Throughput**

- **Purpose**: Support data-intensive workloads.
- **Features**:
    - Each tunnel supports up to 1.25 Gbps (combined ~2.5 Gbps with ECMP).
    - Active/active tunnels with BGP ECMP for load balancing.
- **Explanation**: E.g., transfer 1 TB of backup data via dual tunnels.
- **Exam Tip**: Highlight ECMP for high-throughput scenarios.

### **Scalability**

- **Purpose**: Handle growing networks.
- **Features**:
    - Transit Gateway scales to multiple VPCs and VPN connections.
    - Dynamic routing (BGP) simplifies route management for large CIDR ranges.
- **Explanation**: E.g., Transit Gateway connects 50 VPCs to on-premises.
- **Exam Tip**: Use Transit Gateway for scalable hybrid networks.

### **Key Notes**:

- **Performance**: Accelerated VPN + ECMP + Transit Gateway = efficient connectivity.
- **Exam Tip**: Emphasize accelerated VPN for latency-sensitive apps.

---

### **3. Site-to-Site VPN Resilience Features**

Resilience ensures reliable connectivity.

### **Dual Tunnels**

- **Purpose**: Provide redundancy.
- **Features**:
    - Two IPsec tunnels per VPN connection (different public IPs).
    - Active/passive (static routing) or active/active (BGP with ECMP).
- **Explanation**: E.g., Tunnel 1 fails, Tunnel 2 takes over automatically.
- **Exam Tip**: Always configure both tunnels for HA.

### **Monitoring and Failover**

- **Purpose**: Detect and respond to issues.
- **Features**:
    - CloudWatch metrics: TunnelState, TunnelDataIn/Out, PacketLoss (new 2025).
    - Alarms for tunnel failures or high packet loss.
    - BGP fast failover with Dead Peer Detection (DPD).
- **Explanation**: E.g., alarm if TunnelState = DOWN for 5 minutes.
- **Exam Tip**: Use CloudWatch for tunnel health monitoring.

### **Transit Gateway Redundancy**

- **Purpose**: Simplify failover for multiple VPCs.
- **Features**:
    - Attach multiple VPN connections to Transit Gateway.
    - Route traffic to backup VPN or Direct Connect if primary fails.
- **Explanation**: E.g., failover to secondary VPN connection via Transit Gateway.
- **Exam Tip**: Use Transit Gateway for resilient hybrid networks.

### **Key Notes**:

- **Resilience**: Dual tunnels + CloudWatch + Transit Gateway = reliable VPN.
- **Exam Tip**: Design HA with dual tunnels and BGP failover.

---

### **4. Site-to-Site VPN Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **In Transit**:
    - IPsec tunnels use AES-128/256 encryption and SHA-1/2 integrity.
    - Supports IKEv1/IKEv2, customizable ciphers (2024).
    - **Explanation**: E.g., AES-256, SHA-256 for secure data transfer.
- **At Rest**:
    - Not applicable (VPN is a network service).
    - Resources (e.g., S3, EBS) use their own encryption.
    - **Explanation**: E.g., S3 bucket encrypted with KMS.
- **Exam Tip**: Highlight AES-256 for compliance requirements.

### **Access Control**

- **IAM**:
    - Controls VPN operations (e.g., ec2:CreateVpnConnection).
    - **Example**: {"Effect": "Allow", "Action": "ec2:CreateVpnConnection", "Resource": "arn:aws:ec2:us-east-1:123456789012:vpn-connection/*"}.
- **VPC Security**:
    - Security groups and NACLs control traffic to/from VPC resources.
    - **Explanation**: E.g., allow port 22 from on-premises CIDR to EC2.
- **Customer Gateway**:
    - Requires secure configuration (e.g., strong pre-shared keys, firewall rules).
    - **Explanation**: E.g., configure Cisco ASA with IKEv2 and DPD.
- **Exam Tip**: Practice security group configs for VPC access.

### **VPC Integration**

- **Purpose**: Secure network isolation.
- **Features**:
    - VGW/Transit Gateway routes traffic to private subnets.
    - Supports private-only VPCs (no internet gateway).
- **Explanation**: E.g., EC2 in private subnet accessed via VPN.
- **Exam Tip**: Use private subnets for secure hybrid apps.

### **Compliance**

- **Certifications**: HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
- **Explanation**: E.g., deploy VPN for PCI-compliant hybrid app.

### **Key Notes**:

- **Security**: IPsec + IAM + VPC controls = robust protection.
- **Exam Tip**: Configure IPsec parameters and security groups for security scenarios.

---

### **5. Site-to-Site VPN Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **VPN Connection**:
    - $0.05/hour per connection (~$36/month).
- **Data Transfer Out (DTO)**:
    - $0.09/GB (US, EU), $0.12–$0.20/GB (other Regions).
    - Free for data transfer in (DTI).
- **Accelerated VPN**:
    - Additional $0.05/hour per connection.
    - Global Accelerator data transfer rates (~$0.025/GB).
- **Example**:
    - 1 VPN connection, 1 TB DTO/month (US):
        - Connection: $0.05 × 24 × 30 = $36/month.
        - DTO: 1,000 GB × $0.09 = $90/month.
        - Total: $126/month.
    - With acceleration: Add $36/month + $25 (1,000 GB × $0.025) = $187/month.
- **Free Tier**: None.

### **Cost Strategies**

- **Avoid Acceleration for Non-Critical Workloads**:
    - Use standard VPN to avoid extra $0.05/hour and data transfer costs.
    - **Explanation**: E.g., use standard VPN for batch data transfers.
- **Minimize DTO**:
    - Compress data to reduce GB transferred.
    - Leverage free DTI for uploads (e.g., backups to S3).
    - **Explanation**: E.g., compress 10 TB backup to 5 TB for DTI.
- **Use Transit Gateway**:
    - Consolidate multiple VPC connections to one VPN for cost efficiency.
    - **Explanation**: E.g., single VPN to Transit Gateway for 10 VPCs.
- **Tagging**:
    - Use cost allocation tags to track VPN costs.
    - **Explanation**: E.g., tag VPN with “Project:Hybrid”.
- **Monitor Usage**:
    - Use CloudWatch to optimize data transfer and detect idle connections.
    - **Explanation**: E.g., terminate unused VPN if TunnelDataOut is low.

### **Key Notes**:

- **Cost Savings**: Standard VPN + Transit Gateway + compression = lower costs.
- **Exam Tip**: Calculate costs for standard vs. accelerated VPN.

---

### **6. Site-to-Site VPN Advanced Features**

### **Accelerated VPN**:

- **Purpose**: Optimize performance.
- **Features**:
    - Routes traffic via AWS Global Accelerator edge locations.
    - Improves latency, jitter, and packet loss.
- **Explanation**: E.g., enable acceleration for video streaming app.
- **Exam Tip**: Use for latency-sensitive hybrid workloads.

### **Dynamic Routing with BGP**:

- **Purpose**: Simplify route management.
- **Features**:
    - Automatic route propagation for VPC and on-premises CIDRs.
    - ECMP for load balancing across tunnels.
- **Explanation**: E.g., BGP advertises 10.0.0.0/16 to VGW.
- **Exam Tip**: Prefer BGP for large or dynamic networks.

### **Custom IPsec Parameters**:

- **Purpose**: Enhance security and compatibility.
- **Features**:
    - Configure IKEv2, custom encryption (AES-128/256), integrity (SHA-1/2/256), DH groups.
    - Adjustable DPD timeout, rekeying intervals (new for 2024).
- **Explanation**: E.g., use IKEv2 with AES-256 for compliance.
- **Exam Tip**: Know custom parameters for enterprise scenarios.

### **Integration with Direct Connect**:

- **Purpose**: Combine VPN with dedicated connectivity.
- **Features**:
    - Run Site-to-Site VPN over Direct Connect for private, low-latency IPsec.
    - Public VIF carries VPN traffic, private VIF for unencrypted traffic.
- **Explanation**: E.g., VPN over Direct Connect for sensitive data.
- **Exam Tip**: Use for high-security hybrid networks.

### **Monitoring Enhancements**:

- **Purpose**: Detailed tunnel insights.
- **Features**:
    - CloudWatch metrics: PacketLoss, Jitter, TunnelState (new 2025).
    - VPC Flow Logs for tunnel traffic analysis.
- **Explanation**: E.g., alarm for high PacketLoss on tunnel.
- **Exam Tip**: Use CloudWatch for troubleshooting.

### **Key Notes**:

- **Flexibility**: Accelerated VPN + BGP + Direct Connect = versatile networking.
- **Exam Tip**: Know BGP setup and accelerated VPN benefits.

---

### **7. Site-to-Site VPN Use Cases**

Understand practical applications.

### **Hybrid Cloud Workloads**

- **Setup**: VPN connection, VGW, BGP routing.
- **Features**: Secure access to VPC from on-premises.
- **Explanation**: E.g., connect on-premises app to EC2 in VPC.

### **Data Backup and Recovery**

- **Setup**: VPN with Transit Gateway, static routing.
- **Features**: Free DTI for backups to S3.
- **Explanation**: E.g., back up 10 TB to S3 over VPN.

### **Branch Office Connectivity**

- **Setup**: VPN to Transit Gateway, accelerated VPN.
- **Features**: Low-latency access to multiple VPCs.
- **Explanation**: E.g., branch office accesses ERP in us-east-1.

### **Disaster Recovery**

- **Setup**: VPN with failover to secondary Region, BGP.
- **Features**: Secure replication to backup VPC.
- **Explanation**: E.g., replicate data to us-west-2 via VPN.

---

### **8. Site-to-Site VPN vs. Other Networking Services**

| **Feature** | **Site-to-Site VPN** | **Direct Connect** | **Client VPN** |
| --- | --- | --- | --- |
| **Type** | Site-based VPN | Dedicated Network | Client-based VPN |
| **Workload** | Site-to-site connectivity | High-bandwidth hybrid | Remote user access |
| **Protocol** | IPsec | Ethernet, BGP | OpenVPN, TLS |
| **Performance** | Up to 1.25 Gbps/tunnel | Up to 100 Gbps | Scalable, elastic |
| **Cost** | $0.05/hour, $0.09/GB DTO | $0.02–$0.20/GB DTO | $0.05/conn-hour |
| **Use Case** | Branch office to VPC | Enterprise hybrid cloud | Remote workforce |

### **Explanation**:

- **Site-to-Site VPN**: Encrypted site-to-site connectivity over internet.
- **Direct Connect**: High-bandwidth, low-latency dedicated connection.
- **Client VPN**: Secure remote user access to VPC/on-premises.

---

### **9. Detailed Explanations for Mastery**

- **Accelerated VPN**:
    - **Example**: Enable acceleration for low-latency data sync to us-east-1.
    - **Why It Matters**: Performance boost—new for 2024.
- **BGP with ECMP**:
    - **Example**: Configure BGP for active/active tunnels to load balance traffic.
    - **Why It Matters**: Scalable routing—exam favorite.
- **VPN over Direct Connect**:
    - **Example**: Run IPsec VPN over Direct Connect public VIF for private encryption.
    - **Why It Matters**: High-security hybrid—common scenario.

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Virtual Private Gateway | AWS VPN endpoint | Attaches to VPC, terminates tunnels | Core Concept           abiti |
| Transit Gateway | Multi-VPC connectivity | Scales to multiple VPCs/VPNs | Core Concept |
| Customer Gateway | On-premises endpoint | Public IP, IPsec-compatible | Core Concept |
| IPsec Tunnels | Encrypted connectivity | Two tunnels, AES-256, IKEv1/2 | Security, Resilience |
| Accelerated VPN | Low latency | Uses Global Accelerator | Performance |
| BGP/ECMP | Dynamic routing | Automatic routes, load balancing | Performance, Scalability |
| CloudWatch Monitoring | Tunnel health | PacketLoss, Jitter, TunnelState | Resilience |