import React from 'react';
import companyinfo from '../assets/companyinfo.png';
import './CompanyIntro.css'; // Assuming you are using external CSS

function CompanyIntro() {
  return (
    <div className='mainCompany'>
      {/* Description Section */}
      <div className='companyDescription'>
        <h1>Everything you need to  <br />build a great company</h1>
        <p>Keka is your people enabler. From automation of people processes to creating an engaged and driven culture, Keka is all you need to build a good to great company.</p>
        <button>Get Free Trial</button>
      </div>

      {/* Image Section */}
      <div className='companySection'>
        <img src={companyinfo} alt="Company Info" />
      </div>
    </div>
  );
}

export default CompanyIntro;
