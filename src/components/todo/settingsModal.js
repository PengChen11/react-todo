import React, {useContext} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'; 
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';
import {SettingsContext} from '../../context/settings.js';


function SettingsModel (props){
  
  const [handleSubmit, handleChange] = useForm(changeSettings);

  const settingsContext = useContext(SettingsContext);

  function changeSettings (newSettingsData){

    settingsContext.setSettings(newSettingsData);

    props.handleClose();
  }

  return (

    <Modal show={props.show} onHide={props.handleClose} onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className = 'font-weight-bold'>

          <Form.Group controlId='showCompleted'>
            <Form.Label className='mr-3'>Show completed items?</Form.Label>
            <Form.Control
              required
              name='showCompleted'
              as='select'
              onChange = {handleChange}
            >
              
              <option value="">...</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='maxNum'>
            <Form.Label>How many items do you want to display per page?</Form.Label>
            <Form.Control
              required
              as="select"
              name='maxNum'
              type='text'
              onChange = {handleChange}
            >
              <option value="">...</option>
              <option value="5">5 items</option>
              <option value="6">6 items</option>
              <option value="7">7 items</option>
              <option value="8">8 items</option>
              <option value="9">9 items</option>
              <option value="10">10 items</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='sort'>
            <Form.Label>How do you want to sort your to do items?</Form.Label>
            <Form.Control
              required
              as="select"
              name='sort'
              type='text'
              onChange = {handleChange}
            >
              <option value="">...</option>
              <option value="difficulty">By difficulty ratings</option>
              <option value="item">By item info</option>
              <option value="assignee">By assignee name</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='sortOrder'>
            <Form.Label className='mr-3'>Sorting order?</Form.Label>
            <Form.Control
              required
              name='sortOrder'
              as='select'
              onChange = {handleChange}
            >
              
              <option value="">...</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type='submit' className='float-right'>
          Save Changes
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>

    </Modal>
  );
}


SettingsModel.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default SettingsModel;