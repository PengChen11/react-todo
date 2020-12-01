import React, {useState, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Alert, Toast, Pagination} from 'react-bootstrap';
import {If, Then, Else} from 'react-if';
import {SettingsContext} from '../../context/settings.js';

export default function TodoList (props){

  const settingsContext = useContext(SettingsContext);
  const [pages, setPages] = useState({page1:[]});
  const [currentPage, setCurrentPage] = useState({pageNum:1,list:[] });

  // apply all settings whenever given list got changed, or settings are changed.
  useEffect(()=>{
    applySettings(props.list);
  },[props.list, settingsContext]);

  //initialize the pages to show page1 as current page, whenever the whole pages sys get changed.
  useEffect(()=>{
    setCurrentPage({ pageNum: 1, list: pages.page1});
  },[pages]);


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

  /**
   * 
   * @param {array} listArr apply all settings to the given list array
   */
  function applySettings(listArr){
    let displayList=[];
    const {showCompleted, maxNum, sort, sortOrder} = settingsContext.settings;

    //apply the show completed item ssetting.
    if (showCompleted===false){
      displayList = listArr.filter(item => item.complete===false);
    } else displayList = listArr;

    //apply the sort and sort order setting
    displayList.sort(sortList(sort, sortOrder));

    //apply how many items per page settings and create the pages sys
    if (maxNum < displayList.length) {
      let totalNumOfPages = Math.ceil(displayList.length / maxNum);
      let buildingPages = {};

      for (let i = 0; i<totalNumOfPages; i++){
        let listsForEachPage = displayList.slice(i*maxNum,i*maxNum+maxNum);
        buildingPages[`page${i+1}`]=listsForEachPage;
      }
      setPages(buildingPages);

    } else {
      setPages({page1: displayList});
    }

  }

  function changePage(number){
    setCurrentPage({pageNum:number, list:pages[`page${number}`]});
  }

  function renderPagination(activePage=1){
    let items = [];
    const len = Object.keys(pages).length;
    for (let number = 1; number <= len ; number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === currentPage.pageNum}
          onClick={()=>changePage(number)}
        >
          {number}
        </Pagination.Item>,
      );
    }
    
    return (
      <Pagination >{items}</Pagination>
    );
  }


  return (
    
    <If condition={props.error}>
      <Then>
        <Alert className = 'bg-danger'>
          <h2>
            {props.error}
          </h2>
        </Alert>
      </Then>
      <Else>
        {currentPage['list'].map(item => (
          <Toast key={item._id} onClose={() => props.handleDelete(item._id)} style={{width: '100%',maxWidth: '100%'}}>
            <Toast.Header>
              <strong className={`${item.complete? 'bg-success':'bg-danger'} rounded mr-2 text-white p-1`} onClick={() => props.handleComplete(item._id)}>
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
        {renderPagination()}
      </Else>
    </If>

  );
}

TodoList.propTypes = {
  handleComplete: PropTypes.func,
  list: PropTypes.array,
  error: PropTypes.string,
  handleDelete: PropTypes.func,
};
