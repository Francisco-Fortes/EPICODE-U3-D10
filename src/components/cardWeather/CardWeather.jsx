import { Button, Card, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./card-weather.css";

const CardWeather = () => {
  //   const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const city = "Santa Cruz de Tenerife";
  const key = "278f10ca700a0126316d3fcef6dcd77b";
  //   "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=278f10ca700a0126316d3fcef6dcd77b"
  const [currentWeather, setCurrentWeather] = useState([]);
  const [search, setSearch] = useState("Santa Cruz de Tenerife");

  useEffect(() => {
    fetchWeather();
  }, [search]);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&limit=100&appid=${key}`
      );
      if (response.ok) {
        const data = await response.json();
        setCurrentWeather(data);
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  // const handleKey = (event) => {
  //   if (event.key === "Enter") {
  //     setSearch(search);
  //   }
  // };

  return (
    <Col md={6} xs={2} lg={2} xl={2}>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          onChange={handleChange}
          // onKeyUp={handleKey}
          value={search}
          placeholder="Type the name of a city or town"
        />
      </Form>
      <Card className="frame">
        <Card.Img
          variant="top"
          // `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
          src={`https://source.unsplash.com/200x200/?${currentWeather.name}`}
          // src={`https://source.unsplash.com/200x200/?${currentWeather.name}`}
          alt={`${currentWeather.name}-image`}
        />
        <Card.Body>
          <Card.Title>
            {currentWeather.name},
            <>
              {currentWeather.sys ? (
                <span>{currentWeather.sys.country}</span>
              ) : null}
            </>
          </Card.Title>
          <Card.Text>
            <>
              {currentWeather.main ? (
                <span>
                  {convertKelvinToCelsius(currentWeather.main.temp)}°C
                </span>
              ) : null}
            </>
            <>
              {currentWeather.main ? (
                <span>
                  {convertKelvinToCelsius(currentWeather.main.temp_max)}°C
                </span>
              ) : null}
            </>
            <>
              {currentWeather.main ? (
                <span>
                  {convertKelvinToCelsius(currentWeather.main.temp_min)}°C
                </span>
              ) : null}
            </>
            <>
              {currentWeather.main ? (
                <span>{currentWeather.weather[0].main}</span>
              ) : null}
            </>
            <>
              {currentWeather.wind ? (
                <span>{currentWeather.wind.speed}m/s</span>
              ) : null}
            </>
            <>
              {currentWeather.main ? (
                <span>{currentWeather.main.humidity}%</span>
              ) : null}
            </>
          </Card.Text>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardWeather;
