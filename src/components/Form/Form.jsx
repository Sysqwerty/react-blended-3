import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addToDo } from 'reduxTodo/toDoSlice';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.textInput.value);
    dispatch(addToDo(e.target.elements.textInput.value));
    e.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="textInput"
        required
        autoFocus
      />
    </form>
  );
};
