# Amazon EventBridge

### **Amazon EventBridge Overview**

- **Definition**: Amazon EventBridge is a serverless event bus that enables event-driven architectures by routing events from various sources to targets, facilitating decoupled application integration and automation.
- **Key Features**:
    - Routes events from AWS services, custom applications, SaaS providers, and scheduled triggers.
    - Supports **rules** to match and route events to targets (e.g., Lambda, SNS, SQS).
    - Provides **schema registry** for discovering and managing event structures.
    - Scales automatically to handle millions of events per second with low latency.
    - Integrates with 35+ AWS services and 150+ SaaS partners via API Destinations.
- **Use Cases**: Automate workflows (e.g., EC2 state changes), integrate third-party SaaS (e.g., Datadog, PagerDuty), trigger real-time processing, schedule tasks.
- **Key Updates (2024–2025)**:
    - **Enhanced Schema Registry**: Improved schema discovery and versioning (October 2024).
    - **Cross-Account Event Routing**: Simplified multi-account setups (March 2024).
    - **FIPS 140-2 Compliance**: Enhanced for GovCloud (October 2024).
    - **Security Hub Integration**: Compliance monitoring for event bus configurations (January 2025).

---

### **1. EventBridge Core Concepts**

### **Components**

- **Event**:
    - A JSON object representing a change or action (e.g., EC2 instance state change, S3 object creation).
    - Contains fields like source, detail-type, detail, and event-time.
    - **Explanation**: E.g., { "source": "aws.ec2", "detail-type": "EC2 Instance State-change Notification", "detail": { "state": "running" } }.
- **Event Bus**:
    - A pipeline that receives and routes events.
    - **Default Event Bus**: Handles AWS service events.
    - **Custom Event Bus**: For application-specific or SaaS events.
    - **Partner Event Bus**: For SaaS provider events (e.g., Datadog).
    - **Explanation**: E.g., custom bus for myapp.events.
- **Rules**:
    - Define patterns to match events and route them to targets.
    - Support content-based filtering (e.g., match detail.state = "running").
    - **Explanation**: E.g., rule routes EC2 running events to Lambda.
- **Targets**:
    - Destinations for matched events (e.g., Lambda, SNS, SQS, Step Functions, API Destinations).
    - Up to 5 targets per rule.
    - **Explanation**: E.g., send EC2 event to SNS for notifications.
- **Schema Registry**:
    - Stores and discovers event schemas (JSON structures).
    - Generates code bindings (e.g., Python, Java) for event handling.
    - **Explanation**: E.g., schema for aws.s3 events.
- **API Destinations**:
    - Routes events to external HTTP endpoints (e.g., SaaS APIs).
    - Supports OAuth, API keys, and rate limiting.
    - **Explanation**: E.g., send events to PagerDuty API.
- **Event Replay**:
    - Replays archived events for testing or recovery.
    - Requires event archiving enabled.
    - **Explanation**: E.g., replay EC2 events for debugging.

### **Key Concepts**

- **Event Sources**:
    - AWS services (e.g., S3, EC2, CloudTrail), custom apps, SaaS partners, or schedules.
    - **Explanation**: E.g., S3 ObjectCreated event.
- **Content-Based Filtering**:
    - Matches events based on JSON attributes (e.g., source, detail).
    - Supports wildcards, prefixes, and complex logic.
    - **Explanation**: E.g., filter events where detail.errorCode = "AccessDenied".
- **Dead-Letter Queue (DLQ)**:
    - Stores failed events for retry or debugging.
    - Configured with SQS queues.
    - **Explanation**: E.g., send failed Lambda invocations to DLQ.
- **Event Archiving**:
    - Stores events for later replay (indefinite or time-based retention).
    - **Explanation**: E.g., archive CloudTrail events for 90 days.
- **Cross-Account/Region Routing**:
    - Routes events between accounts or Regions via event buses.
    - **Explanation**: E.g., central bus in management account.
