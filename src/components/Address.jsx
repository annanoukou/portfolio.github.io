import React from "react";

const Address = () => {
  return (
    <ul className="wrapper">
      <li data-aos="fade-right" data-aos-duration="1200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/phone.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Phone</h3>
            <ul>
              <li>
                <a href="Tel: +306988721739">(+30) 6988721739</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/email.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="mailto:anna.noukou@gmail.com">anna.noukou@gmail.com</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/location.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Address</h3>
            <ul>
              <li>
                <p>
                  Athens, Greece
                </p>
              </li>
            </ul>
          </div>
          {/* End .content */}
        </div>
      </li>
    </ul>
  );
};

export default Address;
