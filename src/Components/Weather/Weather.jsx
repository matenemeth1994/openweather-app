import React from "react";
// import styles from "./Weather.module.scss";
// import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";

const Weather = ({ cityName, weather, description, imgURL}) => {
  return (
    <div className="weather">
      <h2>{cityName}</h2>
      <img src={imgURL}/>
      <p>{description}</p>
      <p>{`In ${cityName} the weather is currently ${weather}°C`}</p>
    </div>
  );
};

export default Weather;
