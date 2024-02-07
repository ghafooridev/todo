import React from "react";
import { deleteTodo, completeTodo } from "@/lib/features/todoSlice";
import { useAppDispatch } from "@/lib/hooks";

const TodoItem = ({ id, title, completed }: Todo) => {
  const dispatch = useAppDispatch();

  const onRemoveTask = () => {
    dispatch(
      deleteTodo({
        id,
      })
    );
  };

  const onCompleteTask = () => {
    dispatch(
      completeTodo({
        id,
      })
    );
  };
  return (
    <li className="task-item">
      <div className={completed ? "completed" : "unCompeleted"}>{title}</div>
      <div>
        <button className="button remove-task-button" onClick={onRemoveTask}>
          Delete
        </button>
        <button
          className="button complete-task-button"
          onClick={onCompleteTask}
        >
          {completed ? "active" : "complete"}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
