import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <input
    className="search"
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Search by company, role, tag or location..."
  />
);

export default SearchBar;