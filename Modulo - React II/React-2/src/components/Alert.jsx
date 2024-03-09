// Alert.js
import React from 'react';

function Alert({ message, type }) {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
}

export default Alert;