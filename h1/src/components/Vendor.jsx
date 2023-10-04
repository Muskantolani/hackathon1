import React from 'react';
import './Vendor.css';

export const Vendor = () => {
  // Sample data for the cards
  const cardsData = [
    { title: 'Take flowers' },
    { title: 'Contact with xyz vendor' },
    { title: 'Collect Payment' },
    { title: 'Check budget' },
  ];

  return (
    <div className="middle">
      <div className="card-container">
        <h1 className='header'>Upcoming Tasks</h1>
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-inner">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendor;
