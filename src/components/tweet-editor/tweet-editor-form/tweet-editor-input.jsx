import React from 'react';

function TweetEditorInput() {
  const defaultText = "What's happening"; // Texte par défaut de l'entrée de l'éditeur

  return (
    <input type="text" className="tweet-editor-input" defaultValue={defaultText} />
  );
};

export default TweetEditorInput;