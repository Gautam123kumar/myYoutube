import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch,useSelector} from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generateRandomName, makeid } from '../utils/hypler'

function LiveChat() {
  const [liveMessage,setLiveMessage] = useState('')
  const dispatch = useDispatch()
  const chatMessage =useSelector((store)=>store.chat.messages)
  useEffect(()=>{
   let i= setInterval(()=>{
      dispatch(addMessages({
        name:generateRandomName(),
        message: makeid(10)
      }))
    },500)
    setLiveMessage("")
    return ()=>clearInterval(i)
  },[])

  return (
    <>
    <div 
    className='w-full h-[600px] ml-2 p-2 border border-black rounded-lg bg-slate-200 overflow-y-scroll flex flex-col-reverse'>
     { chatMessage.map((c,i)=>(
        <ChatMessage key={i}
        name={c.name}
        message = {c.message}
      />
     )) }
    </div>
    <form 
    className='w-full p-2 ml-2 border border-black'
    onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
        addMessages({
          name:"Gautam Kumar",
          message:liveMessage
        })
      )
    }}
    >
      <input 
      className='px-4 w-76' 
      type='text'
      value={liveMessage}
      onChange={(e)=>{
        setLiveMessage(e.target.value)
      }}
      />
      <button className='px-2 mx-2 bg-gray-200'>Send</button>
    </form>
    </>
  )
}

export default LiveChat