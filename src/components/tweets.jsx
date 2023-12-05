import React from 'react';
import Tweet from  './tweets/tweet.jsx';
import avatar1 from '../images/tweet-profile-photo.png';
import avatar2 from './image 1.png';
import avatar3 from './image 1 (1).png';
import myImage from './image3.png';


function Tweets(){
 
      const author1= 'CNN';
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

      const date4= 'Oct 4';
      const text4= 'hello literally everyone';

      const date5= 'Oct 4';
      const text5= 'hello literally everyone';



  
  return(
    <div className='tweets'>
      <Tweet myAvatarImage={avatar1} valuePropsTweetAuthor={author1} valuePropsUserMail={mail1} valuePropsTweetDate={date1} valuePropsTweetText={text1} />

      <Tweet myAvatarImage={avatar2} valuePropsTweetAuthor={author2} valuePropsUserMail={mail2} valuePropsTweetDate={date2} valuePropsTweetText={text2} valuePropsTweetImage={myImage} />

      <Tweet myAvatarImage={avatar3} valuePropsTweetAuthor={author3} valuePropsUserMail={mail3} valuePropsTweetDate={date3} valuePropsTweetText={text3} />

      <Tweet myAvatarImage={avatar3} valuePropsTweetAuthor={author3} valuePropsUserMail={mail3} valuePropsTweetDate={date4} valuePropsTweetText={text4} />

      <Tweet myAvatarImage={avatar3} valuePropsTweetAuthor={author3} valuePropsUserMail={mail3} valuePropsTweetDate={date5} valuePropsTweetText={text5} />
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