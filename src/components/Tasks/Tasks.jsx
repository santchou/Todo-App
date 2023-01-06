import Task from "../Task/Task";

const Tasks = ({ tasks, handleDelete, handleToggleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleToggleReminder={handleToggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
