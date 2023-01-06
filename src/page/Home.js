import React from "react";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";

const Home = ({
  tasks,
  showAddTask,
  setShowAddTask,
  taskToEdit,
  handleDeleteTask,
  handleEditTask,
  handleAddTask,
  handleToggleReminder,
}) => {
  console.log(showAddTask);
  return (
    <div className="home">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        handleTask={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <Form handleAddTask={handleAddTask} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          taskToEdit={taskToEdit}
          handleAddTask={handleAddTask}
          handleEditTask={handleEditTask}
          handleDelete={handleDeleteTask}
          handleToggleReminder={handleToggleReminder}
        />
      ) : (
        "No Tasks Added"
      )}
    </div>
  );
};

export default Home;
