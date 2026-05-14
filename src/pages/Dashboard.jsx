import React from 'react'
import { useTheme } from '../context/ThemeContext';
import { statsData } from '../data/mockData';
import StatCard from '../components/StatCard';
import RevenueLineChart from '../components/charts/RevenueLineChart';
import ActivityBarChart from '../components/charts/ActivityBarChart';
import TrafficPieChart from '../components/charts/TrafficPieChart';

const Dashboard = () => {
    const {theme}=useTheme();
    const dark=theme==='dark';


  return (
    <div className='space-y-6'>
        <h2 className={`text-2xl font-bold ${dark?'text-white':'text-gray-800'}`}>Dashboard</h2>
        <p className={`text-sm mt-1 ${dark?'text-white':'text-gray-500'}`}>Welcome back, Rohit</p>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {statsData.map((stat)=>(
                <StatCard key={stat.key} {...stat}/>
            ))}
        </div>


        <div className='w-full h-80'>
            <RevenueLineChart/>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
           <div className="h-80">
             <ActivityBarChart/>
           </div>
            <div className="h-80">
                <TrafficPieChart/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard