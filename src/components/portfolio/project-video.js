import React from 'react';
// import { Player } from 'video-react';
import ReactPlayer from 'react-player'

const Player = ({url, header})=> {
  return (
    <div className="player" >
      <h4>{header}</h4>
        <ReactPlayer
        width="100%"
        // height="auto"
        // default width 640px height 360px
        controls
        // url={"https://youtu.be/DLSmIAWm7AU"}
        url={url}
        // react-player: https://www.youtube.com/watch?v=7sDY4m8KNLc
        // onProgress=....{{{https://www.youtube.com/watch?v=Rq5SEhs9lws}}}
        // onReady={() => console.log('onReady callback')}
        // onStart={() => console.log('onStart callback')}
        // onPause={() => console.log('onPause callback')}
        // onEnded={() => console.log('onEnded callback')}
        // onError={() => console.log('onError callback')}
        />
        

        {/* <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}
    </div>
  );
};

export default Player;