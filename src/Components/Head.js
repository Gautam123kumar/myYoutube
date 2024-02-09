import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResult } from '../utils/searchSlice'

function Head() {
  const [searchQuery, setSearchQuery] = useState("")
  const [saggetion,setSaggetion] = useState([])
  const [showSaggetion,setShowSaggetion] = useState(false)
  const searchCache = useSelector((store)=>store.search)
  console.log('==',searchCache)

  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setSaggetion(searchCache[searchQuery])
      }else{
        getSearchSuggetions()
      }
    } , 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSuggetions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    setSaggetion(json[1])
    dispatch(cacheResult({
      [searchQuery]:json[1]
    }))
  }
console.log(saggetion)


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          alt='logo'
          src='https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png'
        />
        <a href='/'>
          <img
            className='h-8 mx-4'
            alt='youtube'
            src='data:image/png;base64,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'
          />
        </a>
      </div>
      <div className='col-span-10 px-10 '>
        <div>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-1/2 border border-gray-400 p-2 rounded-l-full' 
            onFocus={()=>setShowSaggetion(true)}
            onBlur={()=>setShowSaggetion(false)}
            />
          <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100 '>🕵️</button>
        </div>
        {showSaggetion && (
        <div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {saggetion.map((saggest)=>{
              return(
                <li key={saggest} className='py-2 shadow-sm hover:bg-gray-100'>{saggest}</li>           
              )
            })}
          </ul>
        </div>
        )}
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          alt='userIcon'
          src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'
        />
      </div>

    </div>
  )
}

export default Head