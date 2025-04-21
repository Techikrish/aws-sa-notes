# Machine Learning

### **Amazon Comprehend**

### **Overview**

- **Definition**: Natural Language Processing (NLP) service using ML to extract insights from unstructured text (e.g., emails, social media).
- **Key Features**:
    - Sentiment analysis, entity recognition, keyphrase extraction, topic modeling, language detection.
    - Custom models for specific domains.
    - Integrates with Lambda, S3, SageMaker.
- **Use Cases**: Customer feedback analysis, semantic search, document categorization.
- **Updates (2024–2025)**: Security Hub for compliance (Jan 2025).

### **Core Concepts**

- **Entities**: Identifies people, places, organizations.
- **Sentiment**: Positive, negative, neutral, mixed.
- **Topic Modeling**: Groups documents by themes.
- **Explanation**: E.g., analyze reviews to detect sentiment and key phrases.

### **Performance**

- **Low Latency**: Real-time text analysis.
- **Scalability**: Auto-scales for large datasets.

### **Resilience**

- **Availability**: Multi-AZ, serverless.
- **Monitoring**: CloudWatch metrics, CloudTrail logs.

### **Security**

- **Encryption**: TLS, KMS for data at rest.
- **Access**: IAM, VPC endpoints for custom models.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2 (GovCloud).
- **Auditing**: Security Hub (2025).

### **Cost Optimization**

- **Pricing**: $0.0001/unit (25 characters); custom models vary.
    - **Example**: 1M units = $100.
- **Free Tier**: 50,000 units/month for 3 months.
- **Strategies**: Use async jobs, limit custom models.

### **Key Notes**

- **Use Case**: Analyze support tickets for sentiment.
- **Exam Tip**: Know sentiment analysis and VPC endpoints.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    

---

### **Amazon Forecast**

### **Overview**

- **Definition**: ML service for time-series forecasting using historical and related data.
- **Key Features**:
    - Generates predictions (e.g., sales, inventory).
    - Supports custom algorithms, AutoML.
    - Integrates with S3, Redshift.
- **Use Cases**: Demand forecasting, resource planning.
- **Updates (2024–2025)**: Improved AutoML accuracy (2024).

### **Core Concepts**

- **Dataset Groups**: Time-series, related, item metadata.
- **Predictors**: Trained models for forecasts.
- **Forecasts**: Generated predictions.
- **Explanation**: E.g., predict product sales using historical data.

### **Performance**

- **Low Latency**: Fast forecast generation.
- **Scalability**: Handles large datasets.

### **Resilience**

- **Availability**: Multi-AZ, serverless.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM policies.
- **Compliance**: HIPAA, PCI, GDPR.

### **Cost Optimization**

- **Pricing**: $0.088/1,000 forecasts, $0.60/training hour.
    - **Example**: 1M forecasts = $88.
- **Strategies**: Use AutoML, delete unused predictors.
- **Free Tier**: None.

### **Key Notes**