- **Scheduled Events**:
    - Triggers rules on cron or rate expressions.
    - **Explanation**: E.g., run Lambda every 5 minutes.

### **Key Notes**:

- **Exam Relevance**: Understand event buses, rules, targets, schema registry, and cross-account routing.
- **Mastery Tip**: Compare EventBridge vs. SNS vs. SQS for event-driven architectures.

---

### **2. EventBridge Performance Features**

EventBridge optimizes event routing.

### **Low Latency**

- **Purpose**: Near-real-time event delivery.
- **Features**:
    - Millisecond latency for event ingestion and routing.
    - Enhanced schema processing for faster matching (2024).
- **Explanation**: E.g., route EC2 event to Lambda in <100 ms.
- **Exam Tip**: Highlight low latency for real-time automation.

### **High Throughput**

- **Purpose**: Handle large event volumes.
- **Features**:
    - Scales to millions of events per second.
    - Supports bursts without throttling.
- **Explanation**: E.g., process 10M S3 events/second.
- **Exam Tip**: Use for high-volume event-driven apps.

### **Scalability**

- **Purpose**: Support growing workloads.
- **Features**:
    - Serverless architecture auto-scales with demand.
    - Cross-account routing for enterprise setups (2024).
- **Explanation**: E.g., route events for 1,000 accounts via central bus.
- **Exam Tip**: Emphasize serverless scalability.

### **Key Notes**:

- **Performance**: Low latency + high throughput + scalability = efficient event routing.
- **Exam Tip**: Optimize with content-based filtering and API Destinations.

---

### **3. EventBridge Resilience Features**

Resilience ensures reliable event processing.

### **Multi-AZ/Region Redundancy**

- **Purpose**: Survive failures.
- **Features**:
    - EventBridge is a Regional service with multi-AZ redundancy.
    - Events persist during AZ outages.
- **Explanation**: E.g., route events if us-east-1a fails.
- **Exam Tip**: Highlight multi-AZ for HA.

### **Continuous Processing**:

- **Purpose**: Uninterrupted event routing.
- **Features**:
    - Automatic retries for failed target invocations (up to 24 hours).
    - DLQ captures failed events for recovery.
- **Explanation**: E.g., retry failed Lambda invocation.
- **Exam Tip**: Use DLQ for reliability.

### **Monitoring and Recovery**:

- **Purpose**: Detect and resolve issues.
- **Features**:
    - CloudWatch metrics (e.g., Invocations, FailedInvocations).
    - CloudTrail logs API calls (e.g., PutEvents).
    - Security Hub detects misconfigured buses (2025).
    - Event replay for debugging.
- **Explanation**: E.g., alarm on high FailedInvocations.
- **Exam Tip**: Use CloudWatch and DLQ for monitoring.

### **Data Durability**:

- **Purpose**: Protect event data.
- **Features**:
    - Event archiving with indefinite retention.
    - DLQ stores failed events in SQS (11 9s durability).
- **Explanation**: E.g., recover archived events after failure.
- **Exam Tip**: Highlight archiving for durability.

### **Key Notes**:

- **Resilience**: Multi-AZ + retries + monitoring + archiving = reliable routing.
- **Exam Tip**: Design resilient workflows with DLQ and archiving.

---

### **4. EventBridge Security Features**

Security is a core focus for EventBridge in SAA-C03.

### **Access Control**

- **IAM Policies**:
    - Restrict EventBridge actions (events:PutEvents, events:PutRule).
    - Scope to event buses, rules, or targets.
    - **Example**: {"Effect": "Allow", "Action": "events:PutEvents", "Resource": "arn:aws:events:*:*:event-bus/myapp"}.
- **Resource-Based Policies**:
    - Control cross-account access to event buses.
    - **Explanation**: E.g., allow partner account to send events.
- **Exam Tip**: Practice IAM and resource policies for cross-account routing.

### **Encryption**

- **In Transit**:
    - HTTPS for API calls and event delivery.
    - **Explanation**: E.g., secure PutEvents call.
