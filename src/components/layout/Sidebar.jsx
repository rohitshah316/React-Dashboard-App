import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {useTheme} from '../../context/ThemeContext'
import {navLinks} from '../../data/mockData'
import {
    MdDashboard,
    MdAnalytics,
    MdPeople,
    MdShoppingCart,
    MdSettings,
    MdMenu,
    MdClose
} from 'react-icons/md'

const iconMap={
    dashboard:<MdDashboard className='text-xl'/>,
    analytics: <MdAnalytics className='text-xl'/>,
    users: <MdPeople className='text-xl'/>,
    orders: <MdShoppingCart className='text-xl'/>,
    settings: <MdSettings className='text-xl'/>,
}

const Sidebar = () => {

    const {theme} =useTheme();
    const dark=theme==='dark';
    const [isOpen,setIsOpen]=useState(false);
    
  return (
    <>
            {/* Mobile hamburder button */}
            <button
                className='md:hidden fixed top-4 z-50 rounded-lg bg-indigo-600 text-white'
                onClick={()=>setIsOpen(!isOpen)}
            >
                {isOpen?<MdClose className='text-xl'/>:<MdMenu className='text-xl'/>}
            </button>

            {
                isOpen && (
                    <div className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={()=>setIsOpen(false)}
                    />
                )
            }



            {/* sidebar */}
            <aside className={`fixed top-0 left-0 h-full w-64 z-40 flex flex-col transition-transform duration-300
                ${dark?'bg-gray-900 text-white':'bg-white text-gray-800'}
               ${isOpen?'translate-x-0':'-translate-x-full'}
               md:translate-x-0 md:static md:flex
               `}>
                    <div className={`px-6 py-5 border-b ${dark?'border-gray-700':'border-gray-200'}`}>
                        <h1 className='text-xl font-bold text-indigo-500'>Dashboard</h1>

                        <p className={`text-xs mt-1 ${dark?'text-gray-400':'text-gray-500'}`}>Analytics Dashboard</p>
                    </div>


                    {/* Nav Links */}
                    <nav className="flex-1 px-4 py-6 space-y-1">
                        {navLinks.map((link)=>(
                            <NavLink 
                                key={link.id}
                                to={link.path}
                                onClick={()=>setIsOpen(false)}
                                className={({isActive})=>`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 text-sm font-medium
                                ${isActive?'bg-indigo-600 text-white':dark?'text-gray-400 hover:bg-gray-800 hover:text-white':'text-gray-600  hover:text-gray-900'}
                                `}
                            >{iconMap[link.icon]}
                            {link.label}
                            </NavLink>
                        ))}
                    </nav>


                    <div className={`px-6 py-4 border-t ${dark?'border-gray-700':'border-gray-200'}`}>
                        <p className={`text-xs ${dark?'text-gray-400':'text-gray-500'}`}>Logged in as</p>
                        <p className='text-sm font-semibold text-indigo-400'>Rohit Shah</p>
                    </div>
            </aside>
    </>
  )
}

export default Sidebar