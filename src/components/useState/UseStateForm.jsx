import React, { useState } from "react";
const initialState = {
  name: "",
  lastName: "",
  phonenumber: "",
};
const UseStateForm = ({ addTodo }) => {
  const [formValue, setFormValue] = useState(initialState);

  const changeForValueHandler = (key) => {
    return (e) => {
      setFormValue((prevState) => ({ ...prevState, [key]: e.target.value }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(formValue);
    setFormValue(initialState);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="">
          Name:
          <input
            type="text"
            value={formValue.name}
            onChange={changeForValueHandler("name")}
          />
        </label>
        <label htmlFor="">
          lastName:{" "}
          <input
            type="text"
            value={formValue.lastName}
            onChange={changeForValueHandler("lastName")}
          />
        </label>
        <label htmlFor="">
          Phone Number:{" "}
          <input
            type="number"
            value={formValue.phonenumber}
            onChange={changeForValueHandler("phonenumber")}
          />
        </label>

        <button> add</button>
      </form>
    </>
  );
};

export default UseStateForm;
