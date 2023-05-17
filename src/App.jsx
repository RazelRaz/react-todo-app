import { useState } from 'react';
import '../src/styles.css'

const App = () => {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    // passing current value
    setTodos((currentTodos) => {
      return [...currentTodos, 
        { id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
    setNewItem("")
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
      <form onSubmit={handleSubmit} className='new_item_form'>
        <div className='form_row'>
          <label htmlFor='item'>New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item' />
        </div>
        <button className='btn'>Add</button>
      </form>
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