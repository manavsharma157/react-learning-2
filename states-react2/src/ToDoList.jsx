import React from "react";
import { useState } from "react";

export default function ToDoList() {
  let [toDos, setTodos] = useState(["sample Task"]);
  let [newTodo, setNewTodo] = useState("");

// triggered when Add Task button is clicked
  let addNewTask = () => {
    // console.log("added");
    setTodos((prev) => {
      return [...prev, newTodo]; // create a new array with the previous tasks and the new task
    });
    setNewTodo(""); // clear the input field after adding the task
  };

// triggered when input field value changes
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value); // set the value of newTodo to the input field value
    console.log({newTodo});
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
        {toDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
