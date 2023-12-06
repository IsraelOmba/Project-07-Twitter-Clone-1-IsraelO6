import React from 'react';
import ElementFollow from './WhoToFollow/element-follow.jsx';

function WhoToFollow() {
  return (
    <div className="whotofollow">

      <h3 className="pagetitle">Who to follow</h3>
      
      <ElementFollow myAvatarImage="" mytweetAuthor="" iconLogoTwitter="" profilMail="" />

      <ElementFollow myAvatarImage="" mytweetAuthor="" iconLogoTwitter="" profilMail="" />

      <ElementFollow myAvatarImage="" mytweetAuthor="" iconLogoTwitter="" profilMail="" />

      <a className="showMore">Show More</a>
    </div>
    
  );
};

export default WhoToFollow;

