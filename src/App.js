import {React, useState, useEffect} from 'react';
import TodoForm from './components/todo/form';
import TodoList from './components/todo/list';
import Header from './components/header';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';

export default function App (){
  let [list, setList] = useState([]);
  
  function addItem (item) {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  }

  function toggleComplete (id) {

    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  }

  useEffect(()=>{
    let initList = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];
    setList(initList);
  },[]);

  return (
    <>
      <Header/>
      <main className='container'>
        <h2 className = 'text-white bg-dark mt-3 p-3'>
        To Do List Manager ({list.filter(item => !item.complete).length})
        </h2>
        <section className="todo">
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </main>
    </>
  );
}

