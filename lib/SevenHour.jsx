import React from 'react';
import HourCard from './hourCard';

export default function SevenHour (props)  {
  return (
    <div className="hourly-container">
      {props.data.map((data, i) => {
        return (
          <HourCard 
            data={data}
            key={i}
          />
        )
      })}      
    </div>
  )
}