import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const Index = ({ save }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskName, setTaskName] = useState("");
  const isFormFilled = () => taskName && taskDescription;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i class="bi bi-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label="Task Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setTaskName(e.target.value);
                }}
                placeholder="Enter task name"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="inputUrl"
              label="Task Description"
              className="mb-3"
            >
              <Form.Control
                type="textarea"
                rows={5}
                cols={5}
                placeholder="Task Description"
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
              />
            </FloatingLabel>
            
            
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              save({
                taskName,
                taskDescription
              });
              handleClose();
            }}
          >
            Create Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Index.propTypes = {
  save: PropTypes.func.isRequired,
};

export default Index;
