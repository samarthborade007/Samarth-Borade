export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "omni-ai-website-generator",
    title: "OMNI.ai - Powered Website Generator",
    category: "Full-Stack Application",
    shortDescription:
      "AI-powered website generator that converts natural language prompts into live websites with real-time code execution.",
    description: [
      "OMNI.ai is a revolutionary full-stack application that transforms natural language prompts into fully functional websites in under 2 minutes. Built with a team of 4 developers, this project showcases the power of AI in web development automation.",
      "The application leverages WebAssembly-powered WebContainer technology to provide real-time in-browser code execution and preview capabilities, eliminating the need for traditional development environments.",
      "Integration with multiple AI models including GPT, Claude, Groq, and Ollama ensures diverse and high-quality code generation based on user requirements.",
    ],
    features: [
      "Natural language to website conversion in under 2 minutes",
      "Real-time in-browser code execution using WebAssembly",
      "Live preview functionality without external servers",
      "Multi-AI model integration (GPT, Claude, Groq, Ollama)",
      "Responsive design generation",
      "Export functionality for generated websites",
    ],
    technologies: [
      "React",
      "Node.js",
      "Vite",
      "Yarn",
      "WebContainer",
      "WebAssembly",
      "GPT",
      "Claude",
      "Groq",
      "Ollama",
    ],
    coverImage: "/omni-ai-cover.png",
    thumbnailImage: "/modern-finance-app.png",
    timeline: "November 2024 - March 2025",
    role: "Full-Stack Developer & AI Integration Specialist",
    githubUrl: "https://github.com/samarthborade/omni-ai",
    relatedProjects: [
      {
        slug: "synthmaster-dataset-tool",
        title: "SynthMaster - AI Dataset Creation Tool",
        category: "AI/ML Tool",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "chatzilla-nlp-query-system",
        title: "ChatZilla - NLP Data Query System",
        category: "NLP Application",
        image: "/job-finder-screen2.png",
      },
    ],
  },
  {
    id: 2,
    slug: "synthmaster-dataset-tool",
    title: "SynthMaster - AI Dataset Creation Tool",
    category: "AI/ML Tool",
    shortDescription:
      "Synthetic dataset creation tool integrating 50+ conversational formats across various LLMs with customizable GPU and cloud options.",
    description: [
      "SynthMaster is a comprehensive synthetic dataset creation tool designed to streamline the process of generating high-quality training data for AI models. The tool integrates over 50 different conversational formats across various Large Language Models.",
      "The platform provides extensive customization options including GPU selection, cloud provider choice, model selection, and multiple output formats, giving users complete control over their dataset generation process.",
      "Built during an internship at Ai-Horizon, this tool significantly enhanced the flexibility and usability of synthetic dataset generation for machine learning applications.",
    ],
    features: [
      "Integration with 50+ conversational formats",
      "Support for multiple LLM providers",
      "Customizable GPU and cloud selection",
      "5+ different output format options",
      "Batch processing capabilities",
      "Quality control and validation features",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "LangChain", "HuggingFace", "Cloud APIs"],
    coverImage: "/synthmaster-cover.png",
    thumbnailImage: "/modern-finance-overview.png",
    timeline: "August 2024 - September 2024",
    role: "AI Engineer & Tool Developer",
    relatedProjects: [
      {
        slug: "datasculptor-cleaning-tool",
        title: "DataSculptor - LLM Dataset Curator",
        category: "Data Science Tool",
        image: "/modern-apparel-storefront.png",
      },
      {
        slug: "omni-ai-website-generator",
        title: "OMNI.ai - Powered Website Generator",
        category: "Full-Stack Application",
        image: "/modern-finance-app.png",
      },
    ],
  },
  {
    id: 3,
    slug: "datasculptor-cleaning-tool",
    title: "DataSculptor - LLM Dataset Curator",
    category: "Data Science Tool",
    shortDescription:
      "Advanced tool for cleaning and curating 20+ LLM-generated datasets with PII detection, toxicity filtering, and semantic search.",
    description: [
      "DataSculptor is an advanced data curation tool engineered to clean and enhance LLM-generated datasets, improving data quality for downstream AI model training. The tool processes thousands of records automatically.",
      "The platform incorporates sophisticated filtering mechanisms including PII detection, toxicity filtering, language identification, and semantic search capabilities to ensure dataset quality and compliance.",
      "This tool significantly improved dataset usability by automating the identification and removal of sensitive information across large-scale datasets, making it invaluable for AI training pipelines.",
    ],
    features: [
      "Automated PII detection and removal",
      "Toxicity filtering algorithms",
      "Multi-language identification",
      "Semantic search capabilities",
      "Batch processing for large datasets",
      "Quality metrics and reporting",
    ],
    technologies: ["Python", "NLP Libraries", "Pandas", "NumPy", "Machine Learning", "Data Processing APIs"],
    coverImage: "/datasculptor-cover.png",
    thumbnailImage: "/modern-apparel-storefront.png",
    timeline: "June 2024 - July 2024",
    role: "Data Scientist & ML Engineer",
    relatedProjects: [
      {
        slug: "synthmaster-dataset-tool",
        title: "SynthMaster - AI Dataset Creation Tool",
        category: "AI/ML Tool",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "who-voice-identification",
        title: "WHO - Voice Identification System",
        category: "AI/ML Project",
        image: "/job-finder-screen3.png",
      },
    ],
  },
  {
    id: 4,
    slug: "chatzilla-nlp-query-system",
    title: "ChatZilla - NLP Data Query System",
    category: "NLP Application",
    shortDescription:
      "NLP-based assistant for querying structured data from Excel and CSV files using Large Language Models.",
    description: [
      "ChatZilla is an innovative NLP-based assistant designed to democratize data analysis by allowing users to query structured data using natural language. The system processes Excel and CSV files intelligently.",
      "The application leverages Large Language Models to interpret and understand structured data, making complex data analysis accessible to non-technical users through conversational interfaces.",
      "This project demonstrates the practical application of AI in automating data analysis workflows and highlights the potential of NLP in business intelligence applications.",
    ],
    features: [
      "Natural language data querying",
      "Excel and CSV file processing",
      "LLM-powered data interpretation",
      "Conversational interface",
      "Automated insights generation",
      "Export functionality for results",
    ],
    technologies: ["Python", "NLP", "LLMs", "Pandas", "Data Analysis", "Natural Language Processing"],
    coverImage: "/chatzilla-cover.png",
    thumbnailImage: "/job-finder-screen2.png",
    timeline: "April 2024",
    role: "NLP Developer & Data Analyst",
    relatedProjects: [
      {
        slug: "omni-ai-website-generator",
        title: "OMNI.ai - Powered Website Generator",
        category: "Full-Stack Application",
        image: "/modern-finance-app.png",
      },
      {
        slug: "dynamic-price-scoring",
        title: "Dynamic Price Scoring System",
        category: "Business Intelligence",
        image: "/job-finder-screen4.png",
      },
    ],
  },
  {
    id: 5,
    slug: "who-voice-identification",
    title: "WHO - Voice Identification System",
    category: "AI/ML Project",
    shortDescription:
      "CNN-based voice identification system using spectrograms to identify speakers from 3-second audio clips with data augmentation.",
    description: [
      "WHO is a sophisticated voice identification system built using Convolutional Neural Networks (CNN) that can accurately identify speakers from just 3-second audio clips using spectrogram analysis.",
      "The system employs advanced data augmentation techniques on over 500 audio samples to improve model robustness and accuracy in speaker identification tasks.",
      "This project strengthened expertise in CNN-based audio processing and demonstrated the practical application of deep learning in biometric identification systems.",
    ],
    features: [
      "3-second audio clip identification",
      "CNN-based architecture",
      "Spectrogram analysis",
      "Data augmentation pipeline",
      "High accuracy speaker recognition",
      "Real-time processing capabilities",
    ],
    technologies: ["Python", "TensorFlow", "CNN", "Audio Processing", "Spectrograms", "Data Augmentation"],
    coverImage: "/who-voice-cover.png",
    thumbnailImage: "/job-finder-screen3.png",
    timeline: "February 2024",
    role: "ML Engineer & Audio Processing Specialist",
    relatedProjects: [
      {
        slug: "datasculptor-cleaning-tool",
        title: "DataSculptor - LLM Dataset Curator",
        category: "Data Science Tool",
        image: "/modern-apparel-storefront.png",
      },
      {
        slug: "synthmaster-dataset-tool",
        title: "SynthMaster - AI Dataset Creation Tool",
        category: "AI/ML Tool",
        image: "/modern-finance-overview.png",
      },
    ],
  },
  {
    id: 6,
    slug: "dynamic-price-scoring",
    title: "Dynamic Price Scoring System",
    category: "Business Intelligence",
    shortDescription:
      "Advanced pricing optimization tool analyzing 10,000+ transactions to improve revenue through dynamic pricing strategies.",
    description: [
      "The Dynamic Price Scoring System is a comprehensive business intelligence tool developed for GATI & ECU Worldwide to evaluate sales performance and customer behavior through advanced pricing strategies.",
      "The system analyzes data from over 10,000 transactions to identify market trends and optimize pricing decisions using supply and demand metrics, resulting in significant revenue improvements.",
      "This project demonstrated the practical application of data science in business operations, achieving a 5-8% increase in revenue per shipment and improved market competitiveness.",
    ],
    features: [
      "Transaction data analysis (10,000+ records)",
      "Dynamic pricing algorithms",
      "Market demand and supply analysis",
      "Revenue optimization metrics",
      "Customer behavior insights",
      "Performance tracking dashboard",
    ],
    technologies: ["Python", "Data Analysis", "Machine Learning", "Business Intelligence", "Statistical Analysis"],
    coverImage: "/dynamic-pricing-cover.png",
    thumbnailImage: "/job-finder-screen4.png",
    client: "GATI & ECU Worldwide",
    timeline: "December 2022 - January 2023",
    role: "Data Scientist & Business Analyst",
    relatedProjects: [
      {
        slug: "chatzilla-nlp-query-system",
        title: "ChatZilla - NLP Data Query System",
        category: "NLP Application",
        image: "/job-finder-screen2.png",
      },
      {
        slug: "omni-ai-website-generator",
        title: "OMNI.ai - Powered Website Generator",
        category: "Full-Stack Application",
        image: "/modern-finance-app.png",
      },
    ],
  },
]

export { projects }

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
