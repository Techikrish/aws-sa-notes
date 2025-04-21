# AWS Systems Manager

### **AWS Systems Manager Overview**

- **Definition**: AWS Systems Manager (SSM) is a managed service for automating and managing the configuration, patching, and operation of AWS and on-premises resources, including EC2 instances, Lambda functions, and hybrid environments.
- **Key Features**:
    - Provides capabilities like **Session Manager** for secure shell access, **Patch Manager** for updates, **Run Command** for remote commands, and **Parameter Store** for configuration data.
    - Manages resources via **State Manager** for compliance and **Automation** for workflows.
    - Offers **Inventory** for resource tracking and **Explorer** for operational insights.
    - Integrates with IAM, CloudTrail, CloudWatch, and AWS Config for security and monitoring.
- **Use Cases**: Automate EC2 patching, manage hybrid environments, securely access instances, store sensitive configuration data, monitor compliance.
- **Key Updates (2024–2025)**:
    - **Enhanced Patch Manager**: Improved scheduling and compliance reporting (October 2024).
    - **Improved Explorer Reporting**: Cross-account and cross-Region insights (March 2024).
    - **FIPS 140-2 Compliance**: Enhanced for GovCloud (October 2024).
    - **Security Hub Integration**: Centralized compliance monitoring (January 2025).

---

### **1. Systems Manager Core Concepts**

### **Capabilities**

- **Session Manager**:
    - Secure, browser-based shell access to EC2 instances and on-premises servers without SSH keys or bastion hosts.
    - Supports logging to S3/CloudWatch Logs.
    - **Explanation**: E.g., access EC2 instance via Session Manager without public IP.
- **Run Command**:
    - Executes remote commands or scripts across multiple instances.
    - Supports predefined or custom commands.
    - **Explanation**: E.g., run yum update on 100 EC2 instances.
- **Patch Manager**:
    - Automates patching for OS and applications on EC2 and on-premises systems.
    - Uses patch baselines and maintenance windows.
    - **Explanation**: E.g., patch Windows EC2 instances monthly.
- **State Manager**:
    - Enforces desired state configurations (e.g., software, settings) on resources.
    - **Explanation**: E.g., ensure specific software is installed on EC2.
- **Automation**:
    - Executes workflows for common tasks (e.g., instance restarts, backups).
    - Uses predefined or custom automation documents (YAML/JSON).
    - **Explanation**: E.g., automate EBS snapshot creation.
- **Parameter Store**:
    - Stores configuration data (e.g., passwords, API keys) as plaintext or encrypted values.
    - Integrates with KMS for encryption.
    - **Explanation**: E.g., store database password securely.
- **Inventory**:
    - Collects metadata (e.g., software, OS) from managed instances.
    - **Explanation**: E.g., track installed applications on EC2.
- **Compliance**:
    - Monitors resource compliance against patch baselines and State Manager policies.
    - **Explanation**: E.g., report non-compliant EC2 instances missing patches.
- **Explorer**:
    - Provides a dashboard for operational insights and compliance across accounts/Regions.
    - **Explanation**: E.g., view patching status for 1,000 instances.
- **Distributor**:
    - Packages and distributes software to managed instances.
    - **Explanation**: E.g., deploy custom app to EC2 fleet.
- **Change Calendar**:
    - Manages maintenance windows and change blackout periods.
    - **Explanation**: E.g., block patching during peak hours.
- **Hybrid Activations**:
    - Manages on-premises servers and VMs as SSM-managed instances.
    - **Explanation**: E.g., patch on-premises Windows servers.

### **Key Concepts**

- **Managed Instance**:
    - Any EC2 instance, on-premises server, or VM registered with SSM.
    - Requires SSM Agent (pre-installed on most AMIs).
    - **Explanation**: E.g., EC2 instance with SSM Agent becomes managed.
- **SSM Agent**:
    - Software installed on instances to communicate with Systems Manager.
    - Supports Windows, Linux, and macOS.
    - **Explanation**: E.g., SSM Agent enables Run Command on EC2.
- **Documents**:
    - JSON/YAML templates defining actions for Run Command, Automation, or State Manager.
    - Types: Command, Automation, Policy.
    - **Explanation**: E.g., Command document runs install.sh.
