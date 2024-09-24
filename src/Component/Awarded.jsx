import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import '../Component/Awarded.css';
import Crozdesk from '../assets/Crozdesk.WEBP';
import Leader_Gold from '../assets/Leader_Gold.png';
import softwareadvice from '../assets/softwareadvice.png';
import images from '../assets/images.png';
import capterra from '../assets/capterra.png';
import award from '../assets/award.WEBP';
import LanguageSwitcher from '../ComumComponent/location/LanguageSwitcher'; 

function Awarded() {
  const { t } = useTranslation(); // Use translation hook

  return (
    <div className="award-container1">
      <div className="award-heading1">{t('award_heading')}</div> {/* Translated heading */}
      <div className="logo-organization1">
        <img src={Crozdesk} alt={t('crozdesk_award')} />
        <img src={Leader_Gold} alt={t('leader_gold_award')} />
        <img src={softwareadvice} alt={t('software_advice_award')} />
        <img src={images} alt={t('images_award')} />
        <img src={capterra} alt={t('capterra_award')} />
        <img src={award} alt={t('general_award')} />
      </div>
     {/* Optional: Add language switcher here if needed */}
    </div>
  );
}

export default Awarded;
