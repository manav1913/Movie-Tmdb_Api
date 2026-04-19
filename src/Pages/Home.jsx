import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard'

const Home = () => {

  const [shows, setShows] = useState([])

  useEffect (()=>{
    const fetchShows = async () =>{
      const res = await fetch(" https://api.tvmaze.com/shows")
      const data = await res.json()
      setShows(data)
    }
    fetchShows()
  },[])



  return (
     <section className="home">
      <div className="home-header">
        <h2>Featured Shows</h2>
        <p>Browse some popular series and discover what to watch next.</p>
      </div>

      <div className="shows-grid">
        {shows.slice(0, 20).map((show) => (
          <MovieCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  )
}

export default Home
