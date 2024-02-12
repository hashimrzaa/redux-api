import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtodo,
  edittodo,
  removetodo,
} from "./config/redux-config/reducers/todoslice";

const App = () => {
  const todoref = useRef();

  const distpach = useDispatch();
  const selector = useSelector((state) => state.todos);

  const addTodoReducer = (event) => {
    event.preventDefault();
    distpach(
      addtodo({
        title: todoref.current.value,
      })
    );
    todoref.current.value = "";
  };

  function deleteTodo(index) {
    distpach(
      removetodo({
        index: index,
      })
    );
  }
  function updateTodo(index) {
    distpach(
      edittodo({
        index: index,
        
      })
    );
  }
  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={addTodoReducer}>
        <input type="text" placeholder="todo" ref={todoref} required/>
        <button type="submit">add todo</button>
      </form>
      <ul>
        {selector.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => deleteTodo(index)}>delete</button>
              <button
                onClick={() => {
                  updateTodo(index);
                }}
              >
                edit
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
