const MovieDetailsPage = (props) => {
  return (
    <div>
      <span>Movie details page for movie with id {props.match.params.id}</span>
    </div>
  )
}

export default MovieDetailsPage
