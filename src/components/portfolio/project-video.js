import React from 'react';
// import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import ModalLink from '../../containers/modal-container'

const Player = ({url, header, githubFrontend, githubBackend, github, moreInfo, website})=> {
  const triggerText = {header}
  const githubFrontend1 = {githubFrontend}
  const githubBackend1 =  {githubBackend}
  const github1 = {github}
  const moreInfo1 = {moreInfo}
  const website1 = {website}

  return (
    <div className="project-box">
      <div className="player" >
        <div className="youtube-player">
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
        /></div>
        <div className="bounce-3">
          <h4>{<ModalLink website={website1} triggerText={triggerText} githubFrontend={githubFrontend1} githubBackend={githubBackend1} github={github1} moreInfo={moreInfo1} />}</h4>
        </div>
        
          

          {/* <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          /> */}
      </div>
    </div>
  );
};

export default Player;