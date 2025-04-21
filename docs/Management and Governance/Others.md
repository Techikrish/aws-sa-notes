# Others

### **1. AWS Config**

- **Overview**: Tracks and records AWS resource configurations, monitors changes, and ensures compliance with desired configurations.
- **Key Features**:
    - Records resource configuration history and change timelines.
    - Evaluates resources against compliance rules (custom or managed).
    - Integrates with CloudTrail, SNS, and Security Hub for auditing and alerts.
- **Use Cases**: Audit compliance (e.g., S3 encryption), track configuration drift, troubleshoot changes.
- **Recent Updates (2024–2025)**:
    - Enhanced rule evaluation with ML-based insights (October 2024).
    - Security Hub integration for compliance findings (January 2025).
- **Exam Notes**:
    - **Security**: Use for compliance auditing (e.g., CIS Benchmarks).
    - **Resilience**: Track configuration changes for root cause analysis.
    - **Cost**: $0.003/100 evaluations; optimize by limiting rules.
- **Key Tip**: Compare with Trusted Advisor (best practices) and Security Hub (security findings).

---

### **2. AWS Compute Optimizer**

- **Overview**: Analyzes AWS resource usage to recommend optimal configurations for performance and cost.
- **Key Features**:
    - Recommends EC2, EBS, Lambda, and ECS (Fargate) optimizations.
    - Uses ML to analyze CloudWatch metrics and usage patterns.
    - Provides savings estimates with Savings Plans/Reserved Instances.
- **Use Cases**: Right-size EC2 instances, optimize Lambda memory, reduce costs.
- **Recent Updates (2024–2025)**:
    - ECS Fargate support expanded (January 2024).
    - Enhanced ML for cross-Region analysis (October 2024).
- **Exam Notes**:
    - **Performance**: Improve EC2/Lambda efficiency.
    - **Cost**: Free service; saves costs via right-sizing (e.g., $100/month by downsizing EC2).
    - **Resilience**: Suggests Multi-AZ configurations.
- **Key Tip**: Free to use; opt-in via console. Compare with Trusted Advisor (broader checks).

---

### **3. AWS Health Dashboard**

- **Overview**: Provides personalized visibility into AWS service health, resource performance, and scheduled events.
- **Key Features**:
    - **Service Health Dashboard**: Public status of AWS services.
    - **Personal Health Dashboard**: Alerts for resource-specific issues (e.g., EC2 outages).
    - Integrates with CloudWatch Events, SNS for notifications.
- **Use Cases**: Monitor service disruptions, plan for maintenance, respond to incidents.
- **Recent Updates (2024–2025)**:
    - Improved proactive notifications for maintenance (March 2024).
    - Security Hub integration for health-related findings (January 2025).
- **Exam Notes**:
    - **Resilience**: Use for incident response and HA planning.
    - **Security**: Monitor unauthorized changes impacting health.
    - **Cost**: Free; charges for SNS/CloudWatch notifications (e.g., $0.02/1,000 emails).
- **Key Tip**: Personal Health Dashboard is account-specific; Service Health Dashboard is global.

---

### **4. AWS License Manager**

- **Overview**: Centralizes management and tracking of software licenses (e.g., Windows Server, SQL Server) across AWS and on-premises.
- **Key Features**:
    - Tracks license usage for BYOL (Bring Your Own License) and AWS-provided licenses.
    - Enforces license rules to prevent overages.
    - Integrates with AWS Organizations, Systems Manager, and Marketplace.
- **Use Cases**: Manage Microsoft licenses, ensure compliance, track usage in multi-account setups.
- **Recent Updates (2024–2025)**:
    - Enhanced BYOL tracking for Marketplace purchases (October 2024).
    - Improved reporting for hybrid environments (March 2024).
- **Exam Notes**:
    - **Security**: Ensure license compliance for audits.
    - **Cost**: Free; prevents fines from license overages.
    - **Resilience**: Tracks licenses across Regions for DR.
- **Key Tip**: Use with Systems Manager for inventory; compare with Service Catalog for governance.

---

### **5. Amazon Managed Grafana**

- **Overview**: Fully managed service for Grafana, an open-source platform to visualize metrics, logs, and traces.
- **Key Features**:
    - Integrates with AWS data sources (CloudWatch, Prometheus, OpenSearch) and third-party sources (e.g., Splunk, Datadog).
    - Supports SSO (IAM Identity Center, SAML), audit logs via CloudTrail.
    - Creates dashboards for cost, performance, and health monitoring.
