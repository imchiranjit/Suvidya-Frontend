import "./FooterStyle.css";

import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin,
} from "react-icons/io";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container-default w-container">
        <div className="footer-top">
          <div className="w-layout-grid grid-footer">
            <div className="footer-left-side">
              <a href="/home" className="footer-logo-wrapper w-inline-block">
                <img
                  src="./images/logo.png"
                  alt="Suvidya logo"
                  className="footer-logo"
                />
              </a>
              <div
                className="copyright"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p style={{ display: "inline-block" }}>Copyright © Suvidya </p>
                <p style={{ display: "inline-block" }}>
                  {"  "} Designed by{"  "}
                  <a className="footer-link" href="#">
                    School of Bio-technology
                  </a>
                </p>
                <p style={{ display: "inline-block" }}>
                  Powered by{" "}
                  <a className="footer-link" href="#">
                    Utkarsha
                  </a>
                </p>
              </div>
              <div
                className="w-layout-grid social-media-grid-top"
                style={{
                  maxWidth: "32rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a
                  href="https://facebook.com/"
                  className="social-media-icon-link w-inline-block"
                >
                  <div className="social-icon-font">
                    <IoLogoFacebook />
                  </div>
                </a>
                <a
                  href="https://twitter.com/"
                  className="social-media-icon-link w-inline-block"
                >
                  <div className="social-icon-font">
                    {" "}
                    <IoLogoTwitter />{" "}
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="social-media-icon-link w-inline-block"
                >
                  <div className="social-icon-font">
                    {" "}
                    <IoLogoInstagram />{" "}
                  </div>
                </a>
                <a
                  href="http://youtube.com/"
                  className="social-media-icon-link w-inline-block"
                >
                  <div className="social-icon-font">
                    {" "}
                    <IoLogoYoutube />{" "}
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/"
                  className="social-media-icon-link w-inline-block"
                >
                  <div className="social-icon-font">
                    {" "}
                    <IoLogoLinkedin />{" "}
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="text-300 bold footer-title">Pages (Public)</div>
              <div className=" grid-2-columns auto-grids">
                <ul role="list" className="footer-list-wrapper">
                  <li className="footer-list-item">
                    <a
                      href="/primary-home"
                      aria-current="page"
                      className="footer-link w--current"
                    >
                      Home
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/categories" className="footer-link">
                      Categories
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a
                      href="https://streamingtemplates.webflow.io/documentary-category/forest"
                      className="footer-link"
                    >
                      Category single
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a
                      href="https://streamingtemplates.webflow.io/documentary/the-king-of-the-jungle"
                      className="footer-link"
                    >
                      Video single
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/pricing" className="footer-link">
                      Pricing
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a
                      href="https://streamingtemplates.webflow.io/product/premium"
                      className="footer-link"
                    >
                      Pricing single
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a
                      href="https://streamingtemplates.webflow.io/director/john-carter"
                      className="footer-link"
                    >
                      Director page
                    </a>
                  </li>
                </ul>
                <ul role="list" className="footer-list-wrapper">
                  <li className="footer-list-item">
                    <a href="/contact" className="footer-link">
                      Contact
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/log-in" className="footer-link">
                      Login
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/sign-up" className="footer-link">
                      Sign up
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/reset-password" className="footer-link">
                      Rest password
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/update-password" className="footer-link">
                      Update password
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/access-denied" className="footer-link">
                      Access denied
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/user-account" className="footer-link">
                      User Account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-300 bold footer-title">
                Pages (Membership)
              </div>
              <ul role="list" className="footer-list-wrapper">
                <li className="footer-list-item">
                  <a href="/premium-pages/home" className="footer-link">
                    Home
                  </a>
                </li>
                <li className="footer-list-item">
                  <a
                    href="/premium-pages/category-single"
                    className="footer-link"
                  >
                    Category single
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/premium-pages/video-single" className="footer-link">
                    Video single
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-300 bold footer-title">Utility Pages</div>
              <ul role="list" className="footer-list-wrapper">
                <li className="footer-list-item">
                  <a href="/template-pages/start-here" className="footer-link">
                    Start here
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/template-pages/style-guide" className="footer-link">
                    Styleguide
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/401" className="footer-link">
                    Password protected
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/404" className="footer-link">
                    404 Not found
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/template-pages/licenses" className="footer-link">
                    Licenses
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/template-pages/changelog" className="footer-link">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
