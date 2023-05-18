import { useState } from 'react';
import '../src/styles.css'
import NewTodoForm from './NewTodoForm';

const App = () => {


  const [todos, setTodos] = useState([])

  function addTodo(title) {
    // passing current value
    setTodos((currentTodos) => {
      return [...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  // console.log(todos);

  //for check the item
  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  // delete
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}></NewTodoForm>
      <h1>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos"}

        {
        todos.map (todo => {
            return (
              <li key={todo.id}>
                  <label>
                    <input type='checkbox' checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                    {todo.title}
                  </label>
                  <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
              </li>
            )
        })
        }
        
        
      </ul>
    </>
  );
};

export default App;