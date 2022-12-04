import "./App.css";
import "./components/cardWeather/card-weather.css";
import CardWeather from "./components/cardWeather/CardWeather";
import { Container, Row } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <CardWeather />
          <CardWeather />
        </Row>
      </Container>
    </div>
  );
}

export default App;
