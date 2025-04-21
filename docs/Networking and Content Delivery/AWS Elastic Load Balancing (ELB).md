# AWS Elastic Load Balancing (ELB)

### **AWS Elastic Load Balancing (ELB) Overview**

- **Definition**: AWS Elastic Load Balancing is a managed service that automatically distributes incoming application traffic across multiple targets (e.g., EC2 instances, containers, Lambda functions, IP addresses) to improve application availability, scalability, and performance.
- **Key Types**:
    - **Application Load Balancer (ALB)**: Layer 7 (HTTP/HTTPS, WebSocket, gRPC), content-based routing.
    - **Network Load Balancer (NLB)**: Layer 4 (TCP, UDP, TLS), ultra-low latency, high throughput.
    - **Gateway Load Balancer (GWLB)**: Layer 3 (IP packets), third-party security appliances.
    - **Classic Load Balancer (CLB)**: Legacy, Layer 4/7, basic load balancing (not recommended for new apps).
- **Key Features**:
    - Integrates with Auto Scaling, Route 53, ACM, WAF, Shield, and CloudWatch.
    - Supports health checks, sticky sessions, cross-zone load balancing, and IPv6.
    - Highly available across multiple Availability Zones (AZs).
- **Use Cases**: Web applications, microservices, real-time apps (e.g., gaming, streaming), security inspection, hybrid cloud load balancing.
- **Key Updates (2024–2025)**:
    - **ALB Dual-Stack**: Native IPv4/IPv6 support for HTTP/HTTPS (March 2024).
    - **GWLB Endpoint Enhancements**: Simplified VPC endpoint service integration (October 2024).
    - **ALB WAF Integration**: Enhanced protection with AWS WAF rate-limiting (April 2024).
    - **NLB TLS Improvements**: Support for custom TLS cipher suites (January 2025).

---

### **1. ELB Core Concepts**

### **Components**

- **Load Balancer**:
    - Entry point for traffic, distributes to targets based on configuration.
    - Regional resource, spans multiple AZs for high availability.
    - **Explanation**: E.g., ALB in us-east-1 for web app traffic.
- **Target Group**:
    - Logical group of targets (e.g., EC2, Lambda, IP addresses) for routing traffic.
    - Configured with health checks and protocol/port settings.
    - **Explanation**: E.g., target group for EC2 instances on port 80.
- **Listener**:
    - Defines protocol (e.g., HTTP, TCP) and port (e.g., 80, 443) for incoming traffic.
    - Rules (ALB) or conditions (NLB/GWLB) route traffic to target groups.
    - **Explanation**: E.g., ALB listener on HTTPS:443 routes to web servers.
- **Health Checks**:
    - Monitor target health (e.g., HTTP 200 OK) to route traffic only to healthy targets.
    - Configurable thresholds, intervals, and timeouts.
    - **Explanation**: E.g., check /health every 30 seconds, mark unhealthy after 2 failures.
- **Cross-Zone Load Balancing**:
    - Distributes traffic evenly across all targets in all enabled AZs.
    - Enabled by default (ALB, GWLB), optional (NLB, CLB).
    - **Explanation**: E.g., ALB evenly distributes to EC2 in us-east-1a and 1b.

### **ELB Types**

| **Type** | **Layer** | **Protocols** | **Key Features** | **Use Cases** |
| --- | --- | --- | --- | --- |
| **ALB** | Layer 7 | HTTP, HTTPS, WebSocket, gRPC | Path/host-based routing, WAF, Lambda targets | Web apps, microservices |
| **NLB** | Layer 4 | TCP, UDP, TLS | Ultra-low latency, static IPs, high throughput | Real-time apps, IoT |
| **GWLB** | Layer 3 | IP packets | Third-party security appliances, GENEVE protocol | Security inspection, firewalls |
| **CLB** | Layer 4/7 | HTTP, HTTPS, TCP, SSL | Legacy, basic load balancing | Older apps (avoid for new) |

### **Key Notes**:

- **Exam Relevance**: Understand ALB, NLB, GWLB features; know CLB is legacy.
- **Mastery Tip**: Compare ALB vs. NLB vs. GWLB for workload suitability.

---

### **2. ELB Performance Features**

ELB optimizes application performance and scalability.

### **High Throughput**

- **ALB**: Handles millions of requests per second, ideal for HTTP/HTTPS.
- **NLB**: Supports tens of millions of connections, ultra-low latency for TCP/UDP.
- **GWLB**: High throughput for security appliance traffic (GENEVE).
- **Explanation**: E.g., NLB for gaming app with millions of UDP connections.
- **Exam Tip**: Use NLB for high-throughput, low-latency workloads.

