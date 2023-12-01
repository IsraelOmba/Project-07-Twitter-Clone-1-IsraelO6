import React from 'react';
import TweetTitleAuthor from './tweet-title/tweet-title-author.jsx';
import TweetTitleDetails from './tweet-title/tweet-title-details.jsx';
import iconLogoTwitter from './Group.png'

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