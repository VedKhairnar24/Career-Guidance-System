
export interface CSESpecialization {
  id: string;
  name: string;
  field: string;
  description: string;
  key_skills: string[];
  career_paths: string[];
  tools: string[];
  resources: string[];
  interests: string[];
  work_environment: string[];
  proficiency_level: string[];
  technologies: string[];
}

export const cseSpecializations: CSESpecialization[] = [
  {
    id: "web-development",
    name: "Web Development",
    field: "Technology",
    description: "Focuses on building websites using HTML, CSS, JavaScript, and frameworks like React. Ideal for those who enjoy designing user-friendly interfaces and dynamic applications.",
    key_skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    career_paths: ["Frontend Developer", "Backend Developer", "Full-Stack Developer"],
    tools: ["VS Code", "Chrome DevTools"],
    resources: ["freeCodeCamp", "Coursera"],
    interests: ["Coding", "Creativity"],
    work_environment: ["Remote", "In-Office", "Hybrid", "Freelance"],
    proficiency_level: ["Beginner", "Intermediate", "Advanced"],
    technologies: ["JavaScript", "Python", "Java"]
  },
  {
    id: "game-development",
    name: "Game Development",
    field: "Technology",
    description: "Involves creating interactive games using engines like Unity or Unreal Engine. Perfect for creative coders passionate about storytelling and graphics.",
    key_skills: ["C#", "Unity", "3D Modeling"],
    career_paths: ["Game Developer", "Level Designer"],
    tools: ["Unity", "Blender"],
    resources: ["Udemy", "Unity Learn"],
    interests: ["Coding", "Creativity"],
    work_environment: ["Remote", "In-Office", "Hybrid"],
    proficiency_level: ["Intermediate", "Advanced"],
    technologies: ["C++", "Unity"]
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence/Machine Learning",
    field: "Technology",
    description: "Focuses on building intelligent systems using algorithms and data. Suited for those interested in data analysis and innovation.",
    key_skills: ["Python", "TensorFlow", "Data Modeling"],
    career_paths: ["AI Engineer", "ML Researcher"],
    tools: ["Jupyter Notebook", "PyTorch"],
    resources: ["Coursera", "Kaggle"],
    interests: ["Data Analysis", "Innovation"],
    work_environment: ["Remote", "In-Office", "Hybrid"],
    proficiency_level: ["Intermediate", "Advanced"],
    technologies: ["Python", "TensorFlow"]
  },
  {
    id: "app-development",
    name: "App Development",
    field: "Technology",
    description: "Creating mobile applications for Android and iOS platforms. Perfect for developers who want to build applications that millions of users can access on their mobile devices.",
    key_skills: ["React Native", "Flutter", "Kotlin", "Swift"],
    career_paths: ["Mobile App Developer", "iOS Developer", "Android Developer"],
    tools: ["Android Studio", "Xcode", "React Native"],
    resources: ["Google Developer Docs", "Apple Developer", "Udacity"],
    interests: ["Coding", "Building Products"],
    work_environment: ["Remote", "In-Office", "Hybrid", "Freelance"],
    proficiency_level: ["Beginner", "Intermediate", "Advanced"],
    technologies: ["Java", "JavaScript"]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    field: "Technology",
    description: "Protecting digital systems, networks, and data from cyber threats. Ideal for those passionate about security, ethical hacking, and protecting digital infrastructure.",
    key_skills: ["Network Security", "Ethical Hacking", "Risk Assessment"],
    career_paths: ["Cybersecurity Analyst", "Security Consultant", "Penetration Tester"],
    tools: ["Wireshark", "Metasploit", "Nmap"],
    resources: ["Cybrary", "SANS Institute", "Coursera"],
    interests: ["Security", "Problem-Solving"],
    work_environment: ["Remote", "In-Office", "Hybrid"],
    proficiency_level: ["Intermediate", "Advanced"],
    technologies: ["Python", "C++"]
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    field: "Technology",
    description: "Designing and managing cloud-based systems and services. Perfect for those interested in scalable infrastructure, distributed systems, and modern deployment practices.",
    key_skills: ["AWS", "Azure", "Docker", "Kubernetes"],
    career_paths: ["Cloud Engineer", "DevOps Engineer", "Cloud Architect"],
    tools: ["AWS Console", "Terraform", "Jenkins"],
    resources: ["AWS Training", "Microsoft Learn", "Cloud Academy"],
    interests: ["Innovation", "Building Products"],
    work_environment: ["Remote", "In-Office", "Hybrid"],
    proficiency_level: ["Intermediate", "Advanced"],
    technologies: ["AWS", "Python"]
  }
];

export const cseFilterOptions = {
  cseInterests: [
    "Programming", "Web Development", "App Development", "Game Development",
    "Artificial Intelligence/Machine Learning", "Cybersecurity", "Cloud Computing",
    "Blockchain Development", "Data Science", "DevOps"
  ],
  passions: [
    "Coding", "Problem-Solving", "Creativity", "Innovation", "Building Products",
    "Security", "Data Analysis"
  ],
  proficiencyLevels: ["Beginner", "Intermediate", "Advanced"],
  jobRoles: [
    "Software Developer", "Web Developer", "Mobile App Developer", "Game Developer",
    "AI/ML Engineer", "Cybersecurity Analyst", "Cloud Engineer", "Blockchain Developer",
    "Data Scientist", "DevOps Engineer"
  ],
  technologies: [
    "Python", "JavaScript", "Java", "C++", "Unity", "AWS", "TensorFlow", "Solidity", "SQL"
  ],
  workEnvironments: ["Remote", "In-Office", "Hybrid", "Freelance"]
};
