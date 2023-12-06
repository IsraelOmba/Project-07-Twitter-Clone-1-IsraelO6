import React from 'react';
import HorizonIcon from './horizonIcon.jsx';

function TrendsForYou() {

  return(
    <div className="trendsforyou">

      <div>
        <p className="tweet-title-details">Tendance en Turquie</p>
        <p className="tweet-title-author">#SQUiD</p>
        <p className="tweet-title-details">2,066 Tweets</p>
      </div>

      <div>
        <HorizonIcon />
      </div>

    </div>
    
  );
};

export default TrendsForYou;



<div className="trending-items">
  <div className="trending-item">
    <span>Tendance en Turquie</span>
    <span>#SQUiD</span>
    <span>2,066 Tweets</span>
    <i className="three-dots-icon"></i>
  </div>
  {/* 