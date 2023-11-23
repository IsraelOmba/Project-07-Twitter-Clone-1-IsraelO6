import React from 'react';

function TweetAvatar({avatarImage}) {
  return(
    <div className='tweet-avatar'>
      <img src={avatarImage} alt="avatar tweet"/>
    </div>
  );
};

export default TweetAvatar;

