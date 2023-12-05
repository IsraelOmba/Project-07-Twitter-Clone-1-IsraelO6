import React from 'react';

function Trends() {
  return (
    <div className="trends">
      <div className="search-bar">
        <input type="text" defaultValue="Rechercher sur Twitter" />
      </div>
      <div className="trends-for-you">
        <h2>Tendances pour vous</h2>
        <i className="param-icon"></i>
      </div>
      <div className="trending-items">
        <div className="trending-item">
          <span>Tendance en Turquie</span>
          <span>#SQUiD</span>
          <span>2,066 Tweets</span>
          <i className="three-dots-icon"></i>
        </div>
        {/* Ajoutez les autres éléments de tendance ici */}
      </div>
      <div className="who-to-follow">
        <h2>Qui suivre</h2>
        <div className="follow-item">
          <div className="author-info">
            <img src="chemin/vers/logo-auteur.png" alt="Logo de l'auteur" />
            <div>
              <span>Nom de l'auteur</span>
              <i className="twitter-badge"></i>
            </div>
          </div>
          <button>Suivre</button>
        </div>
        {/* Ajoutez les autres éléments à suivre ici */}
      </div>
    </div>
  );
}
