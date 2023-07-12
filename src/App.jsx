import './App.css'
import { Curriculum, MainMenu } from './js/views'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/curriculum-vitae' element={<Curriculum />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
