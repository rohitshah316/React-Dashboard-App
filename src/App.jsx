import React from 'react'
import Navbar from './components/layout/Navbar'
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';

const App = () => {
  return (
    <ThemeProvider>
        <BrowserRouter>
            <div className="flex h-screen">
              <Sidebar/>
              <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar/>
                <main className="flex-1 overflow-y-auto p-6">
                  <p className='text-white'>Dashboard content coming soon</p>
                </main>
              </div>
            </div>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App