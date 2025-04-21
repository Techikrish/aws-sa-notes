# sqs

### **Amazon SQS (Simple Queue Service)**

### **Overview**

- **Definition**: Amazon SQS is a fully managed message queuing service that enables decoupling and asynchronous communication between application components.
- **Key Concepts**:
    - **Messages**: Data payloads (up to 256 KB).
    - **Queues**: Containers for messages.
    - **Producers/Consumers**: Apps that send/receive messages.
- **Use Cases**: Task queues, workload buffering, distributed systems.

---

### **1. SQS Queue Types**

### **Standard Queue**

- **Purpose**: High throughput, at-least-once delivery.
- **Features**:
    - Unlimited throughput.
    - Possible duplicates, out-of-order delivery (best-effort ordering).
- **Explanation**: Scales massively but sacrifices strict ordering for speed.
- **Use Case**: General-purpose messaging (e.g., order processing).

### **FIFO Queue (First-In-First-Out)**

- **Purpose**: Ordered, exactly-once delivery.
- **Features**:
    - 3,000 messages/second with batching (300 without).
    - Message group ID for parallel processing, deduplication ID to prevent duplicates.
- **Explanation**: Guarantees order within a message group; deduplication window is 5 minutes.
- **Use Case**: Financial transactions, sequential tasks.

### **Key Notes**:

- **Exam Relevance**: Standard for scale, FIFO for order—know trade-offs.
- **Mastery Tip**: Understand message group ID for FIFO parallelism.

---

### **2. SQS Core Features**

### **Message Lifecycle**

- **Send**: Producer sends message to queue.
- **Receive**: Consumer polls queue, message becomes invisible (visibility timeout).
- **Delete**: Consumer deletes message after processing.
- **Explanation**: Visibility timeout (default 30 seconds, max 12 hours) prevents reprocessing—adjust for task duration.

### **Dead-Letter Queue (DLQ)**

- **Purpose**: Store failed messages after max retries.
- **How It Works**: Set maxReceiveCount (e.g., 5); failed messages move to DLQ.
- **Explanation**: Helps debug failures—requires separate queue.
- **Use Case**: Troubleshoot stalled jobs.

### **Long Polling**

- **Purpose**: Reduce empty responses, lower costs.
- **How It Works**: Waits up to 20 seconds for messages (vs. short polling’s immediate return).
- **Explanation**: Cuts API calls, improving efficiency.

### **Key Notes**:

- **Resilience**: DLQ ensures failed messages aren’t lost.
- **Exam Tip**: Know visibility timeout and long polling settings.

---

### **3. SQS Security**

- **Encryption**:
    - **At Rest**: SSE with AWS KMS (default or custom key).
    - **In Transit**: HTTPS/TLS.
- **Explanation**: Protects sensitive data (e.g., customer info).
- **IAM Policies**: Control access (e.g., allow specific Lambda to poll).
- **VPC Endpoints**: Private access via AWS PrivateLink.
- **Explanation**: Keeps traffic off the internet—key for compliance.

### **Key Notes**:

- **Security**: Combine KMS + IAM for least privilege.
- **Exam Tip**: Practice IAM policy for SQS access.

---

### **4. SQS Performance & Resilience**

- **Scalability**: Auto-scales with demand (Standard: unlimited, FIFO: capped).
- **Durability**: Messages replicated across multiple AZs.
- **Explanation**: Ensures high availability—data survives AZ failures.
- **Batching**: Send/receive/delete up to 10 messages per API call.
- **Explanation**: Boosts throughput, reduces costs.

### **Key Notes**:

- **Performance**: Batching + long polling = efficient polling.
- **Exam Tip**: Know Standard vs. FIFO throughput limits.

---

### **5. SQS Cost Optimization**

- **Pricing**: Pay per request (e.g., $0.40/million after free tier).
- **Long Polling**: Fewer API calls = lower cost.
- **Batching**: Process 10 messages per request = 1/10th the cost.
- **Explanation**: Optimize polling and batching to minimize bills.

### **Key Notes**:

- **Cost Savings**: Long polling + batching = efficient usage.
- **Exam Tip**: Calculate cost for a workload with/without batching.

---

### **6. SQS Use Cases**

- **Task Queues**: Decouple app tiers (e.g., EC2 workers process SQS jobs).
- **Buffering**: Smooth out traffic spikes (e.g., order queue during sales).
- **Asynchronous Workflows**: Trigger Lambda from SQS for serverless tasks.