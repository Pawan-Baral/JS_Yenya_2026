import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import EmployeeForm from './pages/EmployeeForm'

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/contact" element={<div><Contact /></div>} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/employeeRegistration" element={<EmployeeForm />} />
      </Routes>

      <Footer />


    </>
  )
}

export default App