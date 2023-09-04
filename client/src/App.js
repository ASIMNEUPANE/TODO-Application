import Car from "./Car";
import GoalResult from "./Goal";
import LogicalOperator from "./LogicalOperator";
import List from "./List";
import { Button } from 'react-bootstrap';

function App() {
  const cars = ["Ford", "BMW"]
  return (
<div>
<Car color="red" wheels = "4" />
<hr/>
<GoalResult isGoal = "true" />
<hr/>
<LogicalOperator  cars= {cars}/>
<hr/>
<List  cars= {cars}/>
<hr/>
<Button variant="primary">Primary</Button>{' '}



</div>





    // <>
    //   <container>
    //     <col>
    //       <row>
    //         <Button variant="outline-primary">Primary</Button>
    //       </row>
    //       <row></row>
    //     </col>
    //   </container>
    // </>
  );
}

export default App;
