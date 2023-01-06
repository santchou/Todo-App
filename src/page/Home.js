import React from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";
import { TaskState } from "../Context/TaskProvider";

const Home = ({ showAddTask, setShowAddTask }) => {
  const { tasks } = TaskState();
  return (
    <div className="home">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        handleTask={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <Form />}

      {tasks.length > 0 ? <Tasks /> : "No Tasks Added"}

      <Footer />
    </div>
  );
};

export default Home;
