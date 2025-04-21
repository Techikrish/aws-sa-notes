# Containers

### **Amazon ECS Anywhere**

### **Overview**

- **Definition**: Extension of Amazon ECS to run and manage container workloads on customer-managed infrastructure (on-premises or edge) using the same ECS APIs and tools.
- **Key Features**:
    - Deploys ECS tasks on user-managed infrastructure (e.g., VMware, bare metal).
    - Uses ECS control plane in AWS for orchestration.
    - Integrates with CloudWatch, IAM, Fargate (for cloud tasks).
- **Use Cases**: Hybrid cloud, data sovereignty, leverage existing on-premises hardware.
- **Updates (2024–2025)**: Security Hub integration for compliance monitoring (Jan 2025).
    
    [](https://imgs.search.brave.com/_JFWsJtJm_Dwp96G5IwB45BaL95aJtzwz_JM1QoSwWk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGVhYTQyYWM2/NjA3ZWJmZWNjMGY1/NWVkYzFlOWUwZTdi/ODkzYjFkMTFmYTUz/ODczZmMwMzc2ODkx/YWZmMWIwYS9wcmVz/cy5hYm91dGFtYXpv/bi5jb20v)
    

### **Core Concepts**

- **ECS Anywhere Cluster**: Group of on-premises instances registered with ECS.
- **Task Definitions**: Same as ECS, define container images, resources.
- **External Instances**: On-premises servers running ECS Anywhere agent.
- **Explanation**: E.g., run ECS tasks on local VMware with AWS orchestration.

### **Performance**

- **Low Latency**: Local execution reduces network latency.
- **Scalability**: Scales with registered instances, no AWS compute limits.

### **Resilience**

- **Multi-AZ**: Control plane in AWS is highly available.
- **Monitoring**: CloudWatch for logs/metrics, CloudTrail for API calls.

### **Security**

- **Encryption**: TLS for data in transit, KMS for secrets.
- **Access Control**: IAM for ECS control plane, instance roles for tasks.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2 (GovCloud).
- **Auditing**: Security Hub (2025), CloudTrail.

### **Cost Optimization**

- **Pricing**: $0.01025/hour per external instance (us-east-1).
    - **Example**: 10 instances, 24/7 = 10 × $0.01025 × 24 × 30 = ~$73.80/month.
- **Strategies**:
    - Use existing hardware to avoid cloud compute costs.
    - Monitor instance usage with CloudWatch.
- **Free Tier**: None.

### **Key Notes**

- **Use Case**: Run ECS tasks on-premises for compliance, manage via AWS console.
- **Exam Tip**: Know hybrid deployment and integration with ECS control plane.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Amazon EKS Anywhere**

### **Overview**

- **Definition**: Deployment option for Amazon EKS to run Kubernetes clusters on customer-managed infrastructure (on-premises/edge) with EKS Distro and automation tools.
- **Key Features**:
    - Supports VMware vSphere, Bare Metal, Nutanix, CloudStack, AWS Snow.
    - Built on EKS Distro for consistency with EKS.
    - Open-source, optional Enterprise Subscriptions for support.
    - Runs in air-gapped environments, no AWS dependency.
- **Use Cases**: Hybrid cloud, air-gapped deployments, data sovereignty.
- **Updates (2024–2025)**: Enhanced EKS Connector for console visibility (2024).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Core Concepts**

- **EKS Anywhere Cluster**: Kubernetes cluster on user infrastructure.
- **EKS Connector**: Registers clusters to EKS console for visibility.
- **Curated Packages**: AWS-tested add-ons (e.g., monitoring, logging).
- **Explanation**: E.g., deploy Kubernetes on Bare Metal, view in EKS console.
    
    [](https://imgs.search.brave.com/29ugpaLsvGSoC0CaqJ5lJN94j7rK3e-2VhaH9S0F0xI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDJjZTdhOTVk/YzA3MDQ4MTg2MDYx/ZDU0MDE0NmQ3ZTQx/MTY2ZDhhMDlhNDcy/NTFlNjBmY2VhMWUw/ODVmZWFhYy9hbnl3/aGVyZS5la3MuYW1h/em9uYXdzLmNvbS8)
    

### **Performance**

- **Low Latency**: Local execution for edge workloads.
- **Scalability**: Cluster API (CAPI) for declarative cluster scaling.

### **Resilience**

- **Availability**: Local control plane, no AWS dependency.
- **Monitoring**: CloudWatch (if connected), AWS Distro for OpenTelemetry.

### **Security**

- **Encryption**: TLS, KMS (if AWS-connected).
- **Access Control**: IAM for console, IRSA for pods (AWS-connected).
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2 (GovCloud).
- **Auditing**: Security Hub (2025), CloudTrail (AWS-connected).

### **Cost Optimization**

- **Pricing**:
    - Free (open-source).
    - Enterprise Subscriptions: Contact AWS for pricing.
    - **Example**: Free for self-managed, variable for support.
- **Strategies**:
    - Use existing hardware to avoid cloud costs.
    - Optimize add-ons to reduce complexity.

### **Key Notes**

- **Use Case**: Run Kubernetes on-premises with EKS Distro, no AWS dependency.
- **Exam Tip**: Understand EKS Distro integration and air-gapped support.
    
    [](https://imgs.search.brave.com/29ugpaLsvGSoC0CaqJ5lJN94j7rK3e-2VhaH9S0F0xI/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDJjZTdhOTVk/YzA3MDQ4MTg2MDYx/ZDU0MDE0NmQ3ZTQx/MTY2ZDhhMDlhNDcy/NTFlNjBmY2VhMWUw/ODVmZWFhYy9hbnl3/aGVyZS5la3MuYW1h/em9uYXdzLmNvbS8)
    

---

### **Amazon EKS Distro**

### **Overview**

- **Definition**: Open-source Kubernetes distribution used by Amazon EKS, available for self-managed clusters on any infrastructure (cloud, on-premises).
- **Key Features**:
    - Same Kubernetes version and dependencies as EKS.
    - Includes security patches, extended support.
    - Supports EKS Anywhere for managed installations.
- **Use Cases**: Consistent Kubernetes across environments, custom cluster deployments.
- **Updates (2024–2025)**: Extended support for legacy Kubernetes versions (2024).
    
    [](https://imgs.search.brave.com/2lAanRCokB0naYEVmkIUcJs2jduKCS-v9w8saRCVXvY/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjlkMDI1NjMy/ZWUwYzFhYmRjNGEx/NDc4YzE4ZGRmNDVh/NzY3MjNjZTA5ZjBh/NmIyOGZjMmIwZmM5/OTVjYTE2Ni9kaXN0/cm8uZWtzLmFtYXpv/bmF3cy5jb20v)
    

### **Core Concepts**

- **Distribution**: Kubernetes binaries, container images (Amazon Linux 2-based).
- **Release Channels**: Aligned with EKS (e.g., 1-32 branch).
- **Installation**: Manual or via EKS Anywhere.
- **Explanation**: E.g., install EKS-D on EC2 for custom Kubernetes.

### **Performance**

- **Low Latency**: Optimized for EKS compatibility.
- **Scalability**: Supports large clusters with CAPI.

### **Resilience**

- **Availability**: User-managed, depends on infrastructure.
- **Monitoring**: Integrates with Prometheus, CloudWatch (AWS-connected).

### **Security**

- **Encryption**: TLS for API, user-managed storage encryption.
- **Access Control**: Kubernetes RBAC, IAM (AWS-connected).
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2 (with EKS Anywhere).

### **Cost Optimization**

- **Pricing**: Free (open-source).
    - **Example**: Only infrastructure costs (e.g., EC2, on-premises servers).
- **Strategies**:
    - Use Spot Instances for non-critical clusters.
    - Minimize add-ons for cost efficiency.

### **Key Notes**

- **Use Case**: Deploy EKS-D on-premises for consistent Kubernetes.
- **Exam Tip**: Know EKS-D vs. EKS (self-managed vs. fully managed).
    
    [](https://imgs.search.brave.com/2lAanRCokB0naYEVmkIUcJs2jduKCS-v9w8saRCVXvY/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjlkMDI1NjMy/ZWUwYzFhYmRjNGEx/NDc4YzE4ZGRmNDVh/NzY3MjNjZTA5ZjBh/NmIyOGZjMmIwZmM5/OTVjYTE2Ni9kaXN0/cm8uZWtzLmFtYXpv/bmF3cy5jb20v)
    

---

### **Amazon Elastic Container Registry (ECR)**

### **Overview**

- **Definition**: Fully managed container registry to store, manage, and deploy container images, with public and private repositories.
- **Key Features**:
    - Integrates with ECS, EKS, Fargate, IAM, VPC.
    - Supports image scanning for vulnerabilities.
    - Public ECR for sharing images globally.
- **Use Cases**: Store Docker images, share open-source software.
- **Updates (2024–2025)**: Enhanced vulnerability scanning with GuardDuty (2024).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Core Concepts**

- **Repository**: Stores container images (private/public).
- **Image Scanning**: Basic (free) or enhanced (GuardDuty-based).
- **Pull Through Cache**: Caches images from external registries.
- **Explanation**: E.g., push Docker image to ECR, scan for vulnerabilities.

### **Performance**

- **Low Latency**: High-speed image pulls in same Region.
- **Scalability**: Auto-scales with demand.

### **Resilience**

- **Multi-AZ**: Highly available, S3-backed storage (11 9s durability).
- **Monitoring**: CloudWatch metrics, CloudTrail logs.

### **Security**

- **Encryption**: TLS, KMS for images at rest.
- **Access Control**: IAM policies, repository permissions.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: Security Hub (2025), CloudTrail.

### **Cost Optimization**

- **Pricing**:
    - Private: $0.10/GB-month storage, $0.09/GB data transfer out.
    - Public: Free up to 50 GB/month (authenticated pulls).
    - **Example**: 100 GB private storage, 10 GB transfer = $10 (storage) + $0.90 (transfer) = $10.90/month.
- **Strategies**:
    - Use lifecycle policies to delete old images.
    - Leverage public ECR for free pulls.

### **Key Notes**

- **Use Case**: Store ECS/EKS images, scan for vulnerabilities.
- **Exam Tip**: Know image scanning, lifecycle policies, and public/private repos.
    
    [](https://imgs.search.brave.com/_JFWsJtJm_Dwp96G5IwB45BaL95aJtzwz_JM1QoSwWk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGVhYTQyYWM2/NjA3ZWJmZWNjMGY1/NWVkYzFlOWUwZTdi/ODkzYjFkMTFmYTUz/ODczZmMwMzc2ODkx/YWZmMWIwYS9wcmVz/cy5hYm91dGFtYXpv/bi5jb20v)
    

---

### **Amazon Elastic Container Service (ECS)**

### **Overview**

- **Definition**: Fully managed container orchestration service for deploying, managing, and scaling containerized applications.
- **Key Features**:
    - Supports EC2, Fargate, ECS Anywhere for compute.
    - Integrates with ALB, CloudWatch, IAM, ECR.
    - Task definitions and services for workload management.
- **Use Cases**: Web apps, microservices, batch processing.
- **Updates (2024–2025)**: GuardDuty for container runtime monitoring (2024).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Core Concepts**

- **Cluster**: Group of EC2/Fargate instances or external instances.
- **Task Definition**: Blueprint for containers (image, CPU, memory).
- **Service**: Maintains desired task count, integrates with ALB.
- **Explanation**: E.g., deploy web app with Fargate, scale with service.

### **Performance**

- **Low Latency**: Fargate for fast task startup.
- **High Throughput**: Scales to thousands of tasks.
- **Scalability**: Auto-scaling with service policies.

### **Resilience**

- **Multi-AZ**: Tasks spread across AZs, control plane highly available.
- **Monitoring**: CloudWatch, X-Ray for tracing.

### **Security**

- **Encryption**: TLS, KMS for secrets.
- **Access Control**: IAM roles for tasks, VPC security groups.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: GuardDuty, Security Hub (2025).

### **Cost Optimization**

- **Pricing**:
    - EC2: Pay for instances.
    - Fargate: $0.04048/vCPU-hour, $0.004445/GB-hour.
    - **Example**: 10 Fargate tasks, 0.5 vCPU, 1 GB, 24/7 = 10 × (0.5 × $0.04048 + 1 × $0.004445) × 24 × 30 = ~$182.05/month.
- **Strategies**:
    - Use Fargate Spot for non-critical tasks.
    - Optimize task definitions for minimal resources.

### **Key Notes**

- **Use Case**: Run microservices with Fargate, integrate with ALB.
- **Exam Tip**: Know ECS vs. EKS, Fargate vs. EC2, and task definitions.
    
    [](https://imgs.search.brave.com/TFXqTLtqLpXX2rHXVn_xJL0d-xJufaYS7m2jK51-xIY/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWNiMmFlNTk5/YmQyZGM3NzcyYTky/YTAwYTU1YTM3NTE2/NTE4MTY2MGY3ZDhl/MTFiNjdhMjM2NGY5/MTk0ODlmMS93d3cu/bm9wcy5pby8)
    

---

### **Amazon Elastic Kubernetes Service (EKS)**

### **Overview**

- **Definition**: Fully managed Kubernetes service to deploy, manage, and scale containerized applications using Kubernetes.
- **Key Features**:
    - Runs Kubernetes control plane across multiple AZs.
    - Supports EC2, Fargate, Outposts, EKS Anywhere.
    - Integrates with ALB, IAM, VPC, ECR.
- **Use Cases**: Portable Kubernetes apps, complex microservices.
- **Updates (2024–2025)**: GuardDuty EKS Runtime Monitoring for container threats (2024).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Core Concepts**

- **Cluster**: Kubernetes control plane + worker nodes (EC2/Fargate).
- **Pod**: Smallest deployable unit, contains one or more containers.
- **Karpenter**: Dynamic node provisioning for scaling.
- **Explanation**: E.g., deploy app with pods on Fargate, scale with Karpenter.

### **Performance**

- **Low Latency**: Fast pod scheduling with Fargate.
- **High Throughput**: Supports millions of pods.
- **Scalability**: Karpenter, managed node groups for auto-scaling.

### **Resilience**

- **Multi-AZ**: Control plane across 3 AZs, nodes spread across AZs.
- **Monitoring**: CloudWatch, Prometheus, X-Ray.

### **Security**

- **Encryption**: TLS, KMS for etcd and secrets.
- **Access Control**: IAM with RBAC, IRSA for pods.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: GuardDuty, Security Hub (2025).

### **Cost Optimization**

- **Pricing**:
    - Control plane: $0.10/hour (~$72/month).
    - Nodes: EC2/Fargate costs.
    - **Example**: 1 cluster, 10 EC2 nodes (m5.large, $0.096/hour) = $72 (control plane) + 10 × $0.096 × 24 × 30 = ~$799.20/month.
- **Strategies**:
    - Use Fargate Spot or EC2 Spot for savings.
    - Optimize node sizing with Karpenter.

### **Key Notes**

- **Use Case**: Run Kubernetes app with pods, integrate with ALB.
- **Exam Tip**: Know EKS vs. ECS, control plane pricing, and Karpenter.
    
    [](https://imgs.search.brave.com/4_oBmG9lV4AKBEsiDrBJPFS7WkKIv3EZPlfnkND_gUU/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzVhZDRlM2Mw/MjMxOGI1YjlhOWY4/MjY2OTM0ZDYwZmM2/N2Q3NjMzNjNhYzEy/YmIxMTY2MWIyYTZk/ZmM3NjZiMy9ncmFu/dWxhdGUuaW8v)
    

---

### **Comparison**

| **Service** | **Type** | **Focus** | **Cost** | **Use Case** |
| --- | --- | --- | --- | --- |
| **ECS Anywhere** | Hybrid ECS | On-premises ECS tasks | $0.01025/instance/hour | Hybrid cloud, compliance |
| **EKS Anywhere** | Hybrid Kubernetes | On-premises Kubernetes | Free, optional subscriptions | Air-gapped, hybrid Kubernetes |
| **EKS Distro** | Kubernetes Distribution | Self-managed Kubernetes | Free | Consistent Kubernetes anywhere |
| **ECR** | Container Registry | Store/share images | $0.10/GB-month (private) | Image storage, vulnerability scan |
| **ECS** | Container Orchestration | Simple container management | Fargate: $0.04048/vCPU-hour | Microservices, web apps |
| **EKS** | Kubernetes Orchestration | Flexible Kubernetes | $0.10/hour + node costs | Complex, portable apps |