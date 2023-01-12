import Task from './task'

const Tasks = ({ myTasks, handleDelete, onToggle }) => {
  return (
    <>
      {myTasks.map((task) => (
        <Task key= {task.id} task= {task} handleDelete={handleDelete} onToggle={onToggle}/>
      ))}
    </>
  );
};

export default Tasks;
