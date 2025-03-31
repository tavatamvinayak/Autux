import React from "react";

function Header() {
  return (
    <div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-w-id="d4fd2b4e-1744-1467-1ed1-62e2ccef0a5a"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar14_component w-nav"

      >
        <div className="navbar14_container">
          <a href="#" className="navbar14_logo-link w-nav-brand">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/67416bf9ad9706da53302213/6741f32681be00d0c9072844_cf-logo%20Logo.png"
              alt=""
              className="navbar14_logo"
            />
          </a>
          <nav
            role="navigation"
            id="w-node-d4fd2b4e-1744-1467-1ed1-62e2ccef0a82-53302248"
            className="navbar14_menu w-nav-menu"
          >
            <div className="navbar14_menu-link-wrapper">
              <div className="navbar14_menu-links">
                <a href="#services-usp" className="navbar14_link w-nav-link">
                  Services
                </a>
                <a
                  href="#benefits"
                  id="sectiion-benefits"
                  className="navbar14_link w-nav-link"
                >
                  Benefits
                </a>
                <a href="#process" className="navbar14_link w-nav-link">
                  Process
                </a>
                <a href="#testimonials" className="navbar14_link w-nav-link">
                  Testimonials
                </a>
              </div>
              <div
                id="w-node-d4fd2b4e-1744-1467-1ed1-62e2ccef0a97-53302248"
                className="navbar14_button-wrapper hide"
              >
                {/* <a href="#" className="button is-secondary is-small w-button">
                  Button
                </a> */}
                <a href="#" className="button is-small w-button">
                  Button
                </a>
              </div>
            </div>
          </nav>
          <div
            className="navbar14_menu-button w-nav-button"
            // style={"-webkit-user-select: text;"}
            aria-label="menu"
            role="button"
            tabIndex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="menu-icon2">
              <div className="menu-icon2_line-top"></div>
              <div className="menu-icon2_line-middle">
                <div className="menu-icon1_line-middle-inner"></div>
              </div>
              <div className="menu-icon2_line-bottom"></div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
    </div>
  );
}

export default Header;
