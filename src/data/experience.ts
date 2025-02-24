export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "upmc",
    title: "Software Engineer",
    company: "UPMC - MoSHI Lab",
    period: "Jun. 2024 - Present",
    location: "Pittsburgh, PA",
    responsibilities: [
      "Developed data visualization tools",
      "Implemented machine learning algorithms",
      "Collaborated with medical professionals"
    ],
    achievements: [
      "Created novel visualization techniques",
      "Published 2 research papers",
      "Reduced data processing time by 60%"
    ]
  },
  {
    id: "beseye",
    title: "Senior Software Engineer (AI Team Leader)",
    company: "Beseye",
    period: "2020 - 2023",
    location: "Taiwan",
    responsibilities: [
      "Lead AI model development and deployment",
      "Design and implement cloud infrastructure",
      "Mentor junior engineers and coordinate with cross-functional teams"
    ],
    achievements: [
      "Improved model accuracy by 25%",
      "Reduced infrastructure costs by 40%",
      "Successfully deployed to 100+ enterprise clients"
    ]
  },
  
  {
    id: "itri",
    title: "Software Engineer",
    company: "Industrial Technology Research Institute",
    period: "2017 - 2019",
    location: "Taiwan",
    responsibilities: [
      "Developed embedded systems",
      "Implemented IoT solutions",
      "Conducted research on emerging technologies"
    ],
    achievements: [
      "Filed 2 patents",
      "Reduced system response time by 35%",
      "Successfully completed 3 major projects"
    ]
  }
];