- **Maintenance Windows**:
    - Scheduled time slots for tasks like patching or updates.
    - **Explanation**: E.g., patch EC2 instances every Sunday at 2 AM.
- **Patch Baseline**:
    - Defines approved patches and rules for Patch Manager.
    - **Explanation**: E.g., baseline approves critical Linux patches.
- **Resource Groups**:
    - Groups of resources (e.g., EC2 instances) for targeted SSM operations.
    - **Explanation**: E.g., apply Run Command to “Prod” resource group.

### **Key Notes**:

- **Exam Relevance**: Understand Session Manager, Patch Manager, Parameter Store, Automation, and Explorer.
- **Mastery Tip**: Compare Systems Manager vs. OpsWorks vs. Elastic Beanstalk for management.

---

### **2. Systems Manager Performance Features**

Systems Manager optimizes resource management.

### **Low Latency**

- **Purpose**: Fast operations.
- **Features**:
    - Session Manager connects in seconds.
    - Run Command executes commands in near-real-time.
    - Explorer queries cross-account data quickly (2024).
- **Explanation**: E.g., start Session Manager session in <5 seconds.
- **Exam Tip**: Highlight Session Manager for rapid access.

### **High Throughput**

- **Purpose**: Handle large-scale operations.
- **Features**:
    - Run Command supports thousands of instances concurrently.
    - Patch Manager processes patches for large fleets.
- **Explanation**: E.g., patch 10,000 EC2 instances in one window.
- **Exam Tip**: Use for high-volume management.

### **Scalability**

- **Purpose**: Support growing environments.
- **Features**:
    - Scales to millions of managed instances.
    - Cross-account/Region support via Explorer (2024).
    - Automation handles complex workflows across accounts.
- **Explanation**: E.g., manage 50,000 instances across 10 accounts.
- **Exam Tip**: Emphasize scalability for enterprise management.

### **Key Notes**:

- **Performance**: Low latency + high throughput + scalability = efficient management.
- **Exam Tip**: Highlight Run Command and Explorer for scale.

---

### **3. Systems Manager Resilience Features**

Resilience ensures reliable resource management.

### **Multi-AZ/Region Redundancy**

- **Purpose**: Survive failures.
- **Features**:
    - Systems Manager is a Regional service with multi-AZ redundancy.
    - Session Manager and Run Command retry failed operations.
- **Explanation**: E.g., Session Manager works if us-east-1a fails.
- **Exam Tip**: Highlight multi-AZ for HA.

### **Continuous Management**:

- **Purpose**: Uninterrupted operations.
- **Features**:
    - State Manager enforces configurations 24/7.
    - Patch Manager schedules recurring updates.
- **Explanation**: E.g., ensure EC2 software compliance continuously.
- **Exam Tip**: Use State Manager for consistent configurations.

### **Monitoring and Recovery**:

- **Purpose**: Detect and respond to issues.
- **Features**:
    - CloudWatch logs Session Manager, Run Command, and Automation actions.
    - CloudTrail logs SSM API calls (e.g., StartSession).
    - Security Hub detects non-compliant instances (2025).
    - Compliance reports patch/state issues.
    - **Explanation**: E.g., alert on non-compliant EC2 via Security Hub.
- **Exam Tip**: Use CloudWatch and Security Hub for resilience.

### **Fault Tolerance**:

- **Purpose**: Handle failures gracefully.
- **Features**:
    - Automation retries failed steps.
    - Maintenance windows ensure controlled updates.
    - **Explanation**: E.g., retry failed patch operation.
- **Exam Tip**: Highlight Automation for fault tolerance.

### **Key Notes**:

- **Resilience**: Multi-AZ + continuous management + monitoring = reliable operations.
- **Exam Tip**: Design resilient management with State Manager and Automation.

---

### **4. Systems Manager Security Features**

Security is a core focus for Systems Manager in SAA-C03.

### **Access Control**

- **IAM Policies**:
    - Restrict SSM actions (ssm:StartSession, ssm:SendCommand).
    - Scope to specific resources or tags.
    - **Example**: {"Effect": "Allow", "Action": "ssm:StartSession", "Resource": "arn:aws:ec2:*:*:instance/*"}.
