import {React} from 'react';
import PropTypes from 'prop-types';

export default function TodoList (props){
  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  handleComplete: PropTypes.func,
  list: PropTypes.array,
};
