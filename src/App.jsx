import React from 'react'
import { Link, Links, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projets'

const App = () => {
  return (
    <div>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/projects'}>Projets</Link>
      <Link to={'/agence'}>Agence</Link> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agence' element={<Agence />} />
      <Route path='/projets' element={<Projects />} />
    </Routes>
    </div>
  )
}

export default App