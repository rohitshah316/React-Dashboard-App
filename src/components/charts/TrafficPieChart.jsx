import React from 'react'
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { trafficData } from '../../data/mockData'
import { useTheme } from '../../context/ThemeContext'

ChartJS.register(ArcElement, Tooltip, Legend)
const TrafficPieChart = () => {

    const {theme}=useTheme();
    const dark=theme==='dark';

    const options={
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                position: 'bottom',
                labels:{color:dark?'#e5e7eb':'#374151',
                    padding: 16,
                    font:{size:12}
                }
            },
            title:{
                display:true,
                text:'Traffic Sources',
                color: dark?'#e5e7eb':'374151',
                font:{size: 14}
            }
        }
    }
  return (
    <div className={`rounded-xl shadow-sm p-5 flex  flex-col ${dark?'bg-gray-800':'bg-white'}`}>
        <Pie data={trafficData} options={options}/>
    </div>
  )
}

export default TrafficPieChart