import {React} from 'react';
import PropTypes from 'prop-types';
import {ListGroup, Toast} from 'react-bootstrap';
import {If, Then, Else} from 'react-if';

export default function TodoList (props){
  return (
    <ListGroup>
      <If condition={props.error}>
        <Then>
          <ListGroup.Item className = 'bg-danger'>
            <h2>
              {props.error}
            </h2>
          </ListGroup.Item>
        </Then>
        <Else>
          {props.list.map(item => (
            <ListGroup.Item
              key={item._id}
            >
              <Toast onClose={() => props.handleDelete(item._id)} style={{width: '100%',maxWidth: '100%'}}>
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
            </ListGroup.Item>
          ))}
        </Else>
      </If>
    </ListGroup>
  );
}

TodoList.propTypes = {
  handleComplete: PropTypes.func,
  list: PropTypes.array,
  error: PropTypes.string,
  handleDelete: PropTypes.func,
};
