import { Todo } from "../todos/model/todo.model";
import { Filter } from "./filter.store";
import { saveItem, getItem } from "../todos/use-cases/index";

const keyPersistence = "state_todo";

const state = {
  todos: [],
  filter: Filter.ALL,
};

const initStore = () => {
  loadStore();
  console.log("InitStore Todo");
};

const loadStore = () => {
  const item = getItem(keyPersistence);
  if (!item) return;
  const { todos = [], filter = Filter.ALL } = JSON.parse(item);
  state.todos = todos;
  state.filter = filter;
};

const savePersitenceState = () => {
  saveItem(keyPersistence, JSON.stringify(state));
};

/**
 * This function return to array the Todo
 * @param {String} filter  example : 'All','Completed','Pending'
 * @returns {Array} Todo   example : [Todo]
 */
const getTodos = (filter = Filter.ALL) => {
  switch (filter) {
    case Filter.ALL:
      return [...state.todos];
    case Filter.COMPLETED:
      return state.todos.filter((todo) => todo.done);
    case Filter.PENDING:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

/**
 * This function add a Todo to do the state.
 * @param {string} description example: Pieda del alma
 */
const addTodo = (description) => {
  if (!description) throw new Error(`Sescription ${filter} is required`);
  state.todos.push(new Todo(description));
  savePersitenceState();
};

/**
 * This function removes a Todo from the state.
 * @param {string} todoId is un uuid example:'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  savePersitenceState();
};

/**
 * This function remove all Todo are completed
 */
const deleteTodoCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  savePersitenceState();
};

/**
 *
 * @param {Filter} filter
 */
const setFilter = (filter = Filter.ALL) => {
  state.filter = filter;
  savePersitenceState();
};

const getCurrenFilter = () => {
  return state.filter;
};

const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
  savePersitenceState();
};

export default {
  addTodo,
  deleteTodo,
  deleteTodoCompleted,
  getCurrenFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
