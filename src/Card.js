import React from 'react';

const Card = ({ video, searchQuery }) => {
  const { heading, text,tags} = video;

  return (
    <div className="card">
    {/* {console.log(video)} */}
      <iframe
        title={heading}
        src={video.video}
        width="95%"
        height="250px"
       
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <hr  />
      <h3>Title:- {heading}</h3>
      <hr />
      <p>{text}</p>
      <p>Tags: {tags.join(', ')}</p>
      <p>Search Query: {searchQuery}</p>
    </div>
  );
};

export default Card;
