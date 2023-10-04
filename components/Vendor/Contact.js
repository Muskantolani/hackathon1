import React from 'react';
import './Contact.css';
import user from "../../assets/user.png"; 

export const Contact = () => {
    const names = ['John', 'Jane', 'Bob', 'Alice'];
  return (
    <div className="contact">
      <div className="sidebar-content">
        <br />
        <h2>Contact</h2>
        <div className="name-cards">
          {names.map((name, index) => (
            <div key={index} className="name-card">
              <img src={user} alt="image" height={18}/>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
