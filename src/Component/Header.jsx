import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../Component/Heade.css'; // Ensure this path is correct
import Logo from '../assets/logo1main.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoice, faUsers, faUserPlus, faChartLine, faClock, faClipboardList } from '@fortawesome/free-solid-svg-icons'; // Adjust according to your icons

import LanguageSwitcher from '../ComumComponent/location/LanguageSwitcher'; // Import the LanguageSwitcher

const Header = () => {
  const { t } = useTranslation(); // Use translation hook
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="logo">
        <span className="keka">
          <img src={Logo} alt="logo" className='EasyDoLogo' />
        </span>
      </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <ul>
        <li>
  <a href="#">
    {t('products')} <FontAwesomeIcon icon={faChevronDown} size="xs" className="fa-sharp fa-thin" />
  </a>
  <div className="dropdown-content">
    <div className="dropdown-columns">
      <div className="dropdown-column">
        <a href="#">
          <FontAwesomeIcon icon={faFileInvoice} className="dropdown-icon" /> Payroll Software
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faUsers} className="dropdown-icon" /> Modern HR
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faUserPlus} className="dropdown-icon" /> Hiring & Onboarding
        </a>
      </div>
      <div className="dropdown-column">
        <a href="#">
          <FontAwesomeIcon icon={faChartLine} className="dropdown-icon" /> Performance
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faClock} className="dropdown-icon" /> Time & Attendance
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faClipboardList} className="dropdown-icon" /> Project timesheet
        </a>
      </div>
    </div>
  </div>
</li>
          <li>
            <a href="#">{t('customers')} <FontAwesomeIcon icon={faChevronDown} size="xs" className="fa-sharp fa-thin" /></a>
            <div className="dropdown-content">
              <a href="#">Customer Experince</a>
              <a href="#">Customer Stories</a>
              <a href="#">Onboarding Support</a>
              <a href="#">Wall of Love</a>
              <a href="#">Support</a>
            </div>
          </li>
          <li><a href="#">{t('pricing')}</a></li>
          <li>
            <a href="#">{t('about')}<FontAwesomeIcon icon={faChevronDown} size="xs" className="fa-sharp fa-thin" /></a>
            <div className="dropdown-content">
              <a href="#">Our Story</a>
              <a href="#"> Our Team</a>
              <a href="#">Contact Us</a>
            </div>
          </li>
          <li>
            <a href="#">{t('resources')}<FontAwesomeIcon icon={faChevronDown} size="xs" className="fa-sharp fa-thin" /></a>
            <div className="dropdown-content">
              <a href="#">Blog</a>
              <a href="#">Glossary</a>
              <a href="#">HR Toolkit</a>
              <a href="#">Whitepapper</a>
              <a href="#">Free Tools</a>
              <a href="#">Use Cases</a>
              <a href="#">HR Katalyst report</a>
              <a href="#">Commics</a>
              <a href="#">HR Story Book</a>
              <a href="#">HR Perspective</a>
              <a href="#">News</a>
              <a href="#">Envents</a>
            </div>
          </li>
          <li><a href="#">{t('careers')}</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="#" className="login">{t('login')}</a>
        <a href="#" className="btn">{t('free_trial')}</a>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <i className={`fa ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      {/* Language switcher */}
      {/* <LanguageSwitcher /> */}
    </header>
  );
};

export default Header;
