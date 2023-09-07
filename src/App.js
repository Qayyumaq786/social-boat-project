import "./App.css";
import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [count,setCount]=useState(12);
  // const [profileImageUrl] = useState('your-profile-image-url');

  useEffect(() => {
    // Function to fetch videos based on search query
    const fetchVideos = async () => {
      if (searchQuery.trim() === '') {
        setVideos([]); // Clear results if search query is empty
        return;
      }

      try {
        const response = await fetch(
          `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchQuery}&numResults=${count}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setVideos(data.results);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [searchQuery,count]);

  const hadleCount=(e)=>{
    // console.log(e.target.value);
    setCount(e.target.value);
  }
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
    {/* {console.log(videos)} */}
      <Header
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        hadleCount={hadleCount}
        
      />
      <Results videos={videos} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
