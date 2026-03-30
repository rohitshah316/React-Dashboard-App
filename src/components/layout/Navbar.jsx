import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white px-6 py-4 flex items-center justify-between gap-10'>
        <div className='flex-1'>
            <h1 className='text-xl font-bold'>React Dashboard App</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
            <div className='w-full text-sm bg-gray-900 rounded p-2 '>
                <input type="text" placeholder='Search' 
            className='w-full outline-none'
            />
            </div>
        </div>


        <div className='flex-1 flex justify-end items-center gap-2'>
<IoMdNotificationsOutline className='text-2xl'/>

            <CgProfile className='text-2xl' />

            
        </div>
    </nav>
  )
}

export default Navbar