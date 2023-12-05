import React from 'react';
import TweetImage from './tweet-body/tweet-image';
import TweetTitle from './tweet-body/tweet-title';
import TweetText from './tweet-body/tweet-text';


function TweetBody({valueTweetAuthor,valueUserMail, valueTweetDate, myTweetText, myTweetImage}) {

    return(
        <div className='tweet-body'>
            <TweetTitle myTweetAuthor={valueTweetAuthor} myUserMail={valueUserMail} myTweetDate={valueTweetDate} />
            <TweetText tweetText={myTweetText} />
            <TweetImage tweetImage={myTweetImage} />
        </div>
    );
};

export default TweetBody;