'use client';

import IconInput from '@/components/ui/icon-input';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Divider from '@/components/ui/divider';
import Checkbox from '@/components/ui/checkbox';
import IconButton from '@/components/ui/icon-button';

export default function Home() {
  const [input, setInput] = useState<string>('');
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const addTodo = () => {};
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
      {/*<div className="flex justify-center items-center h-96 flex-col">*/}
      {/*  <Image src={'fi-edit.svg'} alt={'edit'} width={90} height={90} />*/}
      {/*  <p>Starting by add you first task</p>*/}
      {/*</div>*/}
      <div className="flex justify-between">
        <Checkbox
          checked={false}
          changeCompleted={() => {}}
          label="Reading Book"
        />
        <IconButton iconPath={'/more.svg'} alt={'more'} onClick={() => {}} />
      </div>
      <div className="flex justify-between">
        <Checkbox
          checked={false}
          changeCompleted={() => {}}
          label="Reading Book"
        />
        <IconButton iconPath={'/more.svg'} alt={'more'} onClick={() => {}} />
      </div>
      <div className="flex justify-between">
        <Checkbox
          checked={false}
          changeCompleted={() => {}}
          label="Reading Book"
        />
        <IconButton iconPath={'/more.svg'} alt={'more'} onClick={() => {}} />
      </div>
      <div className="flex justify-between">
        <Checkbox
          checked={false}
          changeCompleted={() => {}}
          label="Reading Book"
        />
        <IconButton iconPath={'/more.svg'} alt={'more'} onClick={() => {}} />
      </div>
      <Divider />
      <p className="font-light text-base text-center">0 tasks remain</p>
    </>
  );
}
