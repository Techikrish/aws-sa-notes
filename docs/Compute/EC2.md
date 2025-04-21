# ec2

### **Amazon EC2 Overview**

- **Definition**: Elastic Compute Cloud (EC2) is a web service that provides scalable compute capacity in the cloud.
- **Key Concepts**:
    - **Instances**: Virtual servers running in AWS.
    - **AMIs (Amazon Machine Images)**: Templates for instance OS and software.
    - **Instance Types**: Variations in CPU, memory, storage, and networking.
- **Use Cases**: Web hosting, app servers, batch processing, machine learning.

---

### **1. EC2 Instance Types**

EC2 offers families optimized for different workloads, critical for performance and cost optimization.

### **General Purpose (e.g., T3, M5)**

- **Purpose**: Balanced compute, memory, and networking.
- **Examples**: T3 (burstable), M5 (consistent performance).
- **Use Case**: Web servers, small databases.

### **Compute Optimized (e.g., C5)**

- **Purpose**: High-performance CPU.
- **Features**: Ideal for compute-intensive tasks.
- **Use Case**: Gaming servers, scientific modeling.

### **Memory Optimized (e.g., R5)**

- **Purpose**: Large memory capacity.
- **Features**: High memory-to-CPU ratio.
- **Use Case**: In-memory databases (e.g., Redis), big data analytics.

### **Storage Optimized (e.g., I3, D2)**

- **Purpose**: High I/O or dense storage.
- **Features**: NVMe SSDs (I3) or HDDs (D2).
- **Use Case**: NoSQL databases, data warehousing.

### **Accelerated Computing (e.g., G4, P3)**

- **Purpose**: GPU/FPGA acceleration.
- **Features**: High-performance graphics or ML.
- **Use Case**: Machine learning, video rendering.

### **Key Notes**:

- **Performance**: Match instance type to workload (e.g., C5 for CPU-bound apps).
- **Exam Tip**: Memorize family purposes (e.g., “C” for compute).

---

### **2. EC2 Storage Options**

EC2 integrates with various storage types for resilience and performance.

### **Elastic Block Store (EBS)**

- **Purpose**: Persistent block storage for EC2.
- **Types**:
    - **gp3**: General-purpose SSD (cost-effective, configurable IOPS).
    - **gp2**: General-purpose SSD (older, IOPS tied to size).
    - **io1/io2**: Provisioned IOPS SSD (high performance).
    - **st1**: Throughput-optimized HDD (big data).
    - **sc1**: Cold HDD (infrequent access).
- **Features**: Snapshots, encryption, Multi-Attach (io1/io2).
- **Use Case**: Databases, boot volumes.

### **Instance Store**

- **Purpose**: Temporary block storage.
- **Features**: Physically attached to host, lost on stop/termination.
- **Use Case**: Caches, scratch data.
- **Note**: Ephemeral, not resilient.

### **EFS (Elastic File System)**

- **Purpose**: Shared file storage for multiple EC2 instances.
- **Features**: NFS protocol, scales automatically.
- **Use Case**: Content management, shared workloads.

### **Key Notes**:

- **Resilience**: EBS snapshots for backups, EFS for multi-instance access.
- **Exam Tip**: Compare EBS vs. Instance Store durability.

---

### **3. EC2 Security**

Security is a key focus for SAA-C03.

### **Security Groups**

- **Purpose**: Virtual firewall for instances.
- **Features**: Stateful, allow rules only (no deny).
- **Example**: Allow port 80 from 0.0.0.0/0 for web traffic.
- **Use Case**: Control inbound/outbound traffic.

### **IAM Roles**

- **Purpose**: Grant EC2 instances permissions.
- **Features**: Attach role to instance, no static credentials.
- **Use Case**: Allow EC2 to access S3 buckets.

### **Key Pairs**

- **Purpose**: SSH access to instances.
- **Features**: Public key stored by AWS, private key with user.
- **Note**: Lost private key = no access.

### **Key Notes**:

- **Secure Design**: Use least privilege in IAM roles, restrict security groups.
- **Exam Tip**: Practice security group rules for scenarios.

---

### **4. EC2 Resilience Features**

Resilience ensures high availability and fault tolerance.

### **Auto Scaling**

- **Purpose**: Automatically adjust instance count.
- **Components**:
    - **Launch Template**: Defines instance config (AMI, type).
    - **Scaling Policies**: Target tracking (e.g., CPU at 50%), step scaling.
- **Use Case**: Handle traffic spikes.

### **Elastic Load Balancing (ELB)**

