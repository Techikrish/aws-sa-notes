# AWS Organizations

### **AWS Organizations Overview**

- **Definition**: AWS Organizations is a service for centrally managing and governing multiple AWS accounts, enabling consolidated billing, hierarchical account organization, and policy-based control.
- **Key Features**:
    - Organizes accounts into **Organizational Units (OUs)** for hierarchical management.
    - Enforces governance using **Service Control Policies (SCPs)** for access control.
    - Supports **consolidated billing** to aggregate costs and share savings.
    - Enables **delegated administration** for specific services and OUs.
    - Integrates with AWS services like IAM Identity Center, CloudTrail, RAM, and Control Tower.
- **Use Cases**: Manage multi-account environments, enforce security policies, centralize billing, share resources across accounts.
- **Key Updates (2024–2025)**:
    - **Enhanced SCPs**: Finer-grained controls with tag-based conditions (October 2024).
    - **Delegated Administration**: Expanded to more services (e.g., CloudTrail, RAM) (March 2024).
    - **FIPS 140-2 Compliance**: Enhanced for GovCloud (October 2024).
    - **Security Hub Integration**: Centralized policy compliance monitoring (January 2025).

---

### **1. AWS Organizations Core Concepts**

### **Components**

- **Organization**:
    - A collection of AWS accounts managed as a single entity.
    - Includes one **management account** and multiple **member accounts**.
    - **Explanation**: E.g., organization with 10 accounts for dev, prod, and security.
- **Management Account**:
    - The primary account that creates and manages the organization.
    - Has full control over all accounts and policies.
    - **Explanation**: E.g., management account applies SCPs to OUs.
- **Member Account**:
    - Accounts invited or created within the organization, subject to SCPs.
    - **Explanation**: E.g., member account for dev team.
- **Organizational Unit (OU)**:
    - Logical grouping of accounts for applying policies and governance.
    - Supports nested OUs (up to 5 levels).
    - **Explanation**: E.g., OU for “Production” with sub-OUs for “App1” and “App2”.
- **Service Control Policy (SCP)**:
    - JSON-based policy to allow or deny actions across accounts in an OU or account.
    - Applied at OU or account level, not users/roles (unlike IAM policies).
    - **Explanation**: E.g., SCP denies s3:PutObject for public buckets.
- **Consolidated Billing**:
    - Aggregates billing across all accounts, applies volume discounts, and shares savings (e.g., Savings Plans, Reserved Instances).
    - **Explanation**: E.g., single invoice for 50 accounts.
- **Delegated Administration**:
    - Allows member accounts to manage specific services for the organization (e.g., CloudTrail, RAM).
    - **Explanation**: E.g., delegate CloudTrail management to Audit account.

### **Key Concepts**

- **Root OU**:
    - Top-level container for all OUs and accounts in the organization.
    - **Explanation**: E.g., Root OU applies global SCPs.
- **Policy Inheritance**:
    - SCPs applied to parent OU affect all child OUs and accounts.
    - Explicit Deny overrides Allow in child SCPs.
    - **Explanation**: E.g., Root SCP denies ec2:RunInstances; child OU cannot override.
- **Trusted Access**:
    - Enables AWS services (e.g., Control Tower, CloudTrail) to operate across the organization.
    - **Explanation**: E.g., enable trusted access for CloudTrail organization trails.
- **Account Creation/Invitation**:
    - Management account creates new accounts or invites existing ones.
    - **Explanation**: E.g., create a new account for testing.
- **Tag Policies**:
    - Standardize resource tagging across accounts for cost tracking and governance.
    - **Explanation**: E.g., enforce tag Environment=Prod on EC2 instances.

### **Key Notes**:

- **Exam Relevance**: Understand OUs, SCPs, consolidated billing, and delegated administration.
- **Mastery Tip**: Compare AWS Organizations vs. Control Tower vs. manual multi-account management.

---

### **2. AWS Organizations Performance Features**

Organizations optimizes multi-account management.

