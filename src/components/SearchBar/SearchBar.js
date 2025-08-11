import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    // Example message for button
    console.log(
      `Searching Yelp with ${searchTerm}, ${location}, ${sortBy}`
    );
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          value={sortBy}
          className={
            sortBy === sortByOptionValue ? styles.active : ''
          }
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input
          placeholder="Search Businesses"
          value={searchTerm}
          onChange={handleSearch}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocation}
        />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={handleSubmit}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
