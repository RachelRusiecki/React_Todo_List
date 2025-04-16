import Todos from './Todos';
import { TodosListProps } from '../types';

const TodosList = (props: TodosListProps) => {
  const incompleteTodos = props.todos.filter(({ completed }) => !completed);
  const completeTodos = props.todos.filter(({ completed }) => completed);

  return (
    <div>
      <Todos
        todos={incompleteTodos}
        toggleCompleted={props.toggleCompleted}
        handleDelete={props.handleDelete}
        toggleModal={props.toggleModal}
        setFormData={props.setFormData}
      />
      <Todos
        todos={completeTodos}
        toggleCompleted={props.toggleCompleted}
        handleDelete={props.handleDelete}
        toggleModal={props.toggleModal}
        setFormData={props.setFormData}
      />
    </div>
  )
}

export default TodosList;
