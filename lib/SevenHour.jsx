import React from 'react';
import Card from './card';

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
          )
        })
      } 
    </div>
  )
}