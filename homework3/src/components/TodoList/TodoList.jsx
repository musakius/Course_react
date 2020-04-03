import React from "react";
import TodoListItem from "../TodoListItem";
import s from "./TodoList.module.css";

const TodoList = ({ todo, onDelete, onImportant }) => {
  const elements = todo.map(item => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onImportant={() => onImportant(id)}
      />
    );
  });

  return <ul className={s["list_todo"]}>{elements}</ul>;
};

export default TodoList;
