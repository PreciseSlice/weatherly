import React from 'react';
import {data} from './mockData';
import HourCard from './hourCard';

export default function SevenHour (props)  {
  console.log(props.hourData);
  return (
    <div className="hourly-container">
      {props.hourData.map((data, i) => {
        return (
          <HourCard 
            hour={data}
            img={data}
            temp={data}
            key={i}
          />
        )
      })}      
    </div>
  )
}
