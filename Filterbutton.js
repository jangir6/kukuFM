import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const FilterButton = ({ onFilter }) => {
  return (
    <ButtonGroup className="mb-3">
      <Button variant="secondary" onClick={() => onFilter('genre')}>Sort by Genre</Button>
      <Button variant="secondary" onClick={() => onFilter('author')}>Sort by Author</Button>
      <Button variant="secondary" onClick={() => onFilter('rating')}>Sort by Rating</Button>
    </ButtonGroup>
  );
};

export default FilterButton;
