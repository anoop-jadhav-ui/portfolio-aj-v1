import React from "react";
import "./Certifications.css";

function Certifications({ certifications }) {
  return (
    <div
      className={
        "show-on-scroll col-md-7 page-1 text-left section certifications "
      }
    >
      <div className="section-title h2 bold">Certifications</div>
      <div className="subsection">
        <div className="subsection-title uppercase body-text grey3 letterspacing-1">
          Development
        </div>

        {certifications.development.map((ele, key) => {
          return (
            <div className="subsection-data" key={key}>
              <span className="h3 grey1 bold" data-testid="name">
                {ele.name}
              </span>
              <div className="red default-text mt-1">
                <a
                  href={ele.urlToCertificate}
                  target="_Blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn profile
                </a>
              </div>
              <div className="mt-2 grey-1 body-text">{ele.summary}</div>
            </div>
          );
        })}
      </div>
      <div className="subsection">
        <div className="subsection-title uppercase body-text grey3 letterspacing-1">
          Design
        </div>
        {certifications.design.map((ele, key) => {
          return (
            <div className="subsection-data" key={key}>
              <span className="h3 grey1 bold">{ele.name}</span>
              <div className="red default-text mt-1">
                <a
                  href={ele.urlToCertificate}
                  target="_Blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn profile
                </a>
              </div>
              <div className="mt-2 grey-1 body-text">{ele.summary}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certifications;

export { Certifications };
