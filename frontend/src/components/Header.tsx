import { TodosProps } from '../types';

const Header = ({ todos }: TodosProps) => {
  return (
    <div>
      <h1>All Todos</h1>
      <span className='count'>{todos.length}</span>
    </div>
  )
}

export default Header;
