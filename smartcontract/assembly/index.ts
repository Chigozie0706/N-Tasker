import { Task, listedTasks } from "./model";
import { context, ContractPromiseBatch, u128 } from "near-sdk-as";

// function to create a task.
export function createTask(task: Task): void {
  let storedTask = listedTasks.get(task.id);
  if (storedTask !== null) {
    throw new Error(`a task with ${task.id} already exists`);
  }
  listedTasks.set(task.id, Task.fromPayload(task));
}

// function that gets individual task by id.
export function getTaskById(id: string): Task | null {
  return listedTasks.get(id);
}

// function that gets all tasks created.
export function getTasks(): Task[] {
  return listedTasks.values();
}

// function that updates a task from  pending to done.
export function updateTaskById(id: string): void {
  let storedTask = listedTasks.get(id);
  if (storedTask === null) {
    throw new Error(`a task with ${id} exists`);
  }
  assert(
    storedTask.creator.toString() == context.sender.toString(),
    "You don't have permission to edit sneaker"
  );
  ContractPromiseBatch.create(storedTask.creator).transfer(
    context.attachedDeposit
  );

  Task.updateTask(id);
}

// function that deletes a task using its id.
export function deleteTaskById(id: string): void {
  Task.deleteTask(id);
}
