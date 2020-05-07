import React from "react";
import styles from "./Forecast.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Forecast = ({ data }) => {
  const imgURLForecast = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    // <div className={styles.border}>
    //   <img src={imgURLForecast} />
    //   <p>{`${data.main.temp}°C`}</p>
    //   <p>{data.weather[0].description}</p>
    //   <p>{data.dt_txt}</p>
    // </div>
    <Container>
      <Row>
        <Col>
        <p>{data.dt_txt}</p>
        </Col>
        <Col>
          <p>{`${data.main.temp}°C`}</p>
        </Col>
        <Col>
          <p>{data.weather[0].description}</p>
        </Col>
        <Col>
          <img src={imgURLForecast} />
        </Col>
      </Row>
    </Container>
  );
};

export default Forecast;
