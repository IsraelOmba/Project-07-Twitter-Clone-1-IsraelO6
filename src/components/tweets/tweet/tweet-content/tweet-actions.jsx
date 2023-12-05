import React from 'react';
import TweetAction from './tweet-actions/tweet-action.jsx';
 
import comment from '../../../../images/comment.png';
import retweet from '../../../../images/retweet.png';
import like from '../../../../images/like.png';
import share from '../../../../images/share.png';


function TweetActions() {
  let countComment = 19;
  let countRetweet = 48;
  let countLike = 482;
  let countShare = 3;
  
  return (
    <div className='tweet-actions'>
      <TweetAction iconAction={comment} altIcon='comment'  count={countComment} />
      <TweetAction iconAction={retweet} altIcon='retweet' count={countRetweet} />
      <TweetAction iconAction={like} altIcon='like' count={countLike} />
      <TweetAction iconAction={share} altIcon='sharing' count={countShare} />
    </div>
  );
};

export default TweetActions;