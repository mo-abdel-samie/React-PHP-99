import { createContext, useContext, useState } from "react";

const ToDosContext = createContext({
  tasks: [],
  newTaskTitle: "",
  setNewTaskTitle: () => {},
  addTask: () => {},
  updateTask: () => {},
  removeTask: () => {},
  clearAll: () => {},
});

export const useToDos = () => useContext(ToDosContext);

export const ToDosProvider = ({ children }) => {
  const [newTaskTitle, setNewTaskTitle] = useState();
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks((pre) => [{ title: newTaskTitle, status: false }, ...pre]);
    setNewTaskTitle("");
  };

  const updateTask = () => {};
  const removeTask = () => {};
  const clearAll = () => {};

  return (
    <ToDosContext.Provider
      value={{
        tasks,
        newTaskTitle,
        setNewTaskTitle,
        addTask,
        updateTask,
        removeTask,
        clearAll,
      }}
    >
      {children}
    </ToDosContext.Provider>
  );
};
