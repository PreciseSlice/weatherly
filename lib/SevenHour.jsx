import React from 'react';
import Card from './card';
import PropTypes from 'prop-types';

export default function SevenHour (props)  {
  return (
    <div className="seven-hour">      
      {
        props.data.map((hour, i) => {
          return (
            <Card 
              hour={hour}
              key={i}
            />
          );
        })
      } 
    </div>
  );
}

SevenHour.propTypes = {
  data: PropTypes.array
};