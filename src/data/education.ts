export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  details: string[];
  image?: string;
}

export const education: Education[] = [
  {
    id: "pitt",
    degree: "M.S. in Information Science",
    school: "University of Pittsburgh",
    period: "2023 - Apr. 2025",
    location: "Pittsburgh, PA",
    details: [
      "Focus on Data Analytics and Full Stack Development (React, Node.js, Database, etc.)",
    ],
    image:""
  },
  {
    id: "ntust",
    degree: "M.S. in Electronics Engineering",
    school: "National Taiwan University of Science and Technology",
    period: "2017 - 2019",
    location: "Taipei, Taiwan",
    details: [
      "Master Thesis: Depth Completion using Deep Residual Networks with Sparse Convolutions",
      "Cooperated with Industrial Technology Research Institute (ITRI) to develop a real-time object detection system for autonomous vehicles."
    ],
    image:"images/SparseConv2.png"
  }
];