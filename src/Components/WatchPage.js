import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"
import { closeMenu } from './utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  console.log(searchParam.get("v"))
  
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='px-5'>
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/"+searchParam.get("v")}
          title='YouTube video Player'
          allow='accelerometer; autoplay;clipboard-write'
          allowFullScreen
        >

        </iframe>
    </div>
  )
}

export default WatchPage