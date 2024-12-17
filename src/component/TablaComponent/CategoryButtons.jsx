import React from 'react';
import { Button } from '@mui/material';
import  {iconMap} from '../../data/iconMap'

function CategoryButtons({ categories, onSelect }) {
 
  return (
    <div>
            {categories.map((category) => (
              <Button
                key={category}
                variant="contained"
                color="primary"
                onClick={() => onSelect(category)}
                style={{ margin: '5px' }}
              >
                {category} {iconMap[category] || '🍽️'} {/* Emoji por categoría */}
              </Button>
            ))}
          </div>
 
    
  );
}

export default CategoryButtons;