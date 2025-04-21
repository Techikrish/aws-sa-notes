# Others

### **AWS Artifact**

- **Definition**: A self-service portal for on-demand access to AWS compliance reports and agreements.
- **Key Features**:
    - Provides SOC, PCI, HIPAA, ISO reports, and agreements like BAA and NDA.
    - Accessible via AWS Management Console or API, no additional cost.
    - Supports audit preparation and compliance validation.
- **Use Cases**: Obtain HIPAA report for healthcare, PCI report for retail, share with auditors.
- **Updates (2024–2025)**: Enhanced report formats for auditors (October 2024).
- **Cost**: Free.
- **Exam Tip**: Use for compliance evidence, not active security.

---

### **AWS Audit Manager**

- **Definition**: A service that automates evidence collection to assess AWS usage for compliance.
- **Key Features**:
    - Prebuilt/custom frameworks (e.g., PCI DSS, CIS) for audits.
    - Collects evidence from Security Hub, CloudTrail, Config.
    - Generates audit-ready reports.
- **Use Cases**: Automate HIPAA audit, monitor PCI compliance, assess multi-account compliance.
- **Updates (2024–2025)**: Improved Security Hub integration for consolidated findings (January 2025).
- **Cost**: Based on resource assessments ($0.30–$2/assessment).
- **Exam Tip**: Compare with Security Hub; Audit Manager focuses on compliance reporting.

---

### **AWS CloudHSM**

- **Definition**: A cloud-based hardware security module (HSM) for generating and managing cryptographic keys.
- **Key Features**:
    - Provides dedicated HSMs for key storage and cryptographic operations.
    - Supports FIPS 140-2 Level 3 compliance.
    - Integrates with KMS, RDS, Redshift for encryption.
- **Use Cases**: Secure banking apps, encrypt sensitive data, comply with FIPS standards.
- **Updates (2024–2025)**: Enhanced key export controls (March 2024).
- **Cost**: $1.45/hour per HSM (~$1,000/month).
- **Exam Tip**: Use CloudHSM for dedicated HSMs vs. KMS for managed keys.

---

### **AWS Directory Service**

- **Definition**: A managed service for Microsoft Active Directory (AD) or simple AD in the cloud.
- **Key Features**:
    - **AWS Managed Microsoft AD**: Full AD for EC2, RDS, SSO.
    - **Simple AD**: Lightweight AD for smaller workloads.
    - **AD Connector**: Proxy to on-premises AD.
    - Integrates with IAM, SSO, and WorkSpaces.
- **Use Cases**: Enable SSO for AWS apps, manage EC2 AD authentication.
- **Updates (2024–2025)**: Improved SSO integration with third-party apps (October 2024).
- **Cost**: ~$0.04–$0.40/hour based on size.
- **Exam Tip**: Choose Managed AD for enterprise, Simple AD for small setups.

---

### **AWS Firewall Manager**

- **Definition**: A security management service to centrally configure and manage firewall rules across AWS accounts.
- **Key Features**:
    - Manages WAF rules, Shield Advanced, Network Firewall, DNS Firewall, and VPC security groups.
    - Integrates with AWS Organizations for multi-account policies.
    - Sends findings to Security Hub.
- **Use Cases**: Enforce WAF rules for APIs, manage VPC security groups across accounts.
- **Updates (2024–2025)**: Enhanced DNS Firewall rule management (January 2025).
- **Cost**: $100/month per policy + resource costs.
- **Exam Tip**: Use with Organizations for centralized firewall management.

---

### **AWS Resource Access Manager (AWS RAM)**

- **Definition**: A service to securely share AWS resources across accounts or within an organization.
- **Key Features**:
    - Shares resources like subnets, Route 53 zones, KMS keys, and Aurora clusters.
    - Uses resource-based policies for access control.
    - Integrates with AWS Organizations for simplified sharing.
- **Use Cases**: Share VPC subnets with dev accounts, provide Aurora read replicas.
- **Updates (2024–2025)**: Improved resource tagging for shared resources (October 2024).
- **Cost**: Free (resource usage costs apply).
- **Exam Tip**: Use RAM for resource sharing vs. manual duplication.

---

### **AWS Security Hub**

- **Definition**: A centralized security service that aggregates and prioritizes security findings across AWS accounts.
- **Key Features**:
    - Collects findings from GuardDuty, Inspector, Macie, Firewall Manager, and IAM Access Analyzer.
    - Supports standards like CIS, PCI DSS, AWS Foundational Security Best Practices.
    - Integrates with EventBridge, Lambda for automation.
- **Use Cases**: Monitor multi-account security, automate remediation, ensure CIS compliance.
- **Updates (2024–2025)**: Enhanced cross-account finding aggregation (January 2025).
- **Cost**: $0.001–$0.01/finding, ~$0.25/500K events.
- **Exam Tip**: Central hub for security findings, not active threat mitigation.

---

### **Comparison**

| **Service** | **Type** | **Focus** | **Cost** |
| --- | --- | --- | --- |
| **Artifact** | Compliance | Compliance reports | Free |
| **Audit Manager** | Compliance | Evidence collection, audits | $0.30–$2/assessment |
| **CloudHSM** | Cryptography | Dedicated HSM, key management | ~$1,000/month/HSM |
| **Directory Service** | Identity | Managed AD, SSO | $0.04–$0.40/hour |
| **Firewall Manager** | Security Management | Centralized firewall rules | $100/month/policy |
| **RAM** | Resource Sharing | Cross-account resource access | Free |
| **Security Hub** | Security Monitoring | Aggregates security findings | ~$0.25/500K events |

---

### **Study Tips**

- **Hands-On**: Download Artifact report, set up Audit Manager assessment, configure CloudHSM, use Managed AD, manage WAF rules with Firewall Manager, share subnet with RAM, monitor findings in Security Hub.
- **Scenarios**:
    - Compliance reports = Artifact.
    - Audit evidence = Audit Manager.
    - Dedicated HSM = CloudHSM.
    - AD/SSO = Directory Service.
    - Firewall rules = Firewall Manager.
    - Resource sharing = RAM.
    - Security findings = Security Hub.
- **Memorize**: Costs, integrations, use cases.