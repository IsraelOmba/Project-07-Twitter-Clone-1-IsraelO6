import React from 'react';

function TweetImage({TweetImage}) {
  if (TweetImage) {
    return (
      <div className='tweet-image'>
        <img src={TweetImage} alt='label'/>
      </div>
    );
  } else {
    return null;
  }
}

export default TweetImage;