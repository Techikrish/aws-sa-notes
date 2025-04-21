# global accelerator

### **Amazon Global Accelerator Overview**

- **Definition**: Amazon Global Accelerator is a networking service that improves the performance and availability of applications by routing user traffic through AWS’s global network infrastructure.
- **Key Concepts**:
    - **Static IP Addresses**: Two fixed Anycast IPs for your application.
    - **Edge Locations**: Leverages AWS’s 300+ global edge locations.
    - **Accelerators**: Configurations that route traffic to endpoints.
- **Use Cases**: Low-latency global apps, gaming, real-time communications, disaster recovery.

---

### **1. How Global Accelerator Works**

### **Core Mechanism**

- **Purpose**: Routes traffic over AWS’s private, congestion-free network instead of the public internet.
- **How It Works**:
    1. Users connect to one of two static Anycast IPs (same IPs advertised from all edge locations).
    2. Traffic enters AWS’s global network at the nearest edge location.
    3. Global Accelerator directs traffic to the optimal endpoint (e.g., ALB, NLB, EC2) based on health, location, and routing policies.
- **Explanation**: Unlike CloudFront (content caching), Global Accelerator optimizes TCP/UDP traffic paths for applications.

### **Comparison with Public Internet**

- **Public Internet**: Unpredictable latency, packet loss due to congestion.
- **Global Accelerator**: Consistent performance via AWS backbone, bypassing internet bottlenecks.
- **Explanation**: Think of it as a “VIP lane” for your app traffic.

### **Key Notes**:

- **Exam Relevance**: Understand it’s for latency-sensitive apps, not content delivery (CloudFront’s domain).
- **Mastery Tip**: Know the Anycast IP advantage—single entry point, global reach.

---

### **2. Global Accelerator Components**

### **Accelerators**

- **Purpose**: The main resource defining traffic routing.
- **Features**:
    - Assigns two static IPs.
    - Supports multiple listeners and endpoint groups.
- **Explanation**: Acts as the “control center” for your global traffic.

### **Listeners**

- **Purpose**: Define how traffic enters the accelerator.
- **Settings**:
    - **Protocol**: TCP or UDP.
    - **Port Range**: e.g., 80, 443, or custom (e.g., 3389 for RDP).
- **Explanation**: Listeners are protocol-specific—match to your app (e.g., TCP 80 for HTTP).

### **Endpoint Groups**

- **Purpose**: Group endpoints in a Region for traffic distribution.
- **Features**:
    - Assign weights (0-255) for traffic allocation.
    - Health checks to determine endpoint availability.
- **Explanation**: Allows regional failover or load balancing—e.g., 70% us-east-1, 30% eu-west-1.

### **Endpoints**

- **Supported Types**:
    - **Application Load Balancer (ALB)**: HTTP/HTTPS apps.
    - **Network Load Balancer (NLB)**: TCP/UDP apps.
    - **EC2 Instances**: Direct instance IPs.
    - **Elastic IP (EIP)**: Static public IPs.
- **Explanation**: Endpoints are your app’s backend—Global Accelerator routes to the healthiest.

### **Key Notes**:

- **Exam Relevance**: Know component hierarchy: Accelerator → Listener → Endpoint Group → Endpoint.
- **Mastery Tip**: Practice mapping a multi-region ALB setup.

---

### **3. Global Accelerator Performance Features**

Global Accelerator shines in high-performing architectures.

### **Optimized Routing**

- **Purpose**: Minimize latency and jitter.
- **How It Works**: Uses AWS’s global network, avoiding internet hops.
- **Explanation**: Routes to nearest healthy endpoint—e.g., user in Tokyo hits us-west-2 faster than direct.

### **Static IPs**

- **Purpose**: Simplify client configuration.
- **Features**: Two fixed IPs, no DNS changes needed post-failure.
- **Explanation**: Unlike DNS-based solutions (Route 53), IPs stay constant—ideal for whitelisting.

### **Traffic Dial**

- **Purpose**: Fine-tune traffic distribution.
- **How It Works**: Percentage (0-100%) of traffic sent to an endpoint group.
- **Explanation**: Gradual rollout—e.g., 10% to new region during testing.

### **Key Notes**:

- **Performance**: Faster, more reliable than public internet.
- **Exam Tip**: Compare with CloudFront (caching) vs. Global Accelerator (routing).

---

### **4. Global Accelerator Resilience Features**

Resilience is a key strength for multi-region apps.

### **Multi-Region Failover**

- **Purpose**: Ensure availability across Regions.
- **How It Works**: Health checks monitor endpoints; traffic shifts to healthy Regions.
- **Explanation**: If us-east-1 fails, traffic auto-routes to eu-west-1—no manual intervention.

### **Health Checks**

