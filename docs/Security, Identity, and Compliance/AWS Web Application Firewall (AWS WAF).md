# AWS Web Application Firewall (AWS WAF)

### **AWS Web Application Firewall (AWS WAF) Overview**

- **Definition**: AWS WAF is a managed web application firewall that protects web applications and APIs from common web exploits, bots, and DDoS attacks by filtering HTTP/HTTPS traffic at the application layer (Layer 7).
- **Key Features**:
    - Creates customizable rules and web access control lists (web ACLs) to allow, block, or monitor requests based on conditions like IP addresses, headers, or payloads.
    - Protects against SQL injection, cross-site scripting (XSS), malicious bots, and Layer 7 DDoS attacks.
    - Integrates with CloudFront, ALB, API Gateway, and AppSync for global and Regional protection.
    - Offers managed rules, bot control, real-time monitoring via CloudWatch, and logging for analytics.
- **Use Cases**: Secure public websites, protect APIs from abuse, block malicious IPs, prevent bot-driven fraud, mitigate application-layer DDoS.
- **Key Updates (2024–2025)**:
    - **Enhanced Bot Protection**: Advanced CAPTCHA and challenge controls for bot detection (October 2024).
    - **Improved Logging and Metrics**: Real-time visibility with CloudWatch and WAF logs (March 2024).
    - **Integration with AWS Firewall Manager**: Simplified multi-account and multi-resource management (January 2025).
    - **FIPS 140-2 Compliance**: Enhanced for AWS GovCloud (October 2024).

---

### **1. WAF Core Concepts**

### **Components**

- **Web Access Control List (Web ACL)**:
    - A collection of rules that define how to inspect and handle incoming web requests.
    - Associated with AWS resources like CloudFront (global), ALB, API Gateway, or AppSync (Regional).
    - Configurable capacity units (WCUs) limit rule complexity (default 1,500 WCUs).
    - **Explanation**: E.g., a web ACL for CloudFront blocks requests from a specific IP range.
- **Rules**:
    - Define conditions to match requests (e.g., IP, headers, URI, SQL injection, XSS) and actions to take (allow, block, count, CAPTCHA).
    - Types:
        - **Custom Rules**: User-defined conditions and actions.
        - **Managed Rules**: Pre-configured by AWS or partners (e.g., OWASP Top 10, bot protection).
    - Prioritized evaluation (lower priority number evaluated first).
    - **Explanation**: E.g., a rule blocks requests containing “<script>” to prevent XSS.
- **Actions**:
    - **Allow**: Permits the request to proceed.
    - **Block**: Denies the request (returns HTTP 403).
    - **Count**: Logs the request for monitoring without affecting traffic.
    - **CAPTCHA**: Presents a CAPTCHA to verify human users.
    - **Challenge**: Silent challenge for bot detection (e.g., JavaScript validation).
    - **Explanation**: E.g., count requests from an IP before applying a block action.
- **Rate-Based Rules**:
    - Limit requests from a single IP within a 5-minute window (e.g., 2,000 requests).
    - Useful for mitigating brute-force or Layer 7 DDoS attacks.
    - **Explanation**: E.g., block IPs exceeding 1,000 API requests per minute.
- **Bot Control**:
    - A managed rule group to detect and block automated bot traffic (e.g., scrapers, credential stuffing).
    - Includes advanced CAPTCHA and challenge mechanisms (new 2024).
    - **Explanation**: E.g., block bots attempting account takeovers with CAPTCHA.

### **Key Concepts**

- **Conditions**:
    - Criteria to match requests, such as:
        - **IP Match**: Source IP or CIDR range.
        - **Geo Match**: Country or region of origin.
        - **String Match**: Headers, URI, query string, or body.
        - **Regex Match**: Complex patterns for payloads.
        - **SQL Injection/XSS**: Detect malicious code.
    - **Explanation**: E.g., block requests from IP 192.168.1.1 or with SQL injection patterns.
- **Web ACL Capacity Units (WCUs)**:
    - Measure rule complexity; each rule consumes WCUs based on conditions and actions.
    - Maximum 1,500 WCUs per web ACL (adjustable via AWS Support).
    - **Explanation**: E.g., a regex rule consumes more WCUs than an IP match.
- **Logging**:
    - Sends detailed request logs to Amazon S3, Kinesis Data Firehose, or CloudWatch Logs.
    - Includes matched rules, actions, and request details.
    - **Explanation**: E.g., log blocked requests to S3 for forensic analysis.
- **Managed Rules**:
    - Pre-built rule groups from AWS or Marketplace partners (e.g., OWASP Top 10, IP reputation, bot protection).
    - Reduce setup time and maintenance.
    - **Explanation**: E.g., deploy AWS Managed Rules for OWASP to protect against SQL injection.

