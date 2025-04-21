# AWS Cost Management

### **AWS Budgets**

### **Overview**

- **Definition**: A cost management tool to set custom budgets for AWS costs, usage, Reserved Instances (RI), or Savings Plans, with alerts and automated actions when thresholds are exceeded.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Key Features**:
    - Tracks cost, usage, RI/Savings Plans utilization, and coverage.
    - Supports daily, monthly, quarterly, or annual budgets.
    - Sends notifications via email, SNS, Slack, or Chime.
    - Automates actions (e.g., apply IAM policies) when thresholds are breached.
- **Use Cases**: Monitor spending, enforce cost limits, optimize RI/Savings Plans usage.
- **Updates (2024–2025)**:
    - Security Hub integration for compliance monitoring (Jan 2025).
    - Enhanced forecasting accuracy (2024).

### **Core Concepts**

- **Budget Types**:
    - **Cost Budget**: Tracks spending (e.g., $1,000/month EC2).
    - **Usage Budget**: Tracks service usage (e.g., 1,000 Lambda invocations).
    - **RI/Savings Plans Utilization**: Monitors usage percentage (e.g., 80% utilization).
    - **RI/Savings Plans Coverage**: Tracks covered usage (e.g., 90% EC2 covered).
    - **Explanation**: E.g., alert if EC2 costs exceed $500/month.
- **Notifications**: Up to 5 thresholds per budget (e.g., 80%, 100%).
- **Actions**: Apply IAM policies or stop resources when limits are hit.
- **Filters**: Region, service, tag, account, etc.

### **Performance**

- **Updates**: Data refreshed up to 3 times/day (8–12 hour lag).
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
- **Scalability**: Supports budgets across AWS Organizations.

### **Resilience**

- **Availability**: Multi-AZ, highly available.
- **Monitoring**: CloudWatch metrics, CloudTrail logs, Budgets Dashboard.

### **Security**

- **Access Control**: IAM policies restrict budget creation/viewing.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2 (GovCloud).
- **Auditing**: CloudTrail logs, Security Hub (2025).

### **Cost Optimization**

- **Pricing**:
    - Budget monitoring: Free.
    - Action-enabled budgets: First 2 free, then $0.10/day each.
    - Reports: $0.01/report.
    - **Example**: 5 budgets, 2 with actions, 10 reports/month = $0.30/day (actions) + $0.10 (reports) = ~$12/month.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Strategies**:
    - Use cost allocation tags for granular tracking.
    - Set variable budgets (e.g., 5% monthly increase).
    - Automate actions to prevent overspending.

### **Key Notes**