- **Purpose**: Detect endpoint failures.
- **Settings**: Interval, threshold, protocol (TCP/HTTP).
- **Explanation**: Customizable—e.g., mark endpoint unhealthy after 3 failed checks.

### **Anycast IPs**

- **Purpose**: Built-in redundancy.
- **Explanation**: If an edge location fails, traffic shifts to another—users don’t notice.

### **Key Notes**:

- **Resilience**: Multi-Region + health checks = high availability.
- **Exam Tip**: Design failover for an ALB across two Regions.

---

### **5. Global Accelerator Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **DDoS Protection**

- **Purpose**: Mitigate attacks at the edge.
- **Features**: AWS Shield Standard included (free); Shield Advanced optional.
- **Explanation**: Absorbs DDoS traffic before it hits your app.

### **Encryption**

- **In Transit**: Client-to-edge encrypted if app uses TLS (e.g., ALB with HTTPS).
- **Explanation**: Global Accelerator doesn’t terminate TLS—security depends on endpoint config.

### **IAM Policies**

- **Purpose**: Control access to accelerators.
- **Explanation**: Restrict who can create/modify accelerators—e.g., limit to admins.

### **Key Notes**:

- **Security**: Shield + endpoint TLS = robust protection.
- **Exam Tip**: Know Shield Standard is automatic with Global Accelerator.

---

### **6. Global Accelerator Cost Optimization**

Cost efficiency is critical for SAA-C03.

### **Pricing**

- **Components**:
    - **Fixed Fee**: $0.025/hour per accelerator (~$18/month).
    - **Data Transfer Premium**: $0.01-$0.025/GB (varies by region).
- **Explanation**: Fixed cost for IPs, variable for traffic—higher than standard AWS egress.

### **Cost Strategies**

- **Traffic Dial**: Limit traffic to expensive regions during testing.
- **Endpoint Selection**: Use nearby Regions to reduce data transfer.
- **Explanation**: Optimize endpoint placement—e.g., us-east-1 over ap-southeast-1 for U.S. users.

### **Key Notes**:

- **Cost Savings**: Balance performance vs. cost—don’t over-provision.
- **Exam Tip**: Calculate cost for a global app with/without Global Accelerator.

---

### **7. Global Accelerator Use Cases**

Understand practical applications.

### **Low-Latency Applications**

- **Setup**: Global Accelerator → NLB → EC2.
- **Features**: Optimized TCP/UDP paths.
- **Explanation**: Gaming, VoIP—reduces jitter/latency.

### **Multi-Region High Availability**

- **Setup**: Accelerator → ALBs in us-east-1, eu-west-1.
- **Features**: Failover to healthy Region.
- **Explanation**: E-commerce, critical apps—survives regional outages.

### **Static IP Requirements**

- **Setup**: Accelerator → EIP on EC2.
- **Features**: Fixed IPs for whitelisting.
- **Explanation**: Legacy clients needing consistent IPs.

---

### **8. Global Accelerator vs. CloudFront**

| **Feature** | **Global Accelerator** | **CloudFront** |
| --- | --- | --- |
| **Purpose** | Traffic routing | Content caching |
| **Protocols** | TCP, UDP | HTTP, HTTPS |
| **Use Case** | Low-latency apps | Static/dynamic content |
| **IPs** | Static Anycast | Dynamic (DNS-based) |
| **Caching** | No | Yes |
| **Edge Processing** | No (health-based routing) | Yes (Lambda@Edge) |

### **Explanation**:

- **Global Accelerator**: Best for non-HTTP apps needing speed/HA (e.g., UDP gaming).
- **CloudFront**: Best for HTTP content delivery (e.g., S3 websites).

---

### **Detailed Explanations for Mastery**

- **Health Checks**:
    - **Example**: HTTP check on /health, 10-second interval, 3 failures = unhealthy.
    - **Why It Matters**: Drives failover—misconfigure, and traffic won’t shift.
- **Traffic Dial**:
    - **Example**: 90% us-east-1, 10% eu-west-1 during rollout.
    - **Why It Matters**: Gradual migration—key for zero-downtime updates.
- **Anycast IPs**:
    - **Example**: Client in Asia hits same IP as U.S., routed optimally.
    - **Why It Matters**: Simplifies DNS—no latency-based records needed.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Accelerators | Traffic entry | Two static IPs | Core Concept |
| Listeners | Protocol handling | TCP/UDP, port ranges | Performance |
| Endpoint Groups | Regional routing | Weights, health checks | Resilience, Performance |
| Endpoints | Backend targets | ALB, NLB, EC2, EIP | Resilience |
| Optimized Routing | Low latency | AWS global network | Performance |
| Failover | High availability | Multi-Region, health-based | Resilience |
| DDoS Protection | Security | Shield Standard included | Security |
| Traffic Dial | Control distribution | Percentage-based routing | Cost, Performance |