
import React from 'react'
import { Card } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating';

const MovieCard = ({moviep}) => { 
    console.log(moviep)
  return (
    <div>

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={moviep.posterURL} />
  <Card.Body>
    <Card.Title>{moviep.title}</Card.Title>
    <Card.Text>
      {moviep.description}
    </Card.Text>

  </Card.Body>

      <Rating   ratingValue={moviep.rating} /* Available Props */ />


</Card>

    </div>
  )
}

export default MovieCard

