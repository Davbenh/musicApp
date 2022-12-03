import React from 'react'
import SongsContainer from '../SongsContainer/SongsContainer'
import './mainContainer.css'
import Player from '../Player/Player';




function MainContainer({songsData,filterSongsData,videoPath,setVideoPath}) {
  return (
    <div className='mainContainer'>

       <SongsContainer songsData={songsData} filterSongsData={filterSongsData} setVideoPath={setVideoPath}/>
       <Player songsData={songsData} filterSongsData={filterSongsData} videoPath={videoPath}/>
    </div>
  )
}

export default MainContainer