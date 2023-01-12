const Task = ({task, handleDelete, onToggle}) => {
  return (

    <div className= {`task ${task.reminder ? 'toggle' : ''}`} onDoubleClick={ () => onToggle(task.id)}>

    <h3> <span className='span'> {task.text} <span class= 'iconspan' onClick={() => { handleDelete(task.id)}}> x </span> </span></h3>

    <p> {task.date} </p> 
    </div>
  );
};

export default Task;