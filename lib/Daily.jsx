import React from 'react';
import Card from './card';
import PropTypes from 'prop-types';

export default function Daily (props)  {
  return (
    <div className="ten-day">
      {
        props.data.map((day, i) => {
          return (
            <Card 
              day={day}
              key={i}
            />
          );
        })
      }      
    </div>
  );
}

Daily.propTypes = {
  data: PropTypes.array
};