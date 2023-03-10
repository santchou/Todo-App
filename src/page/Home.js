import React from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";

const Home = ({
  tasks,
  showAddTask,
  setShowAddTask,
  handleDeleteTask,
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
          handleAddTask={handleAddTask}
          handleDelete={handleDeleteTask}
          handleToggleReminder={handleToggleReminder}
        />
      ) : (
        "No Tasks Added"
      )}

      <Footer />
    </div>
  );
};

export default Home;
