import axios from 'axios';
import { Todo, NewTodo, UpdateTodo } from './types';

const baseUrl = 'http://localhost:3000/api/todos';

export const getAll = () => {
  return axios.get<Todo[]>(baseUrl).then(res => res.data);
};

export const getOne = (id: number) => {
  return axios.get<Todo>(`${baseUrl}/${id}`).then(res => res.data);
};

export const addNew = (newTodo: NewTodo) => {
  return axios.post<Todo>(baseUrl, newTodo).then(res => res.data);
}

export const updateTodo = (newTodo: UpdateTodo) => {
  return axios.put<Todo>(`${baseUrl}/${newTodo.id}`, newTodo)
    .then(res => res.data);
};

export const deleteTodo = (id: number) => axios.delete(`${baseUrl}/${id}`);
