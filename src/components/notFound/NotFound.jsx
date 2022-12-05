import { Badge, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col className="my-5">
          <h2>Sorry, we could not find that page</h2>
          <Badge bg="info">Make sure the spelling is correct</Badge>
          <br />
          <Button
            className="mt-3"
            variant="outline-primary"
            onClick={() => navigate("/")}
          >
            Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
