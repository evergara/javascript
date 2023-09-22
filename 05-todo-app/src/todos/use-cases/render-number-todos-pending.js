import { Todo } from "../model/todo.model";
let element;
/**
 *
 * @param { string } elementId
 * @param { Todo } todos
 */
export const renderNumberTodosPending = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error(`The element ${elementId} HTML not found`);
  element.innerHTML = todos.length;
};