- **Use Case**: Forecast inventory needs.
- **Exam Tip**: Understand dataset types and AutoML.
    
    [](https://imgs.search.brave.com/C20dNcIgjwnpBXxA-1mjjJEDCZtGx81Ieay2h-9xyZ8/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjkxY2ZjMmNh/M2RlZWYzN2MwMGY1/Y2E4NmM5NzJiYjVm/NDU5OGRmOWI4Yjk2/Mzc2NzExZTU0NDFj/MDAyMDg1MC93d3cu/bWxleGFtLmNvbS8)
    

---

### **Amazon Fraud Detector**

### **Overview**

- **Definition**: ML service to detect online fraud (e.g., fake accounts, payment fraud).
- **Key Features**:
    - Real-time risk scoring.
    - Custom models with historical data.
    - Integrates with Lambda, S3.
- **Use Cases**: E-commerce fraud, account takeover prevention.
- **Updates (2024–2025)**: Enhanced rule-based detection (2024).

### **Core Concepts**

- **Detectors**: Models for fraud detection.
- **Rules**: Logic to act on risk scores.
- **Events**: Transactions to evaluate.
- **Explanation**: E.g., score payment for fraud risk.

### **Performance**

- **Low Latency**: Real-time scoring.
- **Scalability**: Auto-scales.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM.
- **Compliance**: HIPAA, PCI, GDPR.

### **Cost Optimization**

- **Pricing**: $0.05/1,000 predictions.
    - **Example**: 1M predictions = $50.
- **Strategies**: Optimize rules, use batch predictions.
- **Free Tier**: None.

### **Key Notes**

- **Use Case**: Detect fraudulent sign-ups.
- **Exam Tip**: Know real-time scoring and rules.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Amazon Kendra**

### **Overview**

- **Definition**: Intelligent search service using NLP and ML to query structured/unstructured data.
- **Key Features**:
    - Natural language search, relevancy ranking.
    - Connectors for S3, SharePoint, Salesforce.
    - Integrates with Lambda, Lex.
- **Use Cases**: Enterprise search, knowledge management.
- **Updates (2024–2025)**: Improved query accuracy (2024).

### **Core Concepts**

- **Index**: Searchable data store.
- **Connectors**: Sync data sources.
- **Queries**: Natural language or keyword.
- **Explanation**: E.g., search “employee handbook” across S3 documents.

### **Performance**

- **Low Latency**: Fast query responses.
- **Scalability**: Auto-scales.

### **Resilience**

- **Availability**: Multi-AZ, serverless.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM, Cognito.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2 (GovCloud).
- **Auditing**: Security Hub (2025).

### **Cost Optimization**

- **Pricing**: $7/hour (Developer Edition), $1.25/1,000 queries.
    - **Example**: 1M queries = $1,250.
- **Strategies**: Use Developer Edition for testing, optimize connectors.
- **Free Tier**: 30-day trial (750 query hours).

### **Key Notes**

- **Use Case**: Search intranet documents.
- **Exam Tip**: Know connectors and natural language search.
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    

---

### **Amazon Lex**

### **Overview**

- **Definition**: Service for building conversational interfaces (chatbots) using ASR and NLU.
- **Key Features**:
    - Voice/text interactions, intent recognition.
    - Integrates with Lambda, Connect, Kendra.
    - Same tech as Alexa.
- **Use Cases**: Customer service bots, IVR systems.
- **Updates (2024–2025)**: Enhanced NLU accuracy (2024).

### **Core Concepts**

- **Bot**: Conversational agent.
- **Intent**: User goal (e.g., book flight).
- **Utterance**: User input.
- **Explanation**: E.g., bot handles “check order status” via Lambda.

### **Performance**

- **Low Latency**: Real-time responses.
- **Scalability**: Auto-scales.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM, Cognito.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.

### **Cost Optimization**

- **Pricing**: $0.004/speech request, $0.00075/text request.
    - **Example**: 1M text requests = $750.
- **Strategies**: Optimize intents, use text over voice.
- **Free Tier**: 10,000 text, 5,000 speech requests/month for 1 year.

### **Key Notes**

- **Use Case**: Build a support chatbot.
- **Exam Tip**: Know intents and Lambda integration.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    

---

### **Amazon Polly**

### **Overview**

- **Definition**: Text-to-speech service generating lifelike speech in multiple voices/languages.
- **Key Features**:
    - Custom lexicons for pronunciation.
    - Supports SSML for speech customization.
    - Integrates with S3, Lambda.
- **Use Cases**: Audiobooks, voice assistants, accessibility.
- **Updates (2024–2025)**: New neural voices (2024).

### **Core Concepts**

- **Voices**: Male, female, regional accents.
- **Lexicon**: Custom pronunciation rules.
- **SSML**: Speech Synthesis Markup Language.
- **Explanation**: E.g., convert text to audio for a podcast.

### **Performance**

- **Low Latency**: Near-real-time speech generation.
- **Scalability**: Auto-scales.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS for S3 outputs.
- **Access**: IAM.
- **Compliance**: HIPAA, PCI, GDPR.

### **Cost Optimization**

- **Pricing**: $4/1M characters (standard), $16/1M (neural).
    - **Example**: 1M characters (standard) = $4.
- **Free Tier**: 5M characters/month (standard) for 1 year.
- **Strategies**: Use standard voices, batch processing.

### **Key Notes**

- **Use Case**: Generate voice for IVR system.
- **Exam Tip**: Know SSML and pricing tiers.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    

---

### **Amazon Rekognition**

### **Overview**

- **Definition**: Computer vision service for analyzing images and videos.
- **Key Features**:
    - Object/scene detection, facial analysis, text detection, custom labels.
    - Face Liveness for identity verification.
    - Integrates with Lambda, S3.
- **Use Cases**: Content moderation, security, identity verification.
- **Updates (2024–2025)**: Improved Face Liveness accuracy (2024).

### **Core Concepts**

- **Labels**: Objects/scenes in images.
- **Face Analysis**: Age, gender, emotions.
- **Custom Labels**: User-trained models.
- **Explanation**: E.g., detect faces in a security video.

### **Performance**

- **Low Latency**: Real-time analysis.
- **Scalability**: Auto-scales.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM, VPC endpoints for custom labels.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: Security Hub (2025).

### **Cost Optimization**

- **Pricing**: $0.001/image (first 1M), $0.10/1,000 Face Liveness checks.
    - **Example**: 1M images = $1,000.
- **Strategies**: Use batch processing, limit custom labels.
- **Free Tier**: 5,000 images/month for 1 year.

### **Key Notes**

- **Use Case**: Moderate user-uploaded images.
- **Exam Tip**: Know custom labels and Face Liveness.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Amazon SageMaker**

### **Overview**

- **Definition**: Comprehensive ML platform to build, train, and deploy models.
- **Key Features**:
    - Supports TensorFlow, PyTorch, custom algorithms.
    - Jupyter notebooks, AutoML, model monitoring.
    - Integrates with S3, Lambda, ECS.
- **Use Cases**: Predictive maintenance, recommendation systems.
- **Updates (2024–2025)**: Enhanced generative AI support (2024).

### **Core Concepts**

- **Notebook Instances**: IDE for model development.
- **Training Jobs**: Train models on managed compute.
- **Endpoints**: Deploy models for inference.
- **Explanation**: E.g., train a fraud detection model, deploy as endpoint.

### **Performance**

- **Low Latency**: Fast inference with endpoints.
- **Scalability**: Elastic compute for training/inference.

### **Resilience**

- **Availability**: Multi-AZ endpoints.
- **Monitoring**: CloudWatch, model drift detection.

### **Security**

- **Encryption**: TLS, KMS, EBS encryption.
- **Access**: IAM, VPC endpoints.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: Security Hub (2025).

### **Cost Optimization**

- **Pricing**: Varies (e.g., $0.046/ml.t3.medium/hour, $0.126/inference hour).
    - **Example**: 1,000 inference hours = $126.
- **Strategies**: Use Spot Instances, stop unused notebooks.
- **Free Tier**: 250 hours (t2.medium) for 2 months.

### **Key Notes**

- **Use Case**: Build custom ML model for sales prediction.
- **Exam Tip**: Know Jupyter, endpoints, and Spot Instances.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Amazon Textract**

### **Overview**

- **Definition**: ML service to extract text and data from scanned documents (PDF, images).
- **Key Features**:
    - Extracts text, tables, forms, handwriting.
    - Human review with Amazon Augmented AI.
    - Integrates with S3, Lambda, Comprehend.
- **Use Cases**: Invoice processing, medical forms automation.
- **Updates (2024–2025)**: Improved table extraction (2024).

### **Core Concepts**

- **Text Detection**: Extracts raw text.
- **Forms/Tables**: Extracts key-value pairs, tabular data.
- **Async Jobs**: Processes large documents.
- **Explanation**: E.g., extract data from a PDF invoice.

### **Performance**

- **Low Latency**: Fast processing for small documents.
- **Scalability**: Auto-scales for batch jobs.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: Security Hub (2025).

### **Cost Optimization**

- **Pricing**: $0.0015/page (text), $0.05/page (forms/tables).
    - **Example**: 1M text pages = $1,500.
- **Strategies**: Use async jobs, limit forms/tables.
- **Free Tier**: 1,000 text pages, 100 forms/tables for 2 months.

### **Key Notes**

- **Use Case**: Automate loan document processing.
- **Exam Tip**: Know forms/tables and Augmented AI.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Amazon Transcribe**

### **Overview**

- **Definition**: Automatic Speech Recognition (ASR) service to convert speech to text.
- **Key Features**:
    - Transcribes audio (WAV, MP3) with timestamps.
    - Supports real-time streaming, custom vocabularies.
    - Integrates with S3, Lambda, Comprehend.
- **Use Cases**: Subtitles, call center analytics, medical transcription.
- **Updates (2024–2025)**: Enhanced Medical Transcription accuracy (2024).

### **Core Concepts**

- **Transcription Jobs**: Batch audio processing.
- **Streaming**: Real-time transcription.
- **Custom Vocabularies**: Domain-specific terms.
- **Explanation**: E.g., transcribe customer call for analysis.

### **Performance**

- **Low Latency**: Real-time streaming.
- **Scalability**: Auto-scales.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM, VPC endpoints.
- **Compliance**: HIPAA, PCI, GDPR, FIPS 140-2.
- **Auditing**: Security Hub (2025).

### **Cost Optimization**

- **Pricing**: $0.024/min (standard), $0.036/min (streaming).
    - **Example**: 1,000 min (standard) = $24.
- **Strategies**: Use batch jobs, optimize audio length.
- **Free Tier**: 60 min/month for 1 year.

### **Key Notes**

- **Use Case**: Generate video subtitles.
- **Exam Tip**: Know streaming and Medical Transcription.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Amazon Translate**

### **Overview**

- **Definition**: ML service for real-time text translation across languages.
- **Key Features**:
    - Supports 75+ languages, custom terminology.
    - Batch and real-time translation.
    - Integrates with S3, Lambda.
- **Use Cases**: Website localization, multilingual support.
- **Updates (2024–2025)**: Improved translation accuracy (2024).

### **Core Concepts**

- **Translation Jobs**: Batch text processing.
- **Real-Time**: Immediate translations.
- **Terminology**: Custom dictionaries.
- **Explanation**: E.g., translate support tickets to Spanish.

### **Performance**

- **Low Latency**: Real-time translation.
- **Scalability**: Auto-scales.

### **Resilience**

- **Availability**: Multi-AZ.
- **Monitoring**: CloudWatch, CloudTrail.

### **Security**

- **Encryption**: TLS, KMS.
- **Access**: IAM, VPC endpoints.
- **Compliance**: HIPAA, PCI, GDPR.

### **Cost Optimization**

- **Pricing**: $15/1M characters.
    - **Example**: 1M characters = $15.
- **Free Tier**: 2M characters/month for 1 year.
- **Strategies**: Use batch jobs, optimize text length.

### **Key Notes**

- **Use Case**: Localize e-commerce website.
- **Exam Tip**: Know real-time vs. batch and free tier.
    
    [](https://imgs.search.brave.com/kvi-2yxLRfXCwYL8Hdyik1HLlZTl6Ua2dabLSq8ebkk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM4ZmQwZjYz/OTBjM2U4MjU0OWZh/N2M0YTVmZWQzMTk2/YTdjYWZmMjQ5ODVi/NTlhYzdiZjMzZWFk/MjZhYWY5My9kb2Nz/LmF3cy5hbWF6b24u/Y29tLw)
    
    [](https://imgs.search.brave.com/mjUN9kNtAF1vE76nMcl1BD1pR440wRNaOR1_x--9YD4/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw)
    

---

### **Comparison**

| **Service** | **Type** | **Focus** | **Cost** | **Use Case** |
| --- | --- | --- | --- | --- |
| **Comprehend** | NLP | Text insights | $0.0001/unit | Sentiment analysis |
| **Forecast** | Time-Series Forecasting | Predictions | $0.088/1,000 forecasts | Demand forecasting |
| **Fraud Detector** | Fraud Detection | Risk scoring | $0.05/1,000 predictions | Payment fraud detection |
| **Kendra** | Intelligent Search | Enterprise search | $1.25/1,000 queries | Knowledge management |
| **Lex** | Conversational AI | Chatbots | $0.00075/text request | Customer service bot |
| **Polly** | Text-to-Speech | Speech generation | $4/1M characters | Voice assistant |
| **Rekognition** | Computer Vision | Image/video analysis | $0.001/image | Content moderation |
| **SageMaker** | ML Platform | Build/train/deploy models | $0.126/inference hour | Custom ML models |
| **Textract** | Document Extraction | Text/data from documents | $0.0015/page (text) | Invoice processing |
| **Transcribe** | Speech-to-Text | Audio transcription | $0.024/min | Call center analytics |
| **Translate** | Translation | Multilingual text | $15/1M characters | Website localization |