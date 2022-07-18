import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "fintech",
      desc: `6th place at the fintech competition held by the National Bank of Greece. The idea was to create a decentralized wallet that can store money from different sources.`,
      name: "NGB Fintech#2",
      designation: "Crowdpolicy",
      delayAnimation: "",
    },
    {
      img: "thinkbiz",
      desc: `1st place at the CodeBiz competition. We created a platform where users can buy and order groceries. The platform was both for users and companies.`,
      name: "CodeBiz",
      designation: "ThinkBiz",
      delayAnimation: "100",
    },
    {
      img: "tedx",
      desc: `Two consecutive years of participation in the IT team of TEDxUniversityofPiraeus. Each year we had to rebuild the website and adjust it with the main theme of the event.`,
      name: "TEDxUniversityofPiraeus",
      designation: "UniversityofPiraeus",
      delayAnimation: "200",
    },
    {
      img: "microsoft",
      desc: `2D game development using C#. The competition was held by Miscosoft at the headquarters in Athens. Was a great experience since it was our first coding challenge.`,
      name: "Imagine Cup",
      designation: "Microsoft",
      delayAnimation: "300",
    },
  ];
  

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        `img/achivements/${val.img}.jpg`
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="short">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
                {/* End short description */}
              </div>
              {/* End author */}

              {/* <div className="icon">
                <img className="svg" src="img/svg/quote.svg" alt="quote" />
              </div> */}
              {/* End right quote icon */}
            </div>

            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}
