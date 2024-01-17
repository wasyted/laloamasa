// Notification.js

import React from 'react';
import './styles/Notification.scss';

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