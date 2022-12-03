import React from 'react'
import SongsContainer from '../SongsContainer/SongsContainer'
import Login from '../Login/Login'
import './mainContainer.css'
import {BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Player from '../Player/Player';




function MainContainer({songsData,filterSongsData,videoPath,setVideoPath}) {
  return (
    <div className='mainContainer'>
      <Routes>
        <Route  path='/' element={ <Navigate to="/songs" /> }  />
        <Route  path='/songs' element={<SongsContainer songsData={songsData} filterSongsData={filterSongsData} setVideoPath={setVideoPath}/>}  />
       </Routes>
       <Player songsData={songsData} filterSongsData={filterSongsData} videoPath={videoPath}/>
    </div>
  )
}

export default MainContainer