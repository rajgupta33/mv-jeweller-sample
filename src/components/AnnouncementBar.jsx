import React from 'react';
import './AnnouncementBar.css';

const messages = [
  "PAN-INDIA DELIVERY",
  "COMPLIMENTARY SHIPPING",
  "SECURE PAYMENTS"
];

function AnnouncementBar() {
  const marqueeText = messages.join(" • ");

  return (
    <div className="announcement-bar">
      <div className="announcement-bar-mobile">
        <div className="marquee-content">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
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
