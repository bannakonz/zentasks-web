'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import TodoForm from '@/components/todo/todo-form/todo-form';
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
    <div className='max-w-4xl mx-auto'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3 mt-20'>
          Start Your Day Right
        </h1>
        <p className='text-base md:text-xl text-gray-600'>
          Simple, focused task management
        </p>
      </div>

      <TodoForm
        input={inputValue}
        onInputChange={handleInputChange}
        onAddTodo={addTodo}
      />

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-900 my-4'>Task</h2>
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggleCompletion={toggleTodoCompletion}
        />
      </div>

      <Divider />

      <p className='text-center text-gray-600'>
        {todos.filter(todo => !todo.completed).length} tasks remain
      </p>
    </div>
  );
}
