import '../styles/MovieStack.css'
import MovieCard from './MovieCard'

const MovieStack = (props) => {
  const classes = props.findMode ? 'MovieStack find-mode' : 'MovieStack'

  return (
    <div className={classes}>
      {props.movies.length ? (
        props.movies.map((movie) => (
          <MovieCard
            key={movie.id || movie._id}
            movie={movie}
            findMode={props.findMode}
          />
        ))
      ) : (
        <div>
          <p>There are currently no movies!</p>
        </div>
      )}
    </div>
  )
}

export default MovieStack
