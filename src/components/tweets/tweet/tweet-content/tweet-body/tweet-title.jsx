import React from 'react';
import TweetTitleAuthor from './tweet-title/tweet-title-author';
import TweetTitleDetails from './tweet-title/tweet-title-details';

function TweetTitle(myTweetAuthor, myUserMail, myTweetDate) {

    return (
        <div className='tweet-title'>

        <TweetTitleAuthor tweetAuthor={myTweetAuthor} />
        <img src={iconLogoTwitter} alt='iconLogoTwitter' />
        <span>.</span>
        <TweetTitleDetails userMail={myUserMail} tweetDate={myTweetDate} />

        </div>
    );
};

export default TweetTitle;