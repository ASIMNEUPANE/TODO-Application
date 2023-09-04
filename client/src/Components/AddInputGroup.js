import React from 'react'
import {Button, Form, InputGroup, Placeholder} from 'react-bootstrap'

function AddInputGroup(label,placeholder,Button) {
  return (
    <>
       <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Lable"}</InputGroup.Text>
        <Form.Control Placeholder={placeholder || "placeholder"} />
        <Button variant = "primary" id ="button-addon2" >{Button || "Loadingg."}</Button>
        </InputGroup>
        </>
    );

}

export default AddInputGroup;