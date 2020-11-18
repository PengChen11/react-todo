import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Card} from 'react-bootstrap';

export default function TodoForm (props){

  var [item, setItem] = useState({});

  function handleInputChange (e){
    let itemUpdate = {
      ...item,
      [e.target.name]: e.target.value,
    };
    setItem(itemUpdate);
  }

  function handleSubmit (e) {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  }

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <Card>
          <Card.Body>
            <Card.Title>Add To Do Item</Card.Title>

            <Form.Group controlId="item">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control 
                name="text"
                type="text"
                placeholder="Item Details"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="assignee">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control 
                name="assignee"
                type="text"
                placeholder="Assignee Name"
                onChange={handleInputChange}
              />
            </Form.Group>
            
            <Form.Group controlId="difficulty">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control 
                defaultValue="1"
                type="range"
                min="1"
                max="5"
                name="text"
                placeholder="Assignee Name"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">Add Item</Button>
          </Card.Body>
        </Card>
      </Form>
    </>
  );
}
TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
};
