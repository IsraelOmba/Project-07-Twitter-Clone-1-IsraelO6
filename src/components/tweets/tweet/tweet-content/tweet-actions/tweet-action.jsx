import React from 'react';

function TweetAction({iconAction, altIcon, count}) {


  if (count){
    return (
      <div className='tweet-action'>
        <img src={iconAction} alt={altIcon} />
        <span>{count}</span> 
      </div>
    );
  }
  else{
    return(
      <div className='tweet-action'>
        <img src={iconAction} alt={altIcon} />
      </div>
      );
  }
};

export default TweetAction;