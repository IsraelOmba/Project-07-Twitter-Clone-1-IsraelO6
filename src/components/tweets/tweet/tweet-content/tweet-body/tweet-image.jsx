import React from 'react';

function TweetImage({tweetImage}) {
  if (tweetImage) {
    return (
      <div className='tweet-image'>
        <img src={tweetImage} alt='label'/>
      </div>
    );
  } 
  
  else {
    return null;
  }
}

export default TweetImage;
