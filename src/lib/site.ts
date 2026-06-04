import { getCollection, type CollectionEntry } from "astro:content";

export type NoteEntry = CollectionEntry<"notes">;

export type Note = {
  id: string;
  title: string;
  category: string;
  entry: NoteEntry;
};

export type NavCategory = {
  name: string;
  notes: Note[];
};

export const site = {
  name: "AWS SAA-C03 Study Notes",
  shortName: "AWS SAA Notes",
  description:
    "A focused, searchable study guide for the AWS Certified Solutions Architect - Associate exam.",
  repoUrl: "https://github.com/Techikrish/aws-sa-notes"
};

const categoryOrder = [
  "Analytics",
  "Application Integration",
  "AWS Cost Management",
  "Compute",
  "Containers",
  "Database",
  "Security, Identity, and Compliance",
  "Serverless",
  "Storage",
  "Front-End Web and Mobile",
  "Machine Learning",
  "Management and Governance",
  "Media Services",
  "Migration and Transfer",
  "Networking and Content Delivery"
];

const noteOrder: Record<string, string[]> = {
  Analytics: [
    "Amazon Athena",
    "Amazon EMR",
    "Amazon Kinesis",
    "AWS Glue",
    "Others"
  ],
  "Application Integration": [
    "Amazon EventBridge",
    "Amazon MQ",
    "Amazon Simple Notification Service (Amazon SNS)",
    "Amazon Simple Queue Service (Amazon SQS)",
    "AWS Step Functions",
    "Others"
  ],
  "AWS Cost Management": ["AWS Cost Management"],
  Compute: [
    "AWS Batch",
    "AWS Outposts",
    "AWS Serverless Application Repository",
    "AWS Wavelength",
    "EC2 Auto Scaling",
    "EC2",
    "Elastic Beanstalk",
    "VMware Cloud on AWS"
  ],
  Containers: ["Containers"],
  Database: [
    "Amazon Athena",
    "Amazon Aurora",
    "Amazon DocumentDB",
    "Amazon ElastiCache",
    "Amazon Keyspaces",
    "Amazon Neptune",
    "Amazon RDS",
    "Amazon Redshift",
    "DynamoDB"
  ],
  "Security, Identity, and Compliance": [
    "Amazon Cognito",
    "Amazon GuardDuty",
    "Amazon Inspector",
    "Amazon Macie",
    "AWS Certificate Manager (ACM)",
    "AWS Identity and Access Management (IAM)",
    "AWS Key Management Service (AWS KMS)",
    "AWS Secrets Manager",
    "AWS Shield",
    "AWS Web Application Firewall (AWS WAF)",
    "Others"
  ],
  Serverless: ["AWS AppSync", "AWS Fargate", "AWS Lambda"],
  Storage: [
    "Amazon EBS",
    "Amazon EFS",
    "Amazon FSx",
    "AWS Backup",
    "AWS S3",
    "AWS Storage Gateway"
  ],
  "Front-End Web and Mobile": [
    "Amazon API Gateway",
    "AWS Amplify",
    "Others"
  ],
  "Machine Learning": ["Machine Learning"],
  "Management and Governance": [
    "Amazon CloudWatch",
    "AWS CloudFormation",
    "AWS CloudTrail",
    "AWS Control Tower",
    "AWS Organizations",
    "AWS Systems Manager",
    "AWS Trusted Advisor",
    "Others"
  ],
  "Media Services": ["Media Services"],
  "Migration and Transfer": ["Migration and Transfer"],
  "Networking and Content Delivery": [
    "Amazon Route 53",
    "Amazon VPC",
    "AWS Client VPN",
    "AWS CloudFront",
    "AWS Direct Connect",
    "AWS Elastic Load Balancing (ELB)",
    "AWS Global Accelerator",
    "AWS PrivateLink",
    "AWS Site-to-Site VPN",
    "AWS Transit Gateway"
  ]
};

const titleOverrides: Record<string, string> = {
  "Database/dynamo db": "DynamoDB",
  "Networking and Content Delivery/AWS Cloudfront": "AWS CloudFront",
  "docs/index": "Home",
  index: "Home"
};

export function withBase(path = "/") {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (!cleanBase) return cleanPath;
  if (cleanPath === "/") return `${cleanBase}/`;
  return `${cleanBase}${cleanPath}`;
}

export function noteUrl(id: string) {
  return withBase(`/${encodeURI(id)}/`);
}

export function getCategory(id: string) {
  return id.split("/")[0] ?? "";
}

function filenameFromId(id: string) {
  return id.split("/").at(-1) ?? id;
}

function cleanupTitle(value: string) {
  return value
    .replace(/_+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\bAws\b/g, "AWS")
    .replace(/\bEc2\b/g, "EC2")
    .replace(/\bEbs\b/g, "EBS")
    .replace(/\bEfs\b/g, "EFS")
    .replace(/\bFsx\b/g, "FSx")
    .replace(/\bVpc\b/g, "VPC")
    .replace(/\bIam\b/g, "IAM")
    .replace(/\bKms\b/g, "KMS")
    .replace(/\bS3\b/g, "S3")
    .replace(/\bSqs\b/g, "SQS")
    .replace(/\bSns\b/g, "SNS")
    .replace(/\bWaf\b/g, "WAF")
    .replace(/\bAcm\b/g, "ACM")
    .replace(/\bDynamo Db\b/i, "DynamoDB");
}

export function titleFromEntry(entry: NoteEntry) {
  if (entry.data.title) return entry.data.title;
  if (titleOverrides[entry.id]) return titleOverrides[entry.id];

  return cleanupTitle(filenameFromId(entry.id).replace(/\*/g, ""));
}

function noteRank(note: Note) {
  const order = noteOrder[note.category] ?? [];
  const index = order.indexOf(note.title);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function categoryRank(name: string) {
  const index = categoryOrder.indexOf(name);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

export async function getNotes() {
  const entries = await getCollection("notes");
  return entries
    .filter((entry) => entry.id !== "index")
    .map((entry) => ({
      id: entry.id,
      title: titleFromEntry(entry),
      category: getCategory(entry.id),
      entry
    }))
    .sort((a, b) => {
      const byCategory = categoryRank(a.category) - categoryRank(b.category);
      if (byCategory !== 0) return byCategory;

      const byRank = noteRank(a) - noteRank(b);
      if (byRank !== 0) return byRank;

      return a.title.localeCompare(b.title);
    });
}

export function buildNavigation(notes: Note[]) {
  const groups = new Map<string, Note[]>();

  for (const note of notes) {
    const items = groups.get(note.category) ?? [];
    items.push(note);
    groups.set(note.category, items);
  }

  return [...groups.entries()]
    .map(([name, categoryNotes]) => ({ name, notes: categoryNotes }))
    .sort((a, b) => categoryRank(a.name) - categoryRank(b.name));
}

export function getAdjacentNotes(notes: Note[], id: string) {
  const index = notes.findIndex((note) => note.id === id);
  return {
    previous: index > 0 ? notes[index - 1] : undefined,
    next: index >= 0 && index < notes.length - 1 ? notes[index + 1] : undefined
  };
}
