import { TaskState } from "../../Context/TaskProvider";
import Task from "../Task/Task";

const Tasks = () => {
  const { tasks } = TaskState();
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
