import React, {useState, useEffect, useContext, useCallback} from 'react';
import TodoForm from './form';
import TodoList from './list';
import {Container, Row, Col, Button} from 'react-bootstrap';
// import useAjax from './hooks/useAjax';
import axios from 'axios';
import SettingsModal from './settingsModal.js';
import {LoginContext} from '../../context/auth/context.js';
import Auth from '../../context/auth/auth.js';
import {If, Then, Else} from 'react-if';
import ReactLoading from 'react-loading';

export default function Todo (){

  // const [setConfig, response, error] = useAjax();
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const {authenticatedUser} = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(false);
  const url = process.env.REACT_APP_TODO_URL;
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
      headers: {
        Authorization: `Bearer ${authenticatedUser.token}`,
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
      headers: {
        Authorization: `Bearer ${authenticatedUser.token}`,
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
      headers: {
        Authorization: `Bearer ${authenticatedUser.token}`,
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
      list.splice(itemIndex,1);
      let newList = [...list];
      setList(newList);
    }
  }

  
  const fetchToDoList = useCallback(async ()=>{
    let fetchUrl;
    setIsLoading(true);
    if (authenticatedUser.role === 'user'){
      fetchUrl = url+`/assignee/${authenticatedUser.username}`;
    } else fetchUrl = url;
    const config = {
      method: 'get',
      url: fetchUrl,
      headers: {
        Authorization: `Bearer ${authenticatedUser.token}`,
      },
    };
    try{
      const {data} = await axios(config);
      setList(data);
      setError(null);
      setIsLoading(false);
    }
    catch (error){
      setError(error.message);
      setIsLoading(false);
    }
  },[authenticatedUser, url]);

  // Runs on app load, modifying items, and change settings. Pulls all the list items from data server
  useEffect( () => {
    const getToDoList =  async () => {

      await fetchToDoList();
    };
    getToDoList();
  }, [fetchToDoList]);
  

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
      <Container className = 'p-3'>
        <h2 className = 'text-white bg-dark mt-3 p-3'>
        To Do List Manager ({list.filter(item => !item.complete).length})
          <Button className='float-right' variant="primary" onClick={toggleSettings}>Settings</Button>
        </h2>
        <SettingsModal show={showSettings} handleClose={toggleSettings} ></SettingsModal>
        <Row className='font-weight-bold'>
          <Auth capability={'create'}>
            <Col lg={4} md={6} sm={12} className = 'p-3'>
              <TodoForm handleSubmit={addItem} />
            </Col>
          </Auth>
          <Col className = 'p-3'>
            <If condition={isLoading}>
              <Then>
                <ReactLoading type={'bars'} color={'grey'} width={150} className='m-auto' />
              </Then>
              <Else>
                <TodoList
                  list={list}
                  handleComplete={toggleComplete}
                  handleDelete={deleteItem}
                  error={error}
                />
              </Else>
            </If>
          </Col>
        </Row>
      </Container>
    </>
  );
}

