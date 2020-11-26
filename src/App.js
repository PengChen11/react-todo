import React, {useState, useEffect, useContext} from 'react';
import TodoForm from './components/todo/form';
import TodoList from './components/todo/list';
import Header from './components/header';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import url from './url.js';
// import useAjax from './hooks/useAjax';
import axios from 'axios';
import {SettingsContext} from './context/settings.js';
import SettingsModal from './components/todo/settingsModal.js';

export default function App (){

  // const [setConfig, response, error] = useAjax();
  const [refresh, triggerRefresh] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  const settingsContext = useContext(SettingsContext);

  async function addItem (item) {
    console.log('item in app: ', item);
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
        console.log('current show status: ',settingsContext.settings.showCompleted );
        if (settingsContext.settings.showCompleted===false){
          let listData = data.filter(item => item.complete===false);
          setList(listData);
          
          return;
        }
        setList(data);
        setError(null);
      }
      catch (error){
        setError(error.message);
      }
    };
    getToDoList();
  }, [refresh, settingsContext.settings]);
  
  useEffect(()=>{
    document.title = `To Do List: ${list.filter(item => !item.complete).length}`;
  });

  function toggleSettings(){
    setShowSettings(!showSettings);
  }

  console.log('I am running');

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

