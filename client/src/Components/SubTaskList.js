import { Col, Container, Form, Row } from "react-bootstrap";
import { URLS } from "../constants";
import { useApiContext } from "../Contexts";
import { FaTrashAlt } from "react-icons/fa";

function SubtaskList({ subtasks }) {
  const {error,deleleById}= useApiContext()
  const handleStatus = () => {
    console.log("subtask status is being changed");
  };

  const handleDelete = async (subtaskId) => {
    if (subtaskId) await deleleById({url:URLS.SUBTASKS, id:subtaskId})
    return null;
    // popUpAlert({});
  };
  if (error) return <>{JSON.stringify(error)}</>

  return (
    <>
      <Form>
        <Container>
          {subtasks &&
            subtasks.length > 0 &&
            subtasks.map((subtask) => {
              return (
                <div key={subtask?._id} className="mb-3">
                  <Row>
                    <Col xs="9">
                      <Form.Group>
                        <Form.Check
                          style={{ textAlign: "start" }}
                          type="checkbox"
                          checked={
                            subtask?.status === "completed" ? true : false
                          }
                          onChange={() => {
                            handleStatus(subtasks);
                          }}
                          label={subtask?.title || ""}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="3">
                      <FaTrashAlt
                        color="red"
                        onClick={() => {
                          handleDelete();
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              );
            })}
        </Container>
      </Form>
    </>
  );
}

export default SubtaskList;
