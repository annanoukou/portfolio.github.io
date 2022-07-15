import React from "react";
import Tilt from "react-parallax-tilt";



const Tools = () => {

  return (
    <div className="service_list">
      <div class="row">


        <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/asana.png" alt="" />
                <div className="service_title">
                  <h3>Asana</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div>


        <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/github.png" alt="" />
                <div className="service_title">
                  <h3>Github</h3>
                </div>
              </div>
            </div>{" "}
          </Tilt>
        </div>


        <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/gitlab.png" alt="" />
                <div className="service_title">
                  <h3>Gitlab</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div>


        <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/visualstudio.png" alt="" />
                <div className="service_title">
                  <h3>VS Code</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div>


        <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/figma.png" alt="" />
                <div className="service_title">
                  <h3>Figma</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/postman.png" alt="" />
                <div className="service_title">
                  <h3>Postman</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="600">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/postgre.png" alt="" />
                <div className="service_title">
                  <h3>PostgreSQL</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="700">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/heidi.png" alt="" />
                <div className="service_title">
                  <h3>HeidiSQL</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div> */}

        <div className="col-6 col-md-3 col-lg-2 mb-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="700">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/tech/docker.png" alt="" />
                <div className="service_title">
                  <h3>Docker</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

      </div>

      
    </div>
  );
};

export default Tools;
