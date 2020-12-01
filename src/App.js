import React, {useState, useEffect} from 'react';
import TodoForm from './components/todo/form';
import TodoList from './components/todo/list';
import Header from './components/header';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import url from './url.js';
// import useAjax from './hooks/useAjax';
import axios from 'axios';
import SettingsModal from './components/todo/settingsModal.js';

export default function App (){

  // const [setConfig, response, error] = useAjax();
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  /**
   * 
   * @param {obj} item take an obj and save to database
   */
  async function addItem (item) {
    const config = {
      method: 'post',
      url,
      data: {
        ...item,
        complete:false,
      },
    };
    if (!config.data.difficulty) {
      config.data.difficulty=1;
    }
    try {
      await axios(config);
      await fetchToDoList();
      setError(null);
    }
    catch (error){
      setError(error.message);
    }
  }

  /**
   * 
   * @param {string} id update the givin itme's complete status in database
   */
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
      localRefresh();
      setError(null);
    }
    catch (error){
      setError(error.message);
    }
    
    function localRefresh(){
      item.complete = !item.complete;
      let newList = [...list];
      setList(newList);
    }
  }

  /**
   * 
   * @param {string} id delete the givin itme from database
   */
  async function deleteItem(id){
    let item = list.filter(i => i._id === id)[0] || {};
    const itemIndex = list.indexOf(item);

    const config = {
      method: 'delete',
      url: `${url}/${id}`,
    };
    try {
      await axios(config);
      localRefresh();
      setError(null);
    }
    catch (error){
      setError(error.message);
    }
    function localRefresh(){
      list.splice(itemIndex,1);
      let newList = [...list];
      setList(newList);
    }
  }

  
  async function fetchToDoList (){
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
  }

  // Runs on app load, modifying items, and change settings. Pulls all the list items from data server
  useEffect( () => {
    const getToDoList =  async () => {
      await fetchToDoList();
    };
    getToDoList();
  }, []);
  

  // update title
  useEffect(()=>{
    document.title = `To Do List: ${list.filter(item => !item.complete).length}`;
  });


  // function to toggle settings modal 
  function toggleSettings(){
    setShowSettings(!showSettings);
  }

  return (
    <>
      <Header/>
      <Container className = 'p-3'>
        <h2 className = 'text-white bg-dark mt-3 p-3'>
        To Do List Manager ({list.filter(item => !item.complete).length})
          <Button className='float-right' variant="primary" onClick={toggleSettings}>Settings</Button>
        </h2>
        <SettingsModal show={showSettings} handleClose={toggleSettings} ></SettingsModal>
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

