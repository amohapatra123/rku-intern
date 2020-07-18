import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import Form from "./Components/form";
function App() {
  return (
    <div className="App">
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Internshala Internship Assignment</h1>
          </Col>
        </Row>
        <Form />
      </Container>
    </div>
  );
}

export default App;
