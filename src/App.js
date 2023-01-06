import { useState } from "react";

import Home from "./page/Home";

import "./App.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="container">
      <Home showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
    </div>
  );
}

export default App;