### **Low Latency**

- **Purpose**: Fast account and policy operations.
- **Features**:
    - Account creation in seconds via API or console.
    - SCPs applied instantly across OUs/accounts.
- **Explanation**: E.g., create a new account in <1 minute.
- **Exam Tip**: Highlight rapid account provisioning for performance.

### **High Throughput**

- **Purpose**: Handle large-scale environments.
- **Features**:
    - Supports thousands of accounts and OUs.
    - Processes multiple SCP updates concurrently.
- **Explanation**: E.g., apply SCPs to 1,000 accounts simultaneously.
- **Exam Tip**: Use for enterprise-scale governance.

### **Scalability**

- **Purpose**: Support growing organizations.
- **Features**:
    - Scales to tens of thousands of accounts (default quota: 1,000 accounts).
    - Enhanced SCPs with tag-based conditions (2024).
    - Delegated administration reduces management account load.
- **Explanation**: E.g., manage 5,000 accounts across 10 OUs.
- **Exam Tip**: Emphasize scalability for large organizations.

### **Key Notes**:

- **Performance**: Fast operations + high throughput + scalability = efficient governance.
- **Exam Tip**: Highlight SCPs and delegated administration for speed.

---

### **3. AWS Organizations Resilience Features**

Resilience ensures reliable account management.

### **Multi-AZ/Region Redundancy**

- **Purpose**: Survive failures.
- **Features**:
    - Organizations is a global service, highly available across Regions.
    - SCPs and billing data stored in multi-AZ infrastructure.
- **Explanation**: E.g., SCPs remain active if us-east-1 fails.
- **Exam Tip**: Highlight global resilience for HA.

### **Continuous Governance**:

- **Purpose**: Uninterrupted policy enforcement.
- **Features**:
    - SCPs enforced 24/7 across accounts.
    - Trusted access ensures service integration (e.g., CloudTrail).
- **Explanation**: E.g., SCP denies public S3 buckets continuously.
- **Exam Tip**: Use SCPs for consistent governance.

### **Monitoring and Recovery**:

- **Purpose**: Track and respond to issues.
- **Features**:
    - CloudTrail logs Organizations API calls (e.g., CreateAccount, AttachPolicy).
    - Security Hub detects non-compliant SCP configurations (2025).
    - Consolidated billing dashboard tracks account usage.
    - **Explanation**: E.g., audit unauthorized InviteAccountToOrganization.
- **Exam Tip**: Use CloudTrail and Security Hub for resilience.

### **Backup and Recovery**:

- **Purpose**: Protect organization structure.
- **Features**:
    - Account metadata recoverable via AWS Support.
    - SCPs and tag policies versioned for rollback.
- **Explanation**: E.g., restore deleted OU via Support.
- **Exam Tip**: Highlight recovery for governance.

### **Key Notes**:

- **Resilience**: Multi-AZ + continuous governance + monitoring = reliable management.
- **Exam Tip**: Design resilient organizations with SCPs and CloudTrail.

---

### **4. AWS Organizations Security Features**

Security is a core focus for Organizations in SAA-C03.

### **Access Control**

- **IAM Policies**:
    - Restrict Organizations actions (organizations:CreateAccount, organizations:AttachPolicy).
    - Management account requires explicit permissions.
    - **Example**: {"Effect": "Allow", "Action": "organizations:CreateOrganization", "Resource": "*"}.
- **SCPs**:
    - Deny or allow actions at OU/account level.
    - Enhanced with tag-based conditions (2024).
    - **Explanation**: E.g., SCP denies s3:PutObject unless tagged Environment=Prod.
- **IAM Identity Center**:
    - SSO for federated access to member accounts.
    - **Explanation**: E.g., grant dev team access to Sandbox OU accounts.
- **Exam Tip**: Practice SCPs and IAM policies for governance.

### **Encryption**

- **In Transit**:
    - HTTPS for Organizations API calls and console.
    - **Explanation**: E.g., secure CreateAccount call.
- **At Rest**:
    - Metadata encrypted with AWS-managed keys.
    - Integrates with KMS-encrypted services (e.g., CloudTrail logs).
    - **Explanation**: E.g., KMS encrypts organization CloudTrail bucket.
- **Exam Tip**: Highlight KMS integration for compliance.

### **Compliance**:

- **Purpose**: Meet regulatory standards.
- **Features**:
    - Supports HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
    - Security Hub detects non-compliant SCPs (2025).
    - Tag policies ensure compliant tagging.
- **Explanation**: E.g., enforce MFA across accounts for PCI compliance.
- **Exam Tip**: Use Security Hub and SCPs for compliance.

### **Auditing**:

- **Purpose**: Track organization actions.
- **Features**:
    - CloudTrail logs all Organizations API calls.
    - Security Hub monitors SCP compliance (2025).
    - Consolidated billing tracks account activity.
    - **Explanation**: E.g., audit CreatePolicy for compliance.
- **Exam Tip**: Use CloudTrail for auditing.

### **Key Notes**:

- **Security**: IAM + SCPs + encryption + auditing = secure governance.
- **Exam Tip**: Configure SCPs, IAM Identity Center, and Security Hub.

---

### **5. AWS Organizations Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Organizations**: Free (charges apply for integrated services).
- **Underlying Services**:
    - CloudTrail: $2/100,000 events.
    - RAM: Free (resource costs apply).
    - IAM Identity Center: $0.03/active user/month.
- **Consolidated Billing**:
    - Aggregates costs, applies volume discounts, shares Savings Plans/Reserved Instances.
- **Example**:
    - Organization with 10 accounts, 1M CloudTrail events, 50 IAM Identity Center users:
        - Organizations: $0.
        - CloudTrail: 1M × $2/100K = $20.
        - IAM Identity Center: 50 × $0.03 = $1.50.
        - Total: $20 + $1.50 = $21.50/month.
- **Free Tier**: None for Organizations; resource free tiers apply (e.g., CloudTrail).

### **Cost Strategies**

- **Consolidated Billing**:
    - Share Savings Plans and Reserved Instances to reduce costs.
    - **Explanation**: E.g., share EC2 Savings Plan to save 20% ($100/month).
- **Limit Accounts**:
    - Create only necessary accounts to reduce overhead (e.g., CloudTrail costs).
    - **Explanation**: E.g., reduce from 50 to 20 accounts to save $8/month on CloudTrail.
- **Optimize SCPs**:
    - Use tag-based SCPs to limit costly resources (e.g., deny large EC2 instances).
    - **Explanation**: E.g., deny m5.xlarge to save $0.19/hour.
- **Tagging**:
    - Enforce tag policies for cost allocation.
    - **Explanation**: E.g., tag accounts with “Project:App”.
- **Monitor Usage**:
    - Use CloudWatch and Cost Explorer to track organization costs.
    - **Explanation**: E.g., reduce CloudTrail events to save $10/month.
- **Delegated Administration**:
    - Offload tasks to member accounts to reduce management account costs.
    - **Explanation**: E.g., delegate RAM to save management account resources.

### **Key Notes**:

- **Cost Savings**: Consolidated billing + optimized SCPs + tagging = lower costs.
- **Exam Tip**: Calculate savings from consolidated billing and SCPs.

---

### **6. AWS Organizations Advanced Features**

### **Enhanced SCPs**:

- **Purpose**: Finer-grained governance.
- **Features**:
    - Tag-based conditions for dynamic policies (2024).
    - **Explanation**: E.g., deny ec2:RunInstances unless tagged Environment=Dev.
- **Exam Tip**: Know tag-based SCPs for flexibility.

### **Delegated Administration**:

- **Purpose**: Distribute management tasks.
- **Features**:
    - Expanded to CloudTrail, RAM, IAM Identity Center (2024).
    - **Explanation**: E.g., delegate CloudTrail trail management to Audit account.
- **Exam Tip**: Use for enterprise efficiency.

### **Security Hub Integration**:

- **Purpose**: Centralized compliance.
- **Features**:
    - Detects non-compliant SCPs or account configurations (2025).
    - Aggregates findings with GuardDuty, Inspector.
    - **Explanation**: E.g., flag SCP allowing public S3 buckets.
- **Exam Tip**: Use Security Hub for compliance monitoring.

### **Tag Policies**:

- **Purpose**: Standardize tagging.
- **Features**:
    - Enforce consistent tags across accounts.
    - **Explanation**: E.g., require CostCenter tag on all resources.
- **Exam Tip**: Use for cost tracking and governance.

### **Trusted Access**:

- **Purpose**: Enable service integration.
- **Features**:
    - Supports Control Tower, CloudTrail, RAM, and more.
    - **Explanation**: E.g., enable trusted access for organization-wide CloudTrail.
- **Exam Tip**: Know for service integration.

### **Key Notes**:

- **Flexibility**: Enhanced SCPs + delegated administration + tag policies = advanced governance.
- **Exam Tip**: Master SCPs, delegated administration, and Security Hub.

---

### **7. AWS Organizations Use Cases**

Understand practical applications.

### **Multi-Account Management**

- **Setup**: OUs for dev, prod, security; SCPs for governance.
- **Features**: Centralized account management.
- **Explanation**: E.g., manage 100 accounts with Prod and Dev OUs.

### **Security Governance**

- **Setup**: SCPs to restrict actions, Security Hub for monitoring.
- **Features**: Enforce encryption, limit Regions.
- **Explanation**: E.g., deny public S3 buckets across accounts.

### **Consolidated Billing**

- **Setup**: Single billing for all accounts, share Savings Plans.
- **Features**: Volume discounts, cost tracking.
- **Explanation**: E.g., save 15% on EC2 with shared Savings Plan.

### **Delegated Administration**

- **Setup**: Delegate CloudTrail to Audit account, RAM to Shared Services.
- **Features**: Distribute management tasks.
- **Explanation**: E.g., Audit account manages organization trails.

---

### **8. AWS Organizations vs. Other Governance Tools**

| **Feature** | **Organizations** | **Control Tower** | **RAM** |
| --- | --- | --- | --- |
| **Type** | Account Management | Multi-Account Governance | Resource Sharing |
| **Focus** | OUs, SCPs, billing | Landing zone, guardrails | Share resources |
| **Scope** | AWS accounts | AWS multi-account | AWS resources |
| **Cost** | Free (resource costs) | Free (resource costs) | Free (resource costs) |
| **Use Case** | Account governance | Automated landing zone | Share subnets, KMS keys |

### **Explanation**:

- **Organizations**: Core account management and SCPs.
- **Control Tower**: Automated governance with landing zones.
- **RAM**: Resource sharing across accounts.

---

### **9. Detailed Explanations for Mastery**

- **Enhanced SCPs**:
    - **Example**: Deny s3:PutObject unless tagged Project=App.
    - **Why It Matters**: Dynamic governance (2024).
- **Delegated Administration**:
    - **Example**: Delegate RAM to Shared Services account.
    - **Why It Matters**: Reduces management account load (2024).
- **Security Hub Integration**:
    - **Example**: Flag SCP allowing unencrypted EBS volumes.
    - **Why It Matters**: Centralized compliance (2025).

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Organization | Manage accounts | Management + member accounts | Core Concept |
| OU | Group accounts | Nested up to 5 levels | Core Concept |
| SCP | Governance policies | Tag-based conditions (2024) | Core Concept |
| Consolidated Billing | Aggregate costs | Shares Savings Plans | Cost Optimization |
| Delegated Admin | Distribute tasks | Expanded services (2024) | Flexibility |
| Tag Policies | Standardize tagging | Enforce cost allocation tags | Security, Cost |
| Security Hub | Compliance monitoring | Non-compliant SCPs (2025) | Security, Resilience |