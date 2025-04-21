# AWS Shield

### **AWS Shield Overview**

- **Definition**: AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards AWS resources against network (Layer 3), transport (Layer 4), and application (Layer 7) DDoS attacks.
- **Key Features**:
    - **Shield Standard**: Free, automatic protection for all AWS accounts.
    - **Shield Advanced**: Paid, enhanced protection with DDoS Response Team (DRT), cost protection, and advanced metrics.
    - Integrates with CloudFront, ALB, NLB, Elastic IP, Route 53, and Global Accelerator.
    - Works with AWS WAF for Layer 7 protection.
- **Use Cases**: Protect web applications, APIs, and infrastructure from DDoS, ensure uptime during attacks, mitigate billing spikes.
- **Key Updates (2024–2025)**:
    - Proactive engagement with Route 53 health checks (April 2024).
    - Enhanced metrics and alerts for Shield Advanced (October 2024).
    - Improved cost protection for usage spikes (January 2025).

---

### **1. Core Concepts**

- **Shield Standard**:
    - Free, automatic protection against common DDoS attacks (e.g., SYN/UDP floods, reflection attacks).
    - Covers all AWS resources (CloudFront, ALB, EC2, Route 53).
    - **Example**: Mitigates volumetric attack on CloudFront.
- **Shield Advanced**:
    - Paid ($3,000/month, 1-year commitment).
    - Protects against sophisticated DDoS attacks (Layers 3/4/7).
    - Includes DRT access, cost protection, WAF integration, and advanced metrics.
    - **Example**: DRT resolves Layer 7 HTTP flood on ALB.
- **DDoS Response Team (DRT)**:
    - Shield Advanced feature; provides expert assistance during attacks.
    - **Example**: DRT configures WAF rules to block attack.
- **Cost Protection**:
    - Shield Advanced refunds usage spikes during DDoS attacks (new 2025).
    - **Example**: Refund EC2 cost spike from attack traffic.

---

### **2. Performance**

- **Low Latency**: Inline mitigations at edge locations (CloudFront, Route 53).
- **High Throughput**: Handles massive attacks (e.g., terabits/second).
- **Scalability**: Auto-scales for Standard; Advanced scales with resources.
- **Example**: Mitigates 1 Tbps attack on CloudFront in seconds.

---

### **3. Resilience**

- **Multi-AZ/Edge**: Operates at edge and Regional resources, multi-AZ by default.
- **Automatic Mitigation**: Standard auto-mitigates; Advanced includes DRT.
- **Monitoring**: Advanced metrics, CloudWatch alerts (new 2024).
- **Example**: Continues protection if us-west-2a fails.

---

### **4. Security**

- **Protection**: Standard (Layer 3/4 DDoS); Advanced (Layers 3/4/7, WAF integration).
- **Proactive Engagement**: DRT monitors Route 53 health checks (new 2024).
- **Encryption**: Protects HTTPS traffic; integrates with KMS-encrypted resources.
- **Compliance**: HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
- **Example**: Block HTTP flood with WAF and Shield Advanced.
- **Integration**: WAF for Layer 7, Firewall Manager for multi-account.

---

### **5. Cost Optimization**

- **Pricing**:
    - **Standard**: Free.
    - **Advanced**: $3,000/month + data transfer (~$25–$50/TB).
    - **Example**: Advanced for 1 TB = $3,025/month.
- **Strategies**:
    - Use Standard for non-critical apps.
    - Limit Advanced to high-risk resources (e.g., public APIs).
    - Tag resources for cost tracking (e.g., “Project:Security”).
- **Free Tier**: Standard included.

---

### **6. Advanced Features**

- **Proactive Engagement**: DRT engages during health check failures (new 2024).
- **Cost Protection**: Refunds usage spikes (new 2025).
- **Advanced Metrics**: Detailed attack insights via CloudWatch (new 2024).
- **Example**: DRT resolves ALB outage in 10 minutes.

---

### **7. Use Cases**

- **Web Application Protection**: Mitigate DDoS on CloudFront site.
- **API Security**: Protect ALB-based APIs during attack.
- **Cost Protection**: Refund EC2 spike for public API.
- **High-Traffic Events**: Ensure uptime during product launch.

---

### **8. Comparison**

| **Feature** | **Shield** | **WAF** | **GuardDuty** |
| --- | --- | --- | --- |
| **Type** | DDoS Protection | Web Firewall | Threat Detection |
| **Layer** | Layers 3/4/7 | Layer 7 | N/A (Log Analysis) |
| **Use Case** | Prevent DDoS downtime | Secure web apps | Detect account threats |
| **Cost** | Free/$3,000/mo | $5/ACL, $0.60/M requests | $0.25/500K events |