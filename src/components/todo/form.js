import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Card} from 'react-bootstrap';
import useForm from '../../hooks/useForm';

export default function TodoForm (props){

  const [handleSubmit, handleChange] = useForm(props.handleSubmit);

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <Card>
          <Card.Body>
            <Card.Title>Add To Do Item</Card.Title>

            <Form.Group controlId="item">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control 
                name="item"
                type="text"
                placeholder="Item Details"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="assignee">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control 
                name="assignee"
                type="text"
                placeholder="Assignee Name"
                onChange={handleChange}
              />
            </Form.Group>
            
            <Form.Group controlId="difficulty">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control 
                defaultValue="1"
                type="range"
                min="1"
                max="5"
                name="difficulty"
                placeholder="Assignee Name"
                onChange={handleChange}
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
