import React from 'react';
import Header from '../components/header.jsx'; // Chemin vers le fichier distant du composant Header
import TweetEditor from '../components/tweet-editor.jsx';

function Home() {
  return (

    <>
      <main className="timeline">
        <Header />
        <TweetEditor />

      </main>
    </>
    
    
    
    
    
  );
}

export default Home;