import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Tools from "../../components/service/Tools";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
import Map from "../../components/Map";
import HeaderMobile from "../../components/header/HeaderMobile";

const EdinaHome = () => {
  const [isDark, setIsDark] = useState(true);
  document.querySelector("body").classList.remove("rtl");

  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem("theme-color");
  //   if (currentThemeColor === "theme-dark") {
  //     setIsDark(true);
  //   } else {
  //     setIsDark(false);
  //   }
  // }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };
  return (
    <div
      className={`home-light edina_tm_mainpart ${isDark ? "theme-dark" : ""}`}
    >
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>

      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}

      <About />
      {/* End Hero */}

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}


      <div className="edina_tm_services" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3 className="mb-0">Technologies</h3>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p> */}
          </div>
          {/* End edian_tm_title */}
          <Service />

          <div className="edina_tm_title mt-5">
            <h3 className="more_tools mb-0">More Tools</h3>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p> */}
          </div>
          {/* End edian_tm_title */}
          <Tools />
        </div>
      </div>
      {/* End Services */}

      <div className="edina_tm_news" id="blog">
        <div className="blog_overlay"></div>
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p> */}
            <div className="under_construction text-center">
              <p className="mb-2 fw-bold">
                &lt;building/&gt;
              </p>
              <p>
                Working day and night!
              </p>
            </div>
          </div>
          {/* End edian_tm_title */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  <span>Want to get in touch?</span>
                  <br />
                  Either fill out the form with your inquiry of contact me on <a href="https://www.linkedin.com/in/anna-noukou-7334a2152/" target="_blank">Linkedin</a>
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Contact />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default EdinaHome;
