import React from 'react';
import { Button } from '@mui/material';

const CategoryButtons = ({ categories, onCategorySelect, onReset }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {categories.map((category) => (
        <Button
          key={category}
          variant="contained"
          color="primary"
          onClick={() => onCategorySelect(category)}
          style={{ margin: '5px' }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
      <Button
        variant="contained"
        color="secondary"
        onClick={onReset}
        style={{ margin: '5px' }}
      >
        Resetear
      </Button>
    </div>
  );
};

export default CategoryButtons;