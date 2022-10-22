import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal
} from 'react-bootstrap';


const Index = ({closeModal, toggleModal, showModal, update, 
  taskId, taskDetails = {} }) => {
  // const navigate =useNavigate()
  const [taskName, setTaskName] = useState("");
  
console.log("taskId", taskDetails)
  
const [id, setId] = useState("1")


const isEmpty = Object.keys(taskDetails).length === 0;
  
  return (
    <>
       
<Modal 
show={showModal} onHide={toggleModal}
        backdrop="static"
        >
        <Modal.Header toggle={() => closeModal(false)}></Modal.Header>
        <Modal.Body>
  {!isEmpty ? 
    <>
    <p>Task ID: {taskDetails.id}</p>
    <p>Task Name: {taskDetails.taskName}</p>
    <p>Task Description: {taskDetails.taskDescription}</p>
    <p>Date Created: {taskDetails.dateCreated}</p>
    <p>Status: {taskDetails.status}</p>
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