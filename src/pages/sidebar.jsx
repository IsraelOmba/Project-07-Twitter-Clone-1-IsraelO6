import React from 'react';
import IconList from '../components/iconList.jsx';
import TweetEditorButtons from '..components/tweet-editor/tweet-editor-form/tweet-editor-buttons.jsx'
//importations des composants necessaires pour utiliser l'icon de twitter
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">

      <div>
        <FontAwesomeIcon icon={faTwitter} />
      </div>

      <div>
        <IconList />
        <TweetEditorButtons />
      </div>

      <div>
        < LowProfil profilMail="" mytweetAuthor="" />
      </div>
      
    </div>
  );
}

export default Sidebar;