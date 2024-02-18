import React, { useState } from 'react'
import Nav from './components/Nav'
import { Theme } from './context/Theme'
import Home from './components/Home'

const App = () => {
  const [theme, settheme] = useState('dark')
  return (
    <>
      <Theme.Provider value={{theme, settheme}}>

        <div className={`w-full h-screen ${theme} ${theme == 'dark' ? 'bg-black text-white' : null} `}>
          <Nav />
          <Home value={theme}/>
        </div>
      </Theme.Provider>

    </>
  )
}

export default App