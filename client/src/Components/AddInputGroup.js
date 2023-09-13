import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import Loading from "./Loading";

import { useApiContext } from "../Contexts";

function AddInputGroup({
  button,
  buttonVariant,
  label,
  placeholder,
  taskId,
  url,
}) {
  const [title, setTitle] = useState({});
  const { error, loading, create } = useApiContext();

  const handleSubmit = async () => {
    const payload = title;

    if (taskId) payload.todo = taskId;

    await create({ url, payload: title });
    setTitle({});
  };

  if (error) return <>{JSON.stringify(error)}</>;

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Lable"}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder || "placeholder"}
          onChange={(event) => {
            setTitle((title) => {
              return { ...title, title: event.target.value };
            });
          }}
        />
        <Button variant={buttonVariant || "success"} onClick={handleSubmit}>
          {button || "Loadingg..."}
        </Button>
      </InputGroup>
    </>
  );
}

export default AddInputGroup;
