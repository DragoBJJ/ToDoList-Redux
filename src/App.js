import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { saveLocalToDos } from "./localStorage";

function App({ toDosInit }) {
  const [statusList, setStatusList] = useState("allItems");

  useEffect(() => {
    saveLocalToDos(toDosInit);
  }, [toDosInit]);

  return (
    <div className="App">
      <h1> James's ToDo List</h1>
      <Form setStatus={setStatusList} />
      <ToDoList status={statusList} />
    </div>
  );
}

const mapStateToProps = ({ toDosInit }) => ({ toDosInit });

export default connect(mapStateToProps, null)(App);
