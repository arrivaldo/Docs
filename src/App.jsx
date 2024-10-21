/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Background from './components/Background'
import Foreground from './components/Foreground'


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light mode

  return (
    <div className={`relative w-screen h-screen ${isDarkMode ? 'bg-zinc-800' : 'bg-white'}`}>
      <Background isDarkMode={isDarkMode} /> {/* Pass the theme state */}
      <Foreground isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> {/* Pass the theme state and setter */}
    </div>
  )
}

export default App