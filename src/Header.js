import React from 'react';
import prfile from "../src/img/profile.jpg"

const Header = ({ searchQuery, handleSearchChange,hadleCount }) => {
  return (
    <header>
      <div className="logo">MY FITNESS</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for videos..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select name="count" id="count" onChange={hadleCount}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option> 
        </select>
      </div>
      <div className="profile-image">
        <img src={prfile} alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
