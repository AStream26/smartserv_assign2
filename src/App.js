import Fields from "./Component/Fields/Fields";
import Format from "./Component/Format/Format";
import Input from "./Component/Input/input";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  let [files, setFiles] = useState([]);
  let [field, setField] = useState([]);
  console.log(field);
  return (
    <Container>
      <h5>Import Products</h5>
      <Row>
        <Col xs={12} md={6}>
          <Input files={files} setFiles={setFiles} setField={setField} />
        </Col>
        <Col xs={12} md={6}>
          <Format />
        </Col>

        <Col xs={10}>
          <Fields fields={field} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
