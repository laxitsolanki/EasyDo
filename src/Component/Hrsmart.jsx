import React, { useEffect, useState } from 'react';
import hr1 from "../assets/hr1.png";
import hr2 from "../assets/hr2.png";
import hr3 from "../assets/hr3.png";
import hr4 from "../assets/hr4.png";
import hr5 from "../assets/hr5.png";
import '../Component/Hrsmart.css';
function Hrsmart() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [hr1, hr2, hr3, hr4, hr5];

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className='mainhr'>
        <h1>Smart HR to outsmart the changing world</h1>
        <p style={{ textAlign: 'center' }}>
          The world has changed, and it's going to keep changing.<br />
          Keka HR helps your teams to adapt, evolve, and scale by working more effectively.<br />
          Spend less time on mundane tasks and focus more on strategy.
        </p>
      </div>
      <div className='container1'>
        <div className='cardSmarthr'>
          <span onClick={() => handleCardClick(0)} className='card'>
            <h5>People data & Analytics</h5>
            <p>Connect all your people together in one place and gain powerful insights</p>
          </span>
          <span onClick={() => handleCardClick(1)} className='card'>
            <h5>Payroll & Expense tracking</h5>
            <p>Employ SMART Goals and OKRs to measure & maximize talent performance.</p>
          </span>
          <span onClick={() => handleCardClick(2)} className='card'>
            <h5>Hiring and Onboarding</h5>
            <p>Source, hire and onboard top talent. Personalized dashboards for insights.</p>
          </span>
          <span onClick={() => handleCardClick(3)} className='card'>
            <h5>Timesheets & Projects (PSA)</h5>
            <p>Manage time, resource and project profitability efficiently</p>
          </span>
        </div>
        <div className='hrslider'>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>
    </>
  );
}

export default Hrsmart;
