import React from 'react';
import Card from './card';

export default function SevenHour (props)  {
  return (
    <div>
      <h2>Hourly Forecast</h2>
      
      {
        props.data.map((hour, i) => {
          return (
            <Card 
              hour={hour}
              key={i}
            />
          )
        })
      }
            
    </div>
  )
}