import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
function Sidebar() {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen) return null
  return (
    
    <div className='p-5 shadow-lg  w-56'>
       <ul className='leading-10'>
           <Link to="/"><li className='bg-gray-200 rounded-lg text-center mt-3'>Home</li></Link> 
            <li className='rounded-lg text-center hover:bg-gray-200'>Sports</li>
            <li className='rounded-lg text-center hover:bg-gray-200'>Videos</li>
            <li className='rounded-lg text-center hover:bg-gray-200'>Live</li>
        </ul>
        <h1 className='font-bold pt-5 rounded-lg text-start'>Subscriptions</h1>
        <ul className='leading-10'>
            <li className='rounded-lg text-center hover:bg-gray-200 mt-4'>Music</li>
            <li className='rounded-lg text-center hover:bg-gray-200'>Sports</li>
            <li className='rounded-lg text-center hover:bg-gray-200'>Gaming</li>
            <li className='rounded-lg text-center hover:bg-gray-200'>Movies</li>
        </ul>
        <h1 className='font-bold rounded-lg text-start pt-5'>Watch Later</h1>
        <ul className='leading-10'>
          <li className='rounded-lg text-center hover:bg-gray-200 mt-4'>Music</li>
          <li className='rounded-lg text-center hover:bg-gray-200'>Sports</li>
          <li className='rounded-lg text-center hover:bg-gray-200'>Gaming</li>
          <li className='rounded-lg text-center hover:bg-gray-200'>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar