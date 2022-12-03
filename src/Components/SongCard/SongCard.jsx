import React from 'react'
import './songCard.css';

function SongCard({id,title,img,time,uptime,url,setVideoPath}) {
  return (
    <div className='songCard' key={id} id={id} onClick={() => setVideoPath(url)}>
      <div className='desc'>
      <span className='title'>{title}</span>
      <span className='time'>{time}</span>
      <span className='uptime'>{uptime}</span>
      </div>
      <img className='songCardImg' src={img} alt={title}/>
      </div>
  )
}

export default SongCard