- **At Rest**:
    - Events in DLQ or archives encrypted with KMS.
    - API Destinations support encrypted payloads.
    - **Explanation**: E.g., KMS-encrypted DLQ in SQS.
- **Exam Tip**: Highlight KMS for compliance.

### **Compliance**:

- **Purpose**: Meet regulatory standards.
- **Features**:
    - Supports HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
    - Security Hub detects non-compliant buses/rules (2025).
- **Explanation**: E.g., route HIPAA-compliant audit events.
- **Exam Tip**: Use Security Hub for compliance.

### **Auditing**:

- **Purpose**: Track event activity.
- **Features**:
    - CloudTrail logs API calls.
    - CloudWatch Logs for target execution details.
    - Security Hub monitors compliance (2025).
    - **Explanation**: E.g., audit PutEvents for unauthorized access.
- **Exam Tip**: Use CloudTrail for auditing.

### **Key Notes**:

- **Security**: IAM + encryption + compliance + auditing = secure event routing.
- **Exam Tip**: Configure IAM, KMS, and CloudTrail for secure EventBridge.

---

### **5. EventBridge Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Event Ingestion**:
    - $1/1M events (custom, SaaS, cross-account).
    - AWS service events: Free for default bus, $1/1M for custom bus.
- **Target Invocations**:
    - $1/1M invocations.
- **Schema Registry**:
    - $0.10/1M schema discovery requests.
    - $0.013/GB/month for schema storage.
- **Event Replay**:
    - $0.50/1M events replayed.
- **Other Costs**:
    - Targets: Lambda ($0.20/1M), SQS ($0.40/1M), SNS ($0.50/1M).
    - DLQ: SQS ($0.40/1M).
- **Example**:
    - 10M custom events, 10M invocations, 1K schema requests, 1 GB schema storage, 1M replays, 1M SQS DLQ messages:
        - Events: 10M × $1/1M = $10.
        - Invocations: 10M × $1/1M = $10.
        - Schema Requests: 1K × $0.10/1M = $0.0001.
        - Schema Storage: 1 GB × $0.013 = $0.013.
        - Replay: 1M × $0.50/1M = $0.50.
        - DLQ: 1M × $0.40/1M = $0.40.
        - Total: $10 + $10 + $0.0001 + $0.013 + $0.50 + $0.40 = ~$20.913/month.
- **Free Tier**: 1M events/month for new accounts (90 days).

### **Cost Strategies**

- **Optimize Rules**:
    - Use content-based filtering to reduce unnecessary invocations.
    - **Explanation**: E.g., filter 50% of events, saving $5/month.
- **Consolidate Event Buses**:
    - Use default bus for AWS events to avoid ingestion costs.
    - **Explanation**: E.g., save $10/month by avoiding custom bus.
- **Batch Events**:
    - Send multiple events in a single PutEvents call (up to 10 events).
    - **Explanation**: E.g., batch 10M to 1M calls, saving $9/month.
- **Limit Schema Usage**:
    - Minimize schema discovery requests and storage.
    - **Explanation**: E.g., reduce requests to save $0.10/month.
- **Use Cost-Effective Targets**:
    - Prefer Lambda over SNS/SQS for lower invocation costs.
    - **Explanation**: E.g., Lambda vs. SNS saves $0.30/1M invocations.
- **Tagging**:
    - Tag event buses and rules for cost tracking.
    - **Explanation**: E.g., tag bus with “Project:Automation”.
- **Monitor Usage**:
    - Use CloudWatch and Cost Explorer to optimize event volume.
    - **Explanation**: E.g., reduce events to save $10/month.

### **Key Notes**:

- **Cost Savings**: Filtering + batching + default bus + tagging = lower costs.
- **Exam Tip**: Calculate event and invocation costs.

---

### **6. EventBridge Advanced Features**

### **Enhanced Schema Registry**:

- **Purpose**: Simplified event handling.
- **Features**:
    - Improved discovery and versioning (2024).
    - Generates code bindings for multiple languages.
- **Explanation**: E.g., Python binding for S3 event schema.
- **Exam Tip**: Know for developer productivity.

### **Cross-Account/Region Routing**:

- **Purpose**: Enterprise event management.
- **Features**:
    - Simplified multi-account setups (2024).
    - Routes events across Regions.
- **Explanation**: E.g., central bus for 100 accounts.
- **Exam Tip**: Use for multi-account architectures.

### **Security Hub Integration**:

- **Purpose**: Compliance monitoring.
- **Features**:
    - Detects misconfigured buses/rules (2025).
    - **Explanation**: E.g., flag public event bus.
- **Exam Tip**: Use for compliance.

### **API Destinations**:

- **Purpose**: SaaS integration.
- **Features**:
    - Routes events to external APIs with authentication.
    - **Explanation**: E.g., send events to Datadog.
- **Exam Tip**: Know for third-party integration.

### **Event Replay**:

- **Purpose**: Debugging and recovery.
- **Features**:
    - Replays archived events for testing.
    - **Explanation**: E.g., replay failed workflow events.
- **Exam Tip**: Use for troubleshooting.

### **Key Notes**:

- **Flexibility**: Schema + cross-account + API Destinations = advanced event-driven apps.
- **Exam Tip**: Master cross-account routing and API Destinations.

---

### **7. EventBridge Use Cases**

Understand practical applications.

### **Automation**

- **Setup**: Rule matches EC2 state change, targets Lambda.
- **Features**: Content-based filtering, retries.
- **Explanation**: E.g., start backup on EC2 termination.

### **SaaS Integration**

- **Setup**: Partner bus for Datadog, API Destination.
- **Features**: Schema registry, OAuth.
- **Explanation**: E.g., send CloudWatch alarms to PagerDuty.

### **Scheduled Tasks**

- **Setup**: Cron-based rule, targets Step Functions.
- **Features**: Reliable scheduling.
- **Explanation**: E.g., run daily ETL at 2 AM.

### **Real-Time Processing**

- **Setup**: S3 event to SQS, processed by Lambda.
- **Features**: DLQ, batching.
- **Explanation**: E.g., process new S3 objects in real-time.

---

### **8. EventBridge vs. Other Messaging Services**

| **Feature** | **EventBridge** | **SNS** | **SQS** |
| --- | --- | --- | --- |
| **Type** | Event Bus | Pub/Sub Messaging | Queue |
| **Focus** | Event-driven routing | Notifications | Message queuing |
| **Latency** | Milliseconds | Milliseconds | Seconds |
| **Cost** | $1/1M events | $0.50/1M notifications | $0.40/1M requests |
| **Use Case** | Workflow automation | Alerts | Decoupled processing |

### **Explanation**:

- **EventBridge**: Event-driven with advanced routing and SaaS integration.
- **SNS**: Simple pub/sub for notifications.
- **SQS**: Queuing for decoupled workloads.

---

### **9. Detailed Explanations for Mastery**

- **Enhanced Schema Registry**:
    - **Example**: Auto-generate Python code for S3 events.
    - **Why It Matters**: Developer efficiency (2024).
- **Cross-Account Routing**:
    - **Example**: Central bus for multi-account events.
    - **Why It Matters**: Enterprise scalability (2024).
- **Security Hub**:
    - **Example**: Flag unencrypted DLQ.
    - **Why It Matters**: Compliance (2025).

---

### **10. Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Event Bus | Route events | Default, custom, partner | Core Concept |
| Rules | Match and route | Content-based filtering | Core Concept |
| Targets | Process events | Lambda, SNS, SQS, API Destinations | Core Concept |
| Schema Registry | Event structure management | Code bindings (2024) | Flexibility |
| Cross-Account | Multi-account routing | Simplified setup (2024) | Scalability |
| Security Hub | Compliance monitoring | Misconfigured buses (2025) | Security, Resilience |
| DLQ | Handle failed events | SQS-based, KMS-encrypted | Resilience |