import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardWeather from "./components/cardWeather/CardWeather";
import SearchBar from "./components/SearchBar";
import { Container, Row } from "react-bootstrap";
import Banner from "./components/banner/Banner";
function App() {
  return (
    <div className="App">
      <Banner />
      <Container>
        <Row className="justify-content-center">
          {/* <SearchBar /> */}
          <CardWeather />
          {/* <CardWeather /> */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
