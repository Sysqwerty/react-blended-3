import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { setFilter } from 'reduxTodo/filterSlice';
import { selectFilter } from 'reduxTodo/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeHandle = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={changeHandle}
      value={filter}
    />
  );
};
