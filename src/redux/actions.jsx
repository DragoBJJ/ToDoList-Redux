export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const FILTER_TODO = "FILTER_TODO";

export const addToDo = (itemType, toDo) => {
  return {
    type: ADD_TODO,
    payload: {
      itemType,
      toDo
    }
  };
};
export const deleteToDo = (itemType, id) => {
  return {
    type: DELETE_TODO,
    payload: {
      itemType,
      id
    }
  };
};

export const updateToDo = (itemType, id) => {
  return {
    type: UPDATE_TODO,
    payload: {
      itemType,
      id
    }
  };
};
