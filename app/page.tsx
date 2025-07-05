'use client';

import { ChangeEvent, useState } from 'react';
import Checkbox from '@/components/ui/checkbox';
import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import IconInput from '@/components/ui/icon-input';
import Input from '@/components/ui/input';

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

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

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <IconInput
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
      <IconButton iconPath={'more.svg'} alt={'edit'} onClick={() => {}} />
      <Button btnName="Delete" onClick={() => {}} variant={'default'} />
      <Button onClick={() => {}} variant={'outline'} btnName={'Cancel'} />
      <Input value={value} onChange={changeValue} />
    </>
  );
}
