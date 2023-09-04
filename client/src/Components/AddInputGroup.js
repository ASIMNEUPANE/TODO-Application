import React from 'react'
import { Button,Form, InputGroup} from 'react-bootstrap'

function AddInputGroup({button,buttonVariant,label,placeholder}) {
  return (
    
    <>
       <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Lable"}</InputGroup.Text>
        <Form.Control placeholder={placeholder || "placeholder"} />
        <Button variant = {buttonVariant || "success"} id ="button-addon2" >{button || "Loadingg."}</Button>
        </InputGroup>
        </>
    );

}

export default AddInputGroup;