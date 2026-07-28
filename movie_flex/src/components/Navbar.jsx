import { Routes, Route, Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {

  return (
    <>

      <header className="navbar">

        <div className="logo">
          MovieFlex
        </div>

        <nav className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/movies">Movies</Link>

          <Link to="/contact">Contact</Link>
          <Link to="/employeeRegistration">Employee Form</Link>

        </nav>

      </header>


    </>
  );
}
export default Navbar;