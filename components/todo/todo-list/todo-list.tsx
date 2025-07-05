import Image from 'next/image';

import TodoItem from '@/components/todo/todo-item/todo-item';
import { Todo } from '@/type/todo';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

const TodoList = ({ todos, onDelete, onToggleCompletion }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className='flex justify-center items-center h-96 flex-col'>
        <Image src={'fi-edit.svg'} alt={'edit'} width={90} height={90} />
        <p>Starting by add you first task</p>
      </div>
    );
  }

  return (
    <>
      {todos?.map(item => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            isCompleted={item.completed}
            onDelete={() => onDelete(item.id)}
            onToggleCompletion={() => onToggleCompletion(item.id)}
          />
        );
      })}
    </>
  );
};

export default TodoList;
