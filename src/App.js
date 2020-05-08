import React, { useState, useEffect } from "react";
import styles from "./App.scss";
import Header from "./Components/Header";
import Weather from "./Components/Weather";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";


const location = "Bath";
const defaultLocation = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=36c0bb9a4e7cb559940b1f4fd37fc78f`;
const defaultForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=36c0bb9a4e7cb559940b1f4fd37fc78f`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // CURRENT WEATHER INFORMATION
  const [cityName, setCityName] = useState([]);
  const [weather, setWeather] = useState([]);
  const [description, setDescription] = useState([]);
  const [iconID, setIconID] = useState([]);

  // FORECAST
  const [weatherForecast, setWeatherForecast] = useState([]);

  // SETTING UP THE DEFAULT WEATHER INFORMATION
  useEffect(() => {
    fetch(defaultLocation)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCityName(jsonResponse.name);
        setWeather(jsonResponse.main.temp);
        setDescription(jsonResponse.weather[0].description);
        setIconID(jsonResponse.weather[0].icon);
        setLoading(false);
      });
  }, []);

  // SETTING UP THE DEFAULT FORECAST INFORMATION
  useEffect(() => {
    fetch(defaultForecast)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setWeatherForecast(jsonResponse.list);
        setLoading(false);
      });
  }, []);

  const imgURL = `https://openweathermap.org/img/wn/${iconID}@2x.png`;

  // FETCHING DATA ACCORDING TO THE SEACRHVALUE
  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    // FETCH CURRENT DATA
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=36c0bb9a4e7cb559940b1f4fd37fc78f`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.cod === 200) {
          setCityName(jsonResponse.name);
          setWeather(jsonResponse.main.temp);
          setDescription(jsonResponse.weather[0].description);
          setIconID(jsonResponse.weather[0].icon);
          setLoading(false);
        } else if (searchValue === "") {
          setLoading(false);
          setErrorMessage(null);
        } else {
          setErrorMessage(
            "You have propably mistyped the city name. Please try again."
          );
          setLoading(false);
        }
      });

    // FETCH FORECAST DATA
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=36c0bb9a4e7cb559940b1f4fd37fc78f`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.cod === 200) {
          setWeatherForecast(jsonResponse.list);
          setLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <Header text="Open Weather App" />
      <Search search={search} />
      <div className="weather">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <>
            <Weather
              cityName={cityName}
              weather={weather}
              description={description}
              imgURL={imgURL}
            />
            <Accordion className={styles.accordion} defaultActiveKey="0">
              <Card >
                <Accordion.Toggle as={Card.Header} style={{ backgroundColor: "#fde7e2" }}  eventKey="1">
                   Click on this header if you want to see 5 days weather forecast
                </Accordion.Toggle>
                <Accordion.Collapse  eventKey="1">
                  <Card.Body style={{ backgroundColor: "#fde7e2" }} >
                    {weatherForecast.map((data) => (
                      <Forecast key={data.dt} data={data} />
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
