import React from 'react'
import SongCard from '../SongCard/SongCard';
import './songsContainer.css';

function SongsContainer({songsData,filterSongsData,setVideoPath}) {
  return (
    <div className='songsContainer'>
      {filterSongsData && filterSongsData.map(v => {

      return <SongCard id={v.id} key={v.id} title={v.title} img={v.thumbnail.url} url={v.url} time ={v.duration_formatted} uptime={v.uploadedAt} setVideoPath={setVideoPath}/>
     
      })}
    </div>
  )
}

export default SongsContainer;