- **Session Manager Policies**:
    - Control access to instances and log destinations.
    - **Explanation**: E.g., restrict Session Manager to “Prod” instances.
- **Parameter Store Policies**:
    - Restrict access to specific parameters.
    - **Explanation**: E.g., allow only DBAs to read /prod/db/password.
- **Exam Tip**: Practice IAM policies for Session Manager and Parameter Store.

### **Encryption**

- **In Transit**:
    - HTTPS for SSM API calls, Session Manager, and Run Command.
    - **Explanation**: E.g., secure StartSession call.
- **At Rest**:
    - Parameter Store encrypts sensitive data with KMS.
    - Session Manager logs encrypted in S3/CloudWatch Logs with KMS.
    - **Explanation**: E.g., KMS-encrypted /prod/api/key.
- **Exam Tip**: Highlight KMS for compliance.

### **Compliance**:

- **Purpose**: Meet regulatory standards.
- **Features**:
    - Supports HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
    - Security Hub detects non-compliant instances (2025).
    - Patch Manager ensures OS compliance.
- **Explanation**: E.g., enforce Windows patches for PCI compliance.
- **Exam Tip**: Use Security Hub and Patch Manager for compliance.

### **Auditing**:

- **Purpose**: Track SSM actions.
- **Features**:
    - CloudTrail logs all SSM API calls.
    - Session Manager logs commands to S3/CloudWatch Logs.
    - Compliance reports track patch/state status.
    - **Explanation**: E.g., audit SendCommand for unauthorized scripts.
- **Exam Tip**: Use CloudTrail and Session Manager logs for auditing.

### **Key Notes**:

- **Security**: IAM + encryption + compliance + auditing = secure management.
- **Exam Tip**: Configure IAM, KMS, and Security Hub for secure SSM.

---

### **5. Systems Manager Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Systems Manager**: Free for most capabilities (charges apply for resources).
- **Specific Charges**:
    - Parameter Store: Free for standard; $0.05/10,000 API calls for advanced parameters.
    - Session Manager Logs: S3 ($0.023/GB), CloudWatch Logs ($0.50/GB ingested).
    - Automation: Free (charges for underlying resources, e.g., Lambda).
    - Inventory/Compliance: Free (charges for AWS Config if used).
- **Example**:
    - 1,000 EC2 instances, 10K advanced Parameter Store calls, 1 GB Session Manager logs to S3, 1 GB to CloudWatch Logs:
        - Parameter Store: 10K × $0.05/10K = $0.05.
        - S3 Logs: 1 GB × $0.023 = $0.023.
        - CloudWatch Logs: 1 GB × $0.50 = $0.50.
        - Total: $0.05 + $0.023 + $0.50 = ~$0.573/month.
- **Free Tier**: 10,000 Parameter Store API calls, standard parameters.

### **Cost Strategies**

- **Use Standard Parameters**:
    - Avoid advanced parameters unless needed (e.g., large data, versioning).
    - **Explanation**: E.g., use standard parameters to save $0.05/10K calls.
- **Optimize Logging**:
    - Archive Session Manager logs to S3 Glacier ($0.004/GB).
    - Limit CloudWatch Logs ingestion.
    - **Explanation**: E.g., save $0.496/GB by using S3 Glacier.
- **Targeted Operations**:
    - Use resource groups to limit Run Command/Patch Manager scope.
    - **Explanation**: E.g., patch only “Prod” instances to reduce overhead.
- **Schedule Maintenance**:
    - Use maintenance windows to consolidate tasks and reduce resource usage.
    - **Explanation**: E.g., schedule patching to save EC2 runtime costs.
- **Tagging**:
    - Tag managed instances and resources for cost tracking.
    - **Explanation**: E.g., tag EC2 with “Project:App”.
- **Monitor Usage**:
    - Use CloudWatch to track SSM API calls and optimize.
    - **Explanation**: E.g., reduce Parameter Store calls to save $0.10/month.

### **Key Notes**:

- **Cost Savings**: Standard parameters + optimized logging + tagging = lower costs.
- **Exam Tip**: Calculate costs for Parameter Store and logs.

---

### **6. Systems Manager Advanced Features**

### **Enhanced Patch Manager**:

