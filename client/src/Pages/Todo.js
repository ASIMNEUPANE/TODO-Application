import React from "react";
import Title from "../Components/Title";
import AddInputGroup from "../Components/AddInputGroup";
import Accordians from "../Components/Accordian";



function Todo() {
 
//get/api/v1/todos

const dblist = [
  {_id:"1", title:"Do Laundry", status:"pending", subtasks:[]},
  {_id:"2", title:"Do Homework", status:"pending", subtasks:[]},
  {_id:"3", title:"Travel to moon", status:"pending", subtasks:[]}
];

return (
    <>
      <Title title={"TODO App"} />
      <AddInputGroup
        label="Add new todo?"
        placeholder="EG. Do Laundry."
        button="Add the task"
        buttonVariant="danger"
      />
      <Accordians tasks={dblist}/>
    </>
  );
}

export default Todo;
