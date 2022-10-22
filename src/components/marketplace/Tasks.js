import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddTask from "./AddTask";
import ViewTask from "./ViewTask"
import Loader from "../utils/Loader";
import {Table, Button } from "react-bootstrap";
import { AiFillDelete, AiOutlineFolderView } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import {
  getTasks, createTask, updateTaskById, deleteTaskById, getTaskById
} from "../../utils/marketplace";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [taskLists, setTaskLists] = useState([])
const [taskDetails, setTaskDetails] = useState({})
const [taskDetailsModal, setTaskDetailsModal] = useState(false)
const [disable, setDisable] =useState(false)

  
  
  const getTaskLists = useCallback(async () => {
    try {
      setLoading(true);
      setTaskLists(await getTasks());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });


  const addTask = async (data) => {
  try {
    // setLoading(true);
    createTask(data).then((resp) => {
       console.log(resp)
       getTaskLists()
       toast.success("Task added successfully")
    });

  } catch (error) {
    console.log({ error });
    toast.error("network error")
  } finally {
    // setLoading(false);
  }
};

const deleteTask = async (id) => {
  try{
    setDisable(true)
    deleteTaskById(id)
    .then((resp) => {
      toast.success("Task deleted successfully")
      getTaskLists()
    })
  }
  catch(error) {
    // console.log({error})
    toast.error("network error")
  }
  finally{
    setDisable(false)
  }
}


const updateTask = async (id) => {
  try{
    setDisable(true)
    updateTaskById(id)
    .then((resp) => {
      console.log(resp)
      toast.success("Task done")
      getTaskLists()
      setDisable(false)
    })
  }
  catch(error) {
    console.log({error})
    toast.error("network error")
    setDisable(false)
  }
}

const getTaskDetails = async (taskId) => {
  try{
    getTaskById(taskId)
    .then((resp) => {
      console.log(resp)
      setTaskDetails(resp)
    })
  }
  catch(error) {
    console.log({error})
  }
}

const toggleTaskDetailsModal = (id) => {
  getTaskDetails(id);
  setTaskDetailsModal(!taskDetailsModal)

}

const closeModal = (data) => {
  setTaskDetailsModal(!taskDetailsModal)
}



  console.log(taskLists)


  useEffect(() => {
    getTaskLists()
  }, []);

  return (
    <>

      {!loading ? (
        <>
        <ViewTask  taskDetails={taskDetails} showModal={taskDetailsModal} 
        toggleModal={toggleTaskDetailsModal} closeModal={closeModal} />

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">Task Lists</h1>
            <AddTask 
            
             save={addTask} 
            />
          </div>
           <Table  bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
              <th>Task Name</th>
              <th>Date Created</th>
              <th>Status</th>
               <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {taskLists.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.taskName}</td>
          <td>{new Date(item.dateCreated / 1000000).toDateString()}</td>
          <td style={{backgroundColor: item.status === 'pending' ? 'orange' : 'green', textTransform : 'capitalize'}}>{item.status}</td>
          <td className="d-flex justify-content-between">
                  <Button size="sm" disabled={disable} variant="success" onClick={() => updateTask(item.id)}>
                    <GoChecklist />
                  </Button>
                  <Button size="sm"  disabled={disable} 
                  onClick={() => toggleTaskDetailsModal(item.id)}
                  ><AiOutlineFolderView  variant="white"/></Button>
                  <Button size="sm" disabled={disable}
                  variant="danger" onClick={() => deleteTask(item.id)}><AiFillDelete /> </Button>
                  </td>
        </tr>
        ))
    }
      </tbody>
    </Table>

        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;
