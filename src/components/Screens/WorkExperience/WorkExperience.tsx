import React, { useMemo } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import moment from "moment/moment";
import { ExperienceDetails } from "../../../types/profileDataTypes";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
import constants from "../../../helpers/constants";
const WorkExperience = () => {
  const { profileData } = useGlobalContext();
  const { experience } = profileData;

  const calculatedExperience = useMemo((): Array<ExperienceDetails> => {
    return experience.map((exp): ExperienceDetails => {
      const fromDate = moment(exp.fromDate);
      const toDate = exp.toDate !== "Present" ? moment(exp.toDate) : moment();

      const years = toDate.diff(fromDate, "year");
      fromDate.add(years, "years");
      const months = toDate.diff(fromDate, "months");
      fromDate.add(months, "months");

      let yearsOfExp = "";
      let monthsOfExp = "";

      if (years > 1) {
        yearsOfExp = `${years} years`;
      } else if (years == 1) {
        yearsOfExp = `${years} year`;
      }

      if (months > 1) {
        monthsOfExp = `${months} months`;
      } else if (months == 1) {
        monthsOfExp = `${years} month`;
      }

      exp.totalYears = `${yearsOfExp} ${monthsOfExp}`;
      return exp;
    });
  }, [experience]);

  function getFromToDates(fromDate: string, toDate: string): string {
    return `${fromDate.substring(3)} - ${
      toDate.includes("Present") ? toDate : toDate.substring(3)
    }`;
  }

  return (
    <>
      <div className="section-title h2 bold">{T.WORK_EXPERIENCE}</div>
      <div className="subsection">
        {calculatedExperience.map((experienceDetail, key) => {
          return (
            <div key={key} className="subsection-data">
              <span className="h3 grey1 bold">{experienceDetail.name}</span>
              <div className="label grey5 light mt-1 letterspacing-2 row no-gutters align-items-center">
                <span className="pr-3">
                  {getFromToDates(
                    experienceDetail.fromDate,
                    experienceDetail.toDate
                  )}
                </span>
                <span className="dot"></span>
                <span className="pl-3">{experienceDetail.totalYears}</span>
              </div>
              <div className="mt-3 grey-1 body-text">
                {experienceDetail.summary}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionVisibilityHOC(
  WorkExperience,
  constants.classNames.WORK_EXPERIENCE
);
