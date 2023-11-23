import React from 'react';
import avatarImage from '../../images/profile-photo.png'; // Chemin de l'image de l'avatar

function Avatar() {

  return (
    <div className="avatar">
      <img src={avatarImage} alt="Avatar" />
    </div>
  );
};

export default Avatar;