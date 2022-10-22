import {Task, listedTasks } from './model';

export function createTask(task: Task): void {
    let storedTask = listedTasks.get(task.id);
    if (storedTask !== null) {
        throw new Error(`a task with ${task.id} already exists`);
    }
    listedTasks.set(task.id, Task.fromPayload(task));
}

export function getTaskById(id: string): Task | null {
    return listedTasks.get(id);
}

export function getTasks(): Task[] {
    return listedTasks.values();
}

export function updateTaskById(id : string): void {
  Task.updateTask(id);
}

export function deleteTaskById(id: string): void {
  Task.deleteTask(id);
}