import { Todo } from "../model/todo.model";

/**
 *
 * @param {Todo} todo
 */
export const createTodoHtml = (todo) => {
  if (!todo) throw new Error(`A Todo object is required`);
  const { done, id, description } = todo;
  const liElement = document.createElement("li");

  if (done) {
    liElement.classList.add("completed");
  }

  liElement.setAttribute("data-id", id);

  const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done ? "checked" : ""}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="${description}">
    `;

  liElement.innerHTML = html;

  return liElement;
};
