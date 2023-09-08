
import {Container, Row, Col} from 'react-bootstrap'
import Todo from './Pages/Todo'
import Demo from './Demo';
function App() {
  return<>
  
  <Container>
      
      <center>
      <Row >
        <Col md={{ span: 6, offset: 3 }}>
          {/* <Todo/> */}
          <Demo/>
        </Col>
      </Row>
      </center>
    </Container>
  
  
  
  </>
}
export default App;
