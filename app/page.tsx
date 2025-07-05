'use client';

import IconInput from '@/components/ui/icon-input';
import { ChangeEvent, useEffect, useState } from 'react';
import Divider from '@/components/ui/divider';
import TodoItem from '@/components/todo/todo-item/todo-item';
import Image from 'next/image';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim() !== null || event.target.value !== '') {
      setInput(event.target.value);
    }
  };

  const addTodo = () => {
    setTodos((prevState) => [
      ...prevState,
      { id: +Date.now(), title: input, completed: false },
    ]);
    setInput('');
  };

  const removeTodo = (id: number) => {
    setTodos((prevState) => prevState.filter((todoItem) => todoItem.id !== id));
  };

  const onCompleted = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem,
      ),
    );
  };

  useEffect(() => {
    setTodos([
      {
        id: 1,
        title: 'Buy groceries',
        completed: false,
      },
      {
        id: 2,
        title: 'Walk the dog',
        completed: true,
      },
      {
        id: 3,
        title: 'Read a book',
        completed: false,
      },
      {
        id: 4,
        title: 'Finish homework',
        completed: true,
      },
      {
        id: 5,
        title: 'Call mom',
        completed: false,
      },
    ]);
  }, []);

  return (
    <>
      <h2 className="text-5xl  font-boldtext-black ">Tasks </h2>
      <p className="text-xl font-medium text-gray-700">
        What’s on your mind today ?
      </p>
      <IconInput
        value={input}
        handleChangeInputAction={handleChangeInput}
        addTodoAction={addTodo}
      />
      {todos && todos?.length > 0 ? (
        <>
          {todos?.map((item) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                checked={item.completed}
                onDelete={() => removeTodo(item.id)}
                onTickComplete={() => onCompleted(item.id)}
              />
            );
          })}
        </>
      ) : (
        <div className="flex justify-center items-center h-96 flex-col">
          <Image src={'fi-edit.svg'} alt={'edit'} width={90} height={90} />
          <p>Starting by add you first task</p>
        </div>
      )}

      <Divider />
      <p className="font-light text-base text-center">
        {(todos && todos.length) || 0} tasks remain
      </p>
    </>
  );
}
