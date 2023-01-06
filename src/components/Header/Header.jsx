import Button from "../Button/Button";

import "./Header.css";

const Header = ({ title, handleTask, showAddTask }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        handleTask={handleTask}
        name={showAddTask ? "Close" : "Add"}
        color="white"
        backgroundColor={showAddTask ? "red" : "green"}
      />
    </div>
  );
};

export default Header;