### **Key Notes**:

- **Exam Relevance**: Understand web ACLs, rules, actions, bot control, and integrations.
- **Mastery Tip**: Compare WAF vs. AWS Shield vs. Network Firewall for security scenarios.

---

### **2. WAF Performance Features**

AWS WAF optimizes web application protection.

### **Low Latency**

- **Purpose**: Minimize delay in request processing.
- **Features**:
    - Runs at CloudFront edge locations (global) or in-Region (ALB, API Gateway), reducing latency.
    - Optimized rule evaluation for minimal overhead.
- **Explanation**: E.g., WAF on CloudFront blocks malicious requests at the nearest edge location in <10 ms.
- **Exam Tip**: Use CloudFront WAF for global, low-latency protection.

### **High Throughput**

- **Purpose**: Handle high request volumes.
- **Features**:
    - Scales to millions of HTTP/HTTPS requests per second.
    - Integrates with scalable services like CloudFront and ALB.
- **Explanation**: E.g., processes 100,000 requests/second for a public website during a traffic spike.
- **Exam Tip**: Highlight WAF’s ability to handle high-traffic apps.

### **Scalability**

- **Purpose**: Support growing workloads.
- **Features**:
    - Auto-scales with traffic volume, no manual intervention needed.
    - Managed rules reduce configuration complexity for large deployments.
- **Explanation**: E.g., scales seamlessly for Black Friday traffic on an e-commerce site.
- **Exam Tip**: Use managed rules for scalable WAF deployments.

### **Bot Control Performance**:

- **Purpose**: Efficient bot mitigation.
- **Features**:
    - Lightweight CAPTCHA and challenge mechanisms minimize user impact (new 2024).
    - Scales to block millions of bot requests.
- **Explanation**: E.g., blocks 10,000 bot requests/second with CAPTCHA.
- **Exam Tip**: Know bot control for high-traffic, bot-heavy apps.

### **Key Notes**:

- **Performance**: Edge-based filtering + auto-scaling + optimized rules = high-performance protection.
- **Exam Tip**: Emphasize WAF for low-latency, scalable web security.

---

### **3. WAF Resilience Features**

Resilience ensures reliable web protection.

### **Multi-AZ and Edge Deployment**

- **Purpose**: Survive AZ or Regional failures.
- **Features**:
    - CloudFront WAF runs at global edge locations, unaffected by Regional outages.
    - Regional WAF (ALB, API Gateway) operates across multiple AZs by default.
- **Explanation**: E.g., WAF on CloudFront continues filtering if us-east-1a fails.
- **Exam Tip**: Use CloudFront WAF for global resilience.

### **Automatic Failover**:

- **Purpose**: Maintain protection during issues.
- **Features**:
    - Integrates with highly available services (CloudFront, ALB).
    - Rules failover to other edge locations or AZs automatically.
- **Explanation**: E.g., WAF on ALB shifts to us-east-1b if us-east-1a fails.
- **Exam Tip**: Highlight WAF’s integration with HA services.

### **Monitoring and Recovery**:

- **Purpose**: Detect and respond to issues.
- **Features**:
    - CloudWatch metrics: AllowedRequests, BlockedRequests, CountedRequests (enhanced 2024).
    - WAF logs to S3, Kinesis, or CloudWatch for detailed analysis.
    - Alarms for high block rates or suspicious traffic.
    - **Explanation**: E.g., set alarm if BlockedRequests > 1,000/minute for 5 minutes.
- **Exam Tip**: Use CloudWatch and WAF logs for resilience.

### **Firewall Manager Integration**:

- **Purpose**: Centralized management.
- **Features**:
    - Manages WAF rules across multiple accounts and resources (new 2025).
    - Ensures consistent protection during account changes.
- **Explanation**: E.g., apply OWASP rules to 10 accounts via Firewall Manager.
- **Exam Tip**: Know Firewall Manager for multi-account resilience.

### **Key Notes**:

- **Resilience**: Edge deployment + auto-failover + monitoring + Firewall Manager = reliable protection.
- **Exam Tip**: Design resilient WAF with CloudFront and Firewall Manager.

---

### **4. WAF Security Features**

Security is the core focus of WAF for SAA-C03.

### **Access Control**

- **Rules and Conditions**:
    - Filter requests by IP, geo-location, headers, URI, query string, or payloads.
    - Support for SQL injection, XSS, and regex-based matching.
    - **Explanation**: E.g., block requests with “UNION SELECT” to prevent SQL injection.
- **IAM Policies**:
    - Control WAF management (e.g., wafv2:CreateWebACL, wafv2:UpdateRule).
    - **Example**: {"Effect": "Allow", "Action": "wafv2:CreateWebACL", "Resource": "*"}.
- **Bot Control**:
    - Detects and blocks bots (e.g., scrapers, credential stuffing) with CAPTCHA/challenges (new 2024).
    - **Explanation**: E.g., block bots attempting login abuse with CAPTCHA.
- **Exam Tip**: Practice rule creation for OWASP Top 10 and bot protection.

### **Protection**

- **Common Exploits**:
    - Blocks SQL injection, XSS, command injection, and malicious payloads.
    - **Explanation**: E.g., block <script>alert('xss')</script> in form submissions.
- **Layer 7 DDoS**:
    - Rate-based rules mitigate HTTP floods and brute-force attacks.
    - **Explanation**: E.g., block IPs sending >2,000 requests/5 minutes.
- **Bot Mitigation**:
    - Managed bot control rules detect crawlers, scanners, and fraud bots.
    - **Explanation**: E.g., block automated checkout bots on e-commerce site.
- **Exam Tip**: Combine rate-based rules and bot control for DDoS protection.

### **Encryption**

- **In Transit**:
    - WAF processes HTTPS traffic; integrates with services using TLS.
    - **Explanation**: E.g., WAF protects CloudFront HTTPS distribution.
- **At Rest**:
    - WAF logs encrypted in S3 with KMS keys.
    - **Explanation**: E.g., use KMS to encrypt WAF logs in S3 bucket.
- **Exam Tip**: Ensure HTTPS and KMS for compliance.

### **Compliance**

- **Certifications**: HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
- **Explanation**: E.g., deploy WAF for PCI-compliant web application.

### **Key Notes**:

- **Security**: Rules + bot control + encryption + IAM = robust web protection.
- **Exam Tip**: Configure WAF for SQL injection, XSS, and bot mitigation.

---

### **5. WAF Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Web ACL**: $5.00/month (prorated).
- **Rule**: $1.00/month per rule (prorated).
- **Requests**: $0.60/million requests.
- **Bot Control**: Additional $10.00/month per web ACL.
- **Logging**: S3 storage or Kinesis Data Firehose costs apply.
- **Example**:
    - 1 web ACL, 10 rules, 10 million requests, bot control:
        - Web ACL: $5.00.
        - Rules: 10 × $1.00 = $10.00.
        - Requests: 10M × $0.60/1M = $6.00.
        - Bot Control: $10.00.
        - Total: $31.00/month.
    - Add logging to S3: ~$0.23/GB (standard storage).
- **Free Tier**: None.

### **Cost Strategies**

- **Use Managed Rules**:
    - AWS or Marketplace managed rules reduce custom rule costs.
    - **Explanation**: E.g., use AWS Managed OWASP rules to save $5/month on 5 custom rules.
- **Optimize Rules**:
    - Combine conditions into fewer rules to reduce WCU and costs.
    - **Explanation**: E.g., merge IP and geo-match into one rule.
- **Limit Requests with Rate-Based Rules**:
    - Block excessive requests to reduce request charges.
    - **Explanation**: E.g., block IPs exceeding 1,000 requests/minute to save $0.60/million.
- **Selective Bot Control**:
    - Enable bot control only for high-risk resources (e.g., login pages).
    - **Explanation**: E.g., skip bot control on static content to save $10/month.
- **Minimize Logging**:
    - Log only blocked or critical requests to reduce S3/Kinesis costs.
    - **Explanation**: E.g., log only blocked requests to save $0.10/GB.
- **Tagging**:
    - Use cost allocation tags to track WAF costs.
    - **Explanation**: E.g., tag web ACL with “Project:WebApp”.
- **Monitor Usage**:
    - Use CloudWatch to optimize rule and request costs.
    - **Explanation**: E.g., remove unused rule if BlockedRequests = 0.

### **Key Notes**:

- **Cost Savings**: Managed rules + optimized rules + selective logging = lower costs.
- **Exam Tip**: Calculate costs for web ACLs, rules, requests, and bot control.

---

### **6. WAF Advanced Features**

### **Enhanced Bot Control**:

- **Purpose**: Block sophisticated bots.
- **Features**:
    - Advanced CAPTCHA and silent challenges (e.g., JavaScript, browser fingerprinting) (new 2024).
    - Detects crawlers, scanners, and fraud bots.
- **Explanation**: E.g., block checkout bots with CAPTCHA on e-commerce site.
- **Exam Tip**: Know bot control for fraud prevention.

### **Managed Rules**:

- **Purpose**: Simplify configuration.
- **Features**:
    - Pre-configured rule groups for OWASP Top 10, IP reputation, bot protection, and fraud prevention.
    - Provided by AWS, F5, Fortinet, and others via AWS Marketplace.
- **Explanation**: E.g., deploy AWS Managed Rules for OWASP in 5 minutes.
- **Exam Tip**: Use managed rules for rapid deployment.

### **AWS Firewall Manager Integration**:

