import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainMenu } from './js/views'
import { MemoryRouter } from 'react-router-dom'

function App() {
  return (
    <MemoryRouter>
      <MainMenu />
    </MemoryRouter>
  )
}

export default App