### **Scalability**

- **Purpose**: Handle dynamic traffic spikes.
- **Features**:
    - Auto-scales based on demand, no manual provisioning.
    - Integrates with Auto Scaling to add/remove targets dynamically.
- **Explanation**: E.g., ALB scales for Black Friday web traffic, Auto Scaling adds EC2.
- **Exam Tip**: Highlight auto-scaling for unpredictable loads.

### **Content-Based Routing (ALB)**:

- **Purpose**: Route based on request attributes.
- **Features**:
    - Path-based (e.g., /api to microservice).
    - Host-based (e.g., api.example.com to API servers).
    - HTTP header/method-based, WebSocket/gRPC support.
- **Explanation**: E.g., route /images to S3, /app to EC2.
- **Exam Tip**: Use ALB for microservices with path/host routing.

### **Static IPs (NLB)**:

- **Purpose**: Predictable client connectivity.
- **Features**:
    - One static IP per subnet (AZ) or Elastic IP.
    - Preserves client source IP (optional).
- **Explanation**: E.g., NLB static IP for IoT device connections.
- **Exam Tip**: Use NLB for static IP requirements.

### **Key Notes**:

- **Performance**: ALB for HTTP flexibility, NLB for raw performance, GWLB for security.
- **Exam Tip**: Match ELB type to workload (ALB for web, NLB for real-time).

---

### **3. ELB Resilience Features**

Resilience ensures high availability and fault tolerance.

### **Multi-AZ Deployment**

- **Purpose**: Survive AZ failures.
- **Features**:
    - Deploy across multiple AZs (minimum two subnets).
    - Automatically redistributes traffic if an AZ fails.
- **Explanation**: E.g., ALB in us-east-1a and 1b continues if 1a fails.
- **Exam Tip**: Always enable multiple AZs for HA.

### **Health Checks**:

- **Purpose**: Ensure traffic goes to healthy targets.
- **Features**:
    - ALB: HTTP status codes (e.g., 200 OK).
    - NLB/GWLB: TCP, HTTP, or HTTPS checks.
    - Configurable thresholds (e.g., 3 healthy, 2 unhealthy).
- **Explanation**: E.g., mark EC2 unhealthy if /health returns 500.
- **Exam Tip**: Configure health checks for specific app endpoints.

### **Cross-Zone Load Balancing**:

- **Purpose**: Even traffic distribution.
- **Features**:
    - ALB/GWLB: Enabled by default, no additional cost.
    - NLB: Optional, incurs inter-AZ data transfer costs.
    - CLB: Optional, no cost.
- **Explanation**: E.g., NLB distributes traffic to all EC2 across AZs.
- **Exam Tip**: Enable for ALB/GWLB, evaluate cost for NLB.

### **Monitoring and Failover**:

- **Purpose**: Detect and respond to issues.
- **Features**:
    - CloudWatch metrics: RequestCount, HealthyHostCount, Latency.
    - Alarms for unhealthy targets or high latency.
    - Auto Scaling adjusts targets based on health.
- **Explanation**: E.g., alarm if HealthyHostCount < 2.
- **Exam Tip**: Use CloudWatch for monitoring and troubleshooting.

### **Key Notes**:

- **Resilience**: Multi-AZ + health checks + cross-zone = fault-tolerant apps.
- **Exam Tip**: Design HA with multi-AZ and health checks.

---

### **4. ELB Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **In Transit**:
    - ALB/CLB: HTTPS with TLS termination (ACM or custom certificates).
    - NLB: TLS termination or passthrough (end-to-end encryption).
    - GWLB: Passthrough for security appliances (no TLS termination).
    - **Explanation**: E.g., ALB terminates TLS with ACM cert for HTTPS.
- **At Rest**:
    - Not applicable (ELB is a traffic service).
    - Targets (e.g., EC2, S3) use their own encryption.
    - **Explanation**: E.g., EC2 EBS volume encrypted with KMS.
- **Exam Tip**: Use ACM for ALB/NLB TLS certificates.

### **Access Control**

- **Security Groups**:
    - Applied to ELB, control inbound traffic (e.g., allow 80, 443).
    - Target security groups control traffic from ELB to targets.
    - **Explanation**: E.g., ALB security group allows 443, EC2 allows 80 from ALB.
- **IAM**:
    - Controls ELB operations (e.g., elasticloadbalancing:CreateLoadBalancer).
    - **Example**: {"Effect": "Allow", "Action": "elasticloadbalancing:CreateTargetGroup", "Resource": "*"}.
- **WAF (ALB)**:
    - Integrates with AWS WAF for Layer 7 protection (e.g., SQL injection, XSS).
    - Supports rate-limiting, geo-restrictions.
    - **Explanation**: E.g., block malicious IPs with WAF on ALB.
- **Exam Tip**: Use WAF with ALB for web security.

### **VPC Integration**

- **Purpose**: Secure network isolation.
- **Features**:
    - Deploy in public (internet-facing) or private (internal) subnets.
    - ALB/NLB: Public for web apps, internal for microservices.
    - GWLB: Internal for security appliances.
    - **Explanation**: E.g., internal ALB for backend API in private subnet.
- **Exam Tip**: Use internal ELB for private workloads.

### **Compliance**

- **Certifications**: HIPAA, PCI, SOC, ISO, GDPR.
- **Explanation**: E.g., deploy ALB with WAF for PCI-compliant web app.

### **Key Notes**:

- **Security**: TLS + WAF + security groups = robust protection.
- **Exam Tip**: Practice ALB WAF rules and security group configs.

---

### **5. ELB Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Load Balancer Capacity Units (LCUs)**:
    - ALB/CLB: Charged per LCU-hour based on:
        - New connections (25/sec), active connections (3,000), processed bytes (1 GB HTTP, 0.4 GB HTTPS), rule evaluations (1,000).
        - ~$0.008/LCU-hour.
    - NLB: Charged per NLCU-hour based on:
        - New connections (800/sec), active connections (100,000), processed bytes (1 GB).
        - ~$0.006/NLCU-hour.
    - GWLB: Charged per GWLB-hour ($0.013) and processed bytes ($0.0035/GB).
- **Load Balancer Hours**:
    - ALB: ~$0.0225/hour.
    - NLB: ~$0.0225/hour.
    - GWLB: ~$0.013/hour.
    - CLB: ~$0.025/hour.
- **Data Transfer**:
    - Cross-zone load balancing (NLB): Inter-AZ data transfer (~$0.01/GB).
    - Internet-facing: Standard AWS DTO rates (~$0.09/GB).
- **Example**:
    - ALB, 2 AZs, 10 LCUs/hour, 30 days:
        - Hours: $0.0225 × 24 × 30 = $16.20/month.
        - LCUs: 10 × $0.008 × 24 × 30 = $57.60/month.
        - Total: ~$73.80/month (excl. data transfer).
- **Free Tier**: None.

### **Cost Strategies**

- **Right-Sizing**:
    - Use ALB for HTTP, NLB for TCP/UDP, avoid CLB for new apps.
    - Minimize target groups and rules to reduce LCUs.
    - **Explanation**: E.g., consolidate ALB rules for microservices.
- **Cross-Zone Load Balancing**:
    - Disable for NLB if targets are evenly distributed to avoid inter-AZ costs.
    - **Explanation**: E.g., disable NLB cross-zone for balanced EC2.
- **Internal Load Balancers**:
    - Use internal ELB for private workloads to avoid DTO costs.
    - **Explanation**: E.g., internal ALB for backend services.
- **Tagging**:
    - Use cost allocation tags to track ELB costs.
    - **Explanation**: E.g., tag ALB with “Project:WebApp”.
- **Monitor Usage**:
    - Use CloudWatch to optimize LCU usage (e.g., reduce rules, connections).
    - **Explanation**: E.g., scale down targets if RequestCount is low.

### **Key Notes**:

- **Cost Savings**: ALB/NLB + internal + minimal cross-zone = lower costs.
- **Exam Tip**: Calculate LCU costs for ALB vs. NLB scenarios.

---

### **6. ELB Advanced Features**

### **ALB Features**:

- **Sticky Sessions**:
    - Bind user to target using cookies (duration-based or app-based).
    - **Explanation**: E.g., maintain session for e-commerce cart.
- **WebSocket/gRPC**:
    - Supports long-lived connections and gRPC protocols.
    - **Explanation**: E.g., WebSocket for real-time chat.
- **Dual-Stack IPv4/IPv6**:
    - Native IPv6 support for HTTP/HTTPS listeners.
    - **Explanation**: E.g., serve IPv6 clients without NAT64.
- **Lambda Targets**:
    - Route HTTP requests to serverless functions.
    - **Explanation**: E.g., ALB routes /api to Lambda.

### **NLB Features**:

- **Static IPs/Elastic IPs**:
    - Predictable IPs for whitelisting or IoT.
    - **Explanation**: E.g., Elastic IP for NLB in firewall rules.
- **Preserve Source IP**:
    - Optional, sends client IP to targets (disables for cross-zone).
    - **Explanation**: E.g., preserve IP for logging client requests.
