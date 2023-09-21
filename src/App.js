import {React,useState} from "react"
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
function App() {
let [todos,setTodos]=useState([]);
let [todosToShow,setTodosToShow]=useState("all");
let [toggleAllComplete,settoggleAllComplete]=useState(true);

const addTodo=(todo)=>{
  setTodos([todo,...todos]);
}
const handleDelete = (id)=>{
  setTodos(todos.filter((todo)=>todo.id !== id));
}
const updateTodosToShow=(s)=>{
  setTodosToShow(s);
}
if(todosToShow==="active"){
 todos=todos.filter((todo)=>!todo.complete);
}else if (todosToShow==="complete"){
  todos=todos.filter((todo)=>todo.complete);
}
const removeAllComplete=()=>{
  setTodos(
    todos.filter((todo)=> !todo.complete )
  );
}
const handleToggleComplete=(id)=>{
setTodos(todos.map((todo)=>{
  if(todo.id===id){
    return {
      ...todo,
      complete: !todo.complete
    };
  } else{
    return todo;
  }
}));
}
  return (
    <div className='container'>
    <TodoForm onSubmit={addTodo} />
    {todos.map((todo) => (
    <Todo key={todo.id} todo={todo} onDelete={()=>handleDelete(todo.id)} toggleComplete={()=>handleToggleComplete(todo.id)} />
    ))}
     <div>
      <button className="updated-btn btn" onClick={()=>updateTodosToShow("all")}>All tasks</button>
      <button className="updated-btn btn" onClick={()=>updateTodosToShow("active")}>Active tasks</button>
      <button className="updated-btn btn" onClick={()=>updateTodosToShow("complete")}>Completed tasks</button>

     </div>
  {todos.some((todo)=>todo.complete)?   <button className="btn updated-btn" onClick={(removeAllComplete)}>Remove all complete tasks</button>:null}
     <button className="btn updated-btn" onClick={()=>{setTodos(
      todos.map((todo)=>({...todo,complete:toggleAllComplete})));
      settoggleAllComplete(!toggleAllComplete);
      }}>Toggle all complete: {`${toggleAllComplete}`}</button>

    </div>
    
    
   
    
    );
}

export default App;
