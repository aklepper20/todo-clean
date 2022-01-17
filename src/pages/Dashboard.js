import React from "react";
import { Navigate } from "react-router";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";
import { onSnapshot, collection, doc } from "firebase/firestore";
import db, { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

function Dashboard() {
  const data = [];
  const [tasks, setTasks] = useState(data);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser.uid) {
        setUser(currentUser.uid);
      } else {
        console.log("please sign in");
      }
    });
    onSnapshot(doc(db, "users", `${user}`), (snapshot) => {
      let todos = snapshot
        .data()
        .tasks.map((task, id) => ({ ...task, id: id }));
      const handleFilter = () => {
        if (filterStatus === "active") {
          return setFilteredTasks(
            todos.filter((task) => task.status === false)
          );
        } else if (filterStatus === "completed") {
          return setFilteredTasks(todos.filter((task) => task.status === true));
        } else {
          return setFilteredTasks(todos);
        }
      };
      handleFilter();
    });
  }, [user, tasks, filterStatus]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    window.location = "/";
  };

  return (
    <div className="dashboard">
      <div className="container">
        <div className="header">
          <div className="title">TODO</div>
          <div className="theme">
            <img src="./images/icon-sun.svg" alt="theme" />
          </div>
        </div>

        <TaskInput
          tasks={tasks}
          setTasks={setTasks}
          user={user}
          filteredTasks={filteredTasks}
        />

        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          setFilterStatus={setFilterStatus}
          filterStatus={filterStatus}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
          user={user}
        />
      </div>
      <h3 onClick={logout}>LOGOUT</h3>
    </div>
  );
}

export default Dashboard;
