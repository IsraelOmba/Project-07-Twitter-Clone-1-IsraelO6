import React from 'react';
import TweetEditorActions from './tweet-editor-actions.jsx';

function TweetEditorButtons() {
  
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorActions />
      <button className="button">Tweet</button>
    </div>
  );
};

export default TweetEditorButtons;