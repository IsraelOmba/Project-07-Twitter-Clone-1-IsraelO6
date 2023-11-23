import React from 'react';
import TweetAvatar from './tweet/tweet-avatar.jsx';
import TweetContent from './tweet/tweet-content.jsx';

function Tweet (myAvatarImage){

  return(
    <div className='tweet'>
      <TweetAvatar avatarImage={myAvatarImage} />
      <TweetContent />
    </div>
    
  );
};