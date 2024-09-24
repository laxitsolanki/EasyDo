import React, { useState } from 'react';
import './HrLeade.css';
import logo from '../assets/p1.jpg';
import p1 from '../assets/p2.jpg';
import p2 from '../assets/p3.jpg';

const HrLeade = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Introducing Easydoo Chat App', videoUrl: 'https://youtu.be/jspGISRK_KE?si=_K40gqw7aGGI927q', image: p1 },
    { id: 2, text: 'Easydoo Chat App Features ', videoUrl: 'https://youtu.be/7XPVZQs2wNk?si=nqkCKcl5w3ib-087', image: p2 },
    { id: 3, text: 'EasyDo Chat-How to Get Started', videoUrl: 'https://youtu.be/hzmDykKa8tg?si=w7nE5hunjuHPa0_B', image: logo },
    { id: 4, text: 'EasyDo Chat-How to Create a Task', videoUrl: 'https://youtu.be/8UONL_d22_4?si=4O58XQrx4xWiZM0m', image: p1 },
    { id: 5, text: 'How to invite friends, colleagues and family', videoUrl: 'https://youtu.be/q-NvBhjenfg?si=pZJ4iMQjmsHURe3J', image: p2 },
    { id: 6, text: 'How to create groups & tags', videoUrl: 'https://youtu.be/N18oTLsMs1A?si=bNjuRF_fg26VoYgA', image: logo },
  ]);

  const shiftLeft = () => {
    const newCards = [...cards];
    const removedCard = newCards.shift();
    newCards.push(removedCard);
    setCards(newCards);
  };

  const shiftRight = () => {
    const newCards = [...cards];
    const removedCard = newCards.pop();
    newCards.unshift(removedCard);
    setCards(newCards);
  };

  return (
    <>
      <h1 className="title">Hear it from 30,000 HR Leaders like YOU.</h1>
      <div className="container">
        <div className="button" onClick={shiftLeft}>
          <img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt="Left Arrow" />
        </div>
        <div className="cards-wrapper">
          <ul className="cards__container">
            {cards.slice(0, 3).map((card, index) => (
              <li
                key={card.id}
                className={`box ${index === 1 ? 'box--active' : ''}`}
                style={{
                  backgroundImage: `url(${card.image})`, // Using dynamic image here
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <a 
                  href={card.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="thumbnail"
                >
                  <span className="play-icon">▶</span>
                </a>
                <div className="box-text">{card.text}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="button" onClick={shiftRight}>
          <img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt="Right Arrow" />
        </div>
        <div className="text-container">
          <h2>Everything you need <br />to connect your <br />employees</h2>
          <button className="get-started">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default HrLeade;
