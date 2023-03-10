import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./page/Home";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const serverTasks = await fetchTasks();
      setTasks(serverTasks);
    };

    getTasks();
  }, []);

  //Fetch Tashs
  const fetchTasks = async () => {
    const { data } = await axios.get("http://localhost:5000/tasks");
    return data;
  };

  //Fetch Task
  const fetchTask = async (id) => {
    const { data } = await axios.get(`http://localhost:5000/tasks/${id}`);
    return data;
  };

  //Delete Task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Handle Reminder
  const toggleReminder = async (id) => {
    const toogleTask = await fetchTask(id);
    const updateTask = { ...toogleTask, reminder: !toogleTask.reminder };
    const { data } = await axios.put(
      `http://localhost:5000/tasks/${id}`,
      updateTask
    );
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //Add Task
  const addTask = async ({ title, selectedDateTime, reminder }) => {
    const { data } = await axios.post("http://localhost:5000/tasks", {
      title,
      dateAndTime: selectedDateTime?.toString()?.slice(0, 24),
      reminder,
    });

    setTasks([...tasks, data]);
  };

  return (
    <div className="container">
      <Home
        tasks={tasks}
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
        handleAddTask={addTask}
        handleDeleteTask={deleteTask}
        handleToggleReminder={toggleReminder}
      />
    </div>
  );
}

export default App;
