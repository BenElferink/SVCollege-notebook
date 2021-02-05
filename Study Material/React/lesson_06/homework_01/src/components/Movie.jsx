import React from 'react';
import RateMovie from './RateMovie';

function Movie({ movie }) {
  const movieContainerStyle = {
    height: window.innerWidth < 992 ? 'unset' : '700px',
    backgroundColor: '#e3d6ac',
    boxShadow: '0 0 5px 2px #e3d6ac',
    borderRadius: '5px',
    marginBottom: `${0.07 * window.innerWidth}px`,
  };

  const pFontSize = (fontSize) => {
    return `${
      fontSize * window.innerWidth > fontSize * 1000
        ? fontSize * 1000
        : fontSize * window.innerWidth
    }px`;
  };

  const pStyle = {
    margin: 0,
    fontSize: pFontSize(0.02),
    color: '#000',
    textShadow: '-1px 1px #ffcc00',
  };

  const scrollStyle = {
    overflowY: 'scroll',
    width: '100%',
    height: `${
      0.3 * window.innerWidth > 300 ? 300 : 0.3 * window.innerWidth
    }px`,
    border: '1px solid #000',
    borderRadius: '7px',
    padding: '3px',
  };

  const imgStyle = {
    width: `${
      0.22 * window.innerWidth > 220 ? 220 : 0.22 * window.innerWidth
    }px`,
    height: `${
      0.326 * window.innerWidth > 326 ? 326 : 0.326 * window.innerWidth
    }px`,
    margin: '10px',
  };

  return (
    <div className='col-lg-9' style={movieContainerStyle}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ ...pStyle, fontSize: pFontSize(0.04) }}>
          {movie.episode}
        </h3>
        <h2 style={{ ...pStyle, fontSize: pFontSize(0.05) }}>{movie.name}</h2>
        <p style={{ ...pStyle, fontSize: pFontSize(0.03) }}>{movie.year}</p>
      </div>
      <div className='row'>
        <img src={movie.image} alt='Movie Poster' style={imgStyle} />
        <div className='col'>
          <p style={{ ...pStyle, fontSize: pFontSize(0.03) }}>Story:</p>
          <p style={{ ...pStyle, ...scrollStyle }}>{movie.description}</p>
        </div>
      </div>
      <div>
        <p style={{ ...pStyle, fontSize: pFontSize(0.04) }}>
          Average: {movie.averageRate}
        </p>
        <RateMovie movieId={movie.id} />
      </div>
    </div>
  );
}

export default Movie;
