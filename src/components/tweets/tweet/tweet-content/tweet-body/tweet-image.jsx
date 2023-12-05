import React from 'react';

function TweetImage({tweetImage}) {
  if (tweetImage) {
    return (
      <div className='tweet-image'>
        <img src={tweetImage} alt='label'/>
      </div>
    );
  } 
  
  else {
    return null;
  }
}

export default TweetImage;

// import React from 'react';

// function ImageDisplay() {
//   return (
//     <div>
//       <img src="./image3.png" alt="Image 3" />
//     </div>
//   );
// }

// export default ImageDisplay;