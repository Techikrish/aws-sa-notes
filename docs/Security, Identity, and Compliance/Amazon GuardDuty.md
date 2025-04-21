# Amazon GuardDuty

### **Amazon GuardDuty Overview**

- **Definition**: Amazon GuardDuty is a managed threat detection service that continuously monitors AWS accounts, workloads, and data for malicious activity using machine learning and threat intelligence.
- **Key Features**:
    - Analyzes CloudTrail, VPC Flow Logs, S3 event logs, DNS logs, and EKS/Kubernetes events.
    - Detects unauthorized access, privilege escalation, malware, crypto-mining, and data exfiltration.
    - Integrates with EventBridge, Lambda, Security Hub, and WAF for automated remediation.
    - Provides findings with severity levels (low, medium, high).
- **Use Cases**: Detect account compromise, monitor network threats, protect S3 buckets, identify malware in workloads.
- **Key Updates (2024–2025)**:
    - Enhanced malware protection with EKS and S3 scanning (October 2024).
    - Improved EventBridge integration for automated WAF blocking (March 2024).
    - Cross-account threat analysis via Security Hub (January 2025).

---

### **1. Core Concepts**

- **Detectors**:
    - Enable monitoring for an AWS account and Region.
    - Analyze logs and events for threats.
    - **Example**: Detector flags unusual API calls in us-east-1.
- **Findings**:
    - Alerts for suspicious activity (e.g., brute-force SSH, crypto-mining, S3 data leaks).
    - Include severity, resource, and remediation steps.
    - **Example**: Finding for EC2 instance mining cryptocurrency.
- **Data Sources**:
    - CloudTrail (management/control plane), VPC Flow Logs, S3 logs, DNS logs, EKS audit logs.
    - **Example**: Detect unauthorized IAM role assumption from CloudTrail.
- **Malware Protection**:
    - Scans EBS volumes, EKS workloads, and S3 objects for malware (new 2024).
    - **Example**: Detect trojan in S3 bucket.
- **Trusted IP Lists**:
    - Whitelist IPs to reduce false positives.
    - **Example**: Whitelist company VPN IPs.

---

### **2. Performance**

- **Low Latency**: Near-real-time detection using machine learning.
- **High Throughput**: Analyzes billions of log events daily.
- **Scalability**: Scales across accounts, Regions, and workloads (EC2, S3, EKS).
- **Example**: Processes 1 million CloudTrail events/hour for 10 accounts.

---

### **3. Resilience**

- **Multi-Region**: Enable detectors per Region for comprehensive coverage.
- **Continuous Monitoring**: Runs 24/7, unaffected by workload failures.
- **Monitoring**: Findings in Security Hub, EventBridge notifications, CloudWatch metrics.
- **Example**: Detects threats during EC2 outage in us-east-1.

---

### **4. Security**

- **Threat Detection**: Identifies unauthorized access, malware, crypto-mining, and S3 data leaks.
- **Automation**: EventBridge triggers Lambda to block IPs via WAF (new 2024).
- **Encryption**: Analyzes encrypted logs; integrates with KMS-encrypted resources.
- **Compliance**: HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
- **Example**: Auto-block malicious IP with WAF after GuardDuty finding.
- **Integration**: Security Hub for centralized findings, Lambda for remediation.

---

### **5. Cost Optimization**

- **Pricing**:
    - Based on CloudTrail events, VPC Flow Logs, S3 logs, and malware scans.
    - ~$0.25/500,000 CloudTrail events, $1.00/GB VPC Flow Logs, $0.10/GB malware scans.
    - **Example**: 1M CloudTrail events, 1 GB VPC logs = (1M/500K × $0.25) + $1 = $1.50/month.
- **Strategies**:
    - Enable in critical Regions/accounts only.
    - Use trusted IP lists to reduce false positives.
    - Tag resources for cost tracking (e.g., “Project:Security”).
- **Free Tier**: 30-day trial.

---

### **6. Advanced Features**

- **Malware Protection**: Scans EKS, S3, EBS for malware (new 2024).
- **Automation**: EventBridge/Lambda for WAF IP blocking (new 2024).
- **Cross-Account Analysis**: Centralized findings via Security Hub (new 2025).
- **Threat Intelligence**: AWS and third-party feeds for accurate detection.
- **Example**: Lambda blocks IP in WAF after GuardDuty malware finding.

---

### **7. Use Cases**

- **Account Security**: Detect unauthorized IAM changes or EC2 crypto-mining.
- **S3 Protection**: Monitor for data exfiltration or malware.
- **Network Threats**: Identify brute-force SSH or RDP attacks.
- **EKS Security**: Detect malware in Kubernetes workloads.

---

### **8. Comparison**

| **Feature** | **GuardDuty** | **WAF** | **AWS Shield** |
| --- | --- | --- | --- |
| **Type** | Threat Detection | Web Firewall | DDoS Protection |
| **Focus** | Log analysis, malware | Layer 7 exploits, bots | DDoS (Layers 3/4/7) |
| **Use Case** | Detect account threats | Secure web apps | Prevent DDoS downtime |
| **Cost** | ~$0.25/500K events | $5/ACL, $0.60/M requests | Free/$3,000/mo |