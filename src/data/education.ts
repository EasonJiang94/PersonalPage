export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  details: string[];
}

export const education: Education[] = [
  {
    id: "pitt",
    degree: "M.S. in Information Science",
    school: "University of Pittsburgh",
    period: "2016 - 2018",
    location: "Pittsburgh, PA",
    details: [
      "Focus on Data Analytics and Machine Learning",
      "GPA: 3.9/4.0",
      "Research Assistant in Data Visualization Lab"
    ]
  },
  {
    id: "ntust",
    degree: "M.S. in Electronics Engineering",
    school: "National Taiwan University of Science and Technology",
    period: "2014 - 2016",
    location: "Taipei, Taiwan",
    details: [
      "Focus on Signal Processing and Embedded Systems",
      "GPA: 4.0/4.0",
      "Published research paper in IEEE conference"
    ]
  }
];