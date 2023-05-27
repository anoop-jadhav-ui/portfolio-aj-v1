import React, { lazy, Suspense } from "react";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import Loader from "../../Atoms/Loader/Loader";
import Header from "../../Molecules/Header/Header";
import "./MainBody.scss";
import Delayed from "../../Atoms/Delayed/Delayed";

const Summary = lazy(() => import("../../Screens/Summary/Summary"));
const Education = lazy(() => import("../../Screens/Education/Education"));
const WorkExperience = lazy(
  () => import("../../Screens/WorkExperience/WorkExperience")
);
const Certifications = lazy(
  () => import("../../Screens/Certifications/Certifications")
);
const Skills3D = lazy(() => import("../../Screens/Skills3D/Skills3D"));
const Hobbies = lazy(() => import("../../Screens/Hobbies/Hobbies"));
const MessageForm = lazy(() => import("../../Screens/MessageForm/MessageForm"));
const Contact = lazy(() => import("../../Screens/Contact/Contact"));
const Projects = lazy(() => import("../../Screens/Projects/Projects"));
const RecentArticles = lazy(
  () => import("../../Screens/RecentArticles/RecentArticles")
);

export interface SectionProps {
  sectionRef: HTMLDivElement;
}

const MainBody = () => {
  const {
    profileData: { appFeatureAvailability },
  } = useProfileDataContext();

  const {
    projects,
    experience,
    education,
    certifications,
    hobbies,
    messageForm,
    contactDetails,
    recentArticles,
  } = appFeatureAvailability;

  return (
    <div className="main-body justify-content-center text">
      <Header />
      <Summary />
      <Suspense fallback={<Loader />}>
        {recentArticles && <RecentArticles />}
        {projects && <Projects />}
        {experience && <WorkExperience />}
        <Delayed delay={2000}>
          <Skills3D />
        </Delayed>
        {education && <Education />}
        {certifications && <Certifications />}
        {hobbies && <Hobbies />}
        {messageForm && <MessageForm />}
        {contactDetails && <Contact />}
      </Suspense>
    </div>
  );
};

export default MainBody;
