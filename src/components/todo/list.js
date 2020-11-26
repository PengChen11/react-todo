import {React} from 'react';
import PropTypes from 'prop-types';
import {Alert, Toast} from 'react-bootstrap';
import {If, Then, Else} from 'react-if';

export default function TodoList (props){
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
        {props.list.map(item => (
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
