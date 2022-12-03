import React from "react";
import "./player.css";




function Player({videoPath}) {



  return (
    <div className="playerContainer">
      <div className="playerHeader">
      
      </div>
      <div className="playerFrame">
      <iframe width="680" height="450" src={videoPath.replace('/watch?v=', '/embed/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Player;
