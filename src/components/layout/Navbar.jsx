import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useTheme } from '../../context/ThemeContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = () => {
    const {theme,toggleTheme}=useTheme();
    const dark=theme==='dark';
  return (
    <nav className={`px-6 py-4 flex items-center justify-between gap-10 border-b 
    ${dark?'bg-gray-900 text-white border-gray-700':'bg-white text-gray-800 border-gray-200'}
    `}>

            {/* title */}
        <div className='flex-1'>
            <h1 className='text-xl font-bold'>React <span className='text-indigo-500'>Dashboard App</span></h1>
        </div>


{/* search  */}
        <div className='flex-1 flex  justify-center items-center'>
            <div className={`w-full text-sm rounded-lg px-3 py-2
                ${dark?'bg-gray-800':'bg-gray-100'}
                `}>
                <input type="text"
                        placeholder='Search...'
                        className='w-full outline-none bg-transparent placeholder-gray-400'
                />
            </div>
        </div>

{/* action buttons  */}
        <div className='flex-1 flex justify-end items-center gap-3'>
            <button
            className={`cursor-pointer p-2 rounded-lg transition-colors duration-200 
                ${dark?'bg-gray-800 hover:bg-gray-700 text-yellow-400':'bg-gray-100 hover:bg-gray-200 text-gray-600'}
                `}
            aria-label='Toggle Theme'
            onClick={toggleTheme}
            >{dark?<MdLightMode className='text-xl'/>:<MdDarkMode className='text-xl'/>}</button>

            <button
                className={`p-2 rounded-lg transition-colors duration-200
                    ${dark?'bg-gray-800 hover:bg-gray-700':'bg-gray-100 hover:bg-gray-200'}
                    `}
            >
                <IoMdNotificationsOutline className='text-xl'/>
            </button>

            <button
            className={`p-2 rounded-lg transition-colors duration-200
                ${dark?'bg-gray-800 hover:bg-gray-700':'bg-gray-100 hover:bg-gray-200'}
                `}
            ><CgProfile className='text-xl'/></button>
            
            
        </div>
    </nav>
  )
}

export default Navbar