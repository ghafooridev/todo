"use client";
import React, { useState } from "react";
import { addTodo } from "@/lib/redux/features/todoSlice";
import { useAppDispatch } from "@/lib/redux/hooks";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    if (title.trim().length === 0) {
      alert("Enter a task before adding !!");
      setTitle("");
      return;
    }

    dispatch(
      addTodo({
        title,
      })
    );

    setTitle("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={title}
        onChange={onChangeTitle}
      />

      <button className="task-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
