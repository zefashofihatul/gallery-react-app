import './App.css';
import { getPhotoListWithQuery } from './api/unsplashHelper';
import { MainHeader } from './components/MainHeader';
import MainPhoto from './components/MainPhoto';
import MainTabs from './components/MainTabs';
import PhotosCollection from './components/PhotosCollection';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';

function App() {
  const [photoLists, setPhotoLists] = useState([]);
  const [query, setQuery] = useState('');

  function changeQuery(data) {
    console.log(data);
    setQuery(data);
  }

  useEffect(() => {
    getPhotoListWithQuery('16', query).then((result) => {
      setPhotoLists(result);
    });
  }, [query]);

  return (
    <div className="App">
      <MainHeader />
      <MainPhoto />
      <div className="main-content" style={mainContentStyle}>
        <SearchBar queryOnClick={changeQuery} />
        <MainTabs setQuery={changeQuery} />
        <PhotosCollection photos={photoLists} />
      </div>
    </div>
  );
}

const mainContentStyle = {
  marginTop: '80px',
  marginBottom: '32px',
};

export default App;
