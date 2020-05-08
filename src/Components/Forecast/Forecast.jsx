import React from "react";
import styles from "./Forecast.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Forecast = ({ data }) => {
  const imgURLForecast = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <Card className={styles.outline}>
    <Container>
      <Row>
        <Col sm={3} className={styles.columns}>
        <p className={styles.text} >{data.dt_txt}</p>
        </Col>
        <Col sm={3} className={styles.columns}>
          <p className={styles.text} >{`${data.main.temp}°C`}</p>
        </Col>
        <Col sm={3} className={styles.columns}>
          <p className={styles.text} >{data.weather[0].description}</p>
        </Col>
        <Col sm={3} className={styles.columns}>
          <img src={imgURLForecast} />
        </Col>
      </Row>
    </Container>
    </Card>
  );
};

export default Forecast;
