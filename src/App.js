import {React, useState, useEffect} from 'react';
import TodoForm from './components/todo/form';
import TodoList from './components/todo/list';
import Header from './components/header';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';
import { v4 as uuidv4 } from 'uuid';

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
      { _id: uuidv4(), complete: true, text: 'Finish Form component', difficulty: 3, assignee: 'Peng Chen'},
      { _id: uuidv4(), complete: true, text: 'Debug List component', difficulty: 2, assignee: 'Peng Chen'},
      { _id: uuidv4(), complete: true, text: 'Finish bootstrap for app', difficulty: 4, assignee: 'Peng Chen'},
      { _id: uuidv4(), complete: false, text: 'Setup Xbox series X', difficulty: 1, assignee: 'Peng Chen'},
      { _id: uuidv4(), complete: false, text: 'Follow up with Nintendo Switch develivery', difficulty: 1, assignee: 'Peng Chen'},
    ];
    setList(initList);

  },[]);

  useEffect(()=>{
    document.title = `To Do List: ${list.filter(item => !item.complete).length}`;
  });

  return (
    <>
      <Header/>
      <Container className = 'p-3'>
        <h2 className = 'text-white bg-dark mt-3 p-3'>
        To Do List Manager ({list.filter(item => !item.complete).length})
        </h2>
        <Row className='font-weight-bold'>
          <Col lg={4} md={6} sm={12} className = 'p-3'>
            <TodoForm handleSubmit={addItem} />
          </Col>
          <Col lg={8} md={6} sm={12} className = 'p-3'>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

