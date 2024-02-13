// import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="centered-container">
      <Container
        fluid="md"
        style={{
          padding: 25,
          backgroundColor: "white",
          color: "OrangeRed",
          fontSize: 45,
          borderRadius: "10px",
          maxWidth: "100%",
        }}
      >
        <Row>
          <Col>
            The question isn’t who is going to let me; it’s who is going to stop
            me.
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
