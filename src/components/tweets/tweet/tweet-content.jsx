import React from 'react';
import TweetActions from './tweet-content/tweet-actions.jsx';
import TweetBody from './tweet-content/tweet-body.jsx';

function TweetContent({myValueTweetAuthor, myValueUserMail, myValueTweetDate, myValueTweetText, myValueTweetImage}) {

  return (
    <div className='tweet-content'>
      <TweetBody valueTweetAuthor={myValueTweetAuthor} valueUserMail={myValueUserMail} valueTweetDate={myValueTweetDate} myTweetText={myValueTweetText} myTweetImage={myValueTweetImage} />
      <TweetActions />
    </div>
  );
};

export default TweetContent;