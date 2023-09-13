import { useEffect } from "react";
import {useApiContext} from "../Contexts/index"
import { URLS } from "../constants";
import Title from "../Components/Title";
import AddInputGroup from "../Components/AddInputGroup";
import Accordians from "../Components/Accordian";
import Loading from "../Components/Loading";

function Todo() {
  const { data: tasks, error, loading, list } = useApiContext();
  useEffect(() => {
    list({ url: URLS.TODOS });
    
  }, []);
  if (error) return <>{JSON.stringify(error)}</>;

  if (tasks&&tasks.length<0 &&loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <Title title="TODO App" />
      <AddInputGroup
      url= {URLS.TODOS}
        label="Add new todo?"
        placeholder="EG. Do Laundry."
        button="Add the task"
        buttonVariant="danger"
      />
      <Accordians tasks={tasks} />
    </>
  );
}

export default Todo;
