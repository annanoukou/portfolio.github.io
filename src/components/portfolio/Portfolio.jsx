import React from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
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
  //         draggable: true,
  //         speed: 300,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="col-12 portfolio_inner my_carousel gallery_zoom">
      <h5 className="mb-4">- ReactJS</h5>
      <div className="row" data-aos="fade-right" data-aos-duration="1200">
        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://omniscia.io/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/omniscia.png"
                  data-tip
                  data-for="omniscia"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="omniscia"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Omniscia</h5>
                    <span>Designed by me with Figma</span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://fairside.io/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/fairside.png"
                  data-tip
                  data-for="fairside"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="fairside"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Fairside</h5>
                    <span>Dapp created together with a dashboard 
                    <br/>https://fairside.io/dashboard-draft/</span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://haxol.io/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/haxol.png"
                  data-tip
                  data-for="haxol"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="haxol"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Haxol</h5>
                    {/* <span></span> */}
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://ourovoros.io/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/ourovoros.png"
                  data-tip
                  data-for="ourovoros"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="ourovoros"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Ourovoros</h5>
                    {/* <span></span> */}
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://www.tedxuniversityofpiraeus.com/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/tedxuniversityοfpiraeus.png"
                  data-tip
                  data-for="youtube"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="youtube"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>TEDxUniversityOfPiraeus</h5>
                    <span>Volunteer work for two consecutive years</span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://incognita.tech/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/incognitatech.png"
                  data-tip
                  data-for="incognitatech"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="incognitatech"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>IncognitaTech</h5>
                    {/* <span></span> */}
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End row */}

      <br />
      <br />
      <br />

      <h5 className="mb-2">- PHP</h5>
      <p className="mb-4">CodeIgniter Framework, CRUD functionalities, Web applications</p>
      <div className="row" data-aos="fade-right" data-aos-duration="1200">
        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://www.activebaby.gr/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/activebaby.png"
                  data-tip
                  data-for="activebaby"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="activebaby"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Activebaby</h5>
                    <span>A multilingual platform that helps searching activities for kids.
                      <br/>Was build together with a admin panel for the companies.
                    </span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://app.briefcase.ai/login"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/briefcase.png"
                  data-tip
                  data-for="dribbble"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="dribbble"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Briefcase</h5>
                    <span>A multilingual platform for organizing and conducting meetings</span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://oxcart-cs.com/el/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/oxcart-cs.png"
                  data-tip
                  data-for="oxcart"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="oxcart"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Oxcart</h5>
                    <span>Ordering food</span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://potentialcompass.com/de"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/potentialcompass.png"
                  data-tip
                  data-for="potentialcompass"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="potentialcompass"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Potential Compass</h5>
                    <span>Psychometric tests</span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://megabroker.gr/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/megabroker.png"
                  data-tip
                  data-for="megabroker"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="megabroker"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Megabroker</h5>
                    {/* <span></span> */}
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End row */}


      <br />
      <br />
      <br />

      <h5 className="mb-2">- Ecommerce</h5>
      <p className="mb-4">Customizable WordPress themes and plugins</p>
      <div className="row" data-aos="fade-right" data-aos-duration="1200">
        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://etd.gr/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/etd.png"
                  data-tip
                  data-for="etd"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="etd"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Etd</h5>
                    {/* <span></span> */}
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://www.paidikarouxaonline.gr/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/paidikarouxaonline.png"
                  data-tip
                  data-for="paidikarouxaonline"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="paidikarouxaonline"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Paidika Rouxa Online</h5>
                    {/* <span></span> */}
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://www.pslshoes.eu/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/pslshoes.png"
                  data-tip
                  data-for="pslshoes"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="pslshoes"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Pslshoes</h5>
                    {/* <span></span> */}
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://bstsystems.gr/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/bstsystems.png"
                  data-tip
                  data-for="youtube"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="youtube"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Youtube Shot</h5>
                    <span>Youtube</span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
        {/* End li */}

        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <div className="list_inner">
            <div className="image">
              <a
                href="https://socksandtights.eu/"
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                <img
                  src="img/websites/socksandtights.png"
                  data-tip
                  data-for="web"
                  alt="portfolio"
                />
                <ReactTooltip
                  id="web"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Web Apps Shot</h5>
                    <span>Web Apps</span>
                  </div>
                </ReactTooltip>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End row */}

    </div>
  );
};

export default Portfolio;
