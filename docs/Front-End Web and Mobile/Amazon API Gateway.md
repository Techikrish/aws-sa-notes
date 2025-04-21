# Amazon API Gateway

### **Amazon API Gateway Overview**

- **Definition**: Amazon API Gateway is a fully managed service that enables developers to create, publish, maintain, monitor, and secure APIs at any scale, supporting RESTful, HTTP, and WebSocket APIs for serverless and traditional applications.
- **Key Features**:
    - Supports **RESTful APIs** (stateless, resource-based), **HTTP APIs** (simplified, cost-effective), and **WebSocket APIs** (stateful, real-time).
    - Integrates with AWS services (e.g., Lambda, DynamoDB, Step Functions) and external endpoints.
    - Provides API lifecycle management (stages, versioning, throttling).
    - Scales automatically to handle millions of requests per second.
    - Offers built-in security (IAM, Cognito, Lambda authorizers), monitoring (CloudWatch, X-Ray), and caching.
- **Use Cases**: Build serverless APIs, enable real-time applications (e.g., chat apps), expose microservices, integrate with legacy systems.
- **Key Updates (2024–2025)**:
    - **Enhanced WebSocket Streaming**: Improved performance for real-time data (October 2024).
    - **Security Hub Integration**: Compliance monitoring for API configurations (January 2025).
    - **FIPS 140-2 Compliance**: Enhanced for GovCloud (October 2024).
    - **EventBridge Integration**: Native GraphQL API targets for AppSync (2024).

---

### **1. Amazon API Gateway Core Concepts**

### **Components**

- **API Types**:
    - **RESTful APIs**:
        - Full-featured, supports stages, models, SDK generation.
        - Ideal for complex integrations and legacy compatibility.
        - **Explanation**: E.g., REST API for a microservices backend.
    - **HTTP APIs**:
        - Simplified, lower latency, up to 71% cheaper than REST APIs.
        - Ideal for serverless and cost-sensitive workloads.
        - **Explanation**: E.g., HTTP API for Lambda-based serverless app.
    - **WebSocket APIs**:
        - Stateful, supports bidirectional communication.
        - Ideal for real-time apps (e.g., chat, live dashboards).
        - **Explanation**: E.g., WebSocket API for real-time notifications.
