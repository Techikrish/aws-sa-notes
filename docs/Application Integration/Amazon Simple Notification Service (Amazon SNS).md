# sns

### **Amazon SNS (Simple Notification Service)**

### **Overview**

- **Definition**: Amazon SNS is a fully managed pub/sub messaging service for sending notifications to multiple subscribers.
- **Key Concepts**:
    - **Topics**: Channels for messages.
    - **Publishers**: Send messages to topics.
    - **Subscribers**: Receive messages (e.g., email, Lambda).
- **Use Cases**: Alerts, fan-out messaging, event notifications.

---

### **1. SNS Core Components**

### **Topics**

- **Purpose**: Group messages for subscribers.
- **Features**: Unlimited topics, subscribers per topic.
- **Explanation**: Central hub—publish once, deliver to all.

### **Subscribers**

- **Types**:
    - **HTTP/HTTPS**: Webhooks.
    - **Email/Email-JSON**: Human-readable or structured.
    - **SMS**: Text messages.
    - **SQS**: Queue integration.
    - **Lambda**: Serverless processing.
    - **Mobile Push**: iOS/Android apps.
- **Explanation**: Flexible endpoints—SQS + Lambda common for workflows.

### **Key Notes**:

- **Exam Relevance**: Know subscriber types and fan-out to SQS.
- **Mastery Tip**: Understand topic ARN for IAM policies.

---

### **2. SNS Features**

### **Message Delivery**

- **Purpose**: Push messages to subscribers instantly.
- **Explanation**: Unlike SQS (pull), SNS is push-based—faster for notifications.
- **Retry**: Automatic retries for failed deliveries (e.g., HTTP endpoints).

### **Fan-Out**

- **Purpose**: Send one message to multiple SQS queues.
- **How It Works**: Topic publishes to multiple queues for parallel processing.
- **Explanation**: Decouples producers from consumers—e.g., SNS → SQS → Lambda.

### **Message Filtering**

- **Purpose**: Subscribers receive only relevant messages.
- **How It Works**: JSON policy on subscription (e.g., {"type": "error"}).
- **Explanation**: Reduces processing overhead—key for large-scale apps.

### **Key Notes**:

- **Performance**: Fan-out + filtering = efficient workflows.
- **Exam Tip**: Design fan-out architecture (SNS → multiple SQS).

---

### **3. SNS Security**

- **Encryption**:
    - **At Rest**: KMS for message payloads.
    - **In Transit**: HTTPS/TLS.
- **Explanation**: Secures sensitive notifications (e.g., alerts).
- **IAM Policies**: Control who can publish/subscribe.
- **VPC Endpoints**: Private access for SNS.
- **Explanation**: Keeps traffic internal—critical for compliance.

### **Key Notes**:

- **Security**: KMS + IAM = secure messaging.
- **Exam Tip**: Write IAM policy for SNS topic access.

---

### **4. SNS Resilience**

- **Durability**: Messages stored across multiple AZs.
- **Delivery Retry**: Configurable retry policies for unreliable endpoints.
- **Explanation**: Ensures messages aren’t lost—high availability built-in.

### **Key Notes**:

- **Resilience**: Multi-AZ + retries = reliable delivery.
- **Exam Tip**: Know retry behavior for HTTP subscribers.

---

### **5. SNS Cost Optimization**

- **Pricing**: $0.50/million requests, $0.06/million SMS (after free tier).
- **Filtering**: Reduce unnecessary deliveries.
- **Explanation**: Fewer messages = lower costs—filter at topic level.

### **Key Notes**:

- **Cost Savings**: Use filtering to target subscribers.
- **Exam Tip**: Compare SNS vs. SQS cost for a scenario.

---

### **6. SNS Use Cases**

- **Alerts**: Notify admins via SMS/email (e.g., CloudWatch alarms).
- **Fan-Out**: Trigger multiple Lambda functions or SQS queues.
- **Mobile Push**: Send app notifications (e.g., news updates).

---

### **SQS vs. SNS Comparison**

| **Feature** | **SQS** | **SNS** |
| --- | --- | --- |
| **Type** | Queue (pull) | Pub/Sub (push) |
| **Delivery** | At-least-once (Standard) | At-least-once |
| **Ordering** | FIFO option | No ordering |
| **Subscribers** | Polling consumers | Multiple endpoints |
| **Persistence** | Messages stored until deleted | Messages delivered instantly |
| **Use Case** | Task queuing | Notifications, fan-out |

---

### **Detailed Explanations for Mastery**

- **SQS Visibility Timeout**:
    - **Example**: Set to 60 seconds for a 45-second task—prevents reprocessing.
    - **Why It Matters**: Misconfigured timeout causes duplicates—key for exam scenarios.
- **SNS Fan-Out**:
    - **Example**: SNS topic → 3 SQS queues → 3 Lambda functions.
    - **Why It Matters**: Scales processing—common SAA-C03 pattern.
- **FIFO Deduplication**:
    - **Example**: Same deduplication ID within 5 minutes = ignored.
    - **Why It Matters**: Ensures exactly-once delivery—critical for ordered tasks.

---

### **Quick Reference Table**

| **Feature** | **SQS** | **SNS** | **Exam Relevance** |
| --- | --- | --- | --- |
| Queue/Topic Types | Standard, FIFO | Topics | Core Concept |
| Delivery | Pull, at-least-once | Push, at-least-once | Performance, Resilience |
| DLQ/Fan-Out | DLQ for failures | Fan-out to SQS/Lambda | Resilience, Performance |
| Encryption | KMS, TLS | KMS, TLS | Security |
| Long Polling/Filtering | Reduces API calls | Reduces deliveries | Cost, Performance |
| Scalability | Auto-scales (Standard) | Auto-scales | Performance |