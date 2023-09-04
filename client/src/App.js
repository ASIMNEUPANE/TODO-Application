import Accordians from "./Accordian";
import {Container, Row, Col} from 'react-bootstrap'
import Todo from './Pages/Todo'

function App() {
  return<>
  
  <Container>
      
      
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Todo/>
        </Col>
      </Row>
    </Container>
  
  
  
  </>
}
export default App;
