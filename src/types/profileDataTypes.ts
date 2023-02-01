export interface FeatureToggles {
  certifications: boolean;
  contactDetails: boolean;
  education: boolean;
  experience: boolean;
  feedback: boolean;
  hobbies: boolean;
  overview: boolean;
  portfolioData: boolean;
  projects: boolean;
  skills: boolean;
  summary: boolean;
  recentArticles: boolean;
}

export interface CertificateDetails {
  name: string;
  summary: string;
  urlToCertificate: string;
}

export interface Certifications {
  design: Array<CertificateDetails>;
  development: Array<CertificateDetails>;
}

export interface Contact {
  contactNumber: string;
  emailId: string;
  github: string;
  instaId: string;
  linkedin: string;
}

export interface EducationDetails {
  institute: string;
  percentage: string;
  place: string;
  type: string;
}

export interface ExperienceDetails {
  name: string;
  summary: string;
  totalYears: string;
  fromDate: string;
  toDate: string;
}

export interface HobbyDetails {
  name: string;
  summary: string;
}

export interface Overview {
  name: string;
  summary: string;
  title: string;
}

export interface ProjectDetails {
  description: string;
  github: string;
  priority: number;
  projectName: string;
  status: string;
  tags: Array<string>;
  url: string;
}
export interface SkillDetails {
  skillName: string;
  skillValue: string;
}
export interface Skills {
  design: Array<SkillDetails>;
  development: Array<SkillDetails>;
}

export interface ProfileData {
  appFeatureAvailability: FeatureToggles;
  certifications: Certifications;
  contactDetails: Contact;
  education: Array<EducationDetails>;
  experience: Array<ExperienceDetails>;
  hobbies: Array<HobbyDetails>;
  overview: Overview;
  projects: Array<ProjectDetails>;
  skills: Skills;
}

export interface RecentArticle {
  title: string;
  coverImage: string;
  brief: string;
  slug: string;
  dateAdded: string;
  dateFeatured: string;
  popularity: number;
  totalReactions: number;
  replyCount: number;
}
