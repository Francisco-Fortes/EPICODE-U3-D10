import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardWeather from "./components/cardWeather/CardWeather";
// import SearchBar from "./components/SearchBar";
import { Container, Row } from "react-bootstrap";
import Banner from "./components/banner/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import Favourites from "./components/favourites/Favourites";
// import Main from "./components/main/Main";
// import CustomNavBar from "./components/customNavBar/customNavBar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        {/* <CustomNavBar /> */}
        <Container>
          <Row className="justify-content-center">
            <Routes>
              <Route element={<CardWeather />} path="/" />
              <Route element={<Favourites />} path="/favourites" />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
