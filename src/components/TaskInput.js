import React, { useState } from "react";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import db from "../utils/firebase";

function TaskInput({ tasks, setTasks, user, filteredTasks }) {
  const createId = (array) => {
    const ids = array.map((item) => item.id);
    return Math.max(...ids) + 1;
  };

  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "users", user);

    const newTask = {
      status: false,
      text: input.trim(),
    };
    let tasksRef = filteredTasks;
    tasksRef.push(newTask);

    const payload = {
      tasks: tasksRef,
    };
    setDoc(docRef, payload);
    setInput("");
  };

  return (
    <div className="new-todo">
      <div className="check">
        <div className="check-mark"></div>
      </div>
      <div className="new-todo-input">
        <form onSubmit={handleForm}>
          <input
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="Create a new todo..."
          ></input>
        </form>
      </div>
    </div>
  );
}

export default TaskInput;
