import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { toggleMenu } from '../utils/appSlice'
import { GOOGLE_API_KEY, SEARCH_API_URL, YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResult } from '../utils/searchSlice'
import { MdDarkMode } from "react-icons/md";

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
        fetchSearchQueryResults()
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

  const fetchSearchQueryResults = async () => {
    if (!searchQuery) return;

    const searchResult = await fetch(
      `${SEARCH_API_URL}${searchQuery}&key=${GOOGLE_API_KEY}`
    );
    const response = await searchResult.json();

    console.log('==>',response);
    // dispatch(storeResponse(response));
  };

  return (
    <div className='grid grid-flow-col p-5 m-2'>
      
      <div className='flex col-span-4'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          alt='logo'
          src='https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png'
        />
        <a href='/'>
          <img
            className=' mx-4 w-[110px] h-[30px]'
            alt='youtube'
            src="assets/YouTube.svg"
          />
        </a>
      </div>
      <div className='col-span-10 px-8 '>
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
        <MdDarkMode/>
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