import React from 'react';

function TweetAction({iconAction, altIcon, count}) {

  return (
    <div className='tweet-action'>
      <img src={iconAction} alt={altIcon} />
      <span>{count}</span> 
    </div>
  );
};

export default TweetAction;