// LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../ComumComponent/location/LanguageSwitcher.css'; // Import the CSS file

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher">
      <select onChange={handleChange} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
