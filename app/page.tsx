'use client';

import { Input } from '@/components/ui/Input';
import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [input, setInput] = useState<string>('');
  const todos = [
    {
      id: 1,
      title: 'title 1',
      completed: false,
    },
    {
      id: 2,
      title: 'title 2',
      completed: false,
    },
  ];

  const changeInputAction = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim() !== null || event.target.value !== '') {
      setInput(event.target.value);
    }
  };

  return (
    <>
      <Input
        addTodoAction={() => {}}
        changeInputAction={changeInputAction}
        value={input}
      />
      <ul>
        {todos?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}
