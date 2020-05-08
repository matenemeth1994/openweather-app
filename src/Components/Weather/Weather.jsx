import React from "react";
import styles from "./Weather.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'

const Weather = ({ cityName, weather, description, imgURL }) => {
  return (
    <Card className={styles.outline}>
    <Container>
      <Row >
        <Col sm={3} className={styles.columns} >
          <h1  className={styles.text} >{cityName}</h1>
        </Col>
        <Col sm={3} className={styles.columns} >
          <p className={styles.text} >{`${weather}°C`}</p>
        </Col>
        <Col sm={3} className={styles.columns} >
          <p className={styles.text} >{description}</p>
        </Col>
        <Col sm={3} className={styles.columns} >
          <img src={imgURL}/>
        </Col>
      </Row>
    </Container>
    </Card>
  );
};

export default Weather;
