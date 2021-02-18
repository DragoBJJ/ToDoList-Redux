import React, { useState, useEffect } from "react";
import { COMPLETE, UNCOMPLETE } from "../switchOptions";
import { connect } from "react-redux";
import ToDo from "./ToDo";

const ToDoList = ({ toDosInit, status }) => {
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [toDosInit, status]);

  const filterHandler = () => {
    switch (status) {
      case COMPLETE:
        setFilteredToDos(toDosInit.filter(item => item.complete));
        break;
      case UNCOMPLETE:
        setFilteredToDos(toDosInit.filter(item => !item.complete));
        break;
      default:
        setFilteredToDos(toDosInit);
        break;
    }
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.length ? (
          filteredToDos.map(item => <ToDo key={item.id} {...item} />)
        ) : (
          <h2>{`Your ${status} list is empty`}</h2>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ toDosInit }) => ({
  toDosInit
});

export default connect(mapStateToProps, null)(ToDoList);
