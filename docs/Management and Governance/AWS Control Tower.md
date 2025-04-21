# AWS Control Tower

### **AWS Control Tower Overview**

- **Definition**: AWS Control Tower is a managed service that simplifies the setup and governance of a secure, compliant, multi-account AWS environment, known as a **landing zone**, based on best practices.
- **Key Features**:
    - Automates creation of a well-architected, multi-account environment using AWS Organizations.
    - Enforces governance with **controls (guardrails)** for security, compliance, and operations.
    - Provides **Account Factory** for standardized account provisioning.
    - Offers a **dashboard** for visibility into compliance and account status.
    - Integrates with AWS services like IAM Identity Center, CloudTrail, AWS Config, and Security Hub.
- **Use Cases**: Set up multi-account environments, enforce compliance (e.g., HIPAA, PCI), automate account provisioning, monitor governance at scale.
- **Key Updates (2024–2025)**:
    - **223 New AWS Config Rules**: Added to Control Catalog for security, cost, and resilience (April 2025).
        
        ![](https://pbs.twimg.com/profile_images/1527030582093312001/HwfKvu7r_normal.png)
        
    - **Customizations for Control Tower**: Enhanced CloudFormation templates and SCPs for landing zone customization (April 2025).
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
    - **FIPS 140-2 Compliance**: Enhanced for GovCloud (October 2024).
    - **Security Hub Integration**: Centralized compliance monitoring (January 2025).

---

### **1. Control Tower Core Concepts**

### **Components**

- **Landing Zone**:
    - A well-architected, multi-account AWS environment based on best practices.
    - Includes Organizational Units (OUs), accounts, and controls.
    - **Explanation**: E.g., landing zone with Security OU and Sandbox OU.
- **Controls (Guardrails)**:
    - High-level rules for governance, applied to OUs or accounts.
    - Types: **Preventive** (block actions), **Detective** (monitor compliance), **Proactive** (scan CloudFormation templates).
    - Guidance: **Mandatory** (always enforced), **Strongly Recommended** (optional, high priority), **Elective** (optional).
    - **Explanation**: E.g., preventive guardrail disallows public S3 bucket creation.
- **Account Factory**:
    - Automates provisioning of new accounts with preconfigured settings (e.g., VPC, IAM roles).
    - Integrates with AWS Service Catalog and Terraform (Account Factory for Terraform).
    - **Explanation**: E.g., provision a dev account with predefined VPC.
- **Dashboard**:
    - Centralized view of OUs, accounts, controls, and compliance status.
    - **Explanation**: E.g., view noncompliant S3 buckets.
- **Organizational Units (OUs)**:
    - Containers for accounts within AWS Organizations (e.g., Security OU, Sandbox OU).
    - **Explanation**: E.g., Security OU holds Log Archive and Audit accounts.
- **Shared Accounts**:
    - **Log Archive Account**: Stores CloudTrail and Config logs.
    - **Audit Account**: Provides security teams read/write access for auditing.
    - **Explanation**: E.g., Log Archive stores all API logs centrally.

### **Key Concepts**

- **AWS Organizations Integration**:
    - Control Tower builds on AWS Organizations to manage OUs and accounts.
    - Uses Service Control Policies (SCPs) for preventive guardrails.
    - **Explanation**: E.g., SCP restricts Lambda creation in specific Regions.
- **IAM Identity Center**:
    - Provides single sign-on (SSO) and identity management for landing zone users.
    - **Explanation**: E.g., federated access to accounts via SSO.
- **CloudFormation StackSets**:
    - Deploys resources across accounts and Regions.
    - **Explanation**: E.g., StackSet deploys IAM roles to all accounts.
- **Drift Detection**:
    - Identifies divergence from landing zone configurations (e.g., manual OU changes).
    - **Explanation**: E.g., detect modified Log Archive S3 bucket policy.
- **Customizations for Control Tower**:
    - Allows custom CloudFormation templates and SCPs for tailored landing zones.
    - Syncs with lifecycle events (e.g., new account creation).
    - **Explanation**: E.g., deploy custom VPC to new accounts.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        

### **Key Notes**:

- **Exam Relevance**: Understand landing zones, guardrails, Account Factory, and drift detection.
- **Mastery Tip**: Compare Control Tower vs. AWS Organizations vs. manual multi-account setups.

---

### **2. Control Tower Performance Features**

Control Tower optimizes multi-account governance.

### **Low Latency**

- **Purpose**: Fast setup and management.
- **Features**:
    - Landing zone setup in ~30 minutes.
    - Account Factory provisions accounts in minutes.
- **Explanation**: E.g., create a new dev account in <10 minutes.
    
    [](https://imgs.search.brave.com/TFXqTLtqLpXX2rHXVn_xJL0d-xJufaYS7m2jK51-xIY/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWNiMmFlNTk5/YmQyZGM3NzcyYTky/YTAwYTU1YTM3NTE2/NTE4MTY2MGY3ZDhl/MTFiNjdhMjM2NGY5/MTk0ODlmMS93d3cu/bm9wcy5pby8)
    
- **Exam Tip**: Highlight rapid provisioning for performance.

### **High Throughput**

- **Purpose**: Handle large-scale environments.
- **Features**:
    - Scales to hundreds of accounts and OUs.
    - Supports 223 new Config rules for governance (2025).
        
        ![](https://pbs.twimg.com/profile_images/1527030582093312001/HwfKvu7r_normal.png)
        
- **Explanation**: E.g., govern 500 accounts with 100+ guardrails.
- **Exam Tip**: Use for enterprise-scale deployments.

### **Scalability**

- **Purpose**: Support growing organizations.
- **Features**:
    - Scales with AWS Organizations for thousands of accounts.
    - Customizations sync across accounts via StackSets.
- **Explanation**: E.g., deploy guardrails to 10 OUs across 20 Regions.
- **Exam Tip**: Emphasize scalability for multi-account setups.

### **Key Notes**:

- **Performance**: Fast setup + high throughput + scalability = efficient governance.
- **Exam Tip**: Highlight Account Factory and StackSets for speed.

---

### **3. Control Tower Resilience Features**

Resilience ensures reliable governance.

### **Multi-AZ/Region Redundancy**

- **Purpose**: Survive failures.
- **Features**:
    - Landing zone resources (e.g., S3, CloudTrail) deployed in Regional, multi-AZ infrastructure.
    - Multi-Region guardrails via StackSets.
- **Explanation**: E.g., Log Archive S3 bucket persists if us-east-1a fails.
- **Exam Tip**: Highlight multi-AZ for HA.

### **Continuous Governance**:

- **Purpose**: Uninterrupted compliance.
- **Features**:
    - Detective guardrails monitor 24/7 via AWS Config.
    - Proactive guardrails scan CloudFormation templates.
- **Explanation**: E.g., detect unencrypted EBS volumes continuously.
- **Exam Tip**: Use detective guardrails for resilience.

### **Drift Detection and Repair**:

- **Purpose**: Maintain configuration consistency.
- **Features**:
    - Detects manual changes (e.g., modified IAM roles).
    - Landing Zone repair fixes drift (e.g., re-enable trusted access).
- **Explanation**: E.g., repair drift from disabled Control Tower access.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
- **Exam Tip**: Highlight drift detection for compliance.

### **Monitoring and Recovery**:

- **Purpose**: Track and respond to issues.
- **Features**:
    - Dashboard shows compliance status.
    - CloudTrail logs Control Tower actions.
    - Security Hub detects non-compliant configurations (2025).
    - **Explanation**: E.g., alert on noncompliant S3 bucket via Security Hub.
- **Exam Tip**: Use CloudTrail and Security Hub for resilience.

### **Key Notes**:

- **Resilience**: Multi-AZ + continuous governance + drift detection + monitoring = reliable governance.
- **Exam Tip**: Design resilient landing zones with drift detection.

---

### **4. Control Tower Security Features**

Security is a core focus for Control Tower in SAA-C03.

### **Access Control**

- **IAM Policies**:
    - Restrict Control Tower actions (controltower:CreateLandingZone).
    - **AWSControlTowerExecution Role**: Allows Control Tower to manage accounts.
    - **Example**: {"Effect": "Allow", "Action": "controltower:SetupLandingZone", "Resource": "*"}.
- **SCPs**:
    - Preventive guardrails enforced via SCPs.
    - **Explanation**: E.g., SCP disallows cross-Region networking.
- **IAM Identity Center**:
    - SSO for federated access to accounts.
    - **Explanation**: E.g., restrict Audit account to security team.
- **Exam Tip**: Practice SCPs and AWSControlTowerExecution role.

### **Encryption**

- **In Transit**:
    - HTTPS for Control Tower API calls and console.
    - **Explanation**: E.g., secure SetupLandingZone call.
- **At Rest**:
    - Log Archive S3 buckets encrypted with SSE-S3 or KMS.
    - Guardrails enforce KMS encryption (e.g., EBS volumes).
    - **Explanation**: E.g., KMS-encrypted CloudTrail logs.
- **Exam Tip**: Highlight KMS for compliance.

### **Compliance**:

- **Purpose**: Meet regulatory standards.
- **Features**:
    - Supports HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
    - 223 new Config rules for compliance (2025).
        
        ![](https://pbs.twimg.com/profile_images/1527030582093312001/HwfKvu7r_normal.png)
        
    - Security Hub integration for non-compliant resources (2025).
- **Explanation**: E.g., enforce MFA for IAM users.
- **Exam Tip**: Use Security Hub and guardrails for compliance.

### **Auditing**:

- **Purpose**: Track governance actions.
- **Features**:
    - CloudTrail logs all Control Tower API calls.
    - Log Archive account centralizes CloudTrail and Config logs.
    - Activities page shows management account actions.
    - **Explanation**: E.g., audit CreateAccount actions.
- **Exam Tip**: Use CloudTrail and Log Archive for auditing.

### **Key Notes**:

- **Security**: IAM + SCPs + encryption + auditing = secure governance.
- **Exam Tip**: Configure SCPs, KMS, and Security Hub for secure landing zones.

---

### **5. Control Tower Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Control Tower**: Free (charges apply for underlying services).
- **Underlying Services**:
    - CloudTrail: $2/100,000 events.
    - AWS Config: $0.003/100 evaluations.
    - S3: $0.023/GB/month.
    - VPC (e.g., NAT Gateway): $0.045/hour.
- **Example**:
    - Landing zone with 10 accounts, 1M CloudTrail events, 100K Config evaluations, 1 GB S3, 1 NAT Gateway:
        - CloudTrail: 1M × $2/100K = $20.
        - Config: 100K × $0.003/100 = $3.
        - S3: 1 GB × $0.023 = $0.023.
        - NAT Gateway: 720 × $0.045 = $32.40.
        - Total: $20 + $3 + $0.023 + $32.40 = ~$55.42/month.
- **Free Tier**: None for Control Tower; resource free tiers apply (e.g., S3, Config).

### **Cost Strategies**

- **Optimize Guardrails**:
    - Enable only necessary guardrails to reduce Config evaluations.
    - **Explanation**: E.g., disable elective guardrails to save $0.003/100 evaluations.
- **Limit Account Factory Configurations**:
    - Avoid costly resources (e.g., NAT Gateways) in Account Factory templates.
    - **Explanation**: E.g., exclude NAT Gateway to save $32.40/month.
- **Archive Logs**:
    - Use S3 lifecycle policies to move Log Archive data to Glacier ($0.004/GB).
    - **Explanation**: E.g., save $0.019/GB by archiving logs.
- **Tagging**:
    - Tag accounts and resources for cost tracking.
    - **Explanation**: E.g., tag accounts with “Project:App”.
- **Monitor Usage**:
    - Use CloudWatch to track Config and CloudTrail costs.
    - **Explanation**: E.g., reduce Config rules to save $10/month.
- **Ephemeral Workloads**:
    - Minimize Config costs for temporary resources (e.g., EC2 Spot instances).
    - **Explanation**: E.g., save $5/month by limiting ephemeral workloads.
        
        [](https://imgs.search.brave.com/RZ9xPuN87dYqtYCk4TONd4taMtlovCl-Zq_UDgaeg6s/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWZkOTdiMmU0/NmQ1MmFmNjEyOWEz/M2VjNmQ4YzFlM2Zk/MjBmYWNlYjJiNjMx/YjI2YmQxNzIyYmFi/NGU1NzM1NC9rMjFh/Y2FkZW15LmNvbS8)
        

### **Key Notes**:

- **Cost Savings**: Optimize guardrails + limit configurations + archive logs = lower costs.
- **Exam Tip**: Calculate costs for CloudTrail, Config, and S3.

---

### **6. Control Tower Advanced Features**

### **223 New AWS Config Rules**:

- **Purpose**: Enhanced governance.
- **Features**:
    - Rules for security, cost, and resilience (e.g., MFA enforcement, S3 versioning).
    - Searchable in Control Catalog (2025).
    - **Explanation**: E.g., detect unencrypted EBS volumes.
        
        ![](https://pbs.twimg.com/profile_images/1527030582093312001/HwfKvu7r_normal.png)
        
- **Exam Tip**: Know new rules for compliance.

### **Customizations for Control Tower**:

- **Purpose**: Tailored landing zones.
- **Features**:
    - Custom CloudFormation templates and SCPs.
    - Syncs with lifecycle events (e.g., new account provisioning).
    - **Explanation**: E.g., deploy custom IAM policies to all accounts.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Exam Tip**: Use for flexible governance.

### **Security Hub Integration**:

- **Purpose**: Centralized compliance.
- **Features**:
    - Detects non-compliant resources (e.g., public S3 buckets) (2025).
    - Aggregates findings with GuardDuty, Inspector.
    - **Explanation**: E.g., flag missing MFA guardrail.
- **Exam Tip**: Use Security Hub for compliance monitoring.

### **Account Factory for Terraform**:

- **Purpose**: IaC integration.
- **Features**:
    - Provisions accounts using Terraform templates.
    - **Explanation**: E.g., deploy Terraform-managed VPCs.
- **Exam Tip**: Know for hybrid IaC environments.

### **Drift Detection and Repair**:

- **Purpose**: Ensure compliance.
- **Features**:
    - Detects and repairs drift (e.g., modified OUs).
    - **Explanation**: E.g., repair disabled trusted access.
        
        [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
        
- **Exam Tip**: Use for consistent governance.

### **Key Notes**:

- **Flexibility**: New Config rules + customizations + Terraform = advanced governance.
- **Exam Tip**: Master customizations and Security Hub integration.

---

### **7. Control Tower Use Cases**

Understand practical applications.

### **Multi-Account Environment Setup**

- **Setup**: Landing zone with Security and Sandbox OUs.
- **Features**: Automated account provisioning, guardrails.
- **Explanation**: E.g., deploy 10 accounts with MFA guardrails.

### **Compliance Management**

- **Setup**: Guardrails for HIPAA/PCI, Security Hub integration.
- **Features**: Enforce encryption, monitor compliance.
- **Explanation**: E.g., ensure KMS for EBS volumes.

### **Developer Self-Service**

- **Setup**: Account Factory with preconfigured templates.
- **Features**: Rapid account provisioning for dev teams.
- **Explanation**: E.g., provision dev account with VPC in minutes.

### **Centralized Auditing**

- **Setup**: Log Archive and Audit accounts, CloudTrail integration.
- **Features**: Centralized logging and auditing.
- **Explanation**: E.g., audit IAM role changes across 50 accounts.

---

### **8. Control Tower vs. Other Governance Tools**

| **Feature** | **Control Tower** | **AWS Organizations** | **CloudFormation** |
| --- | --- | --- | --- |
| **Type** | Multi-Account Governance | Account Management | IaC |
| **Focus** | Landing zone, guardrails | OUs, SCPs | Resource provisioning |
| **Scope** | AWS multi-account | AWS accounts | AWS resources |
| **Cost** | Free (resource costs) | Free | Free (resource costs) |
| **Use Case** | Governed multi-account | Basic account management | Infrastructure deployment |

### **Explanation**:

- **Control Tower**: Automated governance with landing zones and guardrails.
- **Organizations**: Core account management, SCPs.
- **CloudFormation**: Infrastructure provisioning, used by Control Tower.

---

### **9. Detailed Explanations for Mastery**

- **223 New Config Rules**:
    - **Example**: Enforce S3 bucket versioning.
    - **Why It Matters**: Enhances security and cost governance (2025).
        
        ![](https://pbs.twimg.com/profile_images/1527030582093312001/HwfKvu7r_normal.png)
        
- **Customizations for Control Tower**:
    - **Example**: Deploy custom VPC to new accounts.
    - **Why It Matters**: Flexible landing zones (2025).
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Security Hub Integration**:
    - **Example**: Flag non-compliant EC2 instances.
    - **Why It Matters**: Centralized compliance (2025).

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Landing Zone | Multi-account environment | Setup in ~30 minutes | Core Concept |
| Guardrails | Governance rules | Preventive, detective, proactive | Core Concept |
| Account Factory | Account provisioning | Preconfigured templates | Core Concept |
| Customizations | Tailored landing zones | CloudFormation, SCPs (2025) | Flexibility |
| Drift Detection | Configuration consistency | Detects manual changes | Resilience, Security |
| Security Hub | Compliance monitoring | Non-compliant resources (2025) | Security, Resilience |
| Config Rules | Enhanced governance | 223 new rules (2025) | Security, Compliance |