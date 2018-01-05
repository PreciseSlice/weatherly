import React from 'react';
import DailyCard from './dailyCard';

export default function Daily (props)  {
  return (
    <div className="daily-container">
      {props.data.map((data, i) => {
        return (
          <DailyCard 
            data={data}
            key={i}
          />
        )
      })}      
    </div>
  )
}