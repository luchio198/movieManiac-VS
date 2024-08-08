import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import NavBar from './components/NavBar/NavBar';
import fire from './assets/fire.png';
import star from './assets/glowing-star.png';
import party from './assets/party-face.png';
import './app.css';
import SingleMovie from './components/SingleMovie/SingleMovie';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <main>
        <Routes>
          <Route
            path='/'
            element={<MovieList type='popular' title='Popular' emoji={fire} />}
          />
          <Route
            path='/top-rated'
            element={
              <MovieList type='top_rated' title='Top Rated' emoji={star} />
            }
          />
          <Route
            path='/upcoming'
            element={
              <MovieList type='upcoming' title='Upcoming' emoji={party} />
            }
          />
          <Route
            path='/movie/:movieId'
            element={
              <SingleMovie type='upcoming' title='Upcoming' emoji={party} />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