- **Purpose**: Centralized management.
- **Features**:
    - Manages WAF rules across multiple accounts, Regions, and resources (new 2025).
    - Enforces consistent policies via AWS Organizations.
- **Explanation**: E.g., apply OWASP rules to 10 CloudFront distributions.
- **Exam Tip**: Know Firewall Manager for enterprise scenarios.

### **Real-Time Monitoring**:

- **Purpose**: Immediate threat visibility.
- **Features**:
    - Enhanced CloudWatch metrics (AllowedRequests, BlockedRequests) (new 2024).
    - WAF logs for detailed request analysis.
- **Explanation**: E.g., monitor BlockedRequests in real-time with CloudWatch Dashboard.
- **Exam Tip**: Use CloudWatch and logs for troubleshooting.

### **Integration with GuardDuty**:

- **Purpose**: Automated threat response.
- **Features**:
    - GuardDuty findings trigger WAF rule updates via EventBridge and Lambda (new 2024).
- **Explanation**: E.g., Lambda adds malicious IP to WAF IP set after GuardDuty alert.
- **Exam Tip**: Know WAF-GuardDuty integration for automation.

### **Key Notes**:

- **Flexibility**: Bot control + managed rules + Firewall Manager = advanced protection.
- **Exam Tip**: Know bot control, Firewall Manager, and GuardDuty integration for modern apps.

---

### **7. WAF Use Cases**

Understand practical applications.

### **Public Website Protection**

- **Setup**: WAF on CloudFront with OWASP managed rules.
- **Features**: Blocks SQL injection, XSS, and malicious payloads.
- **Explanation**: E.g., protect e-commerce site from XSS attacks.

### **API Security**

- **Setup**: WAF on API Gateway with rate-based rules.
- **Features**: Limits abusive requests, blocks bots.
- **Explanation**: E.g., block IPs sending >1,000 API calls/minute.

### **Bot Mitigation**

- **Setup**: WAF bot control on ALB for login pages.
- **Features**: Uses CAPTCHA to block credential stuffing.
- **Explanation**: E.g., prevent bot-driven account takeovers.

### **Multi-Account Management**

- **Setup**: WAF with Firewall Manager for 10 accounts.
- **Features**: Centralized rule enforcement.
- **Explanation**: E.g., apply IP reputation rules across all accounts.

---

### **8. WAF vs. Other Security Services**

| **Feature** | **AWS WAF** | **AWS Shield** | **Network Firewall** |
| --- | --- | --- | --- |
| **Type** | Web Application Firewall | DDoS Protection | Network Firewall |
| **Layer** | Application (Layer 7) | Network/Transport/Application | Network (Layers 3/4) |
| **Protection** | SQL injection, XSS, bots | DDoS (SYN, UDP, HTTP) | Packet filtering, IDS/IPS |
| **Integration** | CloudFront, ALB, API Gateway | CloudFront, ELB, EC2 | VPC, Transit Gateway |
| **Cost** | $5/ACL, $1/rule, $0.60/M | Free (Standard), $3,000/mo (Advanced) | $0.395/hour, $0.026/GB |
| **Use Case** | Secure website, API | Prevent DDoS | VPC traffic control |

### **Explanation**:

- **WAF**: Protects web apps/APIs from Layer 7 exploits and bots.
- **Shield**: Mitigates DDoS attacks at Layers 3/4/7.
- **Network Firewall**: Filters VPC traffic at Layers 3/4 with intrusion detection.

---

### **9. Detailed Explanations for Mastery**

- **Enhanced Bot Control**:
    - **Example**: Block scraper bots with CAPTCHA on CloudFront login page.
    - **Why It Matters**: Reduces fraud and abuse—new for 2024.
- **Firewall Manager**:
    - **Example**: Apply OWASP rules to 10 ALBs across accounts.
    - **Why It Matters**: Simplifies multi-account management—new for 2025.
- **GuardDuty Integration**:
    - **Example**: Auto-block malicious IP in WAF after GuardDuty finding.
    - **Why It Matters**: Enables automation—new for 2024.

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Web ACL | Filter web traffic | Rules, actions, WCUs (1,500 max) | Core Concept |
| Rules/Actions | Define conditions | Allow, block, count, CAPTCHA | Core Concept |
| Bot Control | Block automated traffic | CAPTCHA, challenges (2024) | Security, Performance |
| Rate-Based Rules | Mitigate DDoS | Limit requests/IP (e.g., 2,000/5m) | Security, Resilience |
| Managed Rules | Simplify configuration | OWASP, IP reputation, bot protection | Flexibility |
| Firewall Manager | Multi-account management | Centralized rules (2025) | Resilience, Scalability |
| CloudWatch/Logs | Real-time monitoring | Metrics, detailed logs (2024) | Resilience, Performance |