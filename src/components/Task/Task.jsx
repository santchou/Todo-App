import { TaskState } from "../../Context/TaskProvider";
import Button from "../Button/Button";
import "./Task.css";

const Task = ({ task }) => {
  const { deleteTask, toggleReminder } = TaskState();
  return (
    <div className="task">
      <div
        className={`task-items ${task.reminder ? "reminder" : ""}`}
        onClick={() => toggleReminder(task.id)}
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
          handleTask={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
