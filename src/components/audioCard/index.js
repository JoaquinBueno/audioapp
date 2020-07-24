import React, { useState } from "react";
import { AudioCardCont } from "./styles";
import { AudioComponent } from "../audioComponent";
import {CommentComponent} from '../commentComponent'


export const AudioCard = () => {

  const [isPlaying, setIsPlaying] = useState(false);


  const [myAudios, setMyAudios] = useState([
    {
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      imgSrc:
        "https://i.pinimg.com/originals/6d/0a/18/6d0a1809c5f988963e9cdff3fa5be6d2.jpg",
      commentUser: "Este es un mensaje de prueba. Ojala funcione. Oremos.",
      user: 'Josefa',
      userLink: '/:userid',
      comment: "Puta la wea",
      id: "1",
      commentId: 6,
    },
    {
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      imgSrc:
        "https://thoughtcatalog.files.wordpress.com/2018/05/questionstoaskagirl2.jpg?w=1140&h=760&crop=1&resize=1140,760&quality=95&strip=all",
      commentUser: "No comment.",
      user: 'Rocio',
      userLink: '/:userid',
      comment: "Puta la wea",
      id: "2",
      commentId: 7,
    },
    {
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      imgSrc: "",
      commentUser: "Este es un comentario corto",
      user: 'Jorgelina',
      userLink: '/:userid',
      comment: "Puta la wea",
      id: "3",
      commentId: 8,
    },
    {
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg",
      commentUser: "Este es un comentario de prueba un poco mas largo, solo para probar que taman;o de texto convendria mas... seran 180 caracteres? seran 500? no lo se, que se yo.",
      user: 'Julia',
      userLink: '/:userid',
      comment: "Puta la wea",
      id: "4",
      commentId: 9
    },
    {
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Girl_in_Red_EOTR1.jpg/1024px-Girl_in_Red_EOTR1.jpg",
      commentUser: "Este es un comentario de prueba un poco mas corto.",
      user: 'Martina',
      userLink: '/:userid',
      comment: "Puta la wea",
      id: "5",
      commentId: 10
    },
  ]);

  return (
        <AudioCardCont>
        {myAudios.map((myAudio) => { return(
            <div>
            <AudioComponent
                {...myAudio}
                audioSrc={myAudio.audioSrc}
                imagen={myAudio.imgSrc}
                key={myAudio.id}
                onClick={() => console.log('clicked')}
            />
            <CommentComponent {...myAudio}
            key={myAudio.commentId} />
            
            </div>
            )
            
        })}
        </AudioCardCont>

  );
};
