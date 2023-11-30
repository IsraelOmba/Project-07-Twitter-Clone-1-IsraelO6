import React from 'react';
import Header from '../components/header.jsx'; // Chemin vers le fichier distant du composant Header
import TweetEditor from '../components/tweet-editor.jsx';
import Tweets from '../components/tweets.jsx';

function Home() {
  return (

    <>
      <main className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </main>
    </>
    
    
    
    
    
  );
}

export default Home;