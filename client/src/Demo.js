import { useEffect, useState } from "react";
import useFetchApi from "./hooks/useFetchApi";

const Demo = ()=> {
  const [car, setCar]= useState({
    name: "Ford",
    model:2012,
    tires:5,
  });
const handleClick=()=>{
  
setCar((car)=>{

return {...car, name:"Tesla"}
});
  
}

  return(
    <>
    <h1>I have car name {car.name} and its model is {car.model} with {car.tires} tires</h1>
    {/* <h1>I have selected {color? "true":"false"} color</h1> ----  TO update boolean */}
    <br/>
    <input type="text" id="input"/>
    <br/>
    <button onClick={handleClick}>Change color</button>
    </>
  );


};
export default Demo;













//   const {
//     isLoading,
//     error,
//     data: posts,
//   } = useFetchApi({
//     url: "https://jsonplaceholder.typicode.com/todos/1",
//   });

//   if (isLoading)
//     return (
//       <>
//         <Loading />
//       </>
//     );

//   if (error) return <>{JSON.stringify(error)}</>;
//   return <></>;

//   useEffect(() => {
//     setTimeout(() => {});
//   });
// }

// const [count, setCount] = useState(0);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);
//   return () => clearTimeout(timer);
// });

// return <>I am {count} count </>;

// const Demo = () => {
//   const [car, setCar] = useState([
//     {
//     name: "Ford",
//     model: "2000",
//     color: "red",
//   },
//  {
//     name: "BMW",
//     model: "2001",
//     color: "yellow",
//   }
// ]);

//   const handleClick = (name,model) => {
//     setCar((Car) => {
//       return { ...car, name:name, model: +model };
//     });
//   };

//   return (
//     <>
//       I have {car.name} car and it model is {car.model}
//       <br />
//       <input type="text" id="fname" name="fname" />
//       <button onClick={handleClick}>Change ME</button>
//     </>
//   );
// };
