import React from 'react';
import ElementFollow from './WhoToFollow/element-follow.jsx';
import avatar1 from '../images/tweet-profile-photo.png';
import avatar2 from './image 1.png';
import avatar3 from './image 1 (1).png';
import iconLogoTwitter from './tweets/tweet/tweet-content/tweet-body/Group.png';



function WhoToFollow() {
  return (
    <div className="whotofollow">

      <h3 className="pagetitle">Who to follow</h3>
      
      <ElementFollow myAvatarImage={avatar2} mytweetAuthor="The New York Time" iconLogoTwitter={iconLogoTwitter} profilMail="@nytimes" />

      <ElementFollow myAvatarImage={avatar1} mytweetAuthor="CNN" iconLogoTwitter={iconLogoTwitter} profilMail="@CNN" />

      <ElementFollow myAvatarImage={avatar3} mytweetAuthor="Twitter" iconLogoTwitter={iconLogoTwitter} profilMail="@twitter" />

      <a className="showMore">Show More</a>
    </div>
    
  );
};

export default WhoToFollow;

