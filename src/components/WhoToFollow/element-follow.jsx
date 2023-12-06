import React from 'react';
import TweetAvatar from '../tweets/tweet/tweet-avatar.jsx';
import TweetTitleAuthor from '../tweets/tweet/tweet-content/tweet-body/tweet-title/tweet-title-authors.jsx';

function ElementFollow({myAvatarImage, mytweetAuthor, iconLogoTwitter, profilMail}) {
  return (
    
    <div>

      <div className='tweet-avatar'>
        <TweetAvatar avatarImage={myAvatarImage} />
      </div>

      
      <div>
        <div className='tweet-title'>
          <TweetTitleAuthor tweetAuthor={mytweetAuthor} />
          <img src={iconLogoTwitter} alt='iconLogoTwitter' />
        </div>

        <div className="tweet-title-details">
            <span> {profilMail} </span>
        </div>
      </div>

      
      <div className='button-follow'>
        <button>Follow</button>
      </div>
      
    </div>

  );
};

export default ElementFollow;