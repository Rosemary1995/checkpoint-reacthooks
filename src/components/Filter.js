import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onFilterChange({ title: e.target.value, rating });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilterChange({ title, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
        min="0"
        max="10"
        step="0.1"
      />
    </div>
  );
};

export default Filter;
