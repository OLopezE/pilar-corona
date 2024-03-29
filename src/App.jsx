import './App.css'
import { Curriculum, MainMenu, Projects } from './js/views'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './js/components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/extra' element={<Curriculum />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
