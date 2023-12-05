import React from 'react';
import TweetAvatar from './tweet/tweet-avatar.jsx';
import TweetContent from './tweet/tweet-content.jsx';

function Tweet ({myAvatarImage, valuePropsTweetAuthor, valuePropsUserMail, valuePropsTweetDate, valuePropsTweetText, valuePropsTweetImage}){

  return(
    <div className='tweet'>
      <TweetAvatar avatarImage={myAvatarImage} />
      <TweetContent myValueTweetAuthor={valuePropsTweetAuthor} myValueUserMail={valuePropsUserMail} myValueTweetDate={valuePropsTweetDate} myValueTweetText={valuePropsTweetText} myValueTweetImage={valuePropsTweetImage} />
    </div>
    
  );
};
export default Tweet;