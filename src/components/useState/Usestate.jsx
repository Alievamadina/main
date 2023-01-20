import React from "react";
import { useState } from "react";
import { UseStateStyled } from "../../styles/Index";
import UseStateForm from "./UseStateForm";
import UseStateList from "./UseStateList";
const Usestate = () => {
  const [todos, setTodos] = useState([]);
  const addTodosHandler = (data) => {
    setTodos((prevState) => [
      ...prevState,
      { ...data, id: Date.now(), completed: false },
    ]);
  };

  return (
    <UseStateStyled>
      <UseStateForm addTodo={addTodosHandler} />
      <UseStateList todos={todos} />
    </UseStateStyled>
  );
};

export default Usestate;
