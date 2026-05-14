import React from 'react'
import { useTheme } from '../context/ThemeContext'
import {
    MdAttachMoney,
    MdPeople,
    MdShoppingCart,
    MdTrendingUp
} from 'react-icons/md'

const iconMap = {
    revenue: <MdAttachMoney className='text-2xl' />,
    users: <MdPeople className='text-2xl' />,
    orders: <MdShoppingCart className='text-2xl' />,
    growth: <MdTrendingUp className='text-2xl' />,
}

const StatCard = ({title,value,change,positive,icon}) => {
    const {theme}=useTheme();
    const dark=theme==='dark'

  return (
    <div className={`rounded-xl p-5 flex items-center gap-4 shadow-sm
            ${dark ? 'bg-gray-800' : 'bg-white'}`}>

        
        <div 
        className={`p-3 rounded-lg ${positive?'bg-green-500/10 text-green-500':'bg-red-500/10 text-red-500'}`}
        >{iconMap[icon]}</div>


<div className="flex-1">
    <p className={`text-sm ${dark?'text-gray-400':'text-gray-500'}`}>
        {title}
    </p>
    <p className={`text-xl font-bold mt-0.5  ${dark?'text-white':'text-gray-800'}`}>{value}</p>
</div>

<div className={`text-xs font-semibold px-2 py-1  rounded-full ${positive?'bg-green-500/10 text-green-500':'bg-red-500/10 text-red-500'}`}>{change}</div>
    </div>
  )
}

export default StatCard