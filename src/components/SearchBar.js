import React from 'react';

function SearchBar({ searchTerm, location, handleSort }) {
  function handleSubmit(event) {
    event.preventDefault();
    const params = {
      term: searchTerm,
      location: location,
    };
  }

  function handleSort(type) {
    let sortParam = '';
    if (type === 'bestMatch') {
      sortParam = 'best_match';
    } else if (type === 'rating') {
      sortParam = 'rating';
    } else if (type === 'reviews') {
      sortParam = 'review_count';
    }
  }

  /* TODO: integrate Yelp API and remove placeholder data,
     create queries from handleSubmit and handleSort.
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  fetch(
    'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20',
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
*/

  return (
    <section className="searchBarContainer">
      <div className="sortButtons">
        <button
          className="sortButton"
          onClick={(match) => handleSort(match)}
        >
          Best Match
        </button>
        <button
          className="sortButton"
          onClick={(ratings) => handleSort(ratings)}
        >
          Highest Rated
        </button>
        <button
          className="sortButton"
          onClick={(reviews) => handleSort(reviews)}
        >
          Most Reviewed
        </button>
      </div>
      <form className="searchForm">
        <input
          type="text"
          className="searchInput"
          placeholder="Search Businesses"
          value={searchTerm}
        />
        <input
          type="text"
          className="locationInput"
          placeholder="Location"
          value={location}
        />
        <button
          type="submit"
          className="searchButton"
          onSubmit={handleSubmit}
        >
          Let's Go
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
