import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  console.log(searchParam.get("v"))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex'>
        <div>
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title='YouTube video Player'
            allow='accelerometer; autoplay;clipboard-write'
            allowFullScreen
          >

          </iframe>
        </div>
        <div className='w-full'>
          <LiveChat/>
        </div>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage