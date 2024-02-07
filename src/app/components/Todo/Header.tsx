"use client";
import React, { useEffect, useRef, useState } from "react";
import { deleteCompleted, filterCompleted } from "@/lib/redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

const Header = () => {
  const dispatch = useAppDispatch();

  const [filtered, setFiltered] = useState(false);

  const handleChange = () => {
    setFiltered(!filtered);
  };

  const onRemoveCompleted = () => {
    dispatch(deleteCompleted());
  };

  useEffect(() => {
    dispatch(filterCompleted({ filtered }));
  }, [filtered]);

  return (
    <div className="header">
      <label>
        <input type="checkbox" checked={filtered} onChange={handleChange} />
        Completed
      </label>
      <h2 className="app-title">My Tasks</h2>
      <button className="button remove-task-button" onClick={onRemoveCompleted}>
        Delete Completed
      </button>
    </div>
  );
};

export default Header;
