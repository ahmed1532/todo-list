import {React,useState} from 'react'
import shortid from 'shortid';


const TodoForm = (props) => {
    const [task , addTask]=useState('');
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(task!==""){
            props.onSubmit({
                id: shortid.generate(),
                text:task,
                complete:false,
    
            });
            addTask("");
        }
        } 
   
  return (
   
    <form  onSubmit={handleSubmit}>
        <input className='input-field' type='text' onChange={(e)=>addTask(e.target.value)} value={task}/>
        <button className='btn' onClick={handleSubmit}>Add Task</button>
    </form>
  )
}

export default TodoForm