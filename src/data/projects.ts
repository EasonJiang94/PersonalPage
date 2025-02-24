export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  techStack: string[];
  challenges: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "ai-saas",
    title: "AI SaaS Cloud Service",
    description: "Developed and deployed AI-powered cloud services at Beseye",
    detailedDescription: "Led the development of scalable AI solutions, implementing computer vision algorithms and cloud infrastructure for real-time processing.",
    image: "/images/ai-saas.jpg",
    techStack: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"],
    challenges: [
      "Optimizing model performance for real-time processing",
      "Scaling infrastructure to handle multiple concurrent users",
      "Implementing robust error handling and monitoring"
    ],
    github: "https://github.com/yourusername/ai-saas"
  },
  {
    id: "viz-dashboard",
    title: "Visualization Dashboard",
    description: "Created interactive data visualization dashboard at UPMC",
    detailedDescription: "Designed and implemented a comprehensive dashboard for medical data visualization and analysis.",
    image: "/images/dashboard.jpg",
    techStack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    challenges: [
      "Handling large datasets efficiently",
      "Creating intuitive user interfaces for complex data",
      "Ensuring HIPAA compliance and data security"
    ],
    demo: "https://dashboard-demo.example.com"
  }
];