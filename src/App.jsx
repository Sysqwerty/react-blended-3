import { Section, Container, Header, Form, TodoList, Filter } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          <Filter />
          <TodoList />
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
        </Container>
      </Section>
    </>
  );
};
