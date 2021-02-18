import { initialState } from "./state";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

export let reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType], payload.toDo]
      };
    case DELETE_TODO:
      return {
        ...state,
        [payload.itemType]: [
          ...state[payload.itemType].filter(item => item.id !== payload.id)
        ]
      };
    case UPDATE_TODO:
      return {
        ...state,
        [payload.itemType]: [
          ...state[payload.itemType].map(item => {
            if (item.id !== payload.id) return item;
            return {
              ...item,
              complete: !item.complete
            };
          })
        ]
      };
    default:
      return state;
  }
};
