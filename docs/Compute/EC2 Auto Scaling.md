# EC2 Auto Scaling

### **Amazon EC2 Auto Scaling Overview**

- **Definition**: Amazon EC2 Auto Scaling is a service that automatically adjusts the number of EC2 instances in a fleet to maintain application performance, availability, and cost efficiency based on defined conditions.
- **Key Features**:
    - Scales instances in/out based on demand (e.g., CPU utilization).
    - Ensures minimum/maximum instance counts for availability.
    - Integrates with Elastic Load Balancers (ELB) and other AWS services.
    - Supports Spot Instances, On-Demand, and mixed fleets.
- **Use Cases**: Web applications, batch processing, microservices, disaster recovery.

---

### **1. EC2 Auto Scaling Core Concepts**

### **Components**

- **Auto Scaling Group (ASG)**:
    - Collection of EC2 instances treated as a logical unit.
    - Defines min, max, and desired capacity.
    - **Explanation**: E.g., ASG with min=2, max=10, desired=4 instances.
- **Launch Template/Configuration**:
    - Specifies instance details (AMI, instance type, security groups, user data).
    - **Launch Template**: Preferred, supports versioning.
    - **Launch Configuration**: Legacy, single version.
    - **Explanation**: E.g., template with t3.micro, Amazon Linux 2 AMI.
- **Scaling Policies**:
    - Rules to add/remove instances based on metrics or schedules.
    - Types: Target Tracking, Step Scaling, Simple Scaling, Scheduled Scaling.
    - **Explanation**: E.g., scale out if CPU > 70%.
- **Health Checks**:
    - Monitors instance health (EC2 status or ELB health).
    - Replaces unhealthy instances.
    - **Explanation**: E.g., terminate instance if ELB reports “OutOfService”.

### **Scaling Types**

- **Horizontal Scaling**:
    - Add/remove instances (scale out/in).
    - **Explanation**: E.g., add 2 instances during traffic spike.
- **Vertical Scaling**:
    - Not supported by Auto Scaling (requires instance type change, causes downtime).
    - **Explanation**: Use larger instances manually if needed.

### **Key Notes**:

- **Exam Relevance**: Understand ASG setup, scaling policies, and health checks.
- **Mastery Tip**: Practice creating an ASG with a launch template and ELB integration.

---

### **2. EC2 Auto Scaling Performance Features**

EC2 Auto Scaling ensures high-performing applications.

### **Scaling Policies**

- **Target Tracking**:
    - Maintains a metric at a target (e.g., CPU at 50%).
    - Uses CloudWatch metrics (e.g., CPUUtilization, RequestCountPerTarget).
    - **Explanation**: Simplest—e.g., scale to keep 500 requests/target.
- **Step Scaling**:
    - Scales based on metric thresholds (e.g., +2 instances if CPU > 70%, +4 if > 90%).
    - **Explanation**: Granular control—e.g., aggressive scaling for spikes.
- **Simple Scaling**:
    - Scales by fixed amount (e.g., +1 instance if CPU > 60%).
    - Waits for cooldown (default 300s) before next action.
    - **Explanation**: Legacy—use for basic needs.
- **Scheduled Scaling**:
    - Scales at specific times (e.g., +5 instances every Monday 9 AM).
    - **Explanation**: Predictable loads—e.g., payroll processing.

### **Predictive Scaling**

- **Purpose**: Anticipate demand.
- **Features**: Uses ML to forecast load (e.g., based on CloudWatch history).
- **Explanation**: E.g., scale out before Black Friday traffic.

### **Warm Pools**:

- **Purpose**: Pre-initialize instances.
- **Features**: Keep stopped instances ready to launch (faster scaling).
- **Explanation**: E.g., reduce app startup time for web servers.

### **Key Notes**:

- **Performance**: Target Tracking + Predictive Scaling = responsive apps.
- **Exam Tip**: Know when to use Target Tracking vs. Step Scaling.

---

### **3. EC2 Auto Scaling Resilience Features**

Resilience ensures application availability.

### **Multi-AZ Distribution**

- **Purpose**: Survive AZ failures.
- **How It Works**: Launches instances across specified AZs.
- **Explanation**: E.g., spread 4 instances across us-east-1a, us-east-1b.

### **Health Checks**

- **Purpose**: Replace failed instances.
- **Types**:
    - **EC2**: Checks instance status (running, not impaired).
    - **ELB**: Checks application health (e.g., HTTP 200).
    - **Custom**: User-defined via API.
- **Explanation**: E.g., terminate instance if ELB health check fails.

### **Instance Refresh**:

- **Purpose**: Update fleet.
- **Features**: Rolling replacement of instances (e.g., new AMI, launch template).
- **Explanation**: E.g., update to latest app version with minimal downtime.

### **Suspended Processes**:

- **Purpose**: Pause scaling actions.
- **Features**: Suspend health checks, scaling, or replacements.
- **Explanation**: E.g., pause during maintenance to avoid terminations.

### **Key Notes**:

- **Resilience**: Multi-AZ + ELB health checks = high availability.
- **Exam Tip**: Design an ASG for Multi-AZ with ELB integration.

---

### **4. EC2 Auto Scaling Security Features**

Security aligns with SAA-C03’s secure architecture focus.

### **Encryption**

- **EBS Volumes**: Use KMS for at-rest encryption.
- **Network Traffic**: HTTPS/TLS via ELB or app configuration.
- **Explanation**: E.g., encrypt EBS root volume with KMS key.

### **Access Control**

- **IAM**:
    - Controls ASG operations (e.g., autoscaling:CreateAutoScalingGroup).
    - Instance role grants app permissions (e.g., s3:GetObject).
    - **Example**: {"Effect": "Allow", "Action": "cloudwatch:PutMetricData", "Resource": "*"}.
- **Security Groups**:
    - Restrict instance traffic (e.g., port 80 from ELB).
- **Explanation**: Least privilege—e.g., ASG role only scales, instance role accesses S3.

### **VPC**:

- **Purpose**: Isolate instances.
- **How It Works**: Deploy in private subnets, route via ELB.
- **Explanation**: E.g., app in private subnet, ELB in public subnet.

### **Key Notes**:

- **Security**: KMS + IAM + VPC = secure scaling.
- **Exam Tip**: Practice IAM policy and security group for ASG.

---

### **5. EC2 Auto Scaling Cost Optimization**

Cost efficiency is a key exam domain.

### **Pricing**

- **Auto Scaling**: Free (pay for EC2 instances, ELB, CloudWatch).
- **EC2**:
    - On-Demand: ~$0.096/hour (m5.large).
    - Spot: Up to 90% savings (e.g., ~$0.03/hour).
    - Reserved Instances: ~50% savings for steady-state.
- **Free Tier**: 750 hours/month of t2/t3.micro (shared with EC2).
- **Example**: ASG with 4 m5.large (On-Demand) = ~$9.22/day.

### **Cost Strategies**

- **Spot Instances**:
    - Use mixed instance policies (Spot + On-Demand).
    - **Explanation**: E.g., 80% Spot for batch jobs, 20% On-Demand for reliability.
- **Right-Sizing**:
    - Set min/desired capacity conservatively.
    - Use t3/t4g for burstable workloads.
    - **Explanation**: E.g., t3.micro for low-traffic apps.
- **Predictive Scaling**:
    - Avoid over-provisioning during peaks.
    - **Explanation**: E.g., scale before traffic spikes.
- **Cooldown Periods**:
    - Prevent rapid scaling (default 300s).
    - **Explanation**: E.g., avoid adding unneeded instances.

### **Key Notes**:

- **Cost Savings**: Spot + t3 + Predictive Scaling = low costs.
- **Exam Tip**: Calculate costs for Spot vs. On-Demand ASG.

---

### **6. EC2 Auto Scaling Advanced Features**

### **Mixed Instance Policies**

