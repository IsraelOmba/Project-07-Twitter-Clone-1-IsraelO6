import React from 'react';
import Avatar from './tweet-editor/avatar.jsx';
import TweetEditorForm from './tweet-editor/tweet-editor-form.jsx';

function TweetEditor() {
  return (
    <div className='tweet-editor'>
      <Avatar />
      <TweetEditorForm />
    </div>
  )
}

export default TweetEditor;









// const Avatar = () => {
//   const avatarImage = "../images/top-tweet.png"; // Chemin de l'image de l'avatar

//   return (
//     <div className="avatar">
//       <img src={avatarImage} alt="Avatar" />
//     </div>
//   );
// };








