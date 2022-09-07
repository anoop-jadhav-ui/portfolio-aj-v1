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
}

const defaultFeatureToggles: FeatureToggles = {
  certifications: false,
  contactDetails: false,
  education: false,
  experience: false,
  feedback: false,
  hobbies: false,
  overview: false,
  portfolioData: false,
  projects: false,
  skills: false,
  summary: false,
};

export interface CertificateDetails {
  name: string;
  summary: string;
  urlToCertificate: string;
}

export interface Certifications {
  design: Array<CertificateDetails>;
  development: Array<CertificateDetails>;
}

const defaultCertifications: Certifications = {
  design: [],
  development: [],
};

export interface Contact {
  contactNumber: string;
  emailId: string;
  github: string;
  instaId: string;
  linkedin: string;
}

const defaultContact: Contact = {
  contactNumber: "",
  emailId: "",
  github: "",
  instaId: "",
  linkedin: "",
};

export interface EducationDetails {
  institute: string;
  percentage: string;
  place: string;
  type: string;
}

export interface ExperienceDetails {
  fromToDates: string;
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

const defaultOverview: Overview = {
  name: "",
  summary: "",
  title: "",
};

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

const defaultSkills: Skills = {
  design: [],
  development: [],
};

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

export const initialProfileData: ProfileData = {
  appFeatureAvailability: defaultFeatureToggles,
  certifications: defaultCertifications,
  contactDetails: defaultContact,
  education: [],
  experience: [],
  hobbies: [],
  overview: defaultOverview,
  projects: [],
  skills: defaultSkills,
};
