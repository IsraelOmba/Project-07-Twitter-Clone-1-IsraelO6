import React from 'react';
import React from './tweet-body/tweet-text';
import React from './tweet-body/tweet-image';
import TweetImage from './tweet-body/tweet-image';


function TweetBody(myTweetText, myTweetImage) {

    return(
        <div className='tweet-body'>
            <TweetText tweetText={myTweetText} />
            <TweetImage tweetImage={myTweetImage} />
        </div>
    );
};

export default TweetBody;