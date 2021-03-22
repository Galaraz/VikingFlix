import React from 'react';
import MovieControls from './MovieControls';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie, type }) => {
  return (
    <Card
      style={{
        width: '18rem'
      }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <MovieControls type={type} movie={movie} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
