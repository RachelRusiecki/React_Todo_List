import { DAYS, YEARS } from '../utils/utils';
import { addNew, updateTodo } from '../todoService.ts';
import { NewTodo, ModalProps } from '../types';

const Modal = (props: ModalProps) => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (event.currentTarget.title.value.length < 3) {
      alert('You must enter a title at least 3 characters long.');
      return;
    }

    const formFields: NewTodo = {
      title: event.currentTarget.title.value,
      completed: props.formData.completed,
      day: event.currentTarget.day.value || '  ',
      month: event.currentTarget.month.value || '  ',
      year: event.currentTarget.year.value || '    ',
      description: event.currentTarget.description.value || ' ',
    }

    if (props.formData.id) {
      updateTodo({ ...formFields, id: props.formData.id }).then(res => {
        props.toggleModal();
        props.setTodos(props.todos.map(todo => {
          return todo.id === res.id ? res : todo;
        }));
      });
    } else {
      addNew(formFields).then(res => {
        props.toggleModal();
        props.setTodos(props.todos.concat(res));
      });
    }
  }

  const handleMarkComplete = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!props.formData.id) {
      alert('Cannot mark as complete as item has not been created yet!');
      return;
    }

    updateTodo({ id: props.formData.id, completed: true}).then(res => {
      props.toggleModal();
      props.setTodos(props.todos.map(todo => todo.id === res.id ? res : todo));
    });
  }

  if (props.modal) {
    return (
      <div>
        <div
          className='modal'
          id='modal_layer'
          style={{ display: 'block'}}
          onClick={props.toggleModal}>
        </div>
        <div
          className='modal'
          id='form_modal'
          style={{ display: 'block', top: '200px'}}>
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <label htmlFor='title'>Title</label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  defaultValue={props.formData.title}
                  placeholder='Item 1'>
                </input>
              </li>
              <li>
                <label>Due Date</label>
                <div className='date'>
                  <select name='day' defaultValue={props.formData.day}>
                    <option value=''>Day</option>
                    {DAYS.map(day => {
                      return <option key={day} value={day}>{day}</option>
                    })}
                  </select>{' / '}
                  <select name='month' defaultValue={props.formData.month}>
                    <option value=''>Month</option>
                    <option value='01'>January</option>
                    <option value='02'>February</option>
                    <option value='03'>March</option>
                    <option value='04'>April</option>
                    <option value='05'>May</option>
                    <option value='06'>June</option>
                    <option value='07'>July</option>
                    <option value='08'>August</option>
                    <option value='09'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                  </select>{' / '}
                  <select name='year' defaultValue={props.formData.year}>
                    <option value=''>Year</option>
                    {YEARS.map(year => {
                      return <option key={year} value={year}>{year}</option>
                    })}
                  </select>
                </div>
              </li>
              <li>
                <label htmlFor='description'>Description</label>
                <textarea
                  name='description'
                  id='description'
                  cols={50}
                  rows={7}
                  defaultValue={props.formData.description.trim()}
                  placeholder='Description'>
                </textarea>
              </li>
              <li>
                <input type='submit' value='Save'></input>
                <button name='complete' onClick={handleMarkComplete}>
                  Mark as Complete
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default Modal;
