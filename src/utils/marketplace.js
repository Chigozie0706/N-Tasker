import { v4 as uuid4 } from "uuid";

export function createTask(task) {
  task.id = uuid4();
  return window.contract.createTask({ task }); // set_product for the Rust contract
}

export function getTasks() {
  return window.contract.getTasks(); // get_products for the Rust contract
}


export function updateTaskById(id) {
  return window.contract.updateTaskById({id}); // get_products for the Rust contract
}

export function getTaskById(id) {
  return window.contract.getTaskById({id}); // get_products for the Rust contract
}

export function deleteTaskById(id) {
  return window.contract.deleteTaskById({id}); // get_products for the Rust contract
}