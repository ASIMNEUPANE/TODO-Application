import React from 'react'

function Goal() {
  return (
    <div>Goal....</div>
  )
}

function Missed() {
  return (
    <div>misssedd...</div>
  )
}
function GoalResult(isGoal) {
  return (
    <div>
        
        {isGoal?<Goal/> : <Missed/>}
        </div>
  )
}




export default GoalResult;