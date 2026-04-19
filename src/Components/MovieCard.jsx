import React from 'react'

const MovieCard = ({ show }) => {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src={show.image?.medium}
          alt={show.name}
        />
      </div>

      <div className="movie-content">
        <h3>{show.name}</h3>
        <p className="movie-year">
          {show.premiered?.split("-")[0] || "N/A"}
        </p>

        <p className="movie-genres">
          {show.genres.length > 0 ? show.genres.join(" • ") : "No Genre"}
        </p>

        <p className="movie-rating">
          ⭐ {show.rating?.average || "No Rating"}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
