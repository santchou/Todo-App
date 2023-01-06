import { useState } from "react";
import "./App.css";
import Home from "./page/Home";

function App() {
  const [uniqueId, setUniqueId] = useState(3);
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);

  //Edit Task
  const editTask = (task) => {
    const newTask = task ? { ...task } : task;
    setTaskToEdit(newTask);
  };

  //Delete Task
  const deleteTask = (id) => {
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
  const addTask = ({ title, selectedDateTime, reminder }) => {
    // console.log(title, selectedDateTime, reminder);
    setUniqueId(uniqueId + 1);
    setTasks([
      ...tasks,
      {
        id: uniqueId,
        title: title,
        dateAndTime: selectedDateTime?.toString()?.slice(0, 24),
        reminder: reminder,
      },
    ]);
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
