import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createProduct(product) {
  product.id = uuid4();
  product.price = parseNearAmount(product.price + "");
  return window.contract.setProduct({ product });
}

export function getProducts() {
  return window.contract.getProducts();
}

export async function buyProduct({ id, price }) {
  await window.contract.buyProduct({ productId: id }, GAS, price);
}

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