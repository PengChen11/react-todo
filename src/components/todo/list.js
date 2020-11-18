import {React} from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';

export default function TodoList (props){
  return (
    <ListGroup className='text-white'>
      {props.list.map(item => (
        <ListGroup.Item
          className={`${item.complete? 'bg-success':'bg-danger'}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text} -- Assignee: {item.assignee}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

TodoList.propTypes = {
  handleComplete: PropTypes.func,
  list: PropTypes.array,
};
