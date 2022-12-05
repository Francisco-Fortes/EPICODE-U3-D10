import { Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./main.css";

const Main = () => {
  //   const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const city = "Santa Cruz de Tenerife";
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
      {currentWeather.name !== undefined && <cardWeather />}
    </Col>
  );
};

export default Main;
