export interface NavItem {
  id: string
  label: string
}

export interface StatCard {
  label: string
  value: string
}

export interface SkillCategory {
  title: string
  theme: "blue" | "amber" | "green" | "red"
  tags: string[]
}

export interface Project {
  name: string
  slug: string
  description: string
  technologies: string[]
  github: string
  demo: string
}

export interface LearningItem {
  label: string
  percent: number
}

export interface Certification {
  title: string
  status: "Planned" | "Learning" | "Completed"
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface ContactLink {
  label: string
  href: string
  icon: "github" | "linkedin" | "mail" | "file"
}

export const profile = {
  name: "YOUR_NAME",
  city: "YOUR_CITY",
  email: "YOUR_EMAIL",
  github: "YOUR_GITHUB",
  linkedin: "YOUR_LINKEDIN",
  resume: "YOUR_RESUME_LINK",
  role: "Junior DevOps Engineer | AWS Cloud | Linux | Go Backend",
  tagline:
    "Building cloud infrastructure, automation solutions, backend services, and DevOps projects while continuously learning modern cloud technologies.",
  availabilityBadge: "Open to Junior Roles & Internships",
}

export const aboutSummary =
  "Aspiring DevOps and Cloud Engineer focused on AWS, Linux administration, automation, containerization, networking, and backend development. Building hands-on projects involving cloud infrastructure, Docker, serverless applications, and Go microservices while developing practical engineering skills."

export const aboutStats: StatCard[] = [
  { label: "Focus", value: "DevOps & Cloud" },
  { label: "Level", value: "Junior Engineer" },
  { label: "Available", value: "Internships & Entry-Level Roles" },
  { label: "Location", value: "YOUR_CITY" },
]

export const terminalLines = [
  { command: "whoami", output: ["YOUR_NAME"], outputColor: "accent" as const },
  {
    command: "cat about.txt",
    output: [
      "Junior DevOps Engineer focused on AWS Cloud, Linux",
      "Administration, Networking, Automation, and Backend Development.",
    ],
    outputColor: "text" as const,
  },
  {
    command: "ls projects/",
    output: ["aws-vpc-lab", "docker-go-api", "linux-automation-toolkit", "serverless-api"],
    outputColor: "code" as const,
  },
]

export const skills: SkillCategory[] = [
  {
    title: "Cloud",
    theme: "blue",
    tags: ["AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "AWS Lambda", "CloudWatch"],
  },
  {
    title: "Languages",
    theme: "amber",
    tags: ["Go", "Java", "Python", "Bash"],
  },
  {
    title: "Infrastructure",
    theme: "green",
    tags: ["Linux", "Docker", "Nginx", "Git", "Microservices"],
  },
  {
    title: "Networking",
    theme: "red",
    tags: ["TCP/IP", "DNS", "SSH", "Routing", "Firewalls"],
  },
]

export const projects: Project[] = [
  {
    name: "AWS VPC Lab",
    slug: "aws-vpc-lab",
    description:
      "Built a custom AWS VPC with public/private subnets, route tables, internet gateway, and secure networking architecture.",
    technologies: ["AWS", "VPC", "EC2"],
    github: "GITHUB_URL",
    demo: "DEMO_URL",
  },
  {
    name: "Dockerized Go API",
    slug: "docker-go-api",
    description: "Developed a REST API using Go and containerized it with Docker for portable deployments.",
    technologies: ["Go", "Docker"],
    github: "GITHUB_URL",
    demo: "DEMO_URL",
  },
  {
    name: "Linux Automation Toolkit",
    slug: "linux-automation-toolkit",
    description: "Created Bash automation scripts for backups, log cleanup, file management, and monitoring tasks.",
    technologies: ["Linux", "Bash"],
    github: "GITHUB_URL",
    demo: "DEMO_URL",
  },
  {
    name: "AWS Serverless API",
    slug: "serverless-api",
    description: "Implemented a serverless backend using AWS Lambda and API Gateway.",
    technologies: ["AWS Lambda", "API Gateway"],
    github: "GITHUB_URL",
    demo: "DEMO_URL",
  },
]

export const learning: LearningItem[] = [
  { label: "AWS Cloud", percent: 65 },
  { label: "Go & Microservices", percent: 50 },
  { label: "Linux Administration", percent: 70 },
  { label: "Java Backend", percent: 45 },
  { label: "Python & Bash", percent: 60 },
  { label: "Networking", percent: 55 },
]

export const certifications: Certification[] = [
  { title: "AWS Certified Cloud Practitioner", status: "Planned" },
  { title: "AWS Solutions Architect Associate", status: "Learning" },
  { title: "Linux Administration Fundamentals", status: "Learning" },
]

export const timeline: TimelineItem[] = [
  { year: "2025", title: "Started Linux and Networking", description: "Built a foundation in Linux administration and core networking concepts." },
  { year: "2025", title: "Began AWS Cloud Learning", description: "Started exploring AWS core services: EC2, S3, IAM, and VPC." },
  { year: "2026", title: "Built DevOps and Cloud Projects", description: "Created hands-on labs covering networking, containers, and automation." },
  { year: "2026", title: "Learning Go Microservices and Backend Development", description: "Building backend services and microservices with Go and Docker." },
]

export const contactLinks: ContactLink[] = [
  { label: "GitHub", href: "YOUR_GITHUB", icon: "github" },
  { label: "LinkedIn", href: "YOUR_LINKEDIN", icon: "linkedin" },
  { label: "Email", href: "mailto:YOUR_EMAIL", icon: "mail" },
  { label: "Resume", href: "YOUR_RESUME_LINK", icon: "file" },
]

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "learning", label: "Learning" },
  { id: "certifications", label: "Certs" },
  { id: "timeline", label: "Journey" },
  { id: "contact", label: "Contact" },
]
