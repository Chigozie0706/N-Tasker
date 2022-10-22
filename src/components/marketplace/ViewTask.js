import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal
} from 'react-bootstrap';


const Index = ({closeModal, toggleModal, showModal, update, 
  taskId, taskDetails = {} }) => {
  
const isEmpty = Object.keys(taskDetails).length === 0;
  
  return (
    <>
       
<Modal 
show={showModal} onHide={toggleModal}
        backdrop="static"
        >
        <Modal.Header toggle={() => closeModal(false)}>Task Details</Modal.Header>
        <Modal.Body>
  {!isEmpty ? 
    <>
    <p><b>Task ID:</b> {taskDetails.id}</p>
    <p><b>Task Name:</b> {taskDetails.taskName}</p>
    <p><b>Task Description:</b> {taskDetails.taskDescription}</p>
    <p><b>Date Created:</b> {new Date(taskDetails.dateCreated / 1000000).toDateString()}</p>
    <p><b>Status:</b> <span style={{backgroundColor: taskDetails.status === 'pending' ? 'orange' : 'lightGreen', color: 'grey', textTransform : 'capitalize'}}>{taskDetails.status}</span></p>
    </>
  :null 

  }
  </Modal.Body>
  <Modal.Footer>
          <Button onClick={() => closeModal(false)}>Close</Button>
         </Modal.Footer>
</Modal>

        
          
    </>
  );
};

Index.propTypes = {
  
  closeModal: PropTypes.func.isRequired,
  
};

export default Index;