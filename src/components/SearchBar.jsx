import './style/searchBar.css';
import { useState } from 'react';

export default function SearchBar({ queryOnClick }) {
  const [query, setQuery] = useState('');

  const changeQuery = (data) => {
    setQuery(data.target.value);
  };

  const enterOnClick = (event) => {
    if (event.key === 'Enter') {
      queryOnClick(query);
    }
  };

  return (
    <>
      <input
        className="search-bar"
        onChange={changeQuery}
        onKeyDown={enterOnClick}
        placeholder="Search Something (Enter for Submit Data)"
        type="text"
      />
    </>
  );
}
