import { Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteToDo } from 'reduxTodo/toDoSlice';

export const Todo = ({ id, text, index }) => {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {index}
      </Text>

      <Text>{text}</Text>
      <button className={style.deleteButton} type="button" onClick={removeTodo}>
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
