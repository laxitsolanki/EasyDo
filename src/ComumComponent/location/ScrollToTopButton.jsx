// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      style={{
        display: visible ? 'flex' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
    >
      <span style={{ fontSize: '22px' }}>↑</span>
    </div>
  );
};

export default ScrollToTopButton;
