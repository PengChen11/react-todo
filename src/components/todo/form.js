import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TodoForm (props){

  var [item, setItem] = useState({});

  function handleInputChange (e){
    setItem( {...item, [e.target.name]: e.target.value } );
  }

  function handleSubmit (e) {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  }

  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </label>
        <button className='btn btn-primary'>Add Item</button>
      </form>
    </>
  );
}
TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
};
