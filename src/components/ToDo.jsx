import React from "react";
import { connect } from "react-redux";
import { deleteToDo, updateToDo } from "../redux/actions";

const ToDo = ({ updateItem, deleteItem, text, id, complete }) => {
  return (
    <div className="todo">
      <li className={`todo-item  ${complete ? "completed" : ""}`}>{text}</li>
      <button
        onClick={() => updateItem("toDosInit", id)}
        className="complete-btn"
      >
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteItem("toDosInit", id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  deleteItem: (itemType, id) => dispatch(deleteToDo(itemType, id)),
  updateItem: (itemType, id) => dispatch(updateToDo(itemType, id))
});

export default connect(null, mapDispatchToProps)(ToDo);
