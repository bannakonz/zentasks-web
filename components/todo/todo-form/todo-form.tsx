import { ChangeEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';

import IconInput from '@/components/ui/icon-input';

interface TodoFormProps {
  input: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: () => void;
}

const TodoForm = ({ input, onInputChange, onAddTodo }: TodoFormProps) => {
  return (
    <IconInput
      value={input}
      handleChangeInputAction={onInputChange}
      addTodoAction={onAddTodo}
    />
  );
};

export default TodoForm;
