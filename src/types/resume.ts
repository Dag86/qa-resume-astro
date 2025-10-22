export interface Contacts {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface ProjectExp {
  client: string;
  title: string;
  duration: string;
  achievements: string[];
  stack: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  projects: ProjectExp[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  testingTypes: string[];
  aiTools: string[];
}

export interface Project {
  name: string;
  description: string;
  impact: string;
  techStack: string[];
  focus: string[];
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  contacts: Contacts;
  summary: string;
  highlights: string[];
  skills: Skills;
  experience: ExperienceItem[];
  projects: Project[];
  education: Education;
  strengths: string[];
  lastUpdated: string;
}
