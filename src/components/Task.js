import React, { useState } from "react";
import checkImage from "../images/icon-check.svg";
import { setDoc, doc } from "firebase/firestore";
import db from "../utils/firebase";

function Task({ task, tasks, setTasks, user, filteredTasks }) {
  const [mutableTask, setMutableTask] = useState(task);

  const checked = mutableTask.status ? "checked" : "";
  const checkIcon = mutableTask.status ? (
    <img src={checkImage} alt="completed" />
  ) : (
    ""
  );

  const markCompleted = () => {
    setMutableTask({ ...mutableTask, status: !mutableTask.status });

    const docRef = doc(db, "users", user);

    let arrayRef = filteredTasks;
    const index = filteredTasks.indexOf(task);
    arrayRef[index].status = true;

    const payload = {
      tasks: arrayRef,
    };

    setDoc(docRef, payload);
  };

  return (
    <div className="todo-item">
      <div className="check" onClick={markCompleted}>
        <div className={`check-mark ${checked}`}>{checkIcon}</div>
      </div>
      <div className={`todo-text ${checked}`}>{task.text}</div>
    </div>
  );
}

export default Task;
