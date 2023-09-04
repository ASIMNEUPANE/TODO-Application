import Accordion from "react-bootstrap/Accordion";

function TaskAccordian({ tasks }) {
  return (
    <Accordion defaultActiveKey="0">
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task,i) => {
          return(
          <Accordion.Item key={task._id} eventKey="i">
            <Accordion.Header>{task?.title}</Accordion.Header>
            <Accordion.Body>{task?.status}</Accordion.Body>
          </Accordion.Item>
          )
      })}
    </Accordion>
  );
}

export default TaskAccordian;

// <ol>
// <li><input type="checkbox" />    Do HomeWork</li>
// <li><input type="checkbox" />    Read a Book</li>
// </ol>
