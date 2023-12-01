import React from 'react';
import Tweet from  './tweets/tweet.jsx';
import avatar1 from '../images/tweet-profile-photo.png';
import avatar2 from './image 1.png';
import image2 from './tweet-image.png';
import avatar3 from './image 1 (1).png';
import image1 from './image 3.png';


function Tweets(){
 
      const author1= 'Auteur 1CNN';
      const mail1= '@CNN';
      const date1= '7m';
      const text1= 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis';


      const author2= 'The New York Time';
      const mail2= '@nytimes';
      const date2= '2h';
      const text2= 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land';



      const author3= 'Twitter';
      const mail3= '@twitter';
      const date3= 'Oct 29';
      const text3 = 'BIG NEWS lol jk still Twitter';

      const author4= 'Twitter';
      const mail4= '@twitter';
      const date4= 'Oct 4';
      const text4= 'hello literally everyone';


      const author5= 'Twitter';
      const mail5= '@twitter';
      const date5= 'Oct 4';
      const text5= 'hello literally everyone';
      const image5= '../images/tweet-image.png';


  
  return(
    <div className='tweets'>
      <Tweet myAvatarImage={avatar1} valuePropsTweetAuthor={author1} valuePropsUserMail={mail1} valuePropsTweetDate={date1} valuePropsTweetText={text1} valuePropsTweetImage={image1} />

      <Tweet myAvatarImage={avatar2} valuePropsTweetAuthor={author2} valuePropsUserMail={mail2} valuePropsTweetDate={date2} valuePropsTweetText={text2} />

      <Tweet myAvatarImage={avatar3} valuePropsTweetAuthor={author3} valuePropsUserMail={mail3} valuePropsTweetDate={date3} valuePropsTweetText={text3} />

      <Tweet myAvatarImage={avatar3} valuePropsTweetAuthor={author4} valuePropsUserMail={mail4} valuePropsTweetDate={date4} valuePropsTweetText={text4} />

      <Tweet myAvatarImage={avatar3} valuePropsTweetAuthor={author5} valuePropsUserMail={mail5} valuePropsTweetDate={date5} valuePropsTweetText={text5} />
    </div>

  );
};

export default Tweets;


// <>
//   <div>
//   {myTweets.map((tweet, index) => (
//       <Tweet
//         key={index}
//         myAvatarImage={tweet.avatar}
//         valuePropsTweetAuthor={tweet.author}
//         valuePropsUserMail={tweet.mail}
//         valuePropsTweetDate={tweet.date}
//         valuePropsTweetText={tweet.text}
//         valuePropsTweetImage={tweet.image}
//       />
//     ))}
//   </div>

// </>