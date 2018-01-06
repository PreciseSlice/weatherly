import React from 'react';
import Card from './card';

export default function Daily (props)  {
  return (
    <div>
      <h2>Daily Forcast</h2>

      {
        props.data.map((day, i) => {
          return (
            <Card 
              day={day}
              key={i}
            />
          )
        })
      }
            
    </div>
  )
}