export const saveLocalToDos = items => {
  localStorage.setItem(`toDos`, JSON.stringify(items));
};
