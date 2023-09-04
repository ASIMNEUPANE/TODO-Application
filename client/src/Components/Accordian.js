import Accordion from 'react-bootstrap/Accordion';

function Accordians() {
  return (
    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>TODO-Task-1</Accordion.Header>
        <Accordion.Body>
         <ol>
         <li><input type="checkbox" />    Do HomeWork</li>
         <li><input type="checkbox" />    Read a Book</li>
         </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>TODO-Task-2</Accordion.Header>
        <Accordion.Body>
        <ol>
        <li><input type="checkbox" />    Play a guiter</li>
        <li><input type="checkbox" />    Practice Football</li>
     
         </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


  )
}

export default Accordians