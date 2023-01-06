import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./page/Home";

import "./App.css";

function App() {
  // const [uniqueId, setUniqueId] = useState(3);
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const serverTasks = await fetchTasks();
      setTasks(serverTasks);
    };

    getTasks();
  }, []);

  //Fetch Tash
  const fetchTasks = async () => {
    const { data } = await axios.get("http://localhost:5000/tasks");
    return data;
  };

  //Edit Task
  const editTask = (task) => {
    const newTask = task ? { ...task } : task;
    setTaskToEdit(newTask);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Handle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
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
        taskToEdit={taskToEdit}
        handleAddTask={addTask}
        handleEditTask={editTask}
        handleDeleteTask={deleteTask}
        handleToggleReminder={toggleReminder}
      />
    </div>
  );
}

export default App;
