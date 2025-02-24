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
    id: "beseye",
    title: "Senior Software Engineer (AI Team)",
    company: "Beseye",
    period: "2020 - Present",
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
    id: "upmc",
    title: "Software Engineer",
    company: "UPMC - MoSHI Lab",
    period: "2018 - 2020",
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
    id: "itri",
    title: "Software Engineer",
    company: "Industrial Technology Research Institute",
    period: "2016 - 2018",
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