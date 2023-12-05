import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="chemin/vers/logo-twitter.png" alt="Logo Twitter" />
      <ul>
        <li>
          <a href="/accueil">
            <i className="icon-home"></i>
            <span>Accueil</span>
          </a>
        </li>
        <li>
          <a href="/explorer">
            <i className="icon-explore"></i>
            <span>Explorer</span>
          </a>
        </li>
        <li>
          <a href="/notifications">
            <i className="icon-notifications"></i>
            <span>Notifications</span>
          </a>
        </li>
        <li>
          <a href="/messages">
            <i className="icon-messages"></i>
            <span>Messages</span>
          </a>
        </li>
        <li>
          <a href="/signets">
            <i className="icon-bookmarks"></i>
            <span>Signets</span>
          </a>
        </li>
        <li>
          <a href="/listes">
            <i className="icon-lists"></i>
            <span>Listes</span>
          </a>
        </li>
        <li>
          <a href="/profil">
            <i className="icon-profile"></i>
            <span>Profil</span>
          </a>
        </li>
        <li>
          <a href="/plus">
            <i className="icon-more"></i>
            <span>Plus</span>
          </a>
        </li>
      </ul>
      <a href="/tweet" className="tweet-button">Tweet</a>
    </div>
  );
}

export default Sidebar;