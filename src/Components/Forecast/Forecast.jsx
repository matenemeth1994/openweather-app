import React from "react";
import styles from "./Forecast.module.scss";

const Forecast = ({ data }) => {
  return (
    // setWeather(jsonResponse.list[0].main.temp);
    // setDescription(jsonResponse.list[0].weather[0].description);
    // setIconID(jsonResponse.list[0].weather[0].icon);
    // setTimeForecast(list[0].dt_txt);
    <div className="forecast">
      {/* <img src={imgURL} /> */}
      <p>{data.weather.description}</p>
      <p>{data.main.temp}</p>
      <p>{data.dt_txt}</p>
    </div>
  );
};

export default Forecast;
