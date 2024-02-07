import React from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
