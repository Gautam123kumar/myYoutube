import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from './utils/constants'

function VideoContainer() {
  useEffect(()=>{
    getVideos()
  },[])
  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const response = await data.json()
    console.log(response)
  }
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer