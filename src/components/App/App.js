import React from 'react';
import styles from './App.module.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import searchYelp from '../../utils/searchYelp';

const App = () => {
  const [businesses, setBusinesses] = React.useState([]);

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar
        searchYelp={searchYelp}
        setBusinesses={setBusinesses}
      />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
