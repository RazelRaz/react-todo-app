import { useState } from 'react';
import '../src/styles.css'

const App = () => {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()
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
        <li>
          <label>
            <input type='checkbox' />
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Item 2
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  );
};

export default App;