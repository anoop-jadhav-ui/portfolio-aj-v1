import { FeatureToggles } from "../../../types/profileDataTypes";

export type LeftPaneMenuItem = {
  class: string;
  label: string;
  id: string;
  headerPos: number;
};

const leftPaneDataObj: Array<LeftPaneMenuItem> = [
  {
    class: "summary",
    label: "Summary",
    id: "summary",
    headerPos: 0,
  },
  {
    class: "projects",
    label: "Fun Learning Projects",
    id: "projects",
    headerPos: 0,
  },
  {
    class: "work-experience",
    label: "Work Experience",
    id: "experience",
    headerPos: 0,
  },
  {
    class: "education",
    label: "Education",
    id: "education",
    headerPos: 0,
  },
  {
    class: "certifications",
    label: "Certifications",
    id: "certifications",
    headerPos: 0,
  },
  {
    class: "skills",
    label: "Skills",
    id: "skills",
    headerPos: 0,
  },
  {
    class: "hobbies-interests",
    label: "Hobbies & Interests",
    id: "hobbies",
    headerPos: 0,
  },
  {
    class: "feedback",
    label: "Feedback",
    id: "feedback",
    headerPos: 0,
  },
  {
    class: "contactme",
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
