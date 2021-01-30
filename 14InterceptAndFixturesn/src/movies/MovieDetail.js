import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BASE_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "?api_key="

const IMAGE_URL = "https://image.tmdb.org/t/p/"
const BACKDROP_SIZE = "original"
const POSTER_SIZE = "w342"

export function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  const getMovie = async () => {
    try {
      const res = await fetch(
        BASE_URL + id + API_KEY + process.env.REACT_APP_MOVIE_API
      )
      const newMovie = await res.json()
      setMovie(newMovie)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMovie()
  }, [id])

  if (!movie.title) return null

  return (
    <div>
      <img
        className="backdrop"
        src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + "  Backdrop"}
      />
      <div className="detail-details">
        <img
          className="detail-poster"
          src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
          alt={movie.title + "  Poster"}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
