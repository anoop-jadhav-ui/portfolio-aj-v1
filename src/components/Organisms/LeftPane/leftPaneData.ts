import { FeatureToggles } from "../../../types/profileDataTypes";
import constants from "../../../helpers/constants";

export type LeftPaneMenuItem = {
  class: string;
  label: string;
  id: string;
  headerPos: number;
};

const leftPaneDataObj: Array<LeftPaneMenuItem> = [
  {
    class: constants.classNames.SUMMARY,
    label: "Summary",
    id: "summary",
    headerPos: 0,
  },
  {
    class: constants.classNames.RECENT_ARTICLES,
    label: "Recent Articles",
    id: "recentArticles",
    headerPos: 0,
  },
  {
    class: constants.classNames.PROJECTS,
    label: "Fun Learning Projects",
    id: "projects",
    headerPos: 0,
  },
  {
    class: constants.classNames.WORK_EXPERIENCE,
    label: "Work Experience",
    id: "experience",
    headerPos: 0,
  },
  {
    class: constants.classNames.SKILLS,
    label: "Skills",
    id: "skills",
    headerPos: 0,
  },
  {
    class: constants.classNames.EDUCATION,
    label: "Education",
    id: "education",
    headerPos: 0,
  },
  {
    class: constants.classNames.CERTIFICATIONS,
    label: "Certifications",
    id: "certifications",
    headerPos: 0,
  },
  {
    class: constants.classNames.HOBBIES,
    label: "Hobbies & Interests",
    id: "hobbies",
    headerPos: 0,
  },
  {
    class: constants.classNames.FEEDBACK,
    label: "Feedback",
    id: "feedback",
    headerPos: 0,
  },
  {
    class: constants.classNames.CONTACT_ME,
    label: "Contact Details",
    id: "contactDetails",
    headerPos: 0,
  },
];

export default function getFilteredLeftPaneData(
  featureToggles: FeatureToggles
) {
  return leftPaneDataObj.filter(
    (item) => !!featureToggles[item.id as keyof FeatureToggles]
  );
}
