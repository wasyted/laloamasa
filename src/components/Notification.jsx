// Notification.js

import React from 'react';
import './styles/Notification.scss'; // Add your notification styles

const Notification = ({ message }) => {
  return (
    <div className="notification-container">
      <div className="notification">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;