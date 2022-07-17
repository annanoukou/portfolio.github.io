import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Anna " },
  { meta: "last name", metaInfo: "Noukou" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Greek" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Athens, Greece" },
  { meta: "phone", metaInfo: "+306988721738" },
  { meta: "langages", metaInfo: "Greek, Russian, English" },
  { meta: "Email", metaInfo: "anna.noukou@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
