import React from 'react'
import { Bar } from 'react-chartjs-2';
import { activityData } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const ActivityBarChart = () => {

    const {theme}=useTheme();
    const dark=theme==='dark';

    const options={
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                labels:{
                    color: dark ? '#e5e7eb' : '#374151' 
                },
                title:{
                    display: true,
                    text: 'Weekly Active Users',
                    color: dark?'#e5e7eb':'#374151',
                    font:{size:14}
                }
            }

        },
        scales:{
            x:{
                ticks: { color: dark ? '#9ca3af' : '#6b7280' },
                grid: { color: dark ? '#1f2937' : '#f3f4f6' }
            },
            y:{
                ticks: { color: dark ? '#9ca3af' : '#6b7280' },
                grid: { color: dark ? '#1f2937' : '#f3f4f6' }
            }
        }
    }
  return (
    <div className={`rounded-xl p-5 shadow-sm ${dark?'bg-gray-800':'bg-white'}`}>
        <Bar data={activityData} options={options}/>
    </div>
  )
}

export default ActivityBarChart