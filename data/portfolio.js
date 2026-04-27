export const personalInfo = {
  name: 'Swaroop Lute',
  title: 'Full-Stack Software Developer & Cloud Architect',
  tagline: "Building scalable serverless applications on AWS. Node.js, React, microservices, and cloud-first solutions.",
  contact: {
    email: 'swarooplute5@gmail.com',
    phone: '+91-9130152126',
    github: 'https://github.com/swaroop-git',
    linkedin: 'https://linkedin.com/in/swaroop-lute/',
    location: 'Pune, Maharashtra',
  },
}

export const skills = [
  {
    cat: 'Frontend', icon: '◈', color: 'c-coral',
    items: [
      { n: 'React', l: 88 }, { n: 'HTML5 / CSS', l: 85 },
      { n: 'JavaScript', l: 92 }, { n: 'Responsive Design', l: 80 }, { n: 'JWT Authentication', l: 85 },
    ],
  },
  {
    cat: 'Backend & Cloud', icon: '◇', color: 'c-teal',
    items: [
      { n: 'Node.js / Express', l: 95 }, { n: 'AWS Lambda', l: 90 },
      { n: 'DynamoDB / MongoDB', l: 88 }, { n: 'API Gateway', l: 87 }, { n: 'S3 & ECS Fargate', l: 85 },
    ],
  },
  {
    cat: 'DevOps & Architecture', icon: '◉', color: 'c-amber',
    items: [
      { n: 'AWS Services', l: 92 }, { n: 'Microservices', l: 88 },
      { n: 'Terraform / IaC', l: 85 }, { n: 'CI/CD Pipelines', l: 86 }, { n: 'Git / Azure DevOps', l: 90 },
    ],
  },
  {
    cat: 'Tools & Practices', icon: '◎', color: 'c-violet',
    items: [
      { n: 'Serverless Framework', l: 88 }, { n: 'CloudWatch / Dynatrace', l: 84 },
      { n: 'Mocha / Chai (Testing)', l: 82 }, { n: 'Agile / GitFlow', l: 90 }, { n: 'Prompt Engineering', l: 85 },
    ],
  },
]

export const experience = [
  {
    role: 'Consultant', co: 'Capgemini', period: 'January 2026 — Present',
    dur: '<1 yr', type: 'Full-time', loc: 'Pune, Maharashtra', col: 'coral',
    hl: [
      'Integrated Wiz Runtime Sensor sidecar into AWS ECS Fargate across 2 regions using Terraform IaC',
      'Managed KMS-encrypted credentials via AWS SSM Parameter Store and Secrets Manager with least-privilege IAM policies',
      'Resolved deployment failures and confirmed sensor active status in both regions via Wiz portal',
      'Technologies: AWS ECS, Terraform, KMS, CloudWatch, Wiz Security Platform, Claude Sonnet 4.6',
    ],
  },
  {
    role: 'Associate Consultant', co: 'Capgemini', period: 'July 2024 — December 2025',
    dur: '1.5 yrs', type: 'Full-time', loc: 'Pune, Maharashtra', col: 'teal',
    hl: [
      'Created AWS Step Functions state machines to scan DynamoDB records and trigger Lambda functions',
      'Developed Node.js REST APIs on AWS Lambda with DynamoDB storage and CloudWatch monitoring for scalability',
      'Optimized S3 existence checks and prevented unnecessary Dynatrace alerts, improving monitoring efficiency',
      'Enhanced CI/CD pipelines with ADO Library token interpolation during deployment; improved deployment success by 15–25%',
      'Implemented new endpoints for restaurant application filtering products by culture code and storeId',
      'Adhered to Node.js best practices and design patterns, reducing bugs by 20% and improving code maintainability',
    ],
  },
  {
    role: 'Senior Analyst', co: 'Capgemini', period: 'January 2023 — June 2024',
    dur: '1.5 yrs', type: 'Full-time', loc: 'Pune, Maharashtra', col: 'amber',
    hl: [
      'Developed and maintained RESTful APIs using Node.js and Express for microservices-based food restaurant application',
      'Optimized application performance by 20–40% leveraging AWS services (Lambda, API Gateway, S3, DynamoDB)',
      'Created unit tests with Mocha and Chai, achieving 80%+ code coverage across all services',
      'Contributed to Agile workflows including sprint planning and iterative development; improved team productivity by 20–30%',
      'Part of middleware development team building core APIs for restaurant operations',
    ],
  },
  {
    role: 'Analyst', co: 'Capgemini', period: 'April 2021 — December 2022',
    dur: '2 yrs', type: 'Full-time', loc: 'Pune, Maharashtra', col: 'violet',
    hl: [
      'Developed full-stack e-commerce application using MERN stack (MongoDB, Express, React, Node.js)',
      'Implemented JWT-based authentication and role-based authorization for secure user access',
      'Built responsive, dynamic user interfaces with HTML5, CSS, and JavaScript',
      'Managed version control using Git and GitHub for seamless team collaboration and efficient change tracking',
    ],
  },
]

export const projects = [
  {
    title: 'AWS Lambda REST API — Restaurant App',
    tagline: 'Serverless microservices with DynamoDB & CloudWatch',
    desc: 'Built production REST APIs on AWS Lambda with Express.js for a food restaurant application. Implemented DynamoDB data storage, CloudWatch monitoring, and CloudWatch alarms for scalability and reliability. Features product filtering by culture code and store ID, with 80%+ code coverage via Mocha & Chai testing.',
    tech: ['Node.js', 'AWS Lambda', 'Express.js', 'DynamoDB', 'CloudWatch', 'Mocha', 'Chai'],
    stats: { stars: '—', forks: '—', users: 'Production' },
    color: 'coral', link: '#', github: '#',
  },
  {
    title: 'AWS Step Functions Data Pipeline',
    tagline: 'Serverless state machine orchestration',
    desc: 'Designed and implemented AWS Step Functions state machines to scan DynamoDB table records and pass results to Lambda functions for data processing. Integrated with CloudWatch for monitoring and alerting. Fully serverless, scalable architecture for batch data operations.',
    tech: ['AWS Step Functions', 'AWS Lambda', 'DynamoDB', 'CloudWatch', 'Terraform'],
    stats: { stars: '—', forks: '—', users: 'Production' },
    color: 'teal', link: '#', github: '#',
  },
  {
    title: 'Wiz Runtime Sensor — ECS Fargate Integration',
    tagline: 'Infrastructure-as-Code security sidecar deployment',
    desc: 'Integrated Wiz Runtime Sensor sidecar into AWS ECS Fargate task definitions across 2 AWS regions using Terraform IaC. Managed KMS-encrypted credentials via AWS SSM Parameter Store and Secrets Manager with least-privilege IAM policies. Replaced manual Python patching with declarative infrastructure.',
    tech: ['Terraform', 'AWS ECS Fargate', 'AWS IAM', 'KMS', 'Wiz Security', 'CloudWatch'],
    stats: { stars: '—', forks: '—', users: '2 Regions' },
    color: 'amber', link: '#', github: '#',
  },
  {
    title: 'MERN E-Commerce Application',
    tagline: 'Full-stack app with JWT auth & role-based access',
    desc: 'Developed complete e-commerce platform using MongoDB, Express, React, and Node.js. Implemented JWT-based authentication and role-based authorization for secure user access. Built responsive UI with HTML5 and CSS. Managed version control with Git and GitHub for team collaboration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'HTML5', 'CSS', 'Git'],
    stats: { stars: '—', forks: '—', users: 'Portfolio' },
    color: 'violet', link: '#', github: 'https://github.com/swaroop-git',
  },
]