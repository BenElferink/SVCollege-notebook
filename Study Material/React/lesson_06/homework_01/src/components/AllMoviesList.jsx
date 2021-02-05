import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from './../context/MoviesContext';
import MovieThumb from './MovieThumbnail';

function AllMoviesList() {
  // this function duplicates the movies array,
  // and sorts it alphabetically by name per movie
  const sortByRating = (state) => {
    let moviesArray = [...state];
    moviesArray.sort((a, b) => (a.name > b.name ? 1 : -1));
    return moviesArray;
  };

  const [movies] = useContext(MovieContext);
  const [sortedMovies, setSortedMovies] = useState(sortByRating(movies));

  // this side effect keeps sorting the movies,
  // upon any change made to the movies context.
  useEffect(() => {
    setSortedMovies(sortByRating(movies));
  }, [movies]);

  const divStyleLarge = {
    position: 'relative',
    overflowY: 'scroll',
    width: '100%',
    height: '700px',
    zIndex: 1,
    background:
      'linear-gradient( to bottom, #000, transparent, transparent, transparent, transparent, #000)',
  };

  const divStyleAll = {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  };

  return (
    <div
      className={window.innerWidth < 992 ? 'row' : 'col'}
      style={window.innerWidth < 992 ? divStyleAll : divStyleLarge}>
      {sortedMovies.map((movie, i) => (
        <MovieThumb
          key={movie.id}
          movie={movie}
          hideOnMobile={false}
          showAverageRate={false}
        />
      ))}
    </div>
  );
}

export default AllMoviesList;
