import TodoItem from "./TodoItem";
import { TodosListProps } from '../types';

const Todos = (props: TodosListProps) => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={props.toggleCompleted}
            handleDelete={props.handleDelete}
            toggleModal={props.toggleModal}
            setFormData={props.setFormData}
          />
        )
      })}
    </ul>
  )
}

export default Todos;
