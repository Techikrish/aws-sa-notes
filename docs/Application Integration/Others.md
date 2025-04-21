# Others

### **Amazon AppFlow**

### **Overview**

- **Definition**: Fully managed integration service to securely transfer data between SaaS applications (e.g., Salesforce, Zendesk) and AWS services (e.g., S3, Redshift) without code.
- **Key Features**:
    - Supports 50+ SaaS connectors (e.g., Salesforce, Slack, Asana).
    - Runs flows on-demand, on schedule, or event-driven (via EventBridge).
    - Data transformation (filtering, mapping, aggregation).
    - Integrates with AWS PrivateLink, KMS, CloudTrail, Glue Data Catalog.
- **Use Cases**: Sync CRM data to Redshift, hydrate S3 data lakes, automate SaaS workflows.
- **Updates (2024–2025)**:
    - Enhanced data transformation with JSON Path expressions (2024).
        
        [](https://imgs.search.brave.com/H4IXhEKfvV3k5h86A-E7tvjsXWMEnGqpMpK44qbYeUw/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGYwNzg0ZmUy/Mjc5ZWQwOTlhNWEw/MDJmZTI3NGM5OGU2/Y2Q2MDUwNTUwOTFi/Zjk5MzQzZDYyOWZi/Mjc4ZjM3OS9jb21t/dW5pdHkuYXdzLw)
        
    - Asana connector for workspace/task data (2024).
        
        [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
        
    - Security Hub integration for compliance monitoring (Jan 2025).

### **Core Concepts**

- **Flow**: Defines data transfer from source (SaaS/AWS) to destination (AWS/SaaS).
    - **Types**: Full transfer (snapshot), incremental (new/updated records).
    - **Triggers**: On-demand, scheduled, event-driven.
    - **Explanation**: E.g., daily Salesforce leads to S3.
- **Connector Profile**: Stores credentials for SaaS/AWS integration.
    - **Explanation**: E.g., OAuth for Salesforce.
- **Data Transformation**: Filters, maps, aggregates data during transfer.
    - **Explanation**: E.g., map Salesforce name to Redshift customer_name.

### **Performance**

- **Low Latency**: Near real-time transfers (e.g., <1 min for Salesforce to RDS).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **High Throughput**: Processes up to 100 GB/flow, millions of records.
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    
- **Scalability**: Auto-scales without provisioning.

### **Resilience**

- **Multi-AZ**: Highly available architecture, no single points of failure.
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    
- **Monitoring**: CloudWatch metrics (flow runs, errors), CloudTrail logs.
- **SLA**: 99.9% uptime per Region.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Explanation**: E.g., retry failed flow runs automatically.

### **Security**

- **Encryption**: Data encrypted in transit (TLS) and at rest (KMS).
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    
- **Access Control**: IAM policies, PrivateLink for private transfers.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2 (GovCloud).
- **Auditing**: CloudTrail logs, Security Hub (2025).
- **Explanation**: E.g., restrict flows to VPC with PrivateLink.

### **Cost Optimization**

- **Pricing**:
    - Flow runs: $0.001/run (US-East-1).
    - Data processing: $0.02/GB.
    - KMS: $1/key/month.
    - **Example**: 1,000 daily Salesforce flows, 10 GB/month = $1 (runs) + $0.20 (data) = $1.20/day or ~$36/month.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Strategies**:
    - Use incremental transfers to reduce data volume.
    - Schedule flows during off-peak hours.
    - Tag flows for cost tracking.
- **Free Tier**: None explicitly noted.

### **Key Notes**

- **Use Case**: Sync Salesforce opportunities to Redshift for real-time dashboards.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **Comparison**: AppFlow (SaaS integration) vs. EventBridge (event routing) vs. SQS (queuing).
- **Exam Tip**: Know connectors, triggers, and PrivateLink.

---

### **AWS AppSync**

### **Overview**

- **Definition**: Serverless GraphQL and Pub/Sub API service to simplify data access and real-time updates for web/mobile apps.
- **Key Features**:
    - Creates GraphQL APIs to query multiple data sources (e.g., DynamoDB, Lambda).
    - Supports real-time subscriptions via WebSocket.
    - Integrates with Cognito, IAM, API keys, Lambda for authorization.
    - Merges multiple GraphQL APIs into a federated super-graph.
- **Use Cases**: Build scalable APIs for apps, real-time dashboards, chat apps.
- **Updates (2024–2025)**:
    - WebSocket API support for real-time Pub/Sub (Jan 2025).
    - EventBridge integration for native GraphQL API targets (2024).
    - CDK L2 constructs for WebSocket APIs (2025).

### **Core Concepts**

- **GraphQL API**: Unified endpoint for querying data via schema.
    - **Operations**: Queries (read), Mutations (write), Subscriptions (real-time).
    - **Explanation**: E.g., query DynamoDB for user data.
- **Data Source**: AWS services (DynamoDB, Lambda, RDS) or HTTP APIs.
- **Resolver**: Maps GraphQL queries to data source operations.
    - **Explanation**: E.g., resolver converts GraphQL query to DynamoDB GetItem.
- **Subscriptions**: Push real-time updates via WebSocket.
    - **Explanation**: E.g., notify clients of new chat messages.

### **Performance**

- **Low Latency**: Millisecond responses with caching.
- **High Throughput**: Handles millions of requests/second.
- **Scalability**: Serverless, auto-scales with demand.
- **Explanation**: E.g., 10M WebSocket connections for live dashboards.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Resilience**

- **Multi-AZ**: Highly available, no single points of failure.
- **Monitoring**: CloudWatch metrics (requests, errors), X-Ray for tracing, CloudTrail logs.
- **Explanation**: E.g., track subscription errors with CloudWatch.

### **Security**

- **Authorization**: API keys, IAM, Cognito, OIDC, Lambda-based.
- **Encryption**: HTTPS, KMS for data at rest.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2 (GovCloud).
- **Protection**: AWS WAF for API security.
- **Explanation**: E.g., secure API with Cognito User Pool.

### **Cost Optimization**

- **Pricing**:
    - GraphQL: $4/1M queries or mutations, $2/1M real-time updates.
    - Events: $1/1M operations, $0.08/1M connection minutes.
    - Cache: $0.02–$0.75/hour (optional).
    - **Example**: 5M queries, 2.5M real-time updates = $20 (queries) + $5 (updates) = $25/month.
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
- **Strategies**:
    - Enable caching to reduce query costs.
    - Use merged APIs to consolidate requests.
    - Limit subscriptions to specific events.
- **Free Tier**: 250,000 GraphQL requests, 250,000 Event API operations/month for 12 months.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Key Notes**

- **Use Case**: Real-time chat app with GraphQL subscriptions.
- **Comparison**: AppSync (GraphQL APIs) vs. API Gateway (REST APIs) vs. EventBridge (event routing).
- **Exam Tip**: Know GraphQL operations, subscriptions, and authorization modes.

---

### **Comparison: AppFlow vs. AppSync**

| **Feature** | **Amazon AppFlow** | **AWS AppSync** |
| --- | --- | --- |
| **Type** | SaaS Integration | GraphQL/Pub/Sub API |
| **Focus** | Data transfer | Data access, real-time |
| **Use Case** | Sync SaaS to AWS | Build scalable APIs |
| **Cost** | $0.001/flow, $0.02/GB | $4/1M queries, $2/1M updates |
| **Integration** | S3, Redshift, Salesforce | DynamoDB, Lambda, HTTP |

### **Explanation**:

- **AppFlow**: Automates bulk data transfers between SaaS and AWS.
- **AppSync**: Provides real-time API access for app development.