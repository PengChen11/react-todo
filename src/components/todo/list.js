import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {Alert, Toast, Pagination} from 'react-bootstrap';
import {If, Then, Else} from 'react-if';
import {SettingsContext} from '../../context/settings.js';
import {LoginContext} from '../../context/auth/context.js';


export default function TodoList (props){
  
  const settingsContext = useContext(SettingsContext);
  const {showCompleted, maxNum, sort, sortOrder} = settingsContext.settings;
  // just tracking the page number, when changes, re-render content
  const [page, setPage] = useState(0);
  //this is the modified list based on user's setting about whether to show completed items or not. This is the only thing that modifys the items in the list
  const readyList = props.list.filter(item => showCompleted? true : !item.complete);
  
  //determin the starting and ending point for each page
  const start = maxNum * page || 0;
  const end = start + maxNum || readyList.length;
  // init a pages array for later use with Pagination, will contains page numbers
  const pages = new Array(Math.ceil(readyList.length / maxNum)).fill('');
  // this will be the page of items to be displayed.
  const displayPage = readyList ? readyList.slice(start, end) : [];
  displayPage.sort(sortList(sort, sortOrder));

  const {authenticatedUser} = useContext(LoginContext);


  /**
   * 
   * @param {string} key The key you want to sort with
   * @param {string} order apple in ascending or decending order
   */
  function sortList(key, order='ascending'){
    return function innerSort(a,b){
      if (!a[key] || !b[key]){
        return 0;
      }

      const valueA = (typeof a[key]==='string') ? a[key].toLowerCase() : a[key];
      const valueB = (typeof b[key]==='string') ? b[key].toLowerCase() : b[key];

      let comparison = 0;
      if (valueA > valueB) comparison = 1;
      else if (valueA < valueB) comparison = -1;

      return order === 'descending' ? comparison*-1 : comparison;
    };
  }

  return (
    <>
      <If condition={props.error}>
        <Then>
          <Alert className = 'bg-danger'>
            <h2>
              {props.error}
            </h2>
          </Alert>
        </Then>
        <Else>
          {displayPage.map(item => (
            <Toast key={item._id} onClose={() => props.handleDelete(item._id)} style={{width: '100%',maxWidth: '100%'}} >
              <Toast.Header closeButton={authenticatedUser.capabilities.includes('delete')}>
                <strong 
                  className={`${item.complete? 'bg-success':'bg-danger'} rounded mr-2 text-white p-1`} 
                  onClick={authenticatedUser.capabilities.includes('update')?
                    () => props.handleComplete(item._id): null}>
                  {item.complete? 'Completed' : 'Pending'}
                </strong>
                <span className="ml-auto mr-auto h6">{item.assignee}</span>
              </Toast.Header>
              <Toast.Body>
                <span className='mr-auto h5'>{item.item}</span>
                <small className='float-right'>{`Difficulty: ${item.difficulty}`}</small>
              </Toast.Body>
            </Toast>
          ))}
          <Pagination>
            {
              pages.map( (n, i)=>
                <Pagination.Item
                  key = {i+1}
                  active = {i === page}
                  onClick={()=>setPage(i)}
                >{i+1}</Pagination.Item>
              )
            }
          </Pagination>
        </Else>
      </If>
    </>
  );
}

TodoList.propTypes = {
  handleComplete: PropTypes.func,
  list: PropTypes.array,
  error: PropTypes.string,
  handleDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};
