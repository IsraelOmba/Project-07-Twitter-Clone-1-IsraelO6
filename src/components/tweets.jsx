import React from 'react';
import Tweet from  './tweets/tweet.jsx';

function Tweets(){

  const myTweets = [
    {
      avatar: '../images/tweet-profile-photo.png',
      author: 'Auteur 1CNN',
      mail: '@CNN',
      date: '7m',
      text: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
      image: '',
    },

    {
      avatar: '../images/image 1.png',
      author: 'The New York Time',
      mail: '@nytimes',
      date: '2h',
      text: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land',
      image: '../images/tweet-image.png',
    },

    {
      avatar: '../images/image 1 (1).png',
      author: 'Twitter',
      mail: '@twitter',
      date: 'Oct 29',
      text: 'BIG NEWS lol jk still Twitter',
      image: '',
    },

    {
      avatar: '../images/image 1 (1).png',
      author: 'Twitter',
      mail: '@twitter',
      date: 'Oct 4',
      text: 'hello literally everyone',
      image: '',
    },

    {
      avatar: '../images/image 1 (1).png',
      author: 'Twitter',
      mail: '@twitter',
      date: 'Oct 4',
      text: 'hello literally everyone',
      image: '../images/tweet-image.png',
    },
    // Ajoutez les autres objets de tweet ici
  ];;

  
  return(
    <>
      <div>
      {myTweets.map((tweet, index) => (
          <Tweet
            key={index}
            myAvatarImage={tweet.avatar}
            valuePropsTweetAuthor={tweet.author}
            valuePropsUserMail={tweet.mail}
            valuePropsTweetDate={tweet.date}
            valuePropsTweetText={tweet.text}
            valuePropsTweetImage={tweet.image}
          />
        ))}
      </div>

    </>
  );
};

export default Tweets;