import React, { useEffect } from "react";
import Title from "../Components/Title";
import AddInputGroup from "../Components/AddInputGroup";
import Accordians from "../Components/Accordian";





function Todo() {
 

return (
    <>
      <Title title="TODO App" />
      <AddInputGroup
        label="Add new todo?"
        placeholder="EG. Do Laundry."
        button="Add the task"
        buttonVariant="danger"
      />
      <Accordians tasks={""}/>
    </>
  );
}

export default Todo;
