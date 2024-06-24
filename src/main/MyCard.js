import React from "react";

function MyCard({ data }) {
  console.log(data);
  const {
    coord: { lon, lat },
    weather: [{ w_id, main, description, icon }],
    base,
    main: {
      humidity,
      pressure,
      sea_level,
      grnd_level,
      temp,
      feels_like,
      temp_min,
      temp_max,
    },
    visibility,
    wind: { speed, deg, gust },
    clouds,
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    id,
    name,
    cod,
  } = data;
  return (
    <div className="data">
      <h5>city</h5>
      <span>{name}</span>
      <h5>country</h5>
      <span>{country}</span>
      <h5>weather</h5>
      <span>{main}</span>
      <h5>detail</h5>
      <span>{description}</span>
      <h5>temp</h5>
      <span>{deg}deg</span>
      <h5>wind speed</h5>
      <span>{speed} km/h</span>
      <h5>humidity</h5>
      <span>{humidity}</span>
      <h5>pressure</h5>
      <span>{pressure}</span>
    </div>
  );
}

export default MyCard;
