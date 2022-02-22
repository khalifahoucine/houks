
import React, { useState } from 'react'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { movies } from './Data';
import { Rating } from 'react-simple-star-rating';

const App = () => {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  return (
    <div>
      <MovieList movies={movies}/>
    </div>
  )
}

export default App
