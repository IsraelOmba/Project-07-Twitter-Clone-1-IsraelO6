import React from 'react';
import Avatar from '../components/tweet-editor/avatar.jsx';
  import TweetTitleAuthor from './tweets/tweet/tweet-content/tweet-body/tweet-title/tweet-title-author.jsx';

import HorizonIcon from './horizonIcon.jsx';

function LowProfil({profilMail, mytweetAuthor}) {
  return(
    <div className='lowProfil'>

      <div>
        <Avatar />
        <TweetTitleAuthor tweetAuthor={mytweetAuthor} />

        <div className="tweet-title-details">
            <span> {profilMail} </span>
        </div>
      </div>

      <div>
        <HorizonIcon />
      </div>
      
    </div>
    
  );
};

export default LowProfil;