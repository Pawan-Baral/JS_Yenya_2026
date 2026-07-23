import {  Routes, Route, Link } from 'react-router-dom';


function Navbar() {

  return (
<>

    <nav className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">MovieFlex</h1>
      </div>

    </nav>
    <nav>
        <Link to="/">Home  </Link>
        <Link to="/movies">Movies  </Link>
        <Link to="/contact">Contact Us </Link>
    </nav>


</>
  );
}
export default Navbar;