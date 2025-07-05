'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import TodoForm from '@/components/todo/to-to-form/todo-form';
import TodoList from '@/components/todo/todo-list/todo-list';
import Divider from '@/components/ui/divider';
import { Todo } from '@/type/todo';

export default function TodoApp() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: +Date.now(),
      title: inputValue,
      completed: false,
    };

    setTodos(prevTodo => [...prevTodo, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const initialTodos: Todo[] = [
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
    ];

    setTodos(initialTodos);
  }, []);

  return (
    <>
      <h2 className='text-5xl  font-boldtext-black '>Tasks </h2>
      <p className='text-xl font-medium text-gray-700'>
        What’s on your mind today ?
      </p>
      <TodoForm
        input={inputValue}
        onInputChange={handleInputChange}
        onAddTodo={addTodo}
      />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleCompletion={toggleTodoCompletion}
      />
      <Divider />
      <p className='font-light text-base text-center'>
        {(todos && todos.length) || 0} tasks remain
      </p>
    </>
  );
}
