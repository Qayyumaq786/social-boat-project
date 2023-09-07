import React from 'react';

const Card = ({ video, searchQuery }) => {
  const { heading, text,tags} = video;

  return (
    <div className="card">
    {console.log(video)}
      <iframe
        title={heading}
        src={video.video}
        width="95%"
        height="200"
       
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h3>Title:- {heading}</h3>
      <p>{text}</p>
      <p>Tags: {tags.join(', ')}</p>
      <p>Search Query: {searchQuery}</p>
    </div>
  );
};

export default Card;
