import { Accordion, Col, Form } from "react-bootstrap";
import MsgAlert from "./MsgAlert";
import { URLS } from "../constants";
import SubtaskList from "./SubTaskList";
import AddInputGroup from "./AddInputGroup";
import TaskStatus from "./TasksStatus";
import { FaTrashAlt } from "react-icons/fa";
import { useApiContext } from "../contexts";
import Loading from "./Loading";

function Accordian({ tasks }) {
  const { error, loading, deleteById } = useApiContext();

  const handleDelete = async (taskId) => {
    console.log("delete");

    await deleteById({ url: URLS.TODOS, id: taskId });
    // popUpAlert({});
  };
  if (error) return <>{JSON.stringify(error)}</>;
  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  const handleTaskChange = () => {
    console.log("i am task handler");
  };
  return (
    <Accordion defaultActiveKey="0">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, i) => {
          return (
            <Accordion.Item key={task?._id} eventKey={i}>
              <Accordion.Header>
                <Col xs={7}>
                  <Form.Group className="ml-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={
                        task && task?.status === "completed" ? true : false
                      }
                      onChange={() => handleTaskChange()}
                    />
                    &nbsp;
                    <span>
                      {task?.title && task?.title.length > 32
                        ? task?.title.substring(0, 32).concat("...")
                        : task?.title}
                    </span>
                  </Form.Group>
                </Col>
                <Col xs="1">
                  <FaTrashAlt
                    color="red"
                    onClick={() => {
                      handleDelete(task?._id);
                    }}
                  />
                </Col>

                <Col xs={3}>
                  <div>
                    {task && task.subtasks.length > 0 && (
                      <div>
                        <TaskStatus
                          total={task?.subtasks.length}
                          completed={
                            task && task?.subtasks.length > 0
                              ? task?.subtasks.filter(
                                  (subtask) => subtask?.status === "completed"
                                ).length
                              : "-"
                          }
                        />
                      </div>
                    )}
                  </div>
                </Col>
              </Accordion.Header>
              <Accordion.Body>
                {task?.subtasks && task?.subtasks.length > 0 ? (
                  <SubtaskList subtasks={task?.subtasks} />
                ) : (
                  <MsgAlert msg="No Subtasks found. Add new subtask" />
                )}
                <AddInputGroup
                  url={URLS.SUBTASKS}
                  taskId={tasks?._id}
                  label="Add new Subtask"
                  placeholder="Eg. Gather Clothes"
                  button="Add new Subtask"
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })
      ) : (
        <MsgAlert
          variant="primary"
          msg="Task not found. Add new task to get started..."
        />
      )}
    </Accordion>
  );
}

export default Accordian;