- **Use Case**: Set a $1,000 monthly EC2 budget with SNS alerts at 80%.
- **Exam Tip**: Know budget types, actions, and integration with Cost Explorer.
    
    [](https://imgs.search.brave.com/Y1NEK3JsVGdJEnfZd2erAv-PegWhibDCDdGBmCl6rcg/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWZiYWU5NzQz/YTg5NzAxNjIzOGNi/ZGNjY2YzN2I0NjIw/YmNlODE2NTE5MDJh/YmZiZTQ5ZWMzZjUx/N2E2ZWFkMC93d3cu/cHJvc3Blcm9wcy5j/b20v)
    

---

### **AWS Cost and Usage Report (CUR)**

### **Overview**

- **Definition**: Provides the most detailed AWS billing data, including costs, usage, and metadata, exported to an S3 bucket for analysis.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Key Features**:
    - Granular data (hourly, daily, monthly) by service, resource, tag.
    - Supports unblended, blended, and amortized costs.
    - Integrates with QuickSight, Athena, Redshift for analytics.
- **Use Cases**: Detailed billing analysis, chargebacks, custom reporting.
- **Updates (2024–2025)**: Enhanced CUR exports with QuickSight dashboards (2024).

### **Core Concepts**

- **Report**: CSV file in S3 with cost/usage data.
    - **Granularity**: Hourly, daily, monthly.
    - **Data Types**: Costs, usage, RI/Savings Plans, tags.
    - **Explanation**: E.g., track EC2 costs by instance ID.
- **Integration**: Use Athena for SQL queries or QuickSight for visualization.
- **Cost Allocation Tags**: Categorize costs by project, team, etc.

### **Performance**

- **Updates**: Refreshed up to 3 times/day.
- **Scalability**: Handles large datasets for enterprise accounts.

### **Resilience**

- **Availability**: S3 storage (11 9s durability).
- **Monitoring**: CloudWatch for S3 access, CloudTrail for API calls.

### **Security**

- **Encryption**: S3 server-side encryption (SSE-KMS/SSE-S3).
- **Access Control**: IAM policies for S3 bucket access.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.

### **Cost Optimization**

- **Pricing**:
    - Free for report generation.
    - S3 storage: $0.023/GB-month.
    - Analysis: Athena ($5/TB scanned), QuickSight ($18/user/month).
    - **Example**: 1 GB report, 10 Athena queries (1 TB) = $0.023 (S3) + $5 (Athena) = ~$5.02/month.
- **Strategies**:
    - Compress reports to reduce S3 costs.
    - Limit Athena queries with partitions.
    - Use tags for precise analysis.

### **Key Notes**

- **Use Case**: Export CUR to S3, query with Athena for team cost allocation.
- **Exam Tip**: Know CUR granularity, S3 integration, and tag importance.
    
    [](https://imgs.search.brave.com/XzQGK6jKyuuh7Tb-ycD7BDMXvyDsKNwARJboBLEQnbI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWQ4ZDdmNzRh/ZWJjYmNkOTdjYWI2/NjJkNzllYjljNDFj/ZWQyMDJlMjY1MzVk/MjVkOGEyMzczNTI5/ZDA0MGQ1Zi93d3cu/Y2xvdWR6ZXJvLmNv/bS8)
    

---

### **AWS Cost Explorer**

### **Overview**

- **Definition**: A visualization tool to analyze AWS costs and usage, offering custom reports, forecasts, and RI/Savings Plans recommendations.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Key Features**:
    - Visualizes costs/usage for up to 13 months.
    - Forecasts costs for 12 months.
    - Provides RI/Savings Plans utilization and coverage reports.
    - Supports hourly/resource-level granularity.
- **Use Cases**: Identify cost drivers, forecast budgets, optimize RI/Savings Plans.
- **Updates (2024–2025)**:
    - Enhanced forecasting with Amazon Q Developer (2024).
    - Anomaly detection improvements (2024).

### **Core Concepts**

- **Reports**:
    - Default: Top 5 services, EC2 usage, member accounts.
    - Custom: Filter by service, tag, region, etc.
    - **Explanation**: E.g., report EC2 costs by tag Environment=Prod.
- **Forecasting**: Predicts future costs based on historical data.
- **Granularity**: Daily, monthly, hourly (optional).
- **Recommendations**: Suggests RI/Savings Plans purchases.

### **Performance**

- **Updates**: Data refreshed every 24 hours.
- **Scalability**: Handles enterprise-scale accounts.

### **Resilience**

- **Availability**: Multi-AZ, highly available.
- **Monitoring**: CloudWatch metrics, X-Ray for API tracing.

### **Security**

- **Access Control**: IAM policies restrict report access.
- **Encryption**: HTTPS, KMS for data at rest.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.

### **Cost Optimization**

- **Pricing**:
    - Usage: Free.
    - API: $0.01 per paginated request.
    - **Example**: 100 API requests = $1/month.
- **Strategies**:
    - Use default reports to avoid API costs.
    - Save custom reports for reuse.
    - Leverage forecasting for budget planning.
        
        [](https://imgs.search.brave.com/8xjskOYhAlTQ3ki5jD5nn2FlGkcu_9yGi8cgHecIoe4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTY0NGUwMjdi/NDA4NTNiODUxYWNh/YTA5NGI1Nzk4OWJj/NTc1NTZlNGM2YWQx/NDA4ZTFmMjMwYmU2/NDcyYmNlMS93d3cu/Y2xvdWRmb3JlY2Fz/dC5pby8)
        

### **Key Notes**

- **Use Case**: Analyze EC2 cost trends, forecast next quarter’s bill.
- **Exam Tip**: Know report types, forecasting, and RI/Savings Plans integration.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

---

### **Savings Plans**

### **Overview**

- **Definition**: Flexible pricing model offering up to 72% savings on AWS compute usage (EC2, Fargate, Lambda) in exchange for a 1- or 3-year commitment.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Key Features**:
    - Types: Compute (flexible across instance types), EC2 Instance, SageMaker.
    - Payment options: All upfront, partial upfront, no upfront.
    - Applies automatically across AWS Organizations.
- **Use Cases**: Reduce costs for steady-state workloads, modernize with Lambda/Fargate.
- **Updates (2024–2025)**: Improved Cost Explorer recommendations (2024).

### **Core Concepts**

- **Compute Savings Plans**: Up to 66% off, flexible across regions, instance families.
- **EC2 Instance Savings Plans**: Up to 72% off, specific to instance family/region.
- **SageMaker Savings Plans**: Up to 64% off for ML workloads.
- **Commitment**: Hourly spend (e.g., $10/hour for 3 years).
- **Explanation**: E.g., $5/hour Compute Savings Plan for EC2 and Lambda.

### **Performance**

- **Application**: Auto-applied to eligible usage.
- **Scalability**: Scales with AWS Organizations.

### **Resilience**

- **Availability**: Managed by AWS, no downtime risk.
- **Monitoring**: Cost Explorer utilization/coverage reports.

### **Security**

- **Access Control**: IAM policies for purchase/viewing.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.

### **Cost Optimization**

- **Pricing**:
    - Based on commitment (e.g., $10/hour for 1 year).
    - No additional cost for management.
    - **Example**: $5/hour for 1 year = $43,800/year, saving 66% vs. On-Demand.
- **Strategies**:
    - Use Cost Explorer recommendations for optimal plans.
    - Monitor utilization/coverage to maximize savings.
    - Choose Compute Savings Plans for flexibility.
        
        [](https://imgs.search.brave.com/Mil2ShEhnFOIG3hMWqbgXU7Lf_Xb0Y_Omwwr_CwYj94/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTUwMTI1ZTcx/NGQ1MmJmMzgzNmVj/Y2NjMzA0YWQxMjcx/NGI0MmQyNWQ5Y2Mx/YzJmMDc0OWI5MzEw/YWVlNzNhOC9hdXRv/bWF0ZWluZnJhLmNv/bS8)
        

### **Key Notes**

- **Use Case**: Commit $10/hour for EC2 to save 72% in us-east-1.
- **Exam Tip**: Know plan types, commitment terms, and Cost Explorer integration.

---

### **Comparison**

| **Feature** | **AWS Budgets** | **Cost and Usage Report** | **Cost Explorer** | **Savings Plans** |
| --- | --- | --- | --- | --- |
| **Type** | Budgeting Tool | Billing Data Export | Cost Visualization | Pricing Model |
| **Focus** | Cost control, alerts | Granular data analysis | Trends, forecasting | Compute cost savings |
| **Cost** | Free, $0.10/action/day | S3 ($0.023/GB) | Free, $0.01/API | Commitment-based |
| **Use Case** | Enforce spending limits | Custom billing reports | Analyze cost drivers | Reduce EC2/Lambda costs |

### **Explanation**:

- **Budgets**: Proactive cost management with alerts/actions.
- **CUR**: Detailed data for advanced analytics.
- **Cost Explorer**: Visual insights and forecasting.
- **Savings Plans**: Long-term savings for compute usage.