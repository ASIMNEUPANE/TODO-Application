import {Container, Row, Col} from 'react-bootstrap'
import Todo from './Pages/Todo'
import Demo from './Demo';
import Navbar from './Navbar';
function App() {
  
  return<>
  
  <Container>
      
      <center>
      <Row >
        <Col md={{ span: 6, offset: 3 }}>
          <Todo/>
          {/* <Demo/> */}
       
          {/* <Navbar/> */}
        </Col>
      </Row>
      </center>
    </Container>
  
  
  
  </>
}
export default App;
