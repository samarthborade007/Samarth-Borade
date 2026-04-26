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
  year?: string
  featured?: boolean
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 0,
    slug: "neuralops-multiagent-framework",
    title: "NeuralOps — Multi-Agent LLM Orchestration Framework",
    category: "Agentic AI · Infrastructure",
    shortDescription:
      "Stateful multi-agent system with persistent memory, async queues, and full MLOps observability for agentic workflows.",
    description: [
      "NeuralOps is a production-grade multi-agent orchestration framework. I architected a stateful LangGraph system with dynamic tool-routing and persistent long-term memory in Qdrant — agents decompose tasks into sub-agent calls with shared memory and automatic rollback on failure.",
      "The runtime ships with a Celery + Redis async queue handling 1,000+ concurrent agent runs, and a Prometheus + Grafana observability stack tracking token spend, p95 latency, and hallucination flags.",
      "Built end-to-end with full MLOps discipline applied to agentic workflows — the kind of infrastructure you actually want behind a customer-facing AI product."
    ],
    features: [
      "LangGraph stateful multi-agent orchestration",
      "Persistent long-term memory via Qdrant vector store",
      "Dynamic tool-routing with automatic rollback on failure",
      "Async execution: 1,000+ concurrent agent runs (Celery + Redis)",
      "Observability: token spend, p95 latency, hallucination flags",
      "Containerized with Docker; Prometheus + Grafana dashboards"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "GPT-4o",
      "Claude 3.5",
      "Qdrant",
      "Redis",
      "Celery",
      "Docker",
      "Prometheus",
      "Grafana"
    ],
    coverImage: "/finance-dashboard-cover.png",
    thumbnailImage: "/finance-dashboard-cover.png",
    timeline: "Dec 2024 — Mar 2025",
    year: "2025",
    role: "Architect & Lead Engineer",
    featured: true,
    relatedProjects: [
      {
        slug: "dashexai-ml-platform",
        title: "DashExAI — Intelligent ML Analytics Platform",
        category: "ML Platform",
        image: "/finance-dashboard-screen1.png"
      },
      {
        slug: "omni-ai-website-generator",
        title: "OMNI.ai — Website Generator",
        category: "AI / Full-Stack",
        image: "/omni-logo.png"
      }
    ]
  },
  {
    id: 7,
    slug: "dashexai-ml-platform",
    title: "DashExAI — Intelligent ML Analytics Platform",
    category: "ML Platform · Full-Stack",
    shortDescription:
      "Full-stack ML platform supporting 6+ model families with automated feature engineering, EDA, and one-click deployment.",
    description: [
      "DashExAI is a full-stack ML platform I built supporting 6+ model families — ARIMA, Prophet, XGBoost, K-Means, DBSCAN, and more — with automated feature engineering, model training, evaluation, and one-click deployment.",
      "It includes an automated EDA pipeline with SHAP-based feature importance across 20+ chart types, cutting analyst data prep from hours to under 5 minutes.",
      "Designed for stakeholders who want to query data in plain English and ship models without writing notebook glue."
    ],
    features: [
      "6+ model families: ARIMA, Prophet, XGBoost, K-Means, DBSCAN",
      "Automated feature engineering & cross-validated training",
      "Automated EDA with SHAP feature importance (20+ chart types)",
      "Natural-language to data analysis via LangChain",
      "One-click deployment workflow",
      "Built with Next.js + FastAPI + MLflow"
    ],
    technologies: [
      "Python",
      "Next.js",
      "TypeScript",
      "Scikit-learn",
      "XGBoost",
      "MLflow",
      "LangChain",
      "Pandas",
      "Recharts",
      "SHAP"
    ],
    coverImage: "/finance-dashboard-screen1.png",
    thumbnailImage: "/finance-dashboard-screen1.png",
    timeline: "Jan 2025 — Apr 2025",
    year: "2025",
    role: "Full-Stack ML Engineer",
    featured: true,
    relatedProjects: [
      {
        slug: "neuralops-multiagent-framework",
        title: "NeuralOps — Multi-Agent Framework",
        category: "Agentic AI",
        image: "/finance-dashboard-cover.png"
      },
      {
        slug: "churnguard-revenue-risk",
        title: "ChurnGuard — Churn Prediction System",
        category: "ML / Production",
        image: "/finance-dashboard-screen3.png"
      }
    ]
  },
  {
    id: 8,
    slug: "churnguard-revenue-risk",
    title: "ChurnGuard — Churn Prediction & Revenue Risk System",
    category: "Production ML · MLOps",
    shortDescription:
      "XGBoost + LightGBM ensemble achieving 91.3% AUC-ROC with SHAP explanations and automated retraining via Airflow.",
    description: [
      "ChurnGuard is a production churn prediction system I built on the IBM Telco dataset (7K customers). The XGBoost + LightGBM ensemble achieves 91.3% AUC-ROC vs. logistic regression's 78.2%, flagging $240K of at-risk monthly revenue per cohort.",
      "Deployed a FastAPI inference endpoint with SHAP explanations for every prediction, and automated weekly retraining via Airflow with Evidently AI data-drift detection — maintaining statistical significance and model selection quality across production cohorts.",
      "End-to-end MLOps: experiment tracking with MLflow, containerized with Docker, persisted to PostgreSQL."
    ],
    features: [
      "91.3% AUC-ROC ensemble (XGBoost + LightGBM)",
      "SHAP-based explainability for every inference",
      "Automated weekly retraining via Airflow",
      "Evidently AI data-drift monitoring",
      "FastAPI production inference endpoint",
      "$240K at-risk monthly revenue surfaced per cohort"
    ],
    technologies: [
      "Python",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "MLflow",
      "Evidently AI",
      "FastAPI",
      "Airflow",
      "Docker",
      "PostgreSQL"
    ],
    coverImage: "/finance-dashboard-screen3.png",
    thumbnailImage: "/finance-dashboard-screen3.png",
    timeline: "Mar 2025 — Apr 2025",
    year: "2025",
    role: "ML Engineer",
    featured: true,
    relatedProjects: [
      {
        slug: "dashexai-ml-platform",
        title: "DashExAI — ML Platform",
        category: "ML Platform",
        image: "/finance-dashboard-screen1.png"
      },
      {
        slug: "retailiq-ecommerce-bi",
        title: "RetailIQ — E-Commerce BI",
        category: "Analytics / BI",
        image: "/modern-finance-overview.png"
      }
    ]
  },
  {
    id: 9,
    slug: "retailiq-ecommerce-bi",
    title: "RetailIQ — E-Commerce Sales Intelligence",
    category: "Analytics · BI",
    shortDescription:
      "C-suite BI on 100K+ Olist orders — SQL/dbt on BigQuery, Airflow ETL, Power BI dashboards driving an 18% drop in late delivery.",
    description: [
      "RetailIQ is an executive analytics suite I built on the Olist E-Commerce dataset (100K+ orders). I modeled the data with SQL and dbt on BigQuery, orchestrated ETL pipelines with Airflow plus data-governance checks, and identified 3 underperforming categories driving 23% of returns.",
      "Designed a C-suite Power BI dashboard with DAX KPI measures, Power Query transforms, trend & variance analysis, and segmentation — delivering recommendations that reduced late delivery rate by 18%.",
      "Pure data storytelling: from raw warehouse to actionable boardroom narrative."
    ],
    features: [
      "100K+ orders modeled with SQL + dbt on BigQuery",
      "Airflow ETL with data-governance checks",
      "Power BI dashboard with DAX KPI measures",
      "Trend, variance & segmentation analysis",
      "Identified 3 categories driving 23% of returns",
      "Delivered an 18% reduction in late delivery rate"
    ],
    technologies: [
      "SQL",
      "Python",
      "dbt",
      "BigQuery",
      "Power BI",
      "DAX",
      "Power Query",
      "Pandas",
      "Seaborn",
      "Airflow"
    ],
    coverImage: "/modern-finance-overview.png",
    thumbnailImage: "/modern-finance-overview.png",
    timeline: "Mar 2025 — Apr 2025",
    year: "2025",
    role: "Data Analyst & BI Engineer",
    featured: false,
    relatedProjects: [
      {
        slug: "churnguard-revenue-risk",
        title: "ChurnGuard — Churn Prediction",
        category: "Production ML",
        image: "/finance-dashboard-screen3.png"
      },
      {
        slug: "dashexai-ml-platform",
        title: "DashExAI — ML Platform",
        category: "ML Platform",
        image: "/finance-dashboard-screen1.png"
      }
    ]
  },
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
    coverImage: "/omni-logo.png",
    thumbnailImage: "/omni-logo.png",
    timeline: "November 2024 - March 2025",
    year: "2024",
    role: "Full-Stack Developer & AI Integration Specialist",
    featured: true,
    githubUrl: "https://drive.google.com/file/d/1ikQS_efMTBtczdI70U9cSGGCqTG6B0Md/view?usp=sharing",
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
    year: "2024",
    role: "AI Engineer & Tool Developer",
    featured: true,
    githubUrl: "https://drive.google.com/file/d/1Php0f9mEwawmufCecT2iaoyZsH7fNBfN/view",
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
    year: "2024",
    role: "Data Scientist & ML Engineer",
    featured: true,
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
    year: "2024",
    role: "NLP Developer & Data Analyst",
    githubUrl: "https://drive.google.com/file/d/1kWaOuKQ2q5zM8zNeoyqgyALNAH5jXnyE/view",

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
    year: "2024",
    role: "ML Engineer & Audio Processing Specialist",
    githubUrl: "https://drive.google.com/file/d/1YZ1e2EUTG4upNHysxorLZ-pqscVYzE6F/view",
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
    year: "2023",
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

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
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
