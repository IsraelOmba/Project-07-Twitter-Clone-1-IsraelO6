import React from 'react';
import IconList from '../components/iconList.jsx';
import LowProfil from '../components/lowProfil.jsx';
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
        <div className="tweet-editor-buttons">
          <button className="button">Tweet</button>
        </div>
        
      </div>

      <div>
        < LowProfil profilMail="bradley" mytweetAuthor="Bradley Ortiz" />
      </div>
      
    </div>
  );
}

export default Sidebar;