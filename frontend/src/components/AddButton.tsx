import { ButtonProps } from '../types';

const AddButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className='add_todo'>
      <img src='../../html_css/images/plus.png'></img>
      Add new to do
    </button>
  )
};

export default AddButton;