- **API Endpoint**:
    - URL to access the API (e.g., https://api-id.execute-api.region.amazonaws.com/stage).
    - Types: **Regional**, **Edge-Optimized** (CloudFront-backed), **Private** (VPC-only).
    - **Explanation**: E.g., Regional endpoint for Lambda integration.
- **Resource**:
    - Logical entity in REST/HTTP APIs (e.g., /users, /orders).
    - Supports hierarchical paths (e.g., /users/{userId}).
    - **Explanation**: E.g., /orders resource for order management.
- **Method**:
    - HTTP verb (e.g., GET, POST) on a resource.
    - Maps to backend integrations (e.g., Lambda, HTTP).
    - **Explanation**: E.g., GET /users invokes Lambda function.
- **Integration**:
    - Connects API methods to backends (e.g., Lambda, DynamoDB, HTTP, Step Functions).
    - Types: **Lambda Proxy** (full request/response), **AWS Service** (direct service calls), **HTTP** (external endpoints).
    - **Explanation**: E.g., POST /orders integrates with DynamoDB PutItem.
- **Stage**:
    - Deployment environment (e.g., dev, prod).
    - Supports stage variables for configuration (e.g., Lambda aliases).
    - **Explanation**: E.g., prod stage for live API.
- **Gateway Responses**:
    - Customizable responses for errors (e.g., 403 Access Denied).
    - **Explanation**: E.g., customize 401 response for unauthorized access.

### **Key Concepts**

- **Throttling**:
    - Limits request rates to prevent abuse (default: 10,000 requests/second, 5,000 burst).
    - Configurable per stage, method, or client (with usage plans).
    - **Explanation**: E.g., limit 100 requests/second for /orders.
- **Caching**:
    - Caches backend responses to reduce latency and costs.
    - Configurable TTL (default: 300 seconds, max: 3,600 seconds).
    - **Explanation**: E.g., cache GET /users for 60 seconds.
- **Authorizers**:
    - Validates incoming requests.
    - Types: **IAM** (AWS credentials), **Cognito User Pools** (JWT tokens), **Lambda** (custom logic).
    - **Explanation**: E.g., Cognito authorizer for JWT-based access.
- **Usage Plans**:
    - Defines quotas and throttling for API keys.
    - **Explanation**: E.g., 500 requests/day for free-tier clients.
- **API Keys**:
    - Unique identifiers for client access, tied to usage plans.
    - **Explanation**: E.g., API key for third-party app.
- **WebSocket Routes**:
    - Defines actions for WebSocket APIs ($connect, $disconnect, $default, custom routes).
    - **Explanation**: E.g., $connect route authenticates WebSocket client.
- **Custom Domains**:
    - Maps APIs to custom domains (e.g., api.example.com).
    - Requires ACM certificates and Route 53.
    - **Explanation**: E.g., map REST API to api.myapp.com.
- **Canary Deployments**:
    - Tests new API versions with a subset of traffic.
    - **Explanation**: E.g., route 10% traffic to new /orders version.

### **Key Notes**:

- **Exam Relevance**: Understand API types, integrations, throttling, authorizers, and stages.
- **Mastery Tip**: Compare API Gateway vs. AppSync vs. ALB for API hosting.

---

### **2. API Gateway Performance Features**

API Gateway optimizes API request handling.

### **Low Latency**

- **Purpose**: Fast response times.
- **Features**:
    - HTTP APIs reduce overhead vs. REST APIs (2024).
    - WebSocket streaming for real-time data (2024).
    - Caching for frequently accessed endpoints.
- **Explanation**: E.g., HTTP API with caching delivers <50 ms responses.
- **Exam Tip**: Highlight HTTP APIs for low latency.

### **High Throughput**

- **Purpose**: Handle large request volumes.
- **Features**:
    - Scales to millions of requests/second automatically.
    - Throttling ensures backend stability.
- **Explanation**: E.g., process 10M requests/second for /users.
- **Exam Tip**: Use for high-traffic APIs.

### **Scalability**

- **Purpose**: Support growing workloads.
- **Features**:
    - Serverless architecture auto-scales with demand.
    - Regional endpoints distribute load globally.
    - **Explanation**: E.g., scale API for 100,000 concurrent users.
- **Exam Tip**: Emphasize serverless scalability.

### **Key Notes**:

- **Performance**: Low latency + high throughput + scalability = efficient APIs.
- **Exam Tip**: Optimize with HTTP APIs, caching, and throttling.

---

### **3. API Gateway Resilience Features**

Resilience ensures reliable API operations.

### **Multi-AZ/Region Redundancy**

- **Purpose**: Survive failures.
- **Features**:
    - Regional APIs deploy across multiple AZs.
    - Edge-Optimized APIs use CloudFront for global redundancy.
    - Private APIs operate within VPC for HA.
- **Explanation**: E.g., Regional API continues if us-east-1a fails.
- **Exam Tip**: Highlight multi-AZ for HA.

### **Continuous Operation**:

- **Purpose**: Uninterrupted API access.
- **Features**:
    - Automatic retries for transient backend failures.
    - Throttling prevents backend overload.
    - Canary deployments reduce deployment risks.
- **Explanation**: E.g., retry failed Lambda invocation.
- **Exam Tip**: Use for 24/7 APIs.

### **Monitoring and Recovery**:

- **Purpose**: Detect and resolve issues.
- **Features**:
    - CloudWatch metrics (e.g., Latency, 4XXError, 5XXError).
    - CloudWatch Logs for request/response details.
    - X-Ray for tracing end-to-end latency.
    - CloudTrail logs API calls (e.g., CreateApi).
    - Security Hub detects misconfigured APIs (2025).
- **Explanation**: E.g., alarm on high 5XXError rate.
- **Exam Tip**: Use CloudWatch and X-Ray for monitoring.

### **Data Durability**:

- **Purpose**: Protect API configurations.
- **Features**:
    - API definitions stored durably in API Gateway.
    - Export/import APIs for backup.
- **Explanation**: E.g., recover API config after misconfiguration.
- **Exam Tip**: Highlight export for durability.

### **Key Notes**:

- **Resilience**: Multi-AZ + retries + monitoring + durability = reliable APIs.
- **Exam Tip**: Design resilient APIs with Regional endpoints and monitoring.

---

### **4. API Gateway Security Features**

Security is a core focus for API Gateway in SAA-C03.

### **Access Control**

- **IAM Policies**:
    - Restrict API Gateway actions (execute-api:Invoke, apigateway:CreateApi).
    - Scope to APIs, stages, or methods.
    - **Example**: {"Effect": "Allow", "Action": "execute-api:Invoke", "Resource": "arn:aws:execute-api:*:*:api-id/*/GET/users"}.
- **Resource Policies**:
    - Control access to APIs by IP, VPC, or AWS account.
    - **Explanation**: E.g., restrict API to VPC endpoint.
- **Authorizers**:
    - IAM, Cognito, Lambda for request validation.
    - **Explanation**: E.g., Lambda authorizer checks custom headers.
- **Exam Tip**: Practice IAM, resource policies, and authorizers.

### **Encryption**

- **In Transit**:
    - HTTPS for all API endpoints (enforced).
    - TLS 1.2+ for secure connections.
    - **Explanation**: E.g., secure /orders with HTTPS.
- **At Rest**:
    - KMS encrypts cached responses and secrets.
    - **Explanation**: E.g., KMS-encrypted cache for /users.
- **Exam Tip**: Highlight KMS for compliance.

### **Network Security**

- **VPC Integration**:
    - Private APIs accessible only via VPC endpoints (Interface VPC Endpoint).
    - Security groups and VPC policies control access.
    - **Explanation**: E.g., restrict API to internal VPC.
- **WAF Integration**:
    - AWS WAF protects against SQL injection, XSS, DDoS.
    - **Explanation**: E.g., block malicious requests to /login.
- **Exam Tip**: Use VPC endpoints and WAF for secure APIs.

### **Compliance**:

- **Purpose**: Meet regulatory standards.
- **Features**:
    - Supports HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
    - Security Hub detects non-compliant APIs (2025).
- **Explanation**: E.g., host HIPAA-compliant API for healthcare app.
- **Exam Tip**: Use Security Hub for compliance.

### **Auditing**:

- **Purpose**: Track API activity.
- **Features**:
    - CloudTrail logs API Gateway management and execution calls.
    - CloudWatch Logs for request/response details.
    - Security Hub monitors compliance (2025).
    - **Explanation**: E.g., audit Invoke for unauthorized access.
- **Exam Tip**: Use CloudTrail and CloudWatch for auditing.

### **Key Notes**:

- **Security**: IAM + encryption + VPC + WAF + compliance + auditing = secure APIs.
- **Exam Tip**: Configure authorizers, VPC endpoints, and WAF for secure API Gateway.

---

### **5. API Gateway Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing (us-east-1)**

- **REST APIs**:
    - $3.50/1M requests (first 333M), tiered discounts for higher volumes.
    - Cache: $0.02–$3.84/hour (based on size, 0.5 GB–237 GB).
- **HTTP APIs**:
    - $1.00/1M requests (first 300M), tiered discounts.
- **WebSocket APIs**:
    - $1.00/1M messages, $0.25/1M connection minutes.
- **Other Costs**:
    - Data transfer out: $0.09/GB.
    - CloudWatch Logs: $0.50/GB.
    - WAF: $0.60/1M requests.
    - KMS: $1/key/month.
- **Example**:
    - HTTP API: 10M requests, 10 GB data transfer, 1 GB cache (0.5 GB, $0.02/hour), 1 GB logs.
        - Requests: 10M × $1/1M = $10.
        - Cache: $0.02 × 24 × 30 = $14.40.
        - Data Transfer: 10 GB × $0.09 = $0.90.
        - Logs: 1 GB × $0.50 = $0.50.
        - Total: $10 + $14.40 + $0.90 + $0.50 = ~$25.80/month.
- **Free Tier**:
    - 1M HTTP API requests, 1M REST API requests, 1M WebSocket messages, 750K connection minutes for 12 months.

### **Cost Strategies**

- **Use HTTP APIs**:
    - Up to 71% cheaper than REST APIs.
    - **Explanation**: E.g., HTTP API saves $2.50/1M vs. REST API.
- **Enable Caching**:
    - Cache responses to reduce backend requests.
    - **Explanation**: E.g., cache /users for 60 seconds, saving $5/1M requests.
- **Optimize Throttling**:
    - Set lower limits to reduce backend costs.
    - **Explanation**: E.g., limit to 1,000 requests/second, saving $2/1M.
- **Minimize Logging**:
    - Disable verbose logging or use sampling.
    - **Explanation**: E.g., reduce logs to save $0.50/GB.
- **Use Regional Endpoints**:
    - Avoid CloudFront costs for Edge-Optimized APIs if global distribution isn’t needed.
    - **Explanation**: E.g., Regional endpoint saves data transfer costs.
- **Tagging**:
    - Tag APIs for cost tracking.
    - **Explanation**: E.g., tag API with “Project:Orders”.
- **Monitor Usage**:
    - Use Cost Explorer and CloudWatch to optimize request volume.
    - **Explanation**: E.g., reduce requests to save $10/month.

### **Key Notes**:

- **Cost Savings**: HTTP APIs + caching + throttling + tagging = lower costs.
- **Exam Tip**: Calculate request and cache costs, optimize with HTTP APIs.

---

### **6. API Gateway Advanced Features**

### **Enhanced WebSocket Streaming**:

- **Purpose**: High-performance real-time apps.
- **Features**:
    - Improved message throughput and latency (2024).
    - Supports binary and JSON payloads.
- **Explanation**: E.g., stream live data for chat app.
- **Exam Tip**: Know for WebSocket APIs.

### **Security Hub Integration**:

- **Purpose**: Compliance monitoring.
- **Features**:
    - Detects misconfigured APIs (e.g., public access, weak TLS) (2025).
- **Explanation**: E.g., flag API without WAF.
- **Exam Tip**: Use for compliance.

### **Canary Deployments**:

- **Purpose**: Safe API updates.
- **Features**:
    - Routes subset of traffic to new version.
    - **Explanation**: E.g., 5% traffic to new /orders version.
- **Exam Tip**: Use for risk-free deployments.

### **Direct Service Integrations**:

- **Purpose**: Reduce Lambda dependency.
- **Features**:
    - Native integrations with DynamoDB, SNS, SQS, Step Functions.
    - **Explanation**: E.g., POST /orders directly calls DynamoDB PutItem.
- **Exam Tip**: Optimize costs and latency.

### **Custom Domains with ACM**:

- **Purpose**: Branding and security.
- **Features**:
    - Maps APIs to custom domains with SSL/TLS.
    - **Explanation**: E.g., api.myapp.com with ACM certificate.
- **Exam Tip**: Know ACM and Route 53 setup.

### **Key Notes**:

- **Flexibility**: WebSocket streaming + direct integrations + canary = advanced APIs.
- **Exam Tip**: Master WebSocket routes and direct integrations.

---

### **7. API Gateway Use Cases**

Understand practical applications.

### **Serverless APIs**

- **Setup**: HTTP API with Lambda integration, Cognito authorizer.
- **Features**: Low latency, auto-scaling, JWT auth.
- **Explanation**: E.g., serverless API for mobile app backend.

### **Real-Time Applications**

- **Setup**: WebSocket API with Lambda for message routing.
- **Features**: Bidirectional communication, streaming (2024).
- **Explanation**: E.g., real-time chat app with WebSocket.

### **Microservices Gateway**

- **Setup**: REST API with ALB integration, VPC Link.
- **Features**: Throttling, caching, IAM auth.
- **Explanation**: E.g., expose microservices via /orders, /users.

### **Legacy System Integration**

- **Setup**: HTTP API with HTTP integration to on-premises endpoint.
- **Features**: Custom domains, WAF protection.
- **Explanation**: E.g., integrate legacy CRM via API.

---

### **8. API Gateway vs. Other API Services**

| **Feature** | **API Gateway** | **AppSync** | **ALB** |
| --- | --- | --- | --- |
| **Type** | API Management | GraphQL/Pub/Sub API | Load Balancer |
| **Focus** | REST/HTTP/WebSocket APIs | GraphQL, real-time | HTTP/HTTPS routing |
| **Cost** | $1–$3.50/1M requests | $4/1M queries | $0.0225/hour + $0.008/GB |
| **Use Case** | Serverless APIs | GraphQL apps | Microservices routing |

### **Explanation**:

- **API Gateway**: Comprehensive API management for REST/HTTP/WebSocket.
- **AppSync**: GraphQL and real-time subscriptions.
- **ALB**: Simple load balancing for HTTP/HTTPS.

---

### **9. Detailed Explanations for Mastery**

- **Enhanced WebSocket Streaming**:
    - **Example**: Stream real-time stock updates.
    - **Why It Matters**: Performance for WebSocket apps (2024).
- **Security Hub**:
    - **Example**: Flag API with weak TLS version.
    - **Why It Matters**: Compliance (2025).
- **Direct Integrations**:
    - **Example**: Call DynamoDB without Lambda.
    - **Why It Matters**: Cost and latency savings.

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| API Types | API styles | REST, HTTP, WebSocket | Core Concept |
| Integrations | Backend connectivity | Lambda, DynamoDB, HTTP | Core Concept |
| Throttling | Rate limiting | 10,000 requests/second default | Performance |
| Caching | Reduce latency/cost | TTL up to 3,600 seconds | Performance, Cost |
| Authorizers | Access control | IAM, Cognito, Lambda | Security |
| WebSocket Streaming | Real-time communication | Enhanced throughput (2024) | Advanced Feature |
| Security Hub | Compliance monitoring | Misconfigured APIs (2025) | Security, Resilience |