import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector(state => state.todos.items);
  console.log(todos);
  return (
    <>
      {todos?.length > 0 ? (
        <Grid>
          {todos.map((todo, idx) => {
            return (
              <GridItem key={todo.id}>
                <Todo id={todo.id} text={todo.text} index={idx + 1} />
              </GridItem>
            );
          })}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
