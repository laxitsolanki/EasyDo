import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import Ebay from '../assets/Ebay.png';
import Oneplus from '../assets/Oneplus.png';
import Maersklogo from '../assets/Maersklogo.png';
import Byd from '../assets/Byd.png';
import Yulu from '../assets/Yulu.WEBP';
import OYO from '../assets/OYO.png';
import CoinDCX from '../assets/CoinDCX.png';
import Cleartax from '../assets/Cleartax.png';
import "../Component/Organization.css";
import LanguageSwitcher from '../ComumComponent/location/LanguageSwitcher'; // Include language switcher

function Organization() {
  const { t } = useTranslation(); // Use translation hook

  return (
    <div className="organization-container">
      {/* <div className="trusted-line">{t('trusted_organizations')}</div> */}
      <div className="logo-organization">
        <img src={Ebay} alt={t('ebay')} />
        <img src={Oneplus} alt={t('oneplus')} />
        <img src={Maersklogo} alt={t('maersk')} />
        <img src={Byd} alt={t('byd')} />
        <img src={Yulu} alt={t('yulu')} />
        <img src={OYO} alt={t('oyo')} />
        <img src={CoinDCX} alt={t('coindcx')} />
        <img src={Cleartax} alt={t('cleartax')} />
      </div>
      {/* Optional: Add LanguageSwitcher here if needed */}
      {/* <LanguageSwitcher /> */}
    </div>
  );
}

export default Organization;
