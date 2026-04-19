import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const fetchShow = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
      const data = await res.json()
      setShow(data)
    }

    fetchShow()
  }, [id])

  if (!show) return <h2>Loading...</h2>

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="details-image">
          <img src={show.image?.medium} alt={show.name} />
        </div>

        <div className="details-content">
          <h1>{show.name}</h1>
          <p><strong>Genres:</strong> {show.genres.join(", ")}</p>
          <p><strong>Rating:</strong> {show.rating?.average || "No Rating"}</p>

          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />

          <button
            className="trailer-btn"
            onClick={() => setOpenModal(true)}
          >
            ▶ Watch Trailer
          </button>
        </div>
      </div>

      {openModal && (
        <div className="modal-overlay" onClick={() => setOpenModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <div className="modal-body">
              <h2>{show.name} Trailer</h2>

              <a
                href={`https://www.youtube.com/results?search_query=${show.name}+official+trailer`}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-btn"
              >
                Open Trailer on YouTube
              </a>

              <p className="modal-note">
                Watch Trailer On YouTube.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails