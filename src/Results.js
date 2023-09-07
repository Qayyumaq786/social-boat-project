import React from 'react';
import Card from './Card';

const Results = ({ videos, searchQuery }) => {
  return (
    <div className="results">
      {videos.map((video) => (
        <Card key={video.id} video={video} searchQuery={searchQuery} />
      ))}
    </div>
  );
};

export default Results;
