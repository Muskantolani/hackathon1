import React from 'react';
import './Sidebar.css';
import user from "../../assets/user.png"; 

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <img src={user} alt="user-icon" height={100} />
        <br />
        <h2>Vendor Name</h2>
        <h4>(Vendor)</h4>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
