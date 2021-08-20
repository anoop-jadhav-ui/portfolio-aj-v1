var leftPaneDataObj = [
  {
    class: "summary",
    label: "Summary",
    id: "summary",
    headerPos: 0,
  },
  {
    class: "projects",
    label: "Recent Projects",
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

export default function leftPaneData(appFeatureAvailability) {
  let index = 0;
  let temp = leftPaneDataObj
    .map((item) => {
      if (appFeatureAvailability[item.id]) {
        item.key = index++;
      }
      return item;
    })
    .filter((item) => "key" in item);
  return temp;
}
