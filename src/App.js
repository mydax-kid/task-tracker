import "./styles.css";
import Header from "./header";
import Tasks from "./tasks";
import { useState } from "react";
import AddTask from './addTask'

function App() {
  const [myTasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      date: "10th Jan 2021",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at school",
      date: "12th Jan 2021",
      reminder: false
    },
    {
      id: 3,
      text: "Prepare for a picnic",
      date: "15th Jan 2021",
      reminder: true
    }
  ]);

  const [add, setAdd] = useState(false)

  const addEvent= () => {
    setAdd(!add)
  }

  const handleDelete = (id) => {
     setTasks(myTasks.filter((task) => task.id !== id))
  }

  const onToggle= (id) => {
    setTasks(
      myTasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  } 

  const newTask = (task) => {
    console.log(task)
     const id= Math.floor(Math.random() * 10000 ) + 5
     const newTaskObj= {id, ...task}
     console.log(newTaskObj)
     setTasks([...myTasks, newTaskObj])
  }

  return (
    <div className="container">
      <Header 
      title="Task tracker" 
      addEvent = {addEvent}
      add = {add}
      />

      { add && <AddTask newTask={newTask} />}
      
      { myTasks.length > 0 ? <Tasks myTasks={myTasks} handleDelete={handleDelete} onToggle={onToggle}/> : "no tasks to show"}

    </div>
  );
}

export default App;
