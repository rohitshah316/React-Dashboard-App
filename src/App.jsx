import React from 'react'
import Navbar from './components/layout/Navbar'
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import RevenueLineChart from './components/charts/RevenueLineChart';
import ActivityBarChart from './components/charts/ActivityBarChart';
import TrafficPieChart from './components/charts/TrafficPieChart';


const AppContent=()=>{
  const {theme}=useTheme();
  const dark=theme==='dark';


  return(
   <BrowserRouter>
            <div className={`flex h-screen ${dark?'bg-gray-950':'bg-gray-50'}`}>
              <Sidebar/>
              <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar/>
                <main className="flex-1 overflow-y-auto p-6">
                  <p className={`${dark ?'text-white':'text-gray-800'}`}>Dashboard content coming soon

                    <RevenueLineChart/>
                    <ActivityBarChart/>
                    <TrafficPieChart/>
                  </p>
                </main>
              </div>
            </div>
        </BrowserRouter>
  )
}

const App = () => {


  return (
    <ThemeProvider>
        <AppContent/>
    </ThemeProvider>
  )
}

export default App