import { ElementIDs } from "./const/index";
import { renderTodos, renderNumberTodosPending } from "./use-cases/index";
import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { Filter } from "../store/filter.store";

/**
 *
 * @param {string} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrenFilter());
    renderTodos(ElementIDs.TODO_LIST, todos);
    showNumberTodosPending();
  };

  const showNumberTodosPending = () => {
    const pendingTodos = todoStore.getTodos(Filter.PENDING);
    renderNumberTodosPending(ElementIDs.PENDING_COUNT, pendingTodos);
  };

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  //References HTML

  const newDescriptionInput = document.querySelector(ElementIDs.NEW_TODO_INPUT);
  const todoListUL = document.querySelector(ElementIDs.TODO_LIST);
  const filterTodoListUL = document.querySelector(ElementIDs.FILTERS_TODO);
  const filterTodoA = document.querySelectorAll(ElementIDs.FILTER);

  const todoClearCompleted = document.querySelector(
    ElementIDs.CLEAR_COMPLETED_BUTTON
  );

  newDescriptionInput.addEventListener("keyup", (event) => {
    console.log(event);
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    event.target.value = "";
    displayTodos();
  });

  todoListUL.addEventListener("click", (event) => {
    console.log(event);
    const isDestroy = event.target.className === "destroy" ? true : false;
    const attribute = "data-id";
    const element = event.target.closest(`[${attribute}]`);
    if (isDestroy) {
      todoStore.deleteTodo(element.getAttribute(`${attribute}`));
    } else {
      todoStore.toggleTodo(element.getAttribute(`${attribute}`));
    }
    displayTodos();
  });

  filterTodoListUL.addEventListener("click", (event) => {
    if (!event.target.classList.contains(ElementIDs.FILTER_CLASS)) return;
    filterTodoA.forEach((element) => {
      element.classList.remove(ElementIDs.SELECTED_CLASS);
    });

    const filter = event.target.classList.contains(ElementIDs.FILTER_ALL)
      ? Filter.ALL
      : event.target.classList.contains(ElementIDs.FILTER_PENDING)
      ? Filter.PENDING
      : Filter.COMPLETED;

    event.target.classList.add(ElementIDs.SELECTED_CLASS);
    todoStore.setFilter(filter);
    displayTodos();
  });

  todoClearCompleted.addEventListener("click", () => {
    todoStore.deleteTodoCompleted();
    displayTodos();
  });
};
