import React from 'react'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)
import {revenueData} from '../../data/mockData'
import {useTheme} from '../../context/ThemeContext'

const RevenueLineChart = () => {

    const {theme}=useTheme();
    const dark=theme==='dark';

    const options={
        responsive:true,
        plugins:{
            legend:{
                labels:{
                    color: dark?'#e5e7eb':'#374151'
                }
            },
            title:{
                display: true,
                text: 'Monthly Revenue (Rs.)',
                color: dark?'#e5e7eb':'#374151',
                font: {size:14}
            }
        },
        scales:{
            x:{
                ticks:{color: dark?'#9ca3af':'#6b7280'},
                grid:{color:dark?'#1f2937':'#f3f4f6'}
            },
            
            y:{
                ticks:{color: dark?'#9ca3af':'#6b7280'},
                grid:{color:dark?'#1f2937':'#f3f4f6'}
            }

        }
    }
  return (
    <div className={`rounded-xl p-5 shadow-sm ${dark?'bg-gray-800':'bg-white'}`}>
        <Line data={revenueData} options={options}/>
    </div>
  )
}

export default RevenueLineChart