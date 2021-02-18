import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../redux/actions";

const Form = ({ addItems, setStatus }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = ({ target }) => {
    setInputText(target.value);
  };

  const submitToDoHandler = e => {
    e.preventDefault();
    if (inputText === "") return;
    const toDo = {
      text: inputText,
      complete: false,
      id: Math.floor(Math.random() * 1000)
    };
    addItems(toDo);
    setInputText("");
  };

  //Ustawiamy status listy metodą podaną z komponentu wyżej w hierarchi
  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
    <form action="">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={statusHandler}
          name="todos"
          id="todos"
          className="filter-todo"
        >
          <option value="all-Items">All</option>
          <option value="complete">Complete</option>
          <option value="uncomplete">Uncoplete</option>
        </select>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addItems: toDo => dispatch(addToDo("toDosInit", toDo))
});

export default connect(null, mapDispatchToProps)(Form);
