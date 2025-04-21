# Amazon Inspector

### **Amazon Inspector Overview**

- **Definition**: Amazon Inspector is a managed vulnerability assessment service that automatically scans AWS workloads (EC2 instances, container images in ECR, and Lambda functions) for software vulnerabilities and network exposure.
- **Key Features**:
    - Scans for Common Vulnerabilities and Exposures (CVEs), misconfigurations, and network reachability issues.
    - Generates prioritized findings based on severity and exploitability.
    - Integrates with Security Hub, EventBridge, and Lambda for remediation and monitoring.
    - Supports continuous or on-demand scanning.
- **Use Cases**: Identify vulnerabilities in EC2, secure container images, assess Lambda functions, ensure compliance.
- **Key Updates (2024–2025)**:
    - Enhanced Lambda function scanning for code vulnerabilities (October 2024).
    - Improved network exposure analysis for EC2 (March 2024).
    - Integration with AWS Security Hub for cross-account findings (January 2025).

---

### **1. Core Concepts**

- **Scans**:
    - **Software Vulnerabilities**: Checks EC2, ECR images, and Lambda for CVEs (e.g., outdated libraries).
    - **Network Reachability**: Identifies open ports or unintended network access on EC2.
    - **Example**: Scan EC2 for unpatched Apache vulnerability.
- **Findings**:
    - Alerts for vulnerabilities or exposures, prioritized by severity (critical, high, medium, low).
    - Includes remediation steps and CVSS scores.
    - **Example**: Finding for open SSH port on EC2 instance.
- **Assessment Targets**:
    - Resources to scan (e.g., EC2 instances by tag, ECR repositories, Lambda functions).
    - **Example**: Scan all EC2 instances tagged “Production=True”.
- **Rules Packages**:
    - Predefined or custom rules for vulnerability checks (e.g., CVE database, CIS benchmarks).
    - **Example**: Apply CVE rules to detect Log4j vulnerability.

---

### **2. Performance**

- **Low Latency**: Near-real-time findings for continuous scans.
- **High Throughput**: Scans thousands of EC2 instances, containers, or Lambda functions.
- **Scalability**: Scales with workload size across accounts via AWS Organizations.
- **Example**: Scans 1,000 EC2 instances in minutes.

---

### **3. Resilience**

- **Multi-Region**: Enable Inspector per Region for coverage.
- **Continuous Scanning**: Runs 24/7 for new resources or vulnerabilities.
- **Monitoring**: Findings in Security Hub, EventBridge notifications, CloudWatch metrics.
- **Example**: Detects new vulnerability during us-east-1 outage.

---

### **4. Security**

- **Vulnerability Assessment**: Identifies CVEs, misconfigurations, and network exposures.
- **Automation**: EventBridge triggers Lambda for remediation (e.g., patch EC2 instance).
- **Encryption**: Scans encrypted resources; findings encrypted with KMS.
- **Compliance**: HIPAA, PCI, GDPR, ISO, SOC, FIPS 140-2 (GovCloud).
- **Example**: Lambda closes open port after Inspector finding.
- **Integration**: Security Hub for centralized findings, EC2/ECR/Lambda for scanning, IAM for access control.

---

### **5. Cost Optimization**

- **Pricing**:
    - **EC2**: $0.0012/instance/hour scanned.
    - **ECR**: $0.09/image scanned.
    - **Lambda**: $0.0006/function/hour scanned.
    - **Example**: 10 EC2 instances (720 hours), 5 ECR images = (10 × 720 × $0.0012) + (5 × $0.09) = $9.09/month.
- **Strategies**:
    - Scan critical resources only (use tags like “Env=Prod”).
    - Schedule on-demand scans for non-production.
    - Tag resources for cost tracking (e.g., “Project:Security”).
- **Free Tier**: 90-day trial for limited scans.

---

### **6. Advanced Features**

- **Lambda Scanning**: Assesses function code and dependencies (new 2024).
- **Network Exposure Analysis**: Enhanced EC2 port scanning (new 2024).
- **Cross-Account Findings**: Centralized via Security Hub (new 2025).
- **Continuous Scanning**: Auto-detects new resources for scanning.
- **Example**: Lambda patches vulnerable Python library after Inspector finding.

---

### **7. Use Cases**

- **EC2 Security**: Detect unpatched software or open ports.
- **Container Security**: Scan ECR images for CVEs before deployment.
- **Lambda Security**: Identify vulnerable dependencies in functions.
- **Compliance**: Ensure PCI compliance for production workloads.

---

### **8. Comparison**

| **Feature** | **Inspector** | **GuardDuty** | **Macie** |
| --- | --- | --- | --- |
| **Type** | Vulnerability Assessment | Threat Detection | Data Security |
| **Focus** | CVEs, network exposure | Account/workload threats | S3 sensitive data |
| **Use Case** | EC2/ECR/Lambda security | Malware, unauthorized access | PII detection |
| **Cost** | $0.0012/instance/hour | $0.25/500K events | $1/GB scanned |