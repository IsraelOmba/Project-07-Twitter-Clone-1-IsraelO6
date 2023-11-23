import React from 'react';
import iconGalerie from './../../../images/iconGalerie.png';
import iconGif from './../../../images/iconGif.png';
import iconGraph from './../../../images/iconGraph.png';
import iconEmoji from './../../../images/iconEmoji.png';
import iconCalendrier from './../../../images/iconCalendrier.png';


function Icons() {
  return (
    <div>
      <img src={iconGalerie} alt="iconGalerie" />
      <img src={iconGif} alt="iconGif" />
      <img src={iconGraph} alt="iconGraph" />
      <img src={iconEmoji} alt="iconEmoji" />
      <img src={iconCalendrier} alt="iconCalendrier" />
    </div>
  );
};

export default Icons;