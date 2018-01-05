export default function filterData (data) {

  let currentConditionData = {
    time: data.hourly_forecast[0].FCTTIME.pretty,
    place: data.current_observation.display_location.full,
    condition: data.current_observation.weather,
    currentTemp: data.current_observation.temp_f,
    todaysHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    todaysLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    forcast: data.forecast.txt_forecast.forecastday[0].fcttext,
    img: data.forecast.txt_forecast.forecastday[0].icon_url
  };
  
  let sevenHourData = data.hourly_forecast.map( hour => {
    return {
      hour: hour.FCTTIME.civil,
      img: hour.icon_url,
      condition: hour.condition,
      temp: hour.temp.english,
      precip: hour.pop
    };
  }).slice(0,7);
  
  let dailyData = data.forecast.simpleforecast.forecastday.map( day => {
    return {
      day: day.date.weekday,
      img: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit,
      precip: day.pop
    };
  });
  
  return { 
    currentConditionData,
    sevenHourData,
    dailyData
  };
}