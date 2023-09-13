import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import useApi from "../hooks/useApi";
import Loading from "./Loading";
import { URLS } from "../constants";

function AddInputGroup({ button, buttonVariant, label, placeholder }) {
  const [title, setTitle] = useState({});
  const {data,error , loading,create} = useApi()
 
  const handleSubmit = async () => {
    await create({url:URLS.TODOS, payload:title })
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
