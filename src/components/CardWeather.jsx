import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const CardWeather = () => {
  //   const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const city = "Tenerife";
  const key = "278f10ca700a0126316d3fcef6dcd77b";
  //   "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=278f10ca700a0126316d3fcef6dcd77b"
  const [currentWeather, setCurrentWeather] = useState([]);
  const [iconWeather, setIconWeather] = useState("");

  useEffect(() => {
    fetchWeather();
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

  // const response = await fetch(
  //     `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
  //   )
  //   if (response2.ok) {
  //     const icon = await response.json();
  //     setIcon(icon);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          {/* {currentWeather.name},<p>{currentWeather.sys.country}</p> */}
        </Card.Title>
        <Card.Text>
          <span>icon</span>
          <span>{currentWeather.temp}</span>
          {/* <span>{currentWeather.main.temp_max}</span> */}
          {/* <span>{currentWeather.main.temp_min}</span> */}
          {/* <span>{currentWeather.wind}</span> */}
          {/* <span>{currentWeather.main.humidity}</span> */}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardWeather;
