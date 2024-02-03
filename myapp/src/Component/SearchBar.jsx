// SearchBar.js
import React, { useState, useEffect } from 'react';
import countriesData from '../resources/countryData.json';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchTerm == ""){
      setSearchResults([])
    }else{
      const filteredCountries = countriesData.filter(country =>
        country.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setSearchResults(filteredCountries);
   
    }
  }, [searchTerm]);
    

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      
      {showDropdown && (
        <div className="dropdown">
          {searchResults.map((country, index) => (
            <div key={index}>{country.name}</div>
          ))}
        </div>
      )}
      
    </div>
    <button>Search</button>
    </>
  );
};

export default SearchBar;