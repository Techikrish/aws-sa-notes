# Media Services

### **Amazon Elastic Transcoder**

### **Overview**

- **Definition**: Cloud-based media transcoding service to convert video/audio files into formats for various devices (e.g., smartphones, tablets).
- **Key Features**:
    - Supports formats: MP4, HLS, MPEG-DASH, WebM, MP3, AAC.
    - Transcoding pipelines for parallel workflows.
    - Integrates with S3, CloudFront, CloudWatch.
- **Use Cases**: Video-on-demand (VOD) transcoding, adaptive bitrate streaming.
- **Critical Update (2024–2025)**: Service discontinuation on November 13, 2025; migrate to AWS Elemental MediaConvert (more features, lower cost at $0.0075/min vs. $0.015/min).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

### **Core Concepts**

- **Pipeline**: Workflow for transcoding jobs (e.g., short vs. long content).
- **Job**: Transcodes a media file into multiple formats/bitrates.
- **Presets**: Predefined settings for common devices/formats.
- **Explanation**: E.g., transcode MP4 to HLS for iOS playback.

### **Performance**

- **Low Latency**: Fast job processing.
- **Scalability**: Handles multiple jobs via pipelines.

### **Resilience**

- **Availability**: Multi-AZ, S3-based storage.
- **Monitoring**: CloudWatch (job status), CloudTrail (API calls).

### **Security**

- **Encryption**: S3 SSE, KMS for output, AES-128 for HLS.
- **Access**: IAM for job/pipeline management.
- **Compliance**: HIPAA, PCI, GDPR (pre-2025).

### **Cost Optimization**

- **Pricing (us-east-1)**: $0.015/min (SD), $0.03/min (HD).
    - **Example**: 30-min SD video = $0.45.
- **Free Tier**: 20 min/month.
- **Strategies**: Migrate to MediaConvert, use presets.
- **Explanation**: E.g., transcode 10-min clip for $0.15.

### **Key Notes**

- **Use Case**: Convert VOD for multi-device playback (until 2025).
- **Exam Tip**: Know discontinuation, MediaConvert migration, and HLS support.
- **Migration**: Use AWS guide/script to convert presets to MediaConvert.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Amazon Kinesis Video Streams (Detailed)**

### **Overview**

- **Definition**: Fully managed service to securely stream video, audio, and time-encoded data (e.g., RADAR, LIDAR) from devices to AWS for analytics, machine learning (ML), playback, and storage.
- **Key Features**:
    - Ingests from edge devices, cameras, drones, smartphones.
    - Supports real-time (WebRTC) and on-demand (HLS, DASH) playback.
    - Integrates with Rekognition, SageMaker, S3, CloudWatch.
    - SDKs for C, Java, Python, WebRTC.
