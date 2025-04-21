# Amazon Cognito

### **Amazon Cognito Overview**

- **Definition**: Amazon Cognito is a managed service for user authentication, authorization, and user management for web and mobile applications.
- **Key Features**:
    - Provides **User Pools** for user sign-up/sign-in and **Identity Pools** for temporary AWS credentials.
    - Supports OAuth 2.0, OpenID Connect (OIDC), SAML, and social logins (e.g., Google, Facebook).
    - Integrates with API Gateway, AppSync, ALB, and AWS IAM for secure access.
    - Offers MFA, user verification, and user data synchronization.
- **Use Cases**: Secure mobile/web apps, enable SSO, manage user profiles, provide AWS resource access.
- **Key Updates (2024–2025)**:
    - Enhanced MFA with passkeys (January 2025).
    - Improved OIDC/SAML integration for enterprise SSO (October 2024).
    - FIPS 140-2 compliance for GovCloud (October 2024).

---

### **1. Core Concepts**

- **User Pools**:
    - Manage user registration, authentication, and account recovery.
    - Issue JSON Web Tokens (JWTs) for access, ID, and refresh.
    - **Example**: Authenticate users for a mobile app.
- **Identity Pools**:
    - Provide temporary AWS credentials for authenticated/unauthenticated users to access AWS services (e.g., S3, DynamoDB).
    - **Example**: Grant S3 read access to app users.
- **Authentication Flows**:
    - Supports username/password, social logins, SAML, OIDC, and MFA.
    - **Example**: Google login with MFA for app access.
- **Triggers**:
    - Lambda functions for custom workflows (e.g., custom authentication, user migration).
    - **Example**: Send welcome email after sign-up.
- **Hosted UI**:
    - Pre-built sign-in/sign-up pages customizable with branding.
    - **Example**: Hosted login page for web app.

---

### **2. Performance**

- **Low Latency**: Global edge authentication via CloudFront reduces login delays.
- **High Throughput**: Scales to millions of users and authentications.
- **Scalability**: Auto-scales with user growth, no server management.
- **Example**: Handles 100,000 logins/second for a gaming app.

---

### **3. Resilience**

- **Multi-AZ/Region**: Regional service, highly available across AZs.
- **Global Sync**: User data synchronized across devices via Cognito Sync.
- **Monitoring**: CloudWatch metrics for login attempts, errors; CloudTrail for API audits.
- **Example**: Continues authentication if us-east-1a fails.

---

### **4. Security**

- **Authentication**: MFA (SMS, TOTP, passkeys), password policies, JWTs.
- **Authorization**: Role-based access via Identity Pools and IAM.
- **Encryption**: HTTPS for API calls, KMS for data at rest.
- **Compliance**: HIPAA, PCI, SOC, ISO, GDPR, FIPS 140-2 (GovCloud).
- **Example**: MFA with passkeys for PCI-compliant app login.
- **Integration**: Secures API Gateway, AppSync, ALB with JWTs.

---

### **5. Cost Optimization**

- **Pricing**:
    - **User Pools**: $0.0055/month per monthly active user (MAU) after 50,000 free MAUs.
    - **Identity Pools**: $0.05/GB for sync storage.
    - **Example**: 100,000 MAUs = 50,000 × $0 + 50,000 × $0.0055 = $275/month.
- **Strategies**:
    - Use free tier for small apps.
    - Limit sync storage for user data.
    - Tag resources for cost tracking (e.g., “Project:App”).
- **Free Tier**: 50,000 MAUs, 10 GB sync storage/month.

---

### **6. Advanced Features**

- **Passkey MFA**: Passwordless authentication with WebAuthn (new 2025).
- **Enterprise SSO**: Enhanced SAML/OIDC for Active Directory, Okta (new 2024).
- **Custom Attributes**: Store user metadata (e.g., preferences).
- **Lambda Triggers**: Customize authentication, migration, or notifications.
- **Example**: Lambda trigger sends SMS on sign-up.

---

### **7. Use Cases**

- **Mobile/Web Apps**: User login with Google and MFA.
- **Serverless APIs**: Secure AppSync with Cognito JWTs.
- **Enterprise SSO**: SAML integration with Active Directory.
- **User Data Sync**: Synchronize profiles across devices.

---

### **8. Comparison**

| **Feature** | **Cognito** | **IAM** | **AWS SSO** |
| --- | --- | --- | --- |
| **Type** | App Authentication | Resource Access Control | Enterprise SSO |
| **Use Case** | Mobile/web app login | AWS service access | Multi-account SSO |
| **Auth Method** | OAuth, OIDC, SAML | IAM users, roles | SAML, OIDC |
| **Cost** | $0.0055/MAU | Free (except KMS) | Free with Organizations |