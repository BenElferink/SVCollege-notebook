import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from './../context/MoviesContext';
import MovieThumbnail from './MovieThumbnail';

function HighestRatesList({ updateDisplayedMovie }) {
  // this function duplicates the movies array,
  // and sorts it by high/low of the average rate per movie
  const sortByRating = (state) => {
    let moviesArray = [...state];
    moviesArray.sort((a, b) => (a.averageRate > b.averageRate ? -1 : 1));
    moviesArray.splice(4);
    return moviesArray;
  };

  const [movies] = useContext(MovieContext);
  const [sortedMovies, setSortedMovies] = useState(sortByRating(movies));

  // this side effect keeps sorting the movies,
  // upon any change made to the movies context.
  useEffect(() => {
    setSortedMovies(sortByRating(movies));
  }, [movies]);

  // thise side effect send the top rated movie id
  // to App.js state, and displays it in path='/'
  useEffect(() => {
    updateDisplayedMovie(sortedMovies[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedMovies]);

  return (
    <div
      className='row'
      style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: `${0.07 * window.innerWidth}px`,
      }}>
      {sortedMovies.map((movie, i) => {
        if (i < 3) {
          return (
            <MovieThumbnail
              key={movie.id}
              movie={movie}
              hideOnMobile={false}
              showAverageRate={true}
            />
          );
        } else {
          return (
            <MovieThumbnail
              key={movie.id}
              movie={movie}
              hideOnMobile={true}
              showAverageRate={true}
            />
          );
        }
      })}
    </div>
  );
}

export default HighestRatesList;
