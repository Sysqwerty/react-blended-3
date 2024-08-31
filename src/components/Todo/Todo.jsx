import { Text } from 'components';

export const Todo = ({ id, text, index }) => {
  return (
    <Text textAlign="center" marginBottom="20">
      TODO #{index}
    </Text>
  );
};
