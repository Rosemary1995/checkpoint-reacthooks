import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({ title: '', rating: '' });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      (filter.title === '' || movie.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (filter.rating === '' || movie.rating >= parseFloat(filter.rating))
    );
  });

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({
        title: 'New Movie',
        description: 'A great new movie',
        posterURL: 'https://via.placeholder.com/150',
        rating: 8.5
      })}>
        Add New Movie
      </button>
    </div>
  );
};

export default App;

