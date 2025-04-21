# AWS Client VPN

### **AWS Client VPN Overview**

- **Definition**: AWS Client VPN is a fully managed, elastic, client-based VPN service that enables secure remote access to AWS resources (e.g., Amazon VPC) and on-premises networks using OpenVPN-based clients over a TLS-encrypted connection.
- **Key Features**:
    - Supports OpenVPN clients (AWS-provided or third-party) on Windows, macOS, Linux, iOS, Android.
    - Authentication via Active Directory (AD), federated (SAML-2.0), or certificate-based (mutual authentication).
    - Scales automatically based on user demand, with high availability across multiple Availability Zones (AZs).
    - Integrates with AWS services (VPC, Directory Service, CloudWatch, AWS Certificate Manager [ACM], AWS Backup).
    - Supports split-tunnel and full-tunnel modes for flexible routing.
- **Use Cases**: Remote workforce access to VPC or on-premises resources, secure IoT device connectivity, application access during cloud migration, hybrid cloud networking.
- **Key Updates (2024–2025)**:
    - Concurrent connections: AWS-provided client supports up to five simultaneous sessions (January 2025).
        
        [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
        
    - Enhanced logging: Connection logging to CloudWatch for forensics and debugging (March 2024).
    - FIPS 140-2 compliant endpoints in AWS GovCloud (US-East/West) (October 2024).

---

### **1. AWS Client VPN Core Concepts**

### **Components**

- **Client VPN Endpoint**:
    - Regional resource that terminates VPN sessions.
    - Configured with authentication, client CIDR, server certificate, and logging settings.
    - **Explanation**: E.g., endpoint in us-east-1 for remote access to VPC.
- **Target Network**:
    - Subnet in a VPC associated with the endpoint, enabling access to VPC resources.
    - Multiple subnets (from same VPC, different AZs) for high availability.
    - **Explanation**: E.g., associate subnet in us-east-1a for EC2 access.
- **Client CIDR Range**:
    - IPv4 range (e.g., 10.2.0.0/16) for assigning IP addresses to connected clients.
    - Must not overlap with VPC or on-premises CIDR ranges.
    - **Explanation**: E.g., 10.2.0.0/16 for 65,536 client IPs.
- **Route Table**:
    - Defines destination networks (e.g., VPC CIDR, on-premises, internet) for client traffic.
    - Supports split-tunnel (only specified routes via VPN) or full-tunnel (all traffic via VPN).
    - **Explanation**: E.g., route 172.31.0.0/16 to VPC, 0.0.0.0/0 for internet.
- **Authorization Rules**:
    - Restrict access to networks based on AD groups, SAML groups, or all users.
    - **Explanation**: E.g., allow “ClientVPNGroup” AD group to access 172.31.0.0/16.
- **Client VPN Configuration File**:
    - Contains endpoint DNS name, authentication details, and certificates for OpenVPN clients.
    - Distributed to end users or accessed via self-service portal.
    - **Explanation**: E.g., .ovpn file for AWS VPN Desktop Client.
- **Client VPN Network Interface (ENI)**:
    - Created in associated subnets to handle traffic.
    - Source NAT (SNAT) translates client IP to ENI IP for VPC communication.
    - **Explanation**: E.g., ENI in subnet translates 10.2.0.5 to 172.31.1.10.

### **Authentication Methods**

- **Active Directory**:
    - Uses AWS Directory Service or on-premises AD via connector.
    - Supports MFA via AD or external IdP (e.g., Okta).
    - **Explanation**: E.g., authenticate users with corporate AD credentials.
- **Federated (SAML-2.0)**:
    - Uses external IdP (e.g., Okta, Azure AD) for single sign-on (SSO).
    - Requires browser for SAML authentication.
    - **Explanation**: E.g., SSO via Okta for remote employees.
- **Certificate-Based (Mutual Authentication)**:
    - Requires server certificate in ACM and client certificates.
    - Most secure, used with or without user-based authentication.
    - **Explanation**: E.g., mutual auth with client/server certificates.

### **Key Notes**:

- **Exam Relevance**: Understand endpoint setup, target networks, and authentication.
- **Mastery Tip**: Compare Client VPN vs. Site-to-Site VPN for remote vs. site connectivity.

---

### **2. Client VPN Performance Features**

Client VPN optimizes secure remote access.

### **Elastic Scalability**

- **Purpose**: Handle variable user demand.
- **Features**:
    - Automatically scales up/down based on active connections.
    - No need to provision hardware or estimate capacity.
- **Explanation**: E.g., scale to 4,000 users during WFH spike.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Exam Tip**: Highlight elasticity for unpredictable workloads.

### **Concurrent Connections**

- **Purpose**: Support multiple sessions per user.
- **Features**:
    - AWS-provided client supports up to five concurrent sessions.
    - Each session uses a unique configuration file for different endpoints.
    - Checks for CIDR/routing conflicts to prevent issues.
- **Explanation**: E.g., connect to prod and dev VPCs simultaneously.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
- **Exam Tip**: Know concurrent session limits and conflict checks.

### **Low Latency**

- **Purpose**: Fast access to resources.
- **Features**:
    - Uses AWS global network for optimized routing.
    - Supports TCP/UDP on ports 443, 1194 for flexible connectivity.
- **Explanation**: E.g., low-latency access to EC2 over cellular networks.
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    
- **Exam Tip**: TCP for reliability (cellular), UDP for performance.

### **Key Notes**:

- **Performance**: Elasticity + concurrent sessions = flexible remote access.
- **Exam Tip**: Emphasize scalability for remote workforce scenarios.

---

### **3. Client VPN Resilience Features**

Resilience ensures reliable connectivity.

### **High Availability**

- **Purpose**: Minimize downtime.
- **Features**:
    - Deployed across multiple AZs in a Region.
    - Associate multiple subnets (different AZs) for failover.
    - **Explanation**: E.g., subnet in us-east-1a fails, traffic routes via us-east-1b.
- **Exam Tip**: Always associate multiple subnets for HA.

### **Connection Logging**

- **Purpose**: Monitor and troubleshoot.
- **Features**:
    - Logs connection events (e.g., connect, disconnect, errors) to CloudWatch Logs.
    - Enables forensics and usage analysis.
- **Explanation**: E.g., debug failed connections due to auth issues.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
- **Exam Tip**: Enable logging for troubleshooting scenarios.

### **Route Redundancy**

- **Purpose**: Ensure network reachability.
- **Features**:
    - Add routes for VPC, peered VPCs, on-premises networks, or internet.
    - Supports VPC peering, Transit Gateway, or Site-to-Site VPN for hybrid access.
- **Explanation**: E.g., route to 10.200.0.0/24 on-premises via Transit Gateway.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Exam Tip**: Configure routes for hybrid cloud access.

### **Key Notes**:

- **Resilience**: Multi-AZ + logging = reliable VPN.
- **Exam Tip**: Design HA with multiple subnets and CloudWatch logging.

---

### **4. Client VPN Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **In Transit**:
    - TLS for all client-to-endpoint connections.
    - Supports OpenVPN protocol (industry-standard).
    - **Explanation**: E.g., encrypt traffic from remote laptop to VPC.
- **At Rest**:
    - Not applicable (no persistent data stored on endpoint).
    - Resources (e.g., S3, EBS) use their own encryption.
    - **Explanation**: E.g., EC2 data encrypted with KMS.

### **Authentication**

- **AD Integration**:
    - AWS Directory Service or on-premises AD with MFA support.
    - **Explanation**: E.g., MFA via Okta for AD users.
- **SAML-2.0**:
    - Federated SSO with external IdP.
    - **Explanation**: E.g., Azure AD for seamless login.
- **Mutual Authentication**:
    - Server certificate in ACM, client certificates for users.
    - **Explanation**: E.g., issue client certs via OpenVPN easy-rsa.
        
        [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
        
- **Exam Tip**: Mutual auth is most secure, often combined with AD/SAML.

### **Access Control**

- **Authorization Rules**:
    - Restrict network access by AD/SAML group or all users.
    - **Example**: Allow “Developers” group to 172.31.0.0/16.
- **Security Groups**:
    - Applied to subnet associations, control traffic to VPC resources.
    - Stateful, only outbound rules checked for Client VPN traffic.
    - **Explanation**: E.g., allow port 22 from Client VPN ENI to EC2.
        
        [](https://imgs.search.brave.com/uZ-D-ILf3e7do2iP_QdA_HLqcmYrVwBWJ0oiYDgIqeI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzk3ZWRlYjU0/YTkzMWIyMGFhMTY3/ZjI1NWM1YWU3MjNi/NmY1YzNmNWQ1OTFk/OTc2NDFiMGZiOTA4/OTUyYjA5Ny9yZXBv/c3QuYXdzLw)
        
- **Network ACLs (NACLs)**:
    - Stateless, apply to subnets for additional control.
    - **Explanation**: E.g., allow TCP 443 for VPN traffic.

### **VPC Integration**

- **Purpose**: Secure network isolation.
- **Features**:
    - Deploy in private subnets, secure with security groups.
    - SNAT translates client IP to ENI IP for VPC access.
- **Explanation**: E.g., ENI in private subnet for secure EC2 access.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
- **Exam Tip**: Configure security groups for subnet associations.

### **Compliance**

- **Certifications**: HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
- **Explanation**: E.g., deploy for healthcare remote access.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Key Notes**:

- **Security**: TLS + mutual auth + security groups = robust protection.
- **Exam Tip**: Practice authorization rules and security group configs.

---

### **5. Client VPN Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Endpoint Association**:
    - $0.10/hour per subnet association (e.g., 2 subnets = $0.20/hour).
- **Active Connections**:
    - $0.05/hour per client connection.
- **Data Transfer**:
    - Standard AWS data transfer rates (e.g., $0.09/GB out to internet).
- **Example**:
    - 1 endpoint, 2 subnets, 100 users (8 hours/day, 20 days/month):
        - Subnets: 2 × $0.10 × 24 × 30 = $144/month.
        - Connections: 100 × $0.05 × 8 × 20 = $800/month.
        - Total: ~$944/month (excl. data transfer).
- **Free Tier**: None.

### **Cost Strategies**

- **Split-Tunnel**:
    - Route only VPC/on-premises traffic via VPN, reducing data transfer costs.
    - **Explanation**: E.g., exclude internet traffic from VPN.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Minimize Subnets**:
    - Use one subnet for non-critical workloads, two for HA.
    - **Explanation**: E.g., single subnet for dev environment.
- **Connection Management**:
    - Disconnect unused sessions to reduce connection-hour charges.
    - **Explanation**: E.g., enforce timeouts via client policy.
- **Tagging**:
    - Use cost allocation tags to track endpoint costs.
    - **Explanation**: E.g., tag endpoint with “Project:RemoteAccess”.
        
        [](https://imgs.search.brave.com/4t9KSu_llLUSu5nBb1eEGdBX6awhzVa6HlgABA-bjMg/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjQ1ZDJlMmM2/OTk1ZjY1NzFhMmYz/MDFlYzdiZTM0ZjZi/ZTk5Y2M4NzUzNmZj/NDk1NjEyZGVmOWM2/NjdiN2ZkYi93d3cu/dGVjcmFjZXIuY29t/Lw)
        
- **Monitor Usage**:
    - Use CloudWatch to identify idle connections.
    - **Explanation**: E.g., terminate unused sessions.

### **Key Notes**:

- **Cost Savings**: Split-tunnel + minimal subnets = lower costs.
- **Exam Tip**: Calculate costs for subnet associations and connections.

---

### **6. Client VPN Advanced Features**

### **Split-Tunnel vs. Full-Tunnel**

- **Split-Tunnel**:
    - Only specified routes (e.g., VPC, on-premises) go through VPN.
    - Reduces data transfer costs, improves performance.
    - **Explanation**: E.g., route 172.31.0.0/16 to VPC, internet via local ISP.
        
        [](https://imgs.search.brave.com/uZ-D-ILf3e7do2iP_QdA_HLqcmYrVwBWJ0oiYDgIqeI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzk3ZWRlYjU0/YTkzMWIyMGFhMTY3/ZjI1NWM1YWU3MjNi/NmY1YzNmNWQ1OTFk/OTc2NDFiMGZiOTA4/OTUyYjA5Ny9yZXBv/c3QuYXdzLw)
        
- **Full-Tunnel**:
    - All traffic (including internet) goes through VPN.
    - Useful for secure internet access or compliance.
    - **Explanation**: E.g., route 0.0.0.0/0 to VPC for internet access.
        
        [](https://imgs.search.brave.com/uZ-D-ILf3e7do2iP_QdA_HLqcmYrVwBWJ0oiYDgIqeI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzk3ZWRlYjU0/YTkzMWIyMGFhMTY3/ZjI1NWM1YWU3MjNi/NmY1YzNmNWQ1OTFk/OTc2NDFiMGZiOTA4/OTUyYjA5Ny9yZXBv/c3QuYXdzLw)
        
- **Exam Tip**: Split-tunnel for cost, full-tunnel for security.

### **Self-Service Portal**

- **Purpose**: Simplify client access.
- **Features**:
    - Web portal for users to download AWS VPN Desktop Client and configuration file.
    - Not available with mutual authentication.
- **Explanation**: E.g., users download .ovpn file for easy setup.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
- **Exam Tip**: Know portal limitations with mutual auth.

### **Hybrid Cloud Access**

- **Purpose**: Connect to on-premises networks.
- **Features**:
    - Route to on-premises CIDR via VPC peering, Transit Gateway, or Site-to-Site VPN.
    - Requires authorization rule for on-premises network.
- **Explanation**: E.g., access 10.200.0.0/24 via Site-to-Site VPN.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Exam Tip**: Configure routes and rules for hybrid scenarios.

### **DNS Resolution**

- **Purpose**: Resolve VPC/private resources.
- **Features**:
    - Specify DNS servers (e.g., Route 53 Resolver, on-premises DNS).
    - VPC DNS server typically at .2 address (e.g., 172.31.0.2).
- **Explanation**: E.g., resolve EC2 private DNS via VPC DNS.
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    
- **Exam Tip**: Configure DNS for hybrid DNS resolution.

### **Key Notes**:

- **Flexibility**: Split-tunnel + hybrid access = versatile VPN.
- **Exam Tip**: Know split-tunnel setup and DNS configuration.

---

### **7. Client VPN Use Cases**

Understand practical applications.

### **Remote Workforce**

- **Setup**: Client VPN endpoint, AD authentication, split-tunnel.
- **Features**: Secure access to VPC and on-premises resources.
- **Explanation**: E.g., employees access ERP in VPC from home.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Cloud Migration**

- **Setup**: Full-tunnel, hybrid routes to on-premises.
- **Features**: Seamless access to apps during migration.
- **Explanation**: E.g., access legacy app on-premises and new app in VPC.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **IoT Device Connectivity**

- **Setup**: Certificate-based authentication, split-tunnel.
- **Features**: Secure device-to-VPC communication.
- **Explanation**: E.g., IoT sensors access VPC for data processing.
    
    [](https://imgs.search.brave.com/RZ9xPuN87dYqtYCk4TONd4taMtlovCl-Zq_UDgaeg6s/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWZkOTdiMmU0/NmQ1MmFmNjEyOWEz/M2VjNmQ4YzFlM2Zk/MjBmYWNlYjJiNjMx/YjI2YmQxNzIyYmFi/NGU1NzM1NC9rMjFh/Y2FkZW15LmNvbS8)
    

### **Secure Internet Access**

- **Setup**: Full-tunnel, route 0.0.0.0/0 to VPC.
- **Features**: Route all traffic via VPC for compliance.
- **Explanation**: E.g., enforce corporate firewall for remote users.
    
    [](https://imgs.search.brave.com/uZ-D-ILf3e7do2iP_QdA_HLqcmYrVwBWJ0oiYDgIqeI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzk3ZWRlYjU0/YTkzMWIyMGFhMTY3/ZjI1NWM1YWU3MjNi/NmY1YzNmNWQ1OTFk/OTc2NDFiMGZiOTA4/OTUyYjA5Ny9yZXBv/c3QuYXdzLw)
    

---

### **8. Client VPN vs. Other Networking Services**

| **Feature** | **Client VPN** | **Site-to-Site VPN** | **Direct Connect** |
| --- | --- | --- | --- |
| **Type** | Client-based VPN | Site-based VPN | Dedicated Network |
| **Workload** | Remote user access | Site-to-site connectivity | High-bandwidth, low-latency |
| **Protocol** | OpenVPN, TLS | IPsec | Private line |
| **Performance** | Scalable, elastic | Fixed tunnels, ECMP | Up to 100 Gbps |
| **Cost** | $0.05/conn-hour, $0.10/subnet-hour | $0.05/tunnel-hour | $0.02–$0.20/GB |
| **Use Case** | Remote workforce | Branch office to VPC | Enterprise hybrid cloud |

### **Explanation**:

- **Client VPN**: Secure remote user access to VPC/on-premises.
- **Site-to-Site VPN**: Encrypted site-to-site connectivity.
- **Direct Connect**: Dedicated, high-bandwidth hybrid connection.

---

### **9. Detailed Explanations for Mastery**

- **Split-Tunnel Configuration**:
    - **Example**: Route 172.31.0.0/16 to VPC, exclude internet traffic.
    - **Why It Matters**: Cost savings, performance—exam favorite.
        
        [](https://imgs.search.brave.com/uZ-D-ILf3e7do2iP_QdA_HLqcmYrVwBWJ0oiYDgIqeI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzk3ZWRlYjU0/YTkzMWIyMGFhMTY3/ZjI1NWM1YWU3MjNi/NmY1YzNmNWQ1OTFk/OTc2NDFiMGZiOTA4/OTUyYjA5Ny9yZXBv/c3QuYXdzLw)
        
- **Hybrid Cloud Access**:
    - **Example**: Route 10.200.0.0/24 to on-premises via Transit Gateway.
    - **Why It Matters**: Common hybrid cloud scenario.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Concurrent Connections**:
    - **Example**: Connect to prod (us-east-1) and dev (us-west-2) endpoints.
    - **Why It Matters**: New feature, enhances flexibility.
        
        [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
        

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Client VPN Endpoint | Terminate VPN sessions | Regional, multi-AZ | Core Concept |
| Target Network | VPC access | Subnet in VPC, multi-AZ for HA | Core Concept |
| Split-Tunnel | Optimize traffic | Route only VPC/on-premises traffic | Performance, Cost |
| Authentication | Secure access | AD, SAML, mutual auth | Security |
| Authorization Rules | Restrict access | AD/SAML groups, network CIDR | Security |
| Connection Logging | Troubleshoot | CloudWatch Logs for forensics | Resilience |
| Concurrent Connections | Multi-session access | Up to 5 sessions, AWS client | Performance |