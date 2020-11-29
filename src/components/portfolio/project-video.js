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
        <div className="left-side-info">
          <ModalLink website={website1} triggerText={triggerText} githubFrontend={githubFrontend1} githubBackend={githubBackend1} github={github1} moreInfo={moreInfo1} />
        </div>
        <div className="youtube-player">
          <ReactPlayer 
            width="100%"
            controls
            url={url}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;