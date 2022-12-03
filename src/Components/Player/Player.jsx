import React from "react";
import "./player.css";



function Player({videoPath}) {




  return (
    <div className="playerContainer">
      <div className="playerHeader">
      
      </div>
      <div className="playerFrame">
      <iframe width="800" height="550" src={videoPath.replace('/watch?v=', '/embed/')+"?autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Player;
