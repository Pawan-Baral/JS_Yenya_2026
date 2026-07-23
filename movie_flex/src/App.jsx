import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import SimpleSlider from './components/SimpleSlider'
function App() {
  return (
    <>
   
      <Navbar />
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<div>Movies Page</div>} />
      
          <Route path="/contact" element={<div>contactPage</div>} />
          <Route path="/movies/:id" element={<MovieDetails /> } />
        </Routes>
    
      <Footer />
   
    
    </>
  )
}

export default App