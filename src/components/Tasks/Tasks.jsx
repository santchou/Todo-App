import Task from "../Task/Task";

const Tasks = ({
  tasks,
  taskToEdit,
  handleEditTask,
  handleDelete,
  handleToggleReminder,
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          taskToEdit={taskToEdit}
          handleEditTask={handleEditTask}
          handleDelete={handleDelete}
          handleToggleReminder={handleToggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
