import React from 'react';
import '../../Component/Producttype/Cardproduct.css'; // Import the CSS file for styling
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cardproduct({ title, description, icon }) {
  const { t } = useTranslation(); // Use translation hook

  return (
    <div className="card-container">
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} className="icon"  /> {/* Render the icon */}
      </div>
      <h2 className="card-title">{title}</h2> {/* Translated title */}
      <p className="card-description">{description}</p> {/* Translated description */}
      <a className="card-link" href="#">
        {t('learn_more')} {/* Translated "Learn More" */}
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="card-icon"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}

export default Cardproduct;