- **TLS Termination/Passthrough**:
    - Terminate TLS or pass to targets for end-to-end encryption.
    - **Explanation**: E.g., passthrough TLS for app-level encryption.

### **GWLB Features**:

- **GENEVE Protocol**:
    - Encapsulates IP packets for third-party appliances.
    - **Explanation**: E.g., route traffic to Palo Alto firewall.
- **VPC Endpoint Service**:
    - Simplified integration with security appliances via endpoints.
    - **Explanation**: E.g., GWLB endpoint for firewall in separate VPC.
- **Transparent Mode**:
    - Preserves original source/destination IPs for inspection.
    - **Explanation**: E.g., inspect traffic without NAT.

### **CLB Features (Legacy)**:

- **Basic Load Balancing**:
    - Supports HTTP/HTTPS (Layer 7) and TCP/SSL (Layer 4).
    - Limited features compared to ALB/NLB.
- **Explanation**: E.g., CLB for old apps, migrate to ALB/NLB.

### **Key Notes**:

- **Flexibility**: ALB for HTTP features, NLB for performance, GWLB for security.
- **Exam Tip**: Know ALB WebSocket/Lambda, NLB static IP, GWLB GENEVE.

---

### **7. ELB Use Cases**

Understand practical applications.

### **Web Applications**

- **Setup**: ALB, HTTP/HTTPS listeners, EC2 target groups.
- **Features**: Path-based routing, WAF, sticky sessions.
- **Explanation**: E.g., ALB for e-commerce site with /cart to EC2.

### **Real-Time Applications**

- **Setup**: NLB, TCP/UDP listeners, static IPs.
- **Features**: Ultra-low latency, high throughput.
- **Explanation**: E.g., NLB for gaming server with UDP traffic.

### **Security Inspection**

- **Setup**: GWLB, GENEVE, third-party appliance targets.
- **Features**: Transparent mode, VPC endpoints.
- **Explanation**: E.g., GWLB routes traffic to Check Point firewall.

### **Serverless Applications**

- **Setup**: ALB, Lambda target group.
- **Features**: HTTP to serverless routing.
- **Explanation**: E.g., ALB routes /api to Lambda for processing.

---

### **8. ELB vs. Other Services**

| **Feature** | **ELB (ALB/NLB/GWLB)** | **Route 53** | **Global Accelerator** |
| --- | --- | --- | --- |
| **Type** | Load Balancing | DNS | Global Traffic Routing |
| **Layer** | L3 (GWLB), L4 (NLB), L7 (ALB) | Application (DNS) | Network/Application |
| **Workload** | VPC-based apps | Domain routing | Global performance |
| **Performance** | Scalable, AZ-based | DNS resolution | Edge routing, static IPs |
| **Cost** | $0.013–$0.025/hour, LCUs | $0.50/zone, $0.40/M queries | $0.025/hour, $0.01/GB |
| **Use Case** | Web, real-time, security | DNS failover, routing | Global app acceleration |

### **Explanation**:

- **ELB**: Distributes traffic within a Region to VPC targets.
- **Route 53**: DNS-based routing, failover, or multi-Region.
- **Global Accelerator**: Global traffic optimization with edge routing.

---

### **9. Detailed Explanations for Mastery**

- **ALB Dual-Stack**:
    - **Example**: Enable IPv6 for ALB to serve global clients.
    - **Why It Matters**: New feature, supports modern networks.
- **GWLB VPC Endpoints**:
    - **Example**: Route traffic to firewall in separate VPC via endpoint.
    - **Why It Matters**: Security integration—exam favorite.
- **NLB Static IPs**:
    - **Example**: Use Elastic IP for NLB to whitelist in firewall.
    - **Why It Matters**: Predictable connectivity—common scenario.

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| ALB | Layer 7 load balancing | HTTP/HTTPS, path/host routing, WAF | Core Concept |
| NLB | Layer 4 load balancing | TCP/UDP/TLS, static IPs, low latency | Core Concept |
| GWLB | Layer 3 security | GENEVE, third-party appliances | Core Concept |
| Cross-Zone LB | Even distribution | Default (ALB/GWLB), optional (NLB) | Resilience, Cost |
| Health Checks | Target health | HTTP (ALB), TCP/HTTP (NLB/GWLB) | Resilience |
| TLS/WAF | Security | ACM for TLS, WAF for ALB | Security |
| Dual-Stack (ALB) | IPv6 support | Native IPv4/IPv6 for HTTP/HTTPS | Flexibility |
| Static IPs (NLB) | Predictable connectivity | One IP per AZ or Elastic IP | Performance |