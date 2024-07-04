import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ genres, authors, onFilterChange }) => {
  const handleGenreChange = (event) => {
    onFilterChange('genre', event.target.value);
  };

  const handleAuthorChange = (event) => {
    onFilterChange('author', event.target.value);
  };

  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Genre</a></li>
    <li><a className="dropdown-item" href="#">Author</a></li>
    <li><a className="dropdown-item" href="#">Rating</a></li>
  </ul>
</div>
  );
};

export default Filter;
