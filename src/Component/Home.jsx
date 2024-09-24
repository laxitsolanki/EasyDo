import React from 'react';
import "../Component/Home.css";
import Footer from './Footer';
import Header from './Header';
import Organization from './Orginazation';
import Awarded from './awarded';
import Cardproduct from './Producttype/Cardproduct';
import ProducType from './Producttype/ProducType';
import HrmSoftware from './HrmSoftware';
import HrLeade from './HrLeade';
import AppDevice from './Producttype/AppDevice';
import CompanyIntro from './CompanyIntro';
import Hrsmart from './Hrsmart';

function Home() {
  return (
    <>
      <Header />
      <div className="main-content">
      <CompanyIntro/>
<Organization/>
<Awarded/>
<Hrsmart/>
<ProducType/>
<HrLeade/>
<HrmSoftware/>
<AppDevice/>
      </div>
      <Footer />
    </>
  );
}

export default Home;
