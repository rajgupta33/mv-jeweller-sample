import React from 'react';
import './AnnouncementBar.css';

const messages = [
  "20% OFF FIRST ELIGIBLE SILVER JEWELLERY ORDER",
  "15-DAY REPLACEMENT",
  "6-MONTH LIMITED WARRANTY",
  "INTERNATIONAL SHIPPING AVAILABLE"
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
