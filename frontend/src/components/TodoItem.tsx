import { Todo, TodoProps } from '../types';

const TodoItem = (props: TodoProps) => {
  const dueDate = ({ month, year }: Todo): string => {
    if (month.trim() && year.trim()) {
      return `${month}/${year.slice(2)}`;
    } else {
      return 'No Due Date';
    }
  }

  const handleUpdateClick = () => {
    props.toggleModal();
    props.setFormData({
      id: props.todo.id,
      title: props.todo.title,
      completed: props.todo.completed,
      day: props.todo.day,
      month: props.todo.month,
      year: props.todo.year,
      description: props.todo.description,
    });
  }

  return (
    <li>
      <div
        className='list_item'
        onClick={event => props.toggleCompleted(event, props.todo)}>
        <span
          className={props.todo.completed ? 'not_check' : 'check'}
          onClick={event => props.toggleCompleted(event, props.todo)}>
        </span>
        <p
          className={props.todo.completed ? 'completed' : ''}
          onClick={handleUpdateClick}>
          {`${props.todo.title} - ${dueDate(props.todo)}`}
        </p>
      </div>
      <div className='delete' onClick={props.handleDelete(props.todo.id)}>
        <img src='../html_css/images/trash.png'></img>
      </div>
    </li>
  )
}

export default TodoItem;
