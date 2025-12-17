/**
 * Projects data
 * Static typed data for projects showcase with case studies
 */

export interface ProjectLinks {
  readonly demo?: string
  readonly github?: string
  readonly caseStudy?: string
}

export interface Project {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly image?: string
  readonly tech: readonly string[]
  readonly tags: readonly string[]
  readonly role?: string
  readonly challenges?: readonly string[]
  readonly solutions?: readonly string[]
  readonly outcomes?: readonly string[]
  readonly links: ProjectLinks
}

export const projects: readonly Project[] = [
  {
    id: "project-1",
    title: "Gauntlet AI Marking Automation System",
    description: "Automated grading system using specialized LLMs fine-tuned with rubrics for learner evaluation. Integrated with LMS and agentic workflows for end-to-end submission and feedback automation.",
    image: "/portfolio-website.png",
    tech: ["LLMs", "Python", "LangChain", "RAG", "Agentic Workflows", "LMS Integration"],
    tags: ["AI/ML", "EdTech", "LLM", "Automation"],
    role: "Principal Solutions Architect",
    challenges: [
      "Creating hyper-specialized LLMs for different assessment scenarios",
      "Integrating automated marking with existing LMS systems",
      "Ensuring accuracy and consistency in automated grading",
    ],
    solutions: [
      "Fine-tuned LLMs with custom datasets and rubrics for specific assessment types",
      "Developed agentic workflows to handle end-to-end submission processing",
      "Integrated observability platforms to monitor grading accuracy and outcomes",
    ],
    outcomes: [
      "Automated marking workflows for multiple assessment types",
      "Seamless LMS integration for automated feedback delivery",
      "Improved grading consistency and reduced manual workload",
    ],
    links: {
      github: "https://github.com/decagondev",
    },
  },
  {
    id: "project-2",
    title: "Aitra Utility Agent System",
    description: "Form-filling and research agent workflow using OpenAI models to automate tenant/landlord utility enrollment. Integrated observability tools to monitor model cost and outcome success for optimization.",
    image: "/ecommerce-platform.png",
    tech: ["OpenAI", "LangChain", "Python", "Agentic Workflows", "Observability"],
    tags: ["AI/ML", "Automation", "LLM", "Agentic Systems"],
    role: "Principal AI Engineer",
    challenges: [
      "Automating complex form-filling processes with varying requirements",
      "Reducing customer friction in utility enrollment",
      "Optimizing model costs while maintaining high success rates",
    ],
    solutions: [
      "Built specialized form-filling and research agents using OpenAI models",
      "Integrated observability platforms to track costs and success rates",
      "Employed agentic design patterns to improve processing speeds",
    ],
    outcomes: [
      "Removed customer friction in utility enrollment process",
      "Improved processing speeds through automation",
      "Optimized model costs through observability and tuning",
    ],
    links: {
      github: "https://github.com/decagondev",
    },
  },
  {
    id: "project-3",
    title: "Aitra Embedded LLM Deployment",
    description: "Fine-tuned quantized micro-LLMs for client-specific use cases on low-powered embedded hardware. Used QLoRA/LoRA to retain performance while meeting hardware constraints.",
    image: "/portfolio-website.png",
    tech: ["QLoRA", "LoRA", "PEFT", "Quantization", "Micro-LLMs", "Embedded Systems"],
    tags: ["AI/ML", "LLM", "Quantization", "Embedded Systems"],
    role: "Principal AI Engineer",
    challenges: [
      "Deploying LLMs on low-powered embedded hardware",
      "Maintaining model performance with reduced parameters",
      "Meeting strict hardware constraints and latency requirements",
    ],
    solutions: [
      "Applied QLoRA/LoRA techniques for efficient fine-tuning",
      "Used quantization to reduce model size while preserving accuracy",
      "Optimized for low-latency performance on constrained hardware",
    ],
    outcomes: [
      "Successfully deployed fine-tuned micro-LLMs on embedded systems",
      "Achieved high performance with reduced computational requirements",
      "Enabled AI capabilities on previously incompatible hardware",
    ],
    links: {
      github: "https://github.com/decagondev",
    },
  },
  {
    id: "project-4",
    title: "Aitra Video Overwatch Threat Monitoring System",
    description: "Combined machine vision and LLMs to create a video analysis pipeline for identifying potential threats and object tracking. Integrated CV/LLM pipelines for real-time situational awareness.",
    image: "/ecommerce-platform.png",
    tech: ["Computer Vision", "LLMs", "Python", "Video Analysis", "Threat Detection"],
    tags: ["AI/ML", "Computer Vision", "LLM", "Security"],
    role: "Principal AI Engineer",
    challenges: [
      "Real-time video feed analysis for threat detection",
      "Integrating computer vision with LLM reasoning",
      "Maintaining low latency for security applications",
    ],
    solutions: [
      "Developed integrated CV/LLM pipelines for video analysis",
      "Created threat detection and object tracking systems",
      "Implemented real-time processing for situational awareness",
    ],
    outcomes: [
      "Automated threat monitoring through video analysis",
      "Improved security response times",
      "Enhanced situational awareness capabilities",
    ],
    links: {
      github: "https://github.com/decagondev",
    },
  },
] as const