- **Purpose**: Improved patching.
- **Features**:
    - Advanced scheduling and compliance reporting (2024).
    - **Explanation**: E.g., schedule patches with detailed compliance reports.
- **Exam Tip**: Know for compliance management.

### **Improved Explorer Reporting**:

- **Purpose**: Cross-account insights.
- **Features**:
    - Aggregates compliance and operational data across accounts/Regions (2024).
    - **Explanation**: E.g., view patch status for 10 accounts.
- **Exam Tip**: Use for enterprise monitoring.

### **Security Hub Integration**:

- **Purpose**: Centralized compliance.
- **Features**:
    - Detects non-compliant instances (e.g., missing patches) (2025).
    - Aggregates findings with GuardDuty, Inspector.
    - **Explanation**: E.g., flag unpached EC2 instances.
- **Exam Tip**: Use Security Hub for compliance.

### **Hybrid Activations**:

- **Purpose**: Manage on-premises resources.
- **Features**:
    - Registers on-premises servers as managed instances.
    - **Explanation**: E.g., patch on-premises Linux servers.
- **Exam Tip**: Know for hybrid environments.

### **Change Calendar**:

- **Purpose**: Control maintenance timing.
- **Features**:
    - Defines blackout periods for changes.
    - **Explanation**: E.g., block patching during holiday sales.
- **Exam Tip**: Use for operational control.

### **Key Notes**:

- **Flexibility**: Enhanced Patch Manager + Explorer + hybrid = advanced management.
- **Exam Tip**: Master Patch Manager, Explorer, and Security Hub.

---

### **7. Systems Manager Use Cases**

Understand practical applications.

### **Instance Management**

- **Setup**: Session Manager, Run Command for EC2.
- **Features**: Secure access, remote commands.
- **Explanation**: E.g., update software on 500 EC2 instances.

### **Patch Management**

- **Setup**: Patch Manager with baselines, maintenance windows.
- **Features**: Automated OS/application patching.
- **Explanation**: E.g., patch Windows EC2 monthly.

### **Configuration Management**

- **Setup**: Parameter Store, State Manager.
- **Features**: Secure config storage, enforce compliance.
- **Explanation**: E.g., store API keys, ensure software installed.

### **Hybrid Environment Management**

- **Setup**: Hybrid Activations, Inventory.
- **Features**: Manage on-premises and cloud resources.
- **Explanation**: E.g., track software on on-premises servers.

---

### **8. Systems Manager vs. Other Management Tools**

| **Feature** | **Systems Manager** | **OpsWorks** | **Elastic Beanstalk** |
| --- | --- | --- | --- |
| **Type** | Resource Management | Configuration Management | App Deployment |
| **Focus** | Patching, automation | Chef/Puppet orchestration | App platform |
| **Scope** | EC2, on-premises | EC2, on-premises | App environments |
| **Cost** | Free (resource costs) | Free (resource costs) | Free (resource costs) |
| **Use Case** | Patch EC2, manage configs | Orchestrate stacks | Deploy web apps |

### **Explanation**:

- **Systems Manager**: Broad resource management and automation.
- **OpsWorks**: Chef/Puppet-based configuration management.
- **Elastic Beanstalk**: Simplified app deployment.

---

### **9. Detailed Explanations for Mastery**

- **Enhanced Patch Manager**:
    - **Example**: Schedule patches with compliance reports.
    - **Why It Matters**: Streamlined patching (2024).
- **Improved Explorer Reporting**:
    - **Example**: View compliance across 10 accounts.
    - **Why It Matters**: Enterprise insights (2024).
- **Security Hub Integration**:
    - **Example**: Flag non-compliant EC2 instances.
    - **Why It Matters**: Centralized compliance (2025).

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Session Manager | Secure shell access | No SSH, logs to S3/CloudWatch | Core Concept |
| Patch Manager | Automate patching | Baselines, maintenance windows | Core Concept |
| Parameter Store | Store configs | KMS encryption, free standard | Core Concept |
| Explorer | Operational insights | Cross-account reporting (2024) | Flexibility |
| Automation | Workflow execution | YAML/JSON documents | Flexibility |
| Security Hub | Compliance monitoring | Non-compliant instances (2025) | Security, Resilience |
| Hybrid Activations | On-premises management | Registers servers as managed | Flexibility |