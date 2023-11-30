import React from 'react';
import TweetAction from './tweet-actions/tweet-action.jsx';
 
import comment from '../../../../images/comment.png';
import retweet from '../../../../images/retweet.png';
import like from '../../../../images/like.png';
import share from '../../../../images/share.png';


function TweetActions() {
  const altTable = ['comment', 'retweet', 'like', 'sharing'];
  let countComment = 19;
  let countRetweet = 48;
  let countLike = 482;
  let countShare = 3;
  
  return (
    <div className='tweet-actions'>
      <TweetAction iconAction={comment} altIcon={altTable[0]} count={countComment} />
      <TweetAction iconAction={retweet} altIcon={altTable[1]} count={countRetweet} />
      <TweetAction iconAction={like} altIcon={altTable[2]} count={countLike} />
      <TweetAction iconAction={share} altIcon={altTable[3]} count={countShare} />
    </div>
  );
};

export default TweetActions;