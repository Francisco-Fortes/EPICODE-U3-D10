import { Button, Card, Col, Form, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./card-weather.css";

const CardWeather = () => {
  //   const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  // const city = "Santa Cruz de Tenerife";
  const key = "278f10ca700a0126316d3fcef6dcd77b";
  //   "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=278f10ca700a0126316d3fcef6dcd77b"
  const [currentWeather, setCurrentWeather] = useState([]);
  const [search, setSearch] = useState("");

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
    <Col xs={10} sm={8} md={6} lg={6} xl={6}>
      <Form onSubmit={handleSubmit} className="mt-4 mb-3">
        <Form.Control
          type="search"
          onChange={handleChange}
          // onKeyUp={handleKey}
          value={search}
          placeholder="Type the name of a city or town"
        />
      </Form>
      {currentWeather.name !== undefined && (
        <Card className="frame mx-auto mb-5">
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
              <p>Details</p>
              <Container>
                <Row className="align-items-start">
                  <Col md={5}>
                    {currentWeather.main ? (
                      <span>{currentWeather.weather[0].main}</span>
                    ) : null}

                    <Card.Img
                      src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                      alt={`${currentWeather.weather[0].main}-icon`}
                    />
                  </Col>
                  <Col md={7}>
                    <>
                      {currentWeather.main ? (
                        <span>
                          {convertKelvinToCelsius(currentWeather.main.temp)}°C
                        </span>
                      ) : null}
                    </>
                    <>
                      <br />
                      {currentWeather.main ? (
                        <span>
                          Max:{" "}
                          {convertKelvinToCelsius(currentWeather.main.temp_max)}
                          °C
                        </span>
                      ) : null}
                    </>
                    <>
                      <br />
                      {currentWeather.main ? (
                        <span>
                          Min:{" "}
                          {convertKelvinToCelsius(currentWeather.main.temp_min)}
                          °C
                        </span>
                      ) : null}
                    </>
                    <>
                      <br />
                      Wind:{" "}
                      {currentWeather.wind ? (
                        <span>{currentWeather.wind.speed}m/s</span>
                      ) : null}
                    </>
                    <>
                      <br />
                      Humidity:{" "}
                      {currentWeather.main ? (
                        <span>{currentWeather.main.humidity}%</span>
                      ) : null}
                    </>
                  </Col>
                </Row>
              </Container>
            </Card.Text>
            {/* <Button variant="danger">Delete</Button> */}
          </Card.Body>
        </Card>
      )}
    </Col>
  );
};

export default CardWeather;
