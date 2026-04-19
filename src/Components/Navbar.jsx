import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
      <h1 className="logo">NetShows</h1>

      <div className="nav-links">
        <button>All Shows</button>
        <button>Drama</button>
        <button>Comedy</button>
        <button>Action</button>
        <button>Romance</button>
        <button>Thriller</button>
        <button>Horror</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
