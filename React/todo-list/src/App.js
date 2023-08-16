import { useState } from "react";
import TodoList from "./components/TodoList";
import CheckList from "./components/CheckList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  
  // useEffect(() => {
  //   const value = window.localStorage.getItem("TODO_ARR");
  //   const todoArr = JSON.parse(value) ? JSON.parse(value) : 0;
  //   setTodoArr(todoArr);
  // }, []);
  
  // useEffect(() => {
  //   window.localStorage.setItem("TODO_ARR", JSON.stringify(todoArr));
  // }, [todoArr]);

  const handleTodo = (newItem) => {
    setTodo(newItem);
    setTodoArr(todoArr.concat(newItem));
  };

  const deleteTodo = (item) => {
    setTodoArr(todoArr.filter((todo, i) => item !== i));
  };


  return (
    <>
      <TodoList todoArr={todoArr} setTodo={handleTodo} />
      <CheckList todoArr={todoArr} delete={deleteTodo} />
    </>
  );
}

export default App;
