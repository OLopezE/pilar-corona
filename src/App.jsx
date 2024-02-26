import './App.css'
import { Curriculum, MainMenu } from './js/views'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './js/components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/curriculum-vitae' element={<Curriculum />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
