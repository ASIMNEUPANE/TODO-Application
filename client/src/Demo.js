import useFetchApi from "./hooks/useFetchApi";

function Demo() {
  const {
    isLoading,
    error,
    data,
  } = useFetchApi({
    url: "https://jsonplaceholder.typicode.com/posts",
  });
  // if (isLoading) return <Loding />;
  if (error) return <> {JSON.stringify(error)}</>;

  return (
    <>
      <br />
      <table>
        <tr>
          <th>userId</th>
          <th>Id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        {data &&
          data.length > 0 &&
          data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data?.userId}</td>
                <td>{data?.Id}</td>
                <td>{data?.title}</td>
                <td>{data?.body}</td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default Demo;

// used cleanup  function

// function Demo() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//     return () => {
//       clearTimeout(timer);
//     };
//   });

//   return <>I have {count} count</>;
// }

// export default Demo;

// ----Updating Array using StateHooks--------

// const Demo = () => {
//   const [car, setCar] = useState([
//     {
//       name: "Ford",
//       model: 2012,
//       tires: 5,
//     },
//     {
//       name: "Tesla",
//       model: 2022,
//       tires: 5,
//     },
//   ]);
//   const handleArrayClick = ({id, model, name}) => {

//     setCar((car)=>{
//       const newArr = [...car];
//       newArr[id] = { ...newArr[id], model, name };
//       return newArr;
//     });
//   };

//   return (
//     <>
//       <h1>
//         I have car name {car.name} and its model year is {car.model}
//       </h1>
//       {/* <h1>I have selected {color? "true":"false"} color</h1> ----  TO update boolean */}
//       <br />

//       <input type="text" id="inputModel" placeholder="model" />
//       <button
//         onClick={() => handleArrayClick({ id: 1,model:2010,name:"fesla" })
//         }
//       >
//         Change name of the 2nd array
//       </button>
//     </>
//   );
// };
// export default Demo;

//  ----Updating Object in react-------
// const Demo = ()=> {
//   const [car, setCar]= useState(
//     {
//     name: "Ford",
//     model:2012,
//     tires:5,
//   },
//
// const handleClick=(model,name)=>{
// if(!model&& !name){
//   alert("enter")
// }

// else{
// setCar((car)=>{

// return {...car, model: +model,name:name }
// });
// }
// }

//   return(
//     <>
//     <h1>I have car name {car.name} and its model is {car.model} with {car.tires} tires</h1>
//     {/* <h1>I have selected {color? "true":"false"} color</h1> ----  TO update boolean */}
//     <br/>
//     <input type="text" id="input" placeholder="carsName"/>

//     <input type="text" id="inputModel" placeholder="model"/>
//     <button onClick={()=>handleClick(document.getElementById('inputModel').value,document.getElementById('input').value)}>Change color</button>
//     </>
//   );

// };
// export default Demo;
