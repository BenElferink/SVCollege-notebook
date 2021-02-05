import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from './context/MoviesContext';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Movie from './components/Movie';
import HighestRatesList from './components/HighestRatesList';
import AllmoviesList from './components/AllMoviesList';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer';

function App() {
  // --------------------------------------------------
  // this block of code listens to screen-resizing,
  // and causes a rerender, updating all JavaScript styling
  //
  const [remountCount, setRemountCount] = useState(0);
  const refresh = () => setRemountCount(remountCount + 1);
  useEffect(() => {
    window.addEventListener('resize', refresh);
    // console.log('window dimensions changed...');
    return () => {
      window.removeEventListener('resize', refresh);
    };
  });
  // --------------------------------------------------

  // movies are provided by context,
  // then <HighestRatesList /> updates topMovie
  const [movies] = useContext(MovieContext);
  const [topMovie, setTopMovie] = useState(1);
  // called by path='/', this function pulls the top movie from context,
  // using the id given to 'topMovie',
  // and passes it to the component
  const findTopMovie = () => {
    let arr = movies.filter((movie) => movie.id === topMovie);
    return arr[0];
  };

  return (
    <div
      className='container-fluid'
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#555',
        color: '#ffcc00',
      }}>
      <Header />
      <div className='container'>
        <Router>
          <HighestRatesList
            updateDisplayedMovie={(id) => {
              setTopMovie(id);
              console.log('top rated movie set...');
            }}
          />
          <div className='row' style={{ justifyContent: 'space-between' }}>
            <Switch>
              <Route
                exact
                path='/'
                component={() => <Movie movie={findTopMovie()} />}
              />
              {movies.map((movie) => (
                <Route
                  key={movie.id}
                  exact
                  path={`/Movie_${movie.id}`}
                  component={() => <Movie movie={movie} />}
                />
              ))}
            </Switch>
            <AllmoviesList />
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
