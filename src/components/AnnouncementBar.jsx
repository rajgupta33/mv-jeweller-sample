import React, { useState, useEffect } from 'react';
import './AnnouncementBar.css';

const messages = [
  "COMPLIMENTARY SHIPPING",
  "SECURE PAYMENTS",
  "PREMIUM QUALITY",
  "PAN-INDIA DELIVERY"
];

function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="announcement-bar">
      <div className="announcement-bar-mobile">
        <span>{messages[currentIndex]}</span>
      </div>
      <div className="announcement-bar-desktop container">
        {messages.map((msg, index) => (
          <span key={index} className="announcement-item">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementBar;