- **Use Cases**: Monitor EKS/ECS containers, visualize AWS Cost and Usage Reports, track application metrics.
- **Recent Updates (2024–2025)**:
    - VPC endpoint support for private data sources (January 2024).
        
        [](https://imgs.search.brave.com/KZXVktnVJ6okk1cbz_YrTO8n9jrAh-MZ6dMjtHHeorc/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjM1MDFlM2Jl/Zjk5YjZhMjVmOGQ3/MTBlYTIxZjQ4YmI1/ZjA0ODMyMzU4Yzc0/YzJlMzVjNTg5N2Ji/YTViYTUwYi9kZXYu/Y2xhc3NtZXRob2Qu/anAv)
        
    - Enhanced cost visualization dashboards (October 2024).
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Exam Notes**:
    - **Performance**: Visualize real-time metrics for optimization.
    - **Security**: SSO and CloudTrail for compliance.
    - **Cost**: $9/editor, $5/viewer per month; 90-day free trial (5 users).
- **Key Tip**: Pairs with Managed Service for Prometheus; compare with CloudWatch Dashboards.

---

### **6. Amazon Managed Service for Prometheus**

- **Overview**: Managed Prometheus-compatible service for monitoring containerized workloads at scale.
- **Key Features**:
    - Uses PromQL for querying metrics from EKS, ECS, and Kubernetes.
    - Auto-scales ingestion/storage; stores data across three AZs.
    - Integrates with Managed Grafana for visualization.
- **Use Cases**: Monitor Kubernetes clusters, track container performance, set alerts.
- **Recent Updates (2024–2025)**:
    - Improved PromQL query performance (October 2024).
    - Enhanced Grafana integration for alerting (March 2024).
        
        [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
        
- **Exam Notes**:
    - **Performance**: Scales for large container environments.
    - **Resilience**: Multi-AZ storage for durability.
    - **Cost**: Pay-per-use (e.g., $0.10/billion samples queried); free tier available.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Key Tip**: Use with Managed Grafana; compare with CloudWatch for non-container monitoring.

---

### **7. AWS Proton**

- **Overview**: Platform for platform teams to manage and deploy container and serverless applications with standardized templates.
- **Key Features**:
    - Defines environment and service templates (e.g., ECS, Lambda).
    - Enables developers to deploy code via self-service.
    - Integrates with CodePipeline, CloudFormation, and Organizations.
- **Use Cases**: Standardize microservices deployments, simplify serverless rollouts.
- **Recent Updates (2024–2025)**:
    - AWS CDK support via CodeBuild provisioning (January 2024).
        
        [](https://imgs.search.brave.com/KZXVktnVJ6okk1cbz_YrTO8n9jrAh-MZ6dMjtHHeorc/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjM1MDFlM2Jl/Zjk5YjZhMjVmOGQ3/MTBlYTIxZjQ4YmI1/ZjA0ODMyMzU4Yzc0/YzJlMzVjNTg5N2Ji/YTViYTUwYi9kZXYu/Y2xhc3NtZXRob2Qu/anAv)
        
    - Enhanced template versioning (October 2024).
- **Exam Notes**:
    - **Performance**: Streamlines developer deployments.
    - **Security**: Enforces consistent configurations.
    - **Cost**: Free; charges for underlying resources (e.g., Lambda, ECS).
- **Key Tip**: Compare with Service Catalog (IT services) and CloudFormation (IaC).

---

### **8. AWS Service Catalog**

- **Overview**: Enables organizations to create and manage catalogs of approved IT services for AWS deployment.
- **Key Features**:
    - Defines portfolios of CloudFormation templates for services (e.g., EC2, RDS).
    - Controls access via IAM and Organizations.
    - Tracks usage and compliance.
- **Use Cases**: Govern self-service deployments, ensure compliant architectures, manage multi-tier apps.
- **Recent Updates (2024–2025)**:
    - Improved integration with AWS Proton for container templates (March 2024).
    - Enhanced compliance reporting with Security Hub (January 2025).
- **Exam Notes**:
    - **Security**: Enforce approved configurations for compliance.
    - **Resilience**: Standardize HA architectures.
    - **Cost**: Free; charges for deployed resources (e.g., EC2).
- **Key Tip**: Use with Organizations for governance; compare with Proton for developer-focused deployments.

---

### **Quick Reference Table**

| **Service** | **Purpose** | **Key Feature** | **Cost** | **Exam Focus** |
| --- | --- | --- | --- | --- |
| AWS Config | Track resource configs | Compliance rules, change history | $0.003/100 evaluations | Security, Resilience |
| AWS Compute Optimizer | Optimize resource usage | ML-based EC2/Lambda recommendations | Free | Cost, Performance |
| AWS Health Dashboard | Monitor service/resource health | Personal alerts, SNS integration | Free (SNS charges apply) | Resilience, Security |
| AWS License Manager | Manage software licenses | BYOL tracking, compliance rules | Free | Security, Cost |
| Amazon Managed Grafana | Visualize metrics/logs | Dashboards, SSO, multi-source | $9/editor, $5/viewer | Performance, Security |
| Amazon Managed Service for Prometheus | Monitor containers | PromQL, auto-scaling, Grafana | Pay-per-use (e.g., $0.10/billion samples) | Performance, Resilience |
| AWS Proton | Standardize app deployments | Templates for ECS/Lambda | Free (resource charges) | Performance, Security |
| AWS Service Catalog | Govern IT services | Approved CloudFormation templates | Free (resource charges) | Security, Resilience |