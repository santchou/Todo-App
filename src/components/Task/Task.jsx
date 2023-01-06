import Button from "../Button/Button";
import "./Task.css";

const Task = ({
  task,
  taskToEdit,
  handleEditTask,
  handleDelete,
  handleToggleReminder,
}) => {
  const isEditing = taskToEdit?.id === task.id;

  const totoEditTitle = (e) => {
    const newTitle = e.target.value;
    handleEditTask({ ...taskToEdit, title: newTitle });
  };

  const doneEdit = () => {
    console.log("done");
  };
  return (
    <div className="task">
      <div
        className={`task-items ${task.reminder ? "reminder" : ""}`}
        onClick={() => handleToggleReminder(task.id)}
      >
        {!isEditing && <p>{task.title}</p>}
        {isEditing && (
          <input
            type="text"
            value={taskToEdit.title}
            onChange={totoEditTitle}
          />
        )}

        <span>{task.dateAndTime}</span>
      </div>
      <div className="task-actions">
        {!isEditing && (
          <Button
            handleTask={() => handleEditTask(task)}
            name="Edit"
            color="white"
            backgroundColor="blue"
          />
        )}
        {isEditing && (
          <Button
            handleTask={doneEdit}
            name="Done"
            color="white"
            backgroundColor="blue"
          />
        )}

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
