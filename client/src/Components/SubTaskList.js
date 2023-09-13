import { Col, Container, Form, Row } from "react-bootstrap";

import { FaTrashAlt } from "react-icons/fa";

function SubtaskList({ subtasks }) {
  const handleStatus = () => {
    console.log("subtask status is being changed");
  };
  const handleDelete = () => {
    console.log("subtask is being deleted");
    // popUpAlert({});
  };

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
                            handleStatus();
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
