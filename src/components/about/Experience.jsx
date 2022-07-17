import React from "react";

const experienceContent = [
  {
    year: "2019 - 2021",
    position: "Wordpress Developer",
    compnayName: "seo1.gr",
    details: `Athens`,
  },
  {
    year: "2020 - 2021",
    position: "PHP Developer",
    compnayName: "xWeb.gr",
    details: `Athens`,
  },
  {
    year: "2021 - Present",
    position: "React Developer",
    compnayName: "Omniscia.io",
    details: `Athens`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/svg/quote.svg" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
