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
    period: "2023 - Apr. 2025",
    location: "Pittsburgh, PA",
    details: [
      "Focus on Data Analytics and Machine Learning",
      "Focus on Computer Vision and Autonomous Vehicle solutions."
    ]
  },
  {
    id: "ntust",
    degree: "M.S. in Electronics Engineering",
    school: "National Taiwan University of Science and Technology",
    period: "2017 - 2019",
    location: "Taipei, Taiwan",
    details: [
      "Focus on Computer Vision and Autonomous Vehicle solutions.",
      "Focus on Computer Vision and Autonomous Vehicle solutions."
    ]
  }
];