- **Types**:
    - **Application Load Balancer (ALB)**: HTTP/HTTPS, path-based routing.
    - **Network Load Balancer (NLB)**: TCP/UDP, low latency.
    - **Classic Load Balancer**: Legacy.
- **Features**: Distributes traffic across instances.
- **Use Case**: High availability web apps.

### **Placement Groups**

- **Types**:
    - **Cluster**: Low-latency group in single AZ.
    - **Spread**: Instances across distinct hardware (max 7 per AZ).
    - **Partition**: Multiple partitions per AZ (e.g., Hadoop).
- **Use Case**: Optimize performance or resilience.

### **Key Notes**:

- **Resilience**: Auto Scaling + ELB for multi-AZ deployments.
- **Exam Tip**: Know when to use Spread vs. Cluster.

---

### **5. EC2 Performance Features**

High-performing architectures leverage EC2 optimizations.

### **Enhanced Networking**

- **Purpose**: Higher bandwidth, lower latency.
- **Options**: Elastic Network Adapter (ENA), Elastic Fabric Adapter (EFA).
- **Use Case**: HPC, big data.

### **Instance Type Selection**

- **Purpose**: Match workload to resources.
- **Example**: C5 for CPU-heavy tasks, R5 for memory-intensive.

### **EBS Optimization**

- **Purpose**: Improve I/O performance.
- **Features**: Enabled by default on many instances.
- **Use Case**: Databases with high IOPS.

### **Key Notes**:

- **Performance**: Enhanced Networking + right instance type.
- **Exam Tip**: Identify workload needs in scenarios.

---

### **6. EC2 Cost Optimization**

Cost optimization is critical for SAA-C03.

### **Pricing Models**

- **On-Demand**: Pay per hour/second, no commitment.
- **Reserved Instances (RI)**: 1- or 3-year commitment, up to 72% savings.
- **Spot Instances**: Bid on unused capacity, up to 90% savings.
- **Savings Plans**: Flexible RI alternative.
- **Dedicated Hosts**: Physical server, per-host billing.

### **Spot Fleet**

- **Purpose**: Manage multiple Spot Instances.
- **Features**: Diversifies across instance types/AZs.
- **Use Case**: Batch processing.

### **Auto Scaling**

- **Purpose**: Scale down to reduce costs.
- **Use Case**: Shut down unused instances overnight.

### **Key Notes**:

- **Cost Savings**: Spot for interruptible workloads, RI for steady-state.
- **Exam Tip**: Calculate costs for mixed pricing scenarios.

---

### **7. EC2 Networking**

Networking integrates EC2 with VPCs.

### **Elastic Network Interface (ENI)**

- **Purpose**: Virtual NIC for instances.
- **Features**: Attach multiple ENIs, move between instances.
- **Use Case**: Failover, multi-IP setups.

### **Elastic IP (EIP)**

- **Purpose**: Static public IP.
- **Features**: Reassignable, no charge when attached.
- **Use Case**: Persistent public access.

### **VPC Integration**

- **Purpose**: Place EC2 in private/public subnets.
- **Features**: Route tables, NAT Gateway for outbound.
- **Use Case**: Secure app tier in private subnet.

### **Key Notes**:

- **Networking**: ENI for flexibility, EIP for consistency.
- **Exam Tip**: Design VPC with EC2 placement.

---

### **8. EC2 Use Cases**

Understand practical applications.

### **Web Hosting**

- **Setup**: EC2 + ALB + Auto Scaling.
- **Features**: Scalable, resilient web servers.

### **Batch Processing**

- **Setup**: Spot Instances + SQS.
- **Features**: Cost-effective, fault-tolerant.

### **High-Performance Computing (HPC)**

- **Setup**: Cluster placement group + C5 instances.
- **Features**: Low-latency, high CPU.

### **Key Notes**:

- **Versatility**: EC2 fits many roles with proper config.
- **Exam Tip**: Match use case to features.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Instance Types | Workload optimization | T3, C5, R5, etc. | Performance, Cost |
| EBS | Persistent storage | gp3, io2, snapshots | Resilience, Performance |
| Security Groups | Traffic control | Stateful, allow-only | Security |
| Auto Scaling | Dynamic scaling | Launch templates, policies | Resilience, Cost |
| ELB | Load distribution | ALB, NLB | Resilience, Performance |
| Pricing Models | Cost management | Spot, RI, On-Demand | Cost Optimization |
| Enhanced Networking | Better performance | ENA, EFA | Performance |
| ENI/EIP | Networking flexibility | Multiple IPs, static addressing | Networking, Resilience |