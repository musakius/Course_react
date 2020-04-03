import React from "react";

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import Filter from "../Filter";
import AddTask from "../TaskAdd";

import s from "./app.module.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: true, id: 1 },
    { label: "Go to a meeting", important: false, id: 2 },
    { label: "Cash withdraw", important: false, id: 3 }
  ];

  const onDelete = id => {
    console.log(id);
  };

  const onImportant = id => {
    console.log(id);
  };

  return (
    <div className={s["container_todo"]}>
      <Header toDo={1} done={3} />
      <div className={s["block_search"]}>
        <SearchPanel />
        <Filter />
      </div>
      <TodoList todo={todoData} onDelete={onDelete} onImportant={onImportant} />
      <AddTask />
    </div>
  );
};

export default App;
