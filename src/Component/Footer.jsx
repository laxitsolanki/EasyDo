import React from "react";
import "../Component/Footer.css"; // Ensure the CSS file is in the same directory
import logoh from '../assets/logoh.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      className="footer"
      role="contentinfo"
      itemscope
      itemtype="http://schema.org/WPFooter"
    >
      <div className="main-keka-top">
        {/* <h2>EasyDo</h2> */}
        <img src={logoh} alt="" className="logohFooter" />
        <p className="description">
          Keka is made for your people, by people like you,
          <br />
          who care for people in the organization
        </p>
        <div className="social-icons">
          <FontAwesomeIcon className="fa" icon={faFacebook} />
          <FontAwesomeIcon className="fa" icon={faInstagram} />
          <FontAwesomeIcon className="fa" icon={faLinkedin} />
          <FontAwesomeIcon className="fa" icon={faPinterest} />
          <FontAwesomeIcon className="fa" icon={faXmark} />
          <FontAwesomeIcon className="fa" icon={faYoutube} />
        </div>
      </div>
      <hr className="custom-hr" />
      <div className="footer-container">
        <div
          className="footer-col"
          role="navigation"
          aria-labelledby="quick-nav-heading"
        >
          <h3 id="quick-nav-heading" itemprop="name">
            Quick Nav
          </h3>
          <ul>
            <li>
              <a href="#" itemprop="url">
                Home
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Contents
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Creations
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Services
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Store
              </a>
            </li>
          </ul>
        </div>
        <div
          className="footer-col"
          role="navigation"
          aria-labelledby="know-heading"
        >
          <h3 id="know-heading" itemprop="name">
            Know
          </h3>
          <ul>
            <li>
              <a href="#" itemprop="url">
                About
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Mission
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Services
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Social
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
        <div
          className="footer-col"
          role="navigation"
          aria-labelledby="contents-heading"
        >
          <h3 id="contents-heading" itemprop="name">
            Contents
          </h3>
          <ul>
            <li>
              <a href="#" itemprop="url">
                Inside SDP
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Blog
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Verses / Poems
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Visual Narratives
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Topics Index
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                More
              </a>
            </li>
          </ul>
        </div>
        <div
          className="footer-col"
          role="navigation"
          aria-labelledby="resources-heading"
        >
          <h3 id="resources-heading" itemprop="name">
            Resources
          </h3>
          <ul>
            <li>
              <a href="#" itemprop="url">
                Graphics
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Free codes
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Helpful sites
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Freebies
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Templates
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Mockups
              </a>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>
      </div>
      <div className="footer-container">
        <div
          className="footer-col"
          role="navigation"
          aria-labelledby="quick-nav-heading"
        >
          <h3 id="quick-nav-heading" itemprop="name">
            Quick Nav
          </h3>
          <ul>
            <li>
              <a href="#" itemprop="url">
                Home
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Contents
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Creations
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Services
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Store
              </a>
            </li>
          </ul>
        </div>
        <div
          className="footer-col"
          role="navigation"
          aria-labelledby="know-heading"
        >
          <h3 id="know-heading" itemprop="name">
            Know
          </h3>
          <ul>
            <li>
              <a href="#" itemprop="url">
                About
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Mission
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Services
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Social
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
        <div
          className="footer-col"
          role="navigation"
          aria-labelledby="contents-heading"
        >
          <h3 id="contents-heading" itemprop="name">
            Contents
          </h3>
          <ul>
            <li>
              <a href="#" itemprop="url">
                Inside SDP
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Blog
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Verses / Poems
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Visual Narratives
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Topics Index
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                More
              </a>
            </li>
          </ul>
        </div>
        <div
          className="footer-col"
          role="navigation"
          aria-labelledby="resources-heading"
        >
          <h3 id="resources-heading" itemprop="name">
            Resources
          </h3>
          <ul>
            <li>
              <a href="#" itemprop="url">
                Graphics
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Free codes
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Helpful sites
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Freebies
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Templates
              </a>
            </li>
            <li>
              <a href="#" itemprop="url">
                Mockups
              </a>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      <hr className="custom-hr" />
      <div className="locations"> 
      <div className="location">
    <div>location:</div>
  </div>
  <div className="location">
    <div>Portland:</div>
    <div className="number">+1-540-503-4550</div>
  </div>
  <div className="location">
    <div>Singapore:</div>
    <div className="number">+65 6232 6961</div>
  </div>
  <div className="location">
    <div>Bengaluru:</div>
    <div className="number">+91 9000015743</div>
  </div>
  <div className="location">
    <div>Hyderabad:</div>
    <div className="number">+91 9281115885</div>
  </div>
  <div className="location">
    <div>Chennai:</div>
    <div className="number">+91 9000017131</div>
  </div>
  <div className="location">
    <div>Delhi NCR:</div>
    <div className="number">+91 9100085589</div>
  </div>
  <div className="location">
    <div>Mumbai:</div>
    <div className="number">+91 9000017303</div>
  </div>
  <div className="location">
    <div>Kolkata:</div>
    <div className="number">+91 9281116365</div>
  </div>
  <div className="location">
    <div>Pune:</div>
    <div className="number">+91 9346991504</div>
  </div>
</div>

      </div>
      <div className="footer-bottom">
        <p className="Easydofooter">© 2024 EasyDo WebSite.</p>
        <ul className="footer-bottom-links">
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Credits</a>
          </li>
          <li>
            <a href="#">Sponsor/Advertise</a>
          </li>
          <li>
            <a href="#">Sponsor/Advertise</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
