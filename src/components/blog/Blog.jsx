import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalOne from "./Modal/ModalOne";
import ModalTwo from "./Modal/ModalTwo";
import ModalThree from "./Modal/ModalThree";
import ModalFour from "./Modal/ModalFour";

Modal.setAppElement("#root");

const Blog = () => {

  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);
  // const [isOpen4, setIsOpen4] = useState(false);

  // function toggleModalOne() {
  //   setIsOpen(!isOpen);
  // }
  // function toggleModalTwo() {
  //   setIsOpen2(!isOpen2);
  // }
  // function toggleModalThree() {
  //   setIsOpen3(!isOpen3);
  // }
  // function toggleModalFour() {
  //   setIsOpen4(!isOpen4);
  // }

  // var settings = {
  //   dots: false,
  //   arrow: true,
  //   infinite: true,
  //   speed: 800,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   draggable: false,
  //   responsive: [
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         arrow: false,
  //         autoplay: false,
  //         speed: 300,
  //         draggable: true,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div className="news_inner my_carousel">
        {/* <ul>
          <Slider {...settings}>
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={toggleModalOne}>
                  <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/news/4.jpg"
                      })`,
                    }}
                  ></div>
                </div>

                <div className="news_details">
                  <span>
                    April 07,2021 <a href="#">Design</a>
                  </span>
                  <h3 className="title" onClick={toggleModalOne}>
                    Forzo Immobile
                  </h3>
                </div>
              </div>
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalTwo}>
                  <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/news/2.jpg"
                      })`,
                    }}
                  ></div>
                </div>

                <div className="news_details">
                  <span>
                    March 25,2021 <a href="#">Branding</a>
                  </span>
                  <h3 className="title" onClick={toggleModalTwo}>
                    Mosby Lavette
                  </h3>
                </div>
              </div>
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalThree}>
                  <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/news/3.jpg"
                      })`,
                    }}
                  ></div>
                </div>

                <div className="news_details">
                  <span>
                    May 01,2021 <a href="#">Lifestyle</a>
                  </span>
                  <h3 className="title" onClick={toggleModalThree}>
                    Jacuba Bamba
                  </h3>
                </div>
              </div>
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-dealy="400"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalFour}>
                  <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/news/1.jpg"
                      })`,
                    }}
                  ></div>
                </div>

                <div className="news_details">
                  <span>
                    July 07,2021 <a href="#">Travel</a>
                  </span>
                  <h3 className="title" onClick={toggleModalFour}>
                    Dostie Memorie
                  </h3>
                </div>
              </div>
            </li>
          </Slider>
        </ul> */}

        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>

            <div className="box_inner">
              <ModalOne />
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            <div className="box_inner">
              <ModalTwo />
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            <div className="box_inner">
              <ModalThree />
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalFour}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>

            <div className="box_inner">
              <ModalFour />
            </div>
          </div>
        </Modal> */}
      </div>
    </>
  );
};

export default Blog;
