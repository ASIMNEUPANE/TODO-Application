import Accordion from "react-bootstrap/Accordion";
import Alert from "./MsgAlert";
import SubTaskList from "./SubTaskList";
import MsgAlert from "./MsgAlert";
import AddInputGroup from "./AddInputGroup";
function TaskAccordian({ tasks }) {
  return (
    <Accordion defaultActiveKey="0">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, i) => {
          return (
            <Accordion.Item key={task._id} eventKey={i}>
              <Accordion.Header>{task?.title}</Accordion.Header>
              <Accordion.Body>
                {task?.subtasks && task?.subtasks.length> 0 ? (
                  <SubTaskList />
                ) : (
                  <MsgAlert msg="No subtasks found . Add new subtasks " />
                )}
                <AddInputGroup label="Add new SubTasks" placeholder="EG. Get clothes" button="Add the Subtask"/>
              </Accordion.Body >
            </Accordion.Item>
          );
        })
      ) : (
        <Alert
          msg="Task not found . Add new task to get started."
          variant="primary"
        />
      )}
    </Accordion>
  );
}

export default TaskAccordian;
