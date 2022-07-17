import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

// logo name
const logo = "dark";
const logo2 = "light";

// sidebar content
const sidebarContent = [
  { icon: "home", itemName: "Home", itemRoute: "#home", activeClass: "active" },
  // {
  //   icon: "service",
  //   itemName: "Service",
  //   itemRoute: "#service",
  //   activeClass: "",
  // },
  { icon: "human", itemName: "About", itemRoute: "#about", activeClass: "" },

  {
    icon: "portfolio",
    itemName: "Portfolio",
    itemRoute: "#portfolio",
    activeClass: "",
  },
  {
    icon: "service",
    itemName: "Technologies",
    itemRoute: "#testimonial",
    activeClass: "",
  },

  { icon: "blog", itemName: "Blog", itemRoute: "#blog", activeClass: "" },
  {
    icon: "contact",
    itemName: "Contact",
    itemRoute: "#contact",
    activeClass: "",
  },
];

// sidebar footer bottom content
const sidebarFooterContent = {
  avatar: "img/about/avatar.jpg",
  name: "Anna Noukou",
  email: "anna.noukou@gmail.com",
  emailRef: "mailto:anna.noukou@gmail.com",
};

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}
      <div
        className={click ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
            <Link to="/" className="link_logo">
              <h4>ANoukou</h4>
            </Link>
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                // "service",
                "about",
                "portfolio",
                "testimonial",
                "blog",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          className="svg custom"
                          src={`img/svg/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              {/* <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + sidebarFooterContent.avatar
                    })`,
                  }}
                ></div>
              </div> */}
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
