import React from "react";
import styles from "./Weather.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Weather = ({ cityName, weather, description, imgURL }) => {
  return (
    // <div className="weather">
    //   <h2>{cityName}</h2>
    //   <img src={imgURL} />
    //   <p>{description}</p>
    //   <p>{`In ${cityName} the weather is currently ${weather}°C`}</p>
    // </div>
<Container>
  <Row>
    <Col><h2>{cityName}</h2></Col>
    <Col><p>{`${weather}°C`}</p></Col>
    <Col><p>{description}</p></Col>
    <Col><img src={imgURL} /></Col>
  </Row>
</Container>
  );
};

export default Weather;
