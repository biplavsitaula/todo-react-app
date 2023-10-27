import './App.css';
import React, {useState} from 'react';

const App=()=>{
  const[inputTask, setInputTask]= useState('');
  const [list, setList] = useState([]);

  const handleAddTodo =()=>{
    const newTask = {
      id: Math.random(),
      todo: inputTask
    };
    setList([...list, newTask]);
    setInputTask('');
  };
  const handleDeleteTodo = (id) =>{
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  const handleInputChange= (event)=>{
    setInputTask(event.target.value);
  };
  return(
    <div className='Todo'>
      <h1>My-Todo-List</h1>
      <div className='Top'>
        <input className='input' type='text' value={inputTask}
        onChange={handleInputChange} placeholder='Enter Todo' />
        <button className='btn' onClick={handleAddTodo}>ADD</button>
      </div>
      <ul>
        {
          list.map((todo) => (
            <li className='task' key={todo.id}>
              {todo.todo}
              <button className='delete' onClick={()=> handleDeleteTodo(todo.id)}>DELETE</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
