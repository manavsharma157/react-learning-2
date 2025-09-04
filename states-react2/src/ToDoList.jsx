import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [toDos, setTodos] = useState([
    { task: "sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  // triggered when Add Task button is clicked
  let addNewTask = () => {
    // console.log("added");
    setTodos((prev) => {
      //   if (newTodo.trim() === "") return; // prevent empty tasks
      return [...prev, { task: newTodo, id: uuidv4() }]; // create a new array with the previous tasks and the new task
    });
    setNewTodo(""); // clear the input field after adding the task
  };

  // triggered when input field value changes
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value); // set the value of newTodo to the input field value
    console.log({ newTodo });
  };

  let deleteTodo = (id) => {
    // console.log({id});
    // let copy = toDos.filter((todo) => todo.id != id); // create a new array without the task with the given id
    // // console.log({copy});
    // setTodos(copy); // update the state with the new array
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id); // create a new array without the task with the given id
    });
  };

  let upperCaseAll = () => {
    let newArr = toDos.map((todo) => {
      return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
    });
    setTodos(newArr); //pass the new array to setTodos
  };

  let upperCaseOne = (id) => {
    let newArr = toDos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      } else {
        return todo;
      }
    });
    setTodos(newArr);
  };

  let markAsDone = (id) => {
    let newArr = toDos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: true,
        };
      } else {
        return todo;
      }
    });
    setTodos(newArr);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>

      <hr></hr>
      <h4>Tasks ToDo</h4>

      <ul>
        {/* // will loop through the toDos array and display each task as a list item */}
        {/* react requires a unique key prop for each item in a list to help with efficient rendering */}
        {toDos.map((todo) => 
        (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task}</span>
            &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp; &nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>
            &nbsp; &nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>

      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
}
