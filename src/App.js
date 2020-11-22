import {React, useState, useEffect} from 'react';
import TodoForm from './components/todo/form';
import TodoList from './components/todo/list';
import Header from './components/header';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import url from './url.js';
// import useAjax from './hooks/useAjax';
import axios from 'axios';

export default function App (){

  // const [setConfig, response, error] = useAjax();
  const [refresh, triggerRefresh] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  async function addItem (item) {
    const config = {
      method: 'post',
      url,
      data: {
        ...item,
        complete:false,
      },
    };
    try {
      await axios(config);
      triggerRefresh(!refresh);
      setError(null);
    }
    catch (error){
      setError(error.message);
    }
  }

  async function toggleComplete (id) {
    let item = list.filter(i => i._id === id)[0] || {};

    const config = {
      method: 'put',
      url: `${url}/${id}`,
      data: {
        ...item,
        complete:!item.complete,
      },
    };
    try {
      await axios(config);
      triggerRefresh(!refresh);
      setError(null);
    }
    catch (error){
      setError(error.message);
    }
  }

  async function deleteItem(id){
    const config = {
      method: 'delete',
      url: `${url}/${id}`,
    };
    try {
      await axios(config);
      triggerRefresh(!refresh);
      setError(null);
    }
    catch (error){
      setError(error.message);
    }
  }


  // Runs on app load
  useEffect( () => {
    const getToDoList =  async () => {
      const config = {
        method: 'get',
        url,
      };
      try{
        const {data} = await axios(config);
        setList(data);
        setError(null);
      }
      catch (error){
        setError(error.message);
      }
    };
    getToDoList();
  }, [refresh]);
  
  console.log('list', list);
  
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
              handleDelete={deleteItem}
              error={error}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

