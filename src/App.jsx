import React from 'react'
import Navbar from './components/layout/Navbar'
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>

    <div>
      <Navbar/>
    </div>
    </ThemeProvider>
  )
}

export default App