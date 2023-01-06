import Button from "../Button/Button";
import "./Task.css";

const Task = ({ task, handleDelete, handleToggleReminder }) => {
  return (
    <div className="task">
      <div
        className={`task-items ${task.reminder ? "reminder" : ""}`}
        onClick={() => handleToggleReminder(task.id)}
      >
        <p>{task.title}</p>
        <span>{task.dateAndTime}</span>
      </div>
      <div className="task-actions">
        <Button
          name="Delete"
          color="white"
          backgroundColor="red"
          task={task}
          handleTask={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
