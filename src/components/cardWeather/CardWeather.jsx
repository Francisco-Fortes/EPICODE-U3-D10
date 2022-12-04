import { Button, Card, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./card-weather.css";

const CardWeather = () => {
  //   const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const city = "Tenerife";
  const key = "278f10ca700a0126316d3fcef6dcd77b";
  //   "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=278f10ca700a0126316d3fcef6dcd77b"
  const [currentWeather, setCurrentWeather] = useState([]);
  // const [iconWeather, setIconWeather] = useState("");

  useEffect(() => {
    fetchWeather();
    // fetchIcon();
  }, []);

  //   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=100&appid=${key}`
      );
      if (response.ok) {
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        setCurrentWeather(data);
        console.warn(currentWeather);
      } else {
        console.log("Error while fetching!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const convertKelvinToCelsius = (temperature) => {
    let temperatureCelsius = temperature - 273.15;
    return Math.round(temperatureCelsius);
  };

  // const fetchIcon = async () => {
  //   const response = await fetch(
  //     `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
  //   );
  //   if (response.ok) {
  //     const icon = await response.json();
  //     setIconWeather(icon);
  //     console.log(icon);
  //   }
  // };

  return (
    <Col md={6} xs={2} lg={2} xl={2}>
      <Card className="frame">
        {/* <Card.Img variant="top" src={iconWeather} /> */}
        <Card.Body>
          <Card.Title>
            {currentWeather.name},<p>{currentWeather.sys.country}</p>
          </Card.Title>
          <Card.Text>
            <p>{convertKelvinToCelsius(currentWeather.main.temp)}°C</p>
            <p>{convertKelvinToCelsius(currentWeather.main.temp_max)}°C</p>
            <p>{convertKelvinToCelsius(currentWeather.main.temp_min)}°C</p>
            <p>{currentWeather.wind.speed}m/s</p>
            <p>{currentWeather.main.humidity}%</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardWeather;
