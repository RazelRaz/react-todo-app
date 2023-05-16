import '../src/styles.css'

const App = () => {
  return (
    <form className='new_item_form'>
      <div className='form_row'>
        <label htmlFor='item'>New Item</label>
        <input type='text' id='item' />
      </div>
      <button className='btn'>Add</button>
    </form>
  );
};

export default App;