import React from 'react';
import { Link } from 'react-router-dom';
import Star from '../media/star';

function MovieThumbnail({ movie, hideOnMobile, showAverageRate }) {
  const overlayStyleDisplay = () => {
    if (hideOnMobile) {
      return window.innerWidth < 992 ? 'none' : 'flex';
    } else {
      return 'flex';
    }
  };

  const imgStyle = {
    position: 'relative',
    zIndex: 0,
    width: `${
      0.22 * window.innerWidth > 220 * 0.7
        ? 220 * 0.7
        : 0.22 * window.innerWidth
    }px`,
    height: `${
      0.326 * window.innerWidth > 326 * 0.7
        ? 326 * 0.7
        : 0.326 * window.innerWidth
    }px`,
    margin: '7px auto',
    background: `url("${movie.image}") no-repeat center`,
    backgroundSize: 'cover',
    boxShadow: showAverageRate ? '10px 10px #000000a0' : 'none',
    display: overlayStyleDisplay(),
    // ^^^
    // this 'display' is defined by 2 variables:
    // 1 - props.hideOnMobile - given true/false
    // 2 - the window's width
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: showAverageRate ? 'space-evenly' : 'flex-end',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const overlayStyle = {
    position: 'absolute',
    zIndex: 1,
    width: `${
      0.22 * window.innerWidth > 220 * 0.7
        ? 220 * 0.7
        : 0.22 * window.innerWidth
    }px`,
    height: `${
      0.326 * window.innerWidth > 326 * 0.7
        ? 326 * 0.7
        : 0.326 * window.innerWidth
    }px`,
    background: showAverageRate
      ? 'rgba(0, 0, 0, 0.5)'
      : 'linear-gradient( to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) )',
    border: '1px solid #000',
  };

  const pFontSize = (fontSize) => {
    return `${
      fontSize * window.innerWidth > fontSize * 1000
        ? fontSize * 1000
        : fontSize * window.innerWidth
    }px`;
  };

  const pStyle = {
    position: 'relative',
    zIndex: 2,
    margin: showAverageRate ? 0 : '2px',
    fontSize: pFontSize(0.02),
    textShadow: '-1px 1px #000',
  };

  return (
    <Link to={`/Movie_${movie.id}`} style={{ color: '#ffcc00' }}>
      {/* background image |or| movie poster */}
      <div style={imgStyle}>
        {/* image overlay */}
        <div style={overlayStyle} />
        {/* movie rating - showed only in rated list */}
        {showAverageRate ? (
          <div>
            <Star style={pStyle} size={`${0.07 * window.innerWidth}px`} />
            <h5 style={{ ...pStyle, fontSize: pFontSize(0.03) }}>
              {movie.averageRate}
            </h5>
          </div>
        ) : null}
        {/* movie title */}
        <div>
          <h6 style={{ ...pStyle, fontSize: pFontSize(0.015) }}>
            {movie.episode}
          </h6>
          <h6 style={{ ...pStyle, fontSize: pFontSize(0.02) }}>{movie.name}</h6>
        </div>
      </div>
    </Link>
  );
}

export default MovieThumbnail;
