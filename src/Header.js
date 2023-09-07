import React from 'react';
import prfile from "../src/img/profile.jpg"

const Header = ({ searchQuery, handleSearchChange }) => {
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
      </div>
      <div className="profile-image">
        <img src={prfile} alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