- **Use Cases**: Security monitoring, smart cities, real-time analytics, video chat.
- **Updates (2024–2025)**:
    - Enhanced WebRTC client metrics (2024).
    - API quotas increased for up to 10x more simultaneous consumers (2024).
        
        [](https://imgs.search.brave.com/V4SWkzHlb-4_Tfbuo86Ddk-2f6AqCpm5BjzDMVrtUXk/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGE3ZWZlZTIy/ZDliZWNlYzM5NWI5/NzcxOWYyYmJhMzVk/ODQ3MzIwZDNhMTJl/YWNlMjM2NWI4NTU4/YWJjNTk2Mi9tb2Nh/LmNvbXB1dGluZ2Fy/Y2hpdGVjdHVyZXMu/Y29tLw)
        

### **Core Concepts**

- **Stream**: Channel for ingesting/storing media data.
- **Producer SDK**: Installs on devices to stream to AWS.
- **Consumer API**: Retrieves media for processing/playback.
- **Fragments**: Time-indexed media chunks stored in S3.
- **Explanation**: E.g., stream security camera feed to AWS, analyze with Rekognition.

### **Detailed Features**

- **Ingestion**:
    - Sources: Webcams, IP cameras, drones, IoT devices.
    - Data: Video, audio, RADAR, LIDAR, depth sensors.
    - SDKs: C, Java, Python for edge devices; GStreamer for RTSP.
- **Playback**:
    - **HLS/DASH**: Live/on-demand streaming (3–5s latency).
        
        [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
        
    - **WebRTC**: Ultra-low latency (sub-second) for two-way streaming (e.g., video chat).
    - Image extraction for thumbnails or ML pipelines.
- **Storage**:
    - S3-based, durable, encrypted.
    - Retention: 24 hours to 365 days (configurable).
- **Analytics**:
    - Rekognition Video: Face detection in streams.
    - SageMaker: Custom ML models (e.g., MxNet, TensorFlow, OpenCV).
- **Protocols**:
    - HLS, DASH for playback.
    - WebRTC (STUN, TURN, signaling) for low-latency.
- **Integration**:
    - SNS: Notify on fragment persistence.
    - CloudWatch: Metrics (e.g., PutMedia.Success).
    - S3: Long-term storage.
- **Limitations**:
    - Max 10 active HLS/DASH sessions per stream.
    - WebRTC requires specific SDKs.
- **Explanation**: E.g., stream live drone footage, use WebRTC for real-time control, store in S3 for 30 days.

### **Performance**

- **Low Latency**: WebRTC (<1s), HLS/DASH (3–5s).
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    
- **High Throughput**: Ingests from millions of devices.
- **Scalability**: Auto-scales infrastructure, no server provisioning.

### **Resilience**

- **Availability**: Multi-AZ, S3 durability (99.999999999%).
- **Monitoring**: CloudWatch (e.g., GetMedia.Latency), CloudTrail.
- **Recovery**: Fragment indexing for quick retrieval.
- **Explanation**: E.g., alarm on high PutMedia.Errors.

### **Security**

- **Encryption**: TLS in transit, KMS at rest (S3).
- **Access**: IAM policies (e.g., kinesisvideo:PutMedia), IoT for device auth.
- **Network**: VPC endpoints for private access.
- **Compliance**: HIPAA, PCI, SOC, GDPR, FIPS 140-2 (GovCloud).
- **Auditing**: CloudTrail, Security Hub (2025).
- **Explanation**: E.g., restrict stream access to specific IAM role.

### **Cost Optimization**

- **Pricing (us-east-1)**:
    - Ingestion: $0.0045/1M fragments.
    - Storage: $0.023/GB-month.
    - Retrieval: $0.0119/GB (HLS/DASH), $0.008/1M WebRTC signaling.
    - **Example**: 1,000 hours, 1 GB/hour stream, 30-day retention = (1,000 × 60 × $0.0045/1M) + (1,000 × $0.023) + (1,000 × $0.0119) = $0.27 + $23 + $11.90 = $35.17.
- **Free Tier**: None.
- **Strategies**:
    - Minimize retention (e.g., 24 hours vs. 365 days).
    - Use WebRTC for low-cost signaling.
    - Optimize fragment size to reduce ingestion costs.
- **Explanation**: E.g., reduce retention to 7 days to save $20/month.

### **Key Notes**

- **Use Case**: Stream webcam for real-time monitoring, analyze with Rekognition.
- **Exam Tip**: Know WebRTC vs. HLS, S3 storage, and Rekognition integration.
- **Best Practice**: Use Edge Agent for local recording of IP cameras.
    
    [](https://imgs.search.brave.com/Q3-FdI89HQ5XjoM9ebI7Z8OVdcuf6x6ueMCkPrADf2k/rs:fit:64:0:0:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFkODM4NDk0/MTRjNzUyMTM3OTQ5/MmI4MjRkZjFhNDcw/MTIxYzI3NmZmMmNm/MDFkZWRjNmFkZjYz/NzVhZmIzMC9hd3Mu/YW1hem9uLmNvbS8)
    

---

### **Comparison**

| **Service** | **Type** | **Focus** | **Cost** | **Use Case** |
| --- | --- | --- | --- | --- |
| **Elastic Transcoder** | Media Transcoding | VOD format conversion | $0.015/min (SD) | Transcode MP4 to HLS (until 2025) |
| **Kinesis Video Streams** | Video Streaming | Real-time video/audio ingest | $0.0119/GB retrieval | Stream camera for analytics |

### **Explanation**:

- **Elastic Transcoder**: Converts stored media for playback (discontinued 2025).
- **Kinesis Video Streams**: Streams live data for real-time processing/storage.