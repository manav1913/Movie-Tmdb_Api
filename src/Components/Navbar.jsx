import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({setSearch}) => {

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setSearch(input)
    setInput("")
  }
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          NetShows
        </Link>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search shows..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

 
      </nav>
    </div>
  )
}

export default Navbar
