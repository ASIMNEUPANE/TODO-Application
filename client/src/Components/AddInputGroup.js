import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";


function AddInputGroup({ button, buttonVariant, label, placeholder }) {
  const [title, setTitle] = useState({});
 
  const handleSubmit = () => {};
  
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
