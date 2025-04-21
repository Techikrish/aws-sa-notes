# cloudfront

### **Amazon CloudFront Overview**

- **Definition**: Amazon CloudFront is a global Content Delivery Network (CDN) that accelerates the delivery of static and dynamic content by caching it at edge locations worldwide.
- **Key Concepts**:
    - **Edge Locations**: 300+ points of presence (PoPs) globally for caching.
    - **Origin**: Source of content (e.g., S3, EC2, ALB).
    - **Distribution**: Configuration defining how content is delivered.
- **Use Cases**: Static website delivery, video streaming, API acceleration, global content distribution.

---

### **1. CloudFront Core Components**

### **Distributions**

- **Types**:
    - **Web Distribution**: For HTTP/HTTPS content (e.g., websites, APIs).
    - **RTMP Distribution**: For streaming media (e.g., Flash, legacy).
- **Explanation**: Web distributions are most common for SAA-C03; RTMP is rarely tested but good to know.
- **Key Settings**:
    - **Origin**: Where CloudFront fetches content (e.g., S3 bucket, ALB).
    - **Behaviors**: Rules for caching and routing (e.g., path patterns like /images/*).
- **Use Case**: Serve an S3 static site or an EC2-hosted app.

### **Edge Locations**

- **Purpose**: Cache content closer to users for low latency.
- **How It Works**: Content is cached at PoPs; if not cached, it’s fetched from the origin.
- **Explanation**: Edge locations are separate from AWS Regions/AZs—more numerous and globally distributed.

### **Origins**

- **Supported Origins**:
    - **S3**: Static content (e.g., HTML, images).
    - **EC2/ALB**: Dynamic content (e.g., APIs, web apps).
    - **HTTP Servers**: On-premises or third-party.
- **Origin Access Identity (OAI)**: Restricts S3 access to CloudFront only.
- **Explanation**: OAI enhances security by preventing direct S3 access.

### **Key Notes**:

- **Exam Relevance**: Know how to configure a distribution with S3 as origin + OAI.
- **Mastery Tip**: Understand edge location vs. Regional Edge Cache (larger, longer-term caching).

---

### **2. CloudFront Performance Features**

CloudFront is a cornerstone of high-performing architectures.

### **Caching**

- **Purpose**: Reduce latency and origin load by storing content at edge locations.
- **TTL (Time to Live)**:
    - **Default**: Set by origin (e.g., S3 Cache-Control header).
    - **Custom**: Min, Max, Default TTL in behavior settings.
- **Explanation**: Longer TTL = more caching, less origin hits; shorter TTL = fresher content.
- **Cache Key**: Defines what’s cached (e.g., URL, query strings, headers).

### **Compression**

- **Purpose**: Reduce file size for faster delivery.
- **How It Works**: Gzip or Brotli compression if origin supports it and client requests it (e.g., Accept-Encoding header).
- **Explanation**: Cuts bandwidth costs and improves load times.

### **Lambda@Edge**

- **Purpose**: Run code at edge locations for customization.
- **Triggers**:
    - Viewer Request: Before CloudFront processes request.
    - Viewer Response: Before returning to client.
    - Origin Request: Before fetching from origin.
    - Origin Response: After origin responds.
- **Use Case**: Rewrite URLs, add headers, A/B testing.
- **Explanation**: Serverless, low-latency processing—e.g., redirect HTTP to HTTPS.

### **Key Notes**:

- **Performance**: Caching + compression = faster delivery; Lambda@Edge = dynamic tweaks.
- **Exam Tip**: Know TTL settings and Lambda@Edge triggers for performance scenarios.

---

### **3. CloudFront Security Features**

Security is critical for SAA-C03.

### **Encryption**

- **In Transit**: HTTPS by default (free AWS Certificate Manager certs or custom SSL).
- **Explanation**: Enforces SSL/TLS between client, CloudFront, and origin (if configured).
- **Custom SSL**: Upload your own cert for branded domains (e.g., cdn.example.com).

### **Access Control**

- **Origin Access Identity (OAI)**:
    - Restricts S3 bucket access to CloudFront.
    - **Explanation**: Updates S3 bucket policy to allow only CloudFront—prevents public bypass.
- **Signed URLs/Cookies**:
    - **Purpose**: Restrict access to specific users/timeframes.
    - **How It Works**: Generate URL with policy + signature (e.g., for premium content).
    - **Explanation**: Uses CloudFront key pairs, not IAM—key for private content delivery.

### **Web Application Firewall (WAF)**

- **Purpose**: Protect against attacks (e.g., SQL injection, DDoS).
- **Integration**: Attach AWS WAF to CloudFront distribution.
- **Explanation**: Rules block malicious traffic before reaching the origin.

### **Geo-Restriction**

- **Purpose**: Allow/block access by country.
- **How It Works**: Whitelist or blacklist countries in distribution settings.
- **Use Case**: Comply with regional content laws.

### **Key Notes**:

- **Security**: OAI + Signed URLs = private S3 content; WAF = app protection.
- **Exam Tip**: Practice OAI setup and signed URL policies.

---

### **4. CloudFront Resilience Features**

Resilience ensures content availability.

### **Global Distribution**

- **Purpose**: Multiple edge locations reduce single-point failures.
- **Explanation**: If one edge fails, others serve content—built-in redundancy.

### **Origin Failover**

- **Purpose**: Switch to backup origin if primary fails.
- **How It Works**: Configure multiple origins with failover group + health checks.
- **Use Case**: S3 primary, EC2 secondary for dynamic content.
- **Explanation**: Requires custom error pages (e.g., 503 triggers failover).

### **Key Notes**:

- **Resilience**: Global PoPs + failover = high availability.
- **Exam Tip**: Know origin failover setup for HA scenarios.

---

### **5. CloudFront Cost Optimization**

Cost efficiency is a key SAA-C03 domain.

### **Caching Strategy**

- **Purpose**: Minimize origin requests to reduce costs.
- **How It Works**: Longer TTLs = fewer origin fetches (e.g., S3 GET costs).
- **Explanation**: Balance freshness vs. cost—e.g., static assets at 1 year TTL.

### **Data Transfer Pricing**

- **Purpose**: Optimize egress costs.
- **Features**: Cheaper rates from edge locations vs. direct origin.
- **Explanation**: CloudFront egress is often less than S3/ALB direct.

### **Compression**

- **Purpose**: Lower bandwidth costs.
- **Explanation**: Smaller files = less data transfer fees.

### **Key Notes**:

- **Cost Savings**: Maximize caching, use compression.
- **Exam Tip**: Calculate cost savings with CloudFront vs. direct S3 access.

---

### **6. CloudFront Use Cases**

Understand practical applications.

### **Static Content Delivery**

- **Setup**: S3 origin + CloudFront distribution.
- **Features**: Low latency, scalable static sites.
- **Explanation**: Common for images, CSS, JS—pair with OAI for security.

### **Dynamic Content Acceleration**

- **Setup**: ALB/EC2 origin + CloudFront.
- **Features**: Caches dynamic responses (e.g., API calls).
- **Explanation**: Use cache behaviors to cache GET requests.

### **Video Streaming**

- **Setup**: S3 origin + CloudFront + signed URLs.
- **Features**: On-demand or live streaming (with Media Services).
- **Explanation**: Signed URLs protect premium content.

### **Global Applications**

- **Setup**: Multi-origin with Lambda@Edge.
- **Features**: Route users to nearest region.
- **Explanation**: Enhances user experience globally.

---

### **7. CloudFront Integration**

CloudFront works with other AWS services.

### **S3**

- **Purpose**: Serve static content.
- **Explanation**: OAI + bucket policy = secure, cached delivery.

### **ALB/EC2**

- **Purpose**: Accelerate dynamic apps.
- **Explanation**: Cacheable responses reduce backend load.

### **Lambda@Edge**

- **Purpose**: Customize at edge.
- **Explanation**: Adds logic without origin round-trips.

### **AWS Shield**

- **Purpose**: DDoS protection.
- **Explanation**: Standard protection free with CloudFront; Advanced for extra cost.

---

### **Quick Reference Table**

| **Feature** | **Purpose** | **Key Detail** | **Exam Relevance** |
| --- | --- | --- | --- |
| Distributions | Content delivery | Web (HTTP), RTMP (streaming) | Core Concept |
| Caching | Reduce latency/cost | TTL, cache key customization | Performance, Cost |
| Lambda@Edge | Edge logic | Viewer/Origin triggers | Performance |
| OAI | Secure S3 access | Restricts to CloudFront | Security |
| Signed URLs | Private content | Time-limited access | Security |
| WAF | Attack protection | Blocks malicious traffic | Security |
| Origin Failover | High availability | Backup origin on failure | Resilience |
| Geo-Restriction | Regional control | Whitelist/blacklist countries | Security |

---

### **Detailed Explanations for Mastery**

- **Caching Behavior**:
    - **Example**: /images/* caches for 1 year, /api/* bypasses cache.
    - **Why It Matters**: Fine-tunes performance/cost—know how to set path patterns.
- **Signed URLs**:
    - **Process**: Generate with private key, policy (e.g., expire in 1 hour).
    - **Why It Matters**: Protects paid content—practice creating one.
- **Lambda@Edge**:
    - **Example**: Add X-Custom-Header on Viewer Response.
    - **Why It Matters**: Dynamic tweaks without origin changes—know trigger points.