import "./banner.css";
import { Container } from "react-bootstrap";
import banner from "././banner.jpg";
const Banner = () => {
  return (
    <Container
      id="banner"
      fluid
      style={{ backgroundImage: `url(${banner})` }}
    ></Container>
  );
};
export default Banner;