- **Purpose**: Combine instance types and purchase options.
- **Features**:
    - Mix On-Demand, Spot, and multiple instance types (e.g., m5, c5).
    - Allocate across AZs and types.
- **Explanation**: E.g., 50% m5.large On-Demand, 50% c5.large Spot.

### **Instance Weighting**:

- **Purpose**: Normalize capacity.
- **Features**: Assign weights to instance types (e.g., m5.large=1, m5.2xlarge=4).
- **Explanation**: E.g., 4 m5.large = 1 m5.2xlarge for capacity.

### **Custom Metrics**:

- **Purpose**: Scale on app-specific metrics.
- **Features**: Use CloudWatch custom metrics (e.g., queue depth).
- **Explanation**: E.g., scale on SQS queue size.

### **Lifecycle Hooks**:

- **Purpose**: Customize scaling actions.
- **Features**: Pause instance launch/termination (e.g., for bootstrapping).
- **Explanation**: E.g., install software before joining ELB.

### **Key Notes**:

- **Flexibility**: Mixed policies + custom metrics = advanced scaling.
- **Exam Tip**: Know lifecycle hooks for custom bootstrapping.

---

### **7. EC2 Auto Scaling Use Cases**

Understand practical applications.

### **Web Applications**

- **Setup**: ASG + ALB + t3 instances.
- **Features**: Scale with traffic, Multi-AZ.
- **Explanation**: E.g., e-commerce site during sales.

### **Batch Processing**

- **Setup**: ASG + Spot Instances.
- **Features**: Parallelize jobs, cost-efficient.
- **Explanation**: E.g., image processing for media.

### **Microservices**

- **Setup**: ASG + ECS + custom metrics.
- **Features**: Scale per service demand.
- **Explanation**: E.g., scale payment service on transaction volume.

### **Disaster Recovery**

- **Setup**: ASG + cross-region ELB.
- **Features**: Maintain capacity in DR Region.
- **Explanation**: E.g., failover to eu-west-1.

---

### **8. EC2 Auto Scaling vs. Other Services**

| **Feature** | **EC2 Auto Scaling** | **Elastic Beanstalk** | **Fargate** |
| --- | --- | --- | --- |
| **Type** | Instance Scaling | App Deployment | Serverless Containers |
| **Workload** | EC2-based apps | Web apps | Containerized apps |
| **Control** | Granular | High-level | Serverless |
| **Cost** | EC2-based | EC2 + management | vCPU + memory |
| **Use Case** | Custom scaling | Simplified deployment | No server management |

### **Explanation**:

- **EC2 Auto Scaling**: Fine-grained control for EC2 fleets.
- **Elastic Beanstalk**: Managed app platform with scaling.
- **Fargate**: Serverless containers, no instance management.

---

### **Detailed Explanations for Mastery**

- **Target Tracking**:
    - **Example**: Scale to maintain 500 requests/target; ASG adds 2 instances if demand rises.
    - **Why It Matters**: Simplest policy—exam favorite.
- **Spot Instances**:
    - **Example**: Mixed ASG with 70% Spot; fallback to On-Demand if Spot unavailable.
    - **Why It Matters**: Cost optimization—key SAA-C03 scenario.
- **Lifecycle Hooks**:
    - **Example**: Pause launch, install app, register with ELB.
    - **Why It Matters**: Custom scaling—common trap.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Auto Scaling Group | Manage instances | Min, max, desired capacity | Core Concept |
| Launch Template | Instance config | AMI, instance type, SG | Core Concept |
| Target Tracking | Maintain performance | Scale on metric (e.g., CPU 50%) | Performance |
| Predictive Scaling | Anticipate load | ML-based forecasting | Performance |
| Multi-AZ | High availability | Spread across AZs | Resilience |
| Health Checks | Replace failed instances | EC2, ELB, custom | Resilience |
| Spot Instances | Cost savings | Mixed with On-Demand | Cost |
| Lifecycle Hooks | Customize scaling | Pause launch/termination | Flexibility |