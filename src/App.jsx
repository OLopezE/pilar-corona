import './App.css'
import { Curriculum, MainMenu } from './js/views'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/curriculum-vitae' element={<Curriculum />} />
      </Routes>
    </MemoryRouter>
  )
}

export default App
