import React, { useContext, useState } from 'react';
import { MovieContext } from './../context/MoviesContext';
import Star from './../media/star';

function RateMovie({ movieId }) {
  const [movies, setMovies] = useContext(MovieContext);
  const [rate, setRate] = useState(0);

  const rateThisMovie = () => {
    let moviesArray = [...movies];
    moviesArray.forEach((movie) => {
      // this block adds the new rating
      // to selected movie
      if (movie.id === movieId) {
        movie.ratings.push(rate);
      }

      // this block keeps the average rating updated
      // in selected movie
      let averageRate = 0;
      movie.ratings.forEach((rate) => {
        averageRate += rate;
      });
      averageRate /= movie.ratings.length;
      movie.averageRate = averageRate.toFixed(1);
    });

    // update context with new changes
    setMovies(moviesArray);
    console.log('movie rated...');
  };

  const starStyle = {
    filter: 'drop-shadow(0 0 3px #444)',
    marginTop: '5px',
    marginBottom: '15px',
    cursor: 'pointer',
  };

  return (
    <div className='row' style={{ justifyContent: 'space-evenly' }}>
      <Star
        style={starStyle}
        size={`${0.1 * window.innerWidth}px`}
        selected={rate >= 1 ? true : false}
        onMouseOver={() => {
          setRate(1);
        }}
        onMouseLeave={() => {
          setRate(0);
        }}
        onClick={rateThisMovie}
      />
      <Star
        style={starStyle}
        size={`${0.1 * window.innerWidth}px`}
        selected={rate >= 2 ? true : false}
        onMouseOver={() => {
          setRate(2);
        }}
        onMouseLeave={() => {
          setRate(0);
        }}
        onClick={rateThisMovie}
      />
      <Star
        style={starStyle}
        size={`${0.1 * window.innerWidth}px`}
        selected={rate >= 3 ? true : false}
        onMouseOver={() => {
          setRate(3);
        }}
        onMouseLeave={() => {
          setRate(0);
        }}
        onClick={rateThisMovie}
      />
      <Star
        style={starStyle}
        size={`${0.1 * window.innerWidth}px`}
        selected={rate >= 4 ? true : false}
        onMouseOver={() => {
          setRate(4);
        }}
        onMouseLeave={() => {
          setRate(0);
        }}
        onClick={rateThisMovie}
      />
      <Star
        style={starStyle}
        size={`${0.1 * window.innerWidth}px`}
        selected={rate >= 5 ? true : false}
        onMouseOver={() => {
          setRate(5);
        }}
        onMouseLeave={() => {
          setRate(0);
        }}
        onClick={rateThisMovie}
      />
    </div>
  );
}

export default RateMovie;
