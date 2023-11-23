import React from 'react';
import TweetEditorInput from './tweet-editor-form/tweet-editor-input.jsx';
import TweetEditorButtons from './tweet-editor-form/tweet-editor-buttons';

function TweetEditorForm() {

  return (
    <div className="tweet-editor-form">
      <TweetEditorInput />
      <TweetEditorButtons />
    </div>
  );
};

export default TweetEditorForm;
