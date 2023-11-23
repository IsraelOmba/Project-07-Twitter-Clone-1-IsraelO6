import React from 'react';
import topTweets from "../images/Top-Tweets.png"

function Header() {
  const pageTitle = "Home"; // Texte du pageTitle

  return (
    <div className="header">
      <h1 className="pagetitle">{pageTitle}</h1>
      <img className="top-tweets" src={topTweets} alt="Top Tweets" />
    </div>
  );
};

export default Header;