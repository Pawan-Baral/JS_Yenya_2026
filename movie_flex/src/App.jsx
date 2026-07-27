import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/contact" element={<div><Contact /></div>} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />


    </>
  )
}

export default App