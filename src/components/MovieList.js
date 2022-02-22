import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    // console.log(movies)
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
        {movies.map( 
            (movie,i)=><MovieCard moviep={movie} key={i}/>
        )
        }

    </div>
  )
}

export default MovieList 