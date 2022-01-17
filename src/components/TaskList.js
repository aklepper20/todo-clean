import React from "react";
import Task from "./Task";
import FilterControl from "./FilterControl";
import { deleteDoc, doc, setDoc } from "@firebase/firestore";
import db from "../utils/firebase";

function TaskList({
  tasks,
  setFilterStatus,
  filterStatus,
  filteredTasks,
  setTasks,
  user,
}) {
  const clearCompleted = () => {
    const docRef = doc(db, "users", user);
    let arrayRef = filteredTasks.filter((task) => task.status === false);
    const payload = {
      tasks: arrayRef,
    };
    setDoc(docRef, payload);
  };

  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        {filteredTasks.map((item) => {
          return (
            <Task
              task={item}
              key={item.id}
              tasks={tasks}
              setTasks={setTasks}
              user={user}
              filteredTasks={filteredTasks}
            />
          );
        })}
      </div>
      <div className="todo-items-info">
        <div className="items-left">
          <p> {filteredTasks.length} items left</p>
        </div>
        <FilterControl
          setFilterStatus={setFilterStatus}
          filterStatus={filterStatus}
        />
        <div className="items-clear">
          <span onClick={clearCompleted}>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
