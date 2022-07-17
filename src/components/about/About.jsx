import React, { useState } from "react";
import Skills from "../skills/Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../../components/testimonial/Testimonial";

Modal.setAppElement("#root");

const About = () => {

  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
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
      img: "1",
      desc: `Hi, I’m Alvara Atkins and I am designer &amp; developer who dream making the world better place by products. I am also very active for international clients.`,
      name: "Alvara Atkins",
      designation: "Marketing Manager",
      delayAnimation: "",
    },
    {
      img: "2",
      desc: `These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!`,
      name: "Fabian Gattuzo",
      designation: "Photographer",
      delayAnimation: "100",
    },
    {
      img: "3",
      desc: `These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!`,
      name: "Alizee Bonita",
      designation: "App Developer",
      delayAnimation: "200",
    },
  ];


  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I'm <span>Anna Noukou</span>
              </h3>
              <p>
                Web developer with 3+ years experience. 
                Proficient at HTML, CSS, PHP, MySQL and React.  
              </p>
            </div>
            <div className="my_skills">
              {/* <h3 className="title">What is my skill level?</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ipsum sit nibh amet egestas tellus.
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div> */}
              <div className="anoukou_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          {/* <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "img/about/athens.jpg"
                  })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>3+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* End righttpart */}
        </div>

        {/* <div className="list ">
          <ul>
            <Testimonial />
          </ul>
        </div> */}

        <div className="edina_tm_testimonials">
          <div className="list ">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>

      

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
