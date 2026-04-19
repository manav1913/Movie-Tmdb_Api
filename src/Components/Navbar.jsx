import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({ setSearch, selectedGenre, setSelectedGenre }) => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setSearch(input)
    setSelectedGenre("All")
    navigate("/")
    setInput("")
  }

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre)
    setSearch("")
    navigate("/")
  }

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo"
        onClick={() => {
          setSearch("")
          setSelectedGenre("All")
        }}
      >
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

      <div className="nav-links">
        <button
          className={selectedGenre === "All" ? "active-genre" : ""}
          onClick={() => handleGenreClick("All")}
        >
          Featured
        </button>

        <button
          className={selectedGenre === "Drama" ? "active-genre" : ""}
          onClick={() => handleGenreClick("Drama")}
        >
          Drama
        </button>


        <button
          className={selectedGenre === "Action" ? "active-genre" : ""}
          onClick={() => handleGenreClick("Action")}
        >
          Action
        </button>

        <button
          className={selectedGenre === "Romance" ? "active-genre" : ""}
          onClick={() => handleGenreClick("Romance")}
        >
          Romance
        </button>

        <button
          className={selectedGenre === "Thriller" ? "active-genre" : ""}
          onClick={() => handleGenreClick("Thriller")}
        >
          Thriller
        </button>

   

        <Link to="/favorites" className="fav-link">
          Favorites
        </Link>
      </div>
    </nav>
  )
}

export default Navbar