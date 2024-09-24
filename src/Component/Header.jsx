import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../Component/Heade.css'; // Ensure this path is correct
import Logo from '../assets/logo.png'
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
            <a href="#">{t('products')} <i className="fa fa-caret-down"></i></a>
            <div className="dropdown-content">
              <a href="#">Product 1</a>
              <a href="#">Product 2</a>
              <a href="#">Product 3</a>
            </div>
          </li>
          <li>
            <a href="#">{t('customers')} <i className="fa fa-caret-down"></i></a>
            <div className="dropdown-content">
              <a href="#">Customer 1</a>
              <a href="#">Customer 2</a>
              <a href="#">Customer 3</a>
            </div>
          </li>
          <li><a href="#">{t('pricing')}</a></li>
          <li>
            <a href="#">{t('about')} <i className="fa fa-caret-down"></i></a>
            <div className="dropdown-content">
              <a href="#">Company</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
            </div>
          </li>
          <li>
            <a href="#">{t('resources')} <i className="fa fa-caret-down"></i></a>
            <div className="dropdown-content">
              <a href="#">Company</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
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
