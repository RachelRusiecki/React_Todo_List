import React from "react";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  day: string;
  month: string;
  year: string;
  description: string;
};

export interface FormData {
  id: null;
  title: string;
  completed: boolean;
  day: string;
  month: string;
  year: string;
  description: string;
}

export type NewTodo = Omit<Todo, 'id'>;

export type UpdateTodo = Pick<Todo, 'id'> & Partial<Omit<Todo, 'id'>>;

export interface TodosProps { todos: Todo[] };

export interface TodosListProps extends TodosProps {
  toggleCompleted: (event: React.SyntheticEvent, todo: Todo) => void;
  handleDelete: (id: number) => () => void;
  toggleModal: () => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData | Todo>>;
}

export interface TodoProps {
  todo: Todo;
  toggleCompleted: (event: React.SyntheticEvent, todo: Todo) => void;
  handleDelete: (id: number) => () => void;
  toggleModal: () => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData | Todo>>;
}

export interface ModalProps {
  modal: boolean;
  toggleModal: () => void;
  formData: FormData | Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export interface ButtonProps { onClick: () => void };
