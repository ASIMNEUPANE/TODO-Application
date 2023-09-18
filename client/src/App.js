import { Container, Row, Col } from "react-bootstrap";
// import Todo from "./Pages/Todo";
import Form from "./Pages/form";
// import PassGen from "./Pages/PassGen";
// import Practice from "./Pages/Practice";

function App() {
  return (
    <>
      <Container>
        <center>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              {/* <Todo/> */}
              <Form/>
              {/* <PassGen/> */}
              {/* <Practice /> */}
            </Col>
          </Row>
        </center>
      </Container>
    </>
  );
}
export default App;
