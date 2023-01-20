import React from "react";
import UseStateItem from "./UseStateItem";

const UseStateList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <UseStateItem {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default UseStateList;
