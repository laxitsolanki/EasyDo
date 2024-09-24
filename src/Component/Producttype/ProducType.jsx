import React from 'react';
import Cardproduct from './Cardproduct';
import '../../Component/Producttype/ProducType.css';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { faClipboardCheck, faUser, faChartLine, faUserPlus, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function ProducType() {
  const { t } = useTranslation(); // Use translation hook

  // Define card data using translation keys and icons
  const cardData = [
    {
      title: t('payroll_title'),
      description: t('payroll_description'),
      icon: faClipboardCheck, // Icon for payroll
    },
    {
      title: t('hr_title'),
      description: t('hr_description'),
      icon: faUser, // Icon for HR
    },
    {
      title: t('performance_title'),
      description: t('performance_description'),
      icon: faChartLine, // Icon for performance
    },
    {
      title: t('hiring_title'),
      description: t('hiring_description'),
      icon: faUserPlus, // Icon for hiring
    },
    {
      title: t('timesheet_title'),
      description: t('timesheet_description'),
      icon: faClock, // Icon for timesheet
    },
    {
      title: t('attendance_title'),
      description: t('attendance_description'),
      icon: faCheckCircle, // Icon for attendance
    }
  ];

  return (
    <>
      <h1 className="heading-text">{t('heading_text')}</h1> {/* Translated heading */}
      <div className="product-container">
        {cardData.map((card, index) => (
          <Cardproduct 
            key={index} 
            title={card.title} 
            description={card.description} 
            icon={card.icon} // Pass icon to Cardproduct
          />
        ))}
      </div>
    </>
  );
}

export default ProducType;
