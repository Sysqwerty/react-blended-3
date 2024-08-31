import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'reduxTodo/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filteredTodos = todos.filter(({ text }) =>
    text.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {filteredTodos?.length > 0 && todos.length !== 0 && (
        <Grid>
          {filteredTodos.map((todo, idx) => {
            return (
              <GridItem key={todo.id}>
                <Todo id={todo.id} text={todo.text} index={idx + 1} />
              </GridItem>
            );
          })}
        </Grid>
      )}
      {!!filter?.length && filteredTodos?.length === 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
