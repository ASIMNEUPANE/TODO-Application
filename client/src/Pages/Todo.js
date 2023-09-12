import { useEffect } from "react";
import useApi from "../hooks/useApi";
import { URLS } from "../constants";
import Title from "../Components/Title";
import AddInputGroup from "../Components/AddInputGroup";
import Accordians from "../Components/Accordian";
import Loading from "../Components/Loading";

function Todo() {
  const { data: tasks, error, loading, list } = useApi();
  useEffect(() => {
    list({ url: URLS.TODOS });
  }, []);
  if (error) return <>{JSON.stringify(error)}</>;

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <Title title="TODO App" />
      <AddInputGroup
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
