import React from 'react';
import '../Component/HrmSoftware.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCogs, faPills, faUniversity, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { useTranslation } from 'react-i18next'; // Import useTranslation

function HrmSoftware() {
  const { t } = useTranslation(); // Use translation hook

  const cards = [
    {
      icon: faCogs, // Icon for Technology Services
      title: t('technology_services'),
      description: t('description_technology_services'),
      link: '#',
    },
    {
      icon: faPills, // Icon for Pharma Manufacturing
      title: t('pharma_manufacturing'),
      description: t('description_pharma_manufacturing'),
      link: '#',
    },
    {
      icon: faUniversity, // Icon for Banks and Financial Services
      title: t('banks_financial_services'),
      description: t('description_banks_financial_services'),
      link: '#',
    },
    {
      icon: faShoppingCart, // Icon for Retail & Other Industries
      title: t('retail_other_industries'),
      description: t('description_retail_other_industries'),
      link: '#',
    },
  ];

  return (
    <div className="industry-cards1">
      <h2>{t('personalized_hcm')}</h2> {/* Translated heading */}
      <p style={{ fontSize: '21px' }}>{t('understands_you')}</p> {/* Translated paragraph */}
      <div className="card-container1">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <FontAwesomeIcon icon={card.icon} className="card-icon1" size="3x" /> {/* Display FontAwesome icon */}
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <a href={card.link}>{t('know_more')}</a> {/* Translated "Know More" */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HrmSoftware;
