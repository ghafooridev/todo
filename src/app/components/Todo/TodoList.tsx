"use client";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useAppSelector } from "@/lib/redux/hooks";

const TodoList = () => {
  const [list, setList] = useState<Todo[]>([]);
  const todos = useAppSelector((state) => {
    return state.todo.todo;
  });
  const filtered = useAppSelector((state) => {
    return state.todo.filtered;
  });

  useEffect(() => {
    if (filtered) return setList(todos.filter((item: Todo) => item.completed));
    return setList(todos);
  }, [filtered, todos]);

  return (
    <ul className="tasks-list">
      {list.map((item: Todo) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
