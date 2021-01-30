import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export function Movie({ movie, config }) {
  return (
    <li>
      <Link to={`/movie/${movie.id}`} data-testid="movies-list-movie">
        {config.images?.base_url && (
          <img
            src={config.images.base_url + "w342" + movie.poster_path}
            alt={movie.title + " Poster"}
          />
        )}
      </Link>
    </li>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    images: PropTypes.shape({
      base_url: PropTypes.string,
    }),
  }),
}
