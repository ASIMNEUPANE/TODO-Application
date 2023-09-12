import {Container, Row, Col} from 'react-bootstrap'
import Todo from './Pages/Todo'

function App() {
  
  return<>
  
  <Container>
      
      <center>
      <Row >
        <Col md={{ span: 6, offset: 3 }}>
          <Todo/>
        
       
        </Col>
      </Row>
      </center>
    </Container>
  
  
  
  </>
}
export default App;
