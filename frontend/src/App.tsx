import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodosList from './components/TodosList';
import Modal from './components/Modal';
import { getAll, updateTodo, deleteTodo } from './todoService.ts';
import { Todo, FormData } from './types';
import '../html_css/stylesheets/todo.css';
import AddButton from './components/AddButton.tsx';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState<Todo | FormData>({
      id: null,
      title: '',
      completed: false,
      day: '',
      month: '',
      year: '',
      description: '',
  });

  useEffect(() => {
    getAll().then(data => setTodos(data))
  }, []);

  const toggleCompleted = (event: React.SyntheticEvent, todo: Todo) => {
    if (event.target === event.currentTarget) {
      updateTodo({ id: todo.id, completed: !todo.completed }).then(res => {
        setTodos(todos.map(todo => todo.id === res.id ? res : todo));
      });
    }
  }

  const handleDelete = (id: number) => () => deleteTodo(id).then(_res => {
    setTodos(todos.filter(todo => todo.id !== id))
  });

  const toggleModal = () => setModal(!modal);

  const handleNewTodoForm = () => {
    toggleModal();
    setFormData({
      id: null,
      title: '',
      completed: false,
      day: '',
      month: '',
      year: '',
      description: '',
    });
  }

  return (
    <div id='items'>
      <Header todos={todos} />
      <AddButton onClick={handleNewTodoForm} />
      <TodosList
        todos={todos}
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
        toggleModal={toggleModal}
        setFormData={setFormData}
      />
      <Modal
        modal={modal}
        toggleModal={toggleModal}
        formData={formData}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App
