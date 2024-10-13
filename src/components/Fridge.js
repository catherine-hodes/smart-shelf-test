// Fridge.js
import React from 'react';


const Fridge = ({ items }) => {
  return (
    <div className="fridge-container">
      <h2>Your Fridge</h2>
      <div className="fridge">
        {items.length === 0 ? (
          <p>Your fridge is empty!</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="fridge-item">
              {item.value} 
              {item.date && (
                <span className={isDateApproaching(item.date) ? 'glow-red' : ''}>
                  {item.date.toLocaleDateString()}
                </span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const isDateApproaching = (date) => {
  if (!date) return false;
  const today = new Date();
  const diffTime = date - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 && diffDays <= 3;
};

export default Fridge;
