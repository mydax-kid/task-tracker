import {useState} from 'react'

const AddTask = ({newTask}) => {

  const [text, setText] = useState('');
  const [date, setTime] = useState('');
  const [reminder, setReminder] = useState(false)

  const onSubmit= (e) => {
    e.preventDefault()

    if(!text){
      alert('please add task first')
      return
    }
    newTask({text,date, reminder})

    setText('')
    setTime('')
    setReminder(false)
  }

  return(
    <form className='form' onSubmit={onSubmit}>

      <div className='form-div'>
        <label>Task</label>
        <input 
        type='text' 
        value={text} 
        placeholder='Add task' 
        onChange= {(e) => setText(e.target.value)} 
        />
      </div>

      <div className='form-div'>
        <label>Day & Time</label>
        <input 
        type='date' 
        value={date} 
        placeholder='Add day and time' 
        onChange= {(e) => setTime(e.target.value)}
        />
      </div>

      <div className='form-div check'>
        <label>Set reminder</label>
        <input 
        type='checkbox' 
        value={reminder} 
        className='checkbox' 
        onChange= { (e) => setReminder(e.currentTarget.checked)} 
        checked= {reminder}
        />
      </div>

      <input type='submit' value='save task' className='submit' />
    </form>
  )
}

export default AddTask;