import React from "react";

function LogicalOperator(props) {
  const {cars}= props;
  return (
    <div>
      <b>LogicalOperator</b>
      <br/>
      {cars && cars.length> 0 && <>I have cars</> }
     
      
    </div>
  );
}
export default LogicalOperator;