'use client';

import { Input } from '@/components/ui/Input';
import { ChangeEvent, useState } from 'react';
import Checkbox from '@/components/ui/checkbox';

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

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

  const changeCompleted = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
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

      <Checkbox checked={checked} changeCompleted={changeCompleted} />
    </>
  );
}
