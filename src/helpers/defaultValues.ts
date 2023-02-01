import {
  FeatureToggles,
  Certifications,
  Contact,
  Overview,
  Skills,
  ProfileData,
} from "../types/profileDataTypes";

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
  recentArticles: false,
};

const defaultCertifications: Certifications = {
  design: [],
  development: [],
};

const defaultContact: Contact = {
  contactNumber: "",
  emailId: "",
  github: "",
  instaId: "",
  linkedin: "",
};

const defaultOverview: Overview = {
  name: "",
  summary: "",
  title: "",
};

const defaultSkills: Skills = {
  design: [],
  development: [],
};

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
