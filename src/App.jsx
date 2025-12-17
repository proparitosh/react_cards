// src/App.jsx
import React, { useState } from 'react';
import Card from './components/card';
import jobOpenings from './components/Jobs';
import SearchBar from './components/SearchBar';

const App = () => {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const filtered = jobOpenings.filter(elem => {
    const hay = `${elem.companyName} ${elem.jobRole} ${elem.tag1} ${elem.tag2} ${elem.location} ${elem.pay}`.toLowerCase();
    return hay.includes(q);
  });

  return (
    <div className="parent">
      <div className="content">
      <SearchBar value={query} onChange={setQuery} />
      </div>
      {filtered.map((elem, index) => (
        <Card
          key={index}
          company={elem.companyName}
          logo={elem.companyLogo}
          role={elem.jobRole}
          date={elem.datePosted}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
        ))}

    </div>
  );
};


export default App;