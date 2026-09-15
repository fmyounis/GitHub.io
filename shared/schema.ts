export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
  order: number;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  order: number;
}

export interface Skill {
  id: number;
  category: string;
  name: string;
  proficiency: number;
  icon: string | null;
}
