import React from 'react'

function Todo(props) {
   
  return (
    <div className='todo' >
        <div style={{textDecoration:props.todo.complete?"line-through":""}} className='todoText'onClick={props.toggleComplete}>{props.todo.text}</div>
        <button className='delete-btn' onClick={props.onDelete}>x</button>

    </div>
    
  )
}

export default Todo