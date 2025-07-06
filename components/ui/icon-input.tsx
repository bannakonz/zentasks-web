'use client';

import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

interface InputProps {
  value: string;
  addTodoAction: () => void;
  handleChangeInputAction: (event: ChangeEvent<HTMLInputElement>) => void;
}

const IconInput = ({
  addTodoAction,
  handleChangeInputAction,
  value,
}: InputProps) => {
  const [placeholder, setPlaceholder] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Add new task...';

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (placeholder.length < fullText.length) {
        timeout = setTimeout(() => {
          setPlaceholder(fullText.slice(0, placeholder.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 5000);
      }
    } else {
      if (placeholder.length > 0) {
        timeout = setTimeout(() => {
          setPlaceholder(placeholder.slice(0, -1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [placeholder, isTyping]);

  return (
    <div className='relative flex'>
      <input
        id='input-todo'
        className='pl-2 md:pl-10 p-2 outline-black text-base border h-12 border-black rounded-md w-full'
        alt='input enter'
        value={value}
        onChange={handleChangeInputAction}
        placeholder={placeholder}
      />
      <Image
        className='hidden md:block absolute transform translate-y-[-50%] top-1/2 left-2 '
        src='/icon-add.svg'
        alt='icon-add'
        width='22'
        height='22'
      />
      <button onClick={addTodoAction}>
        <span>
          <Image
            className='md:hidden absolute transform translate-y-[-50%] top-1/2 right-2 '
            src='/icon-add.svg'
            alt='icon-add'
            width='22'
            height='22'
          />
        </span>
      </button>
      <button
        onClick={addTodoAction}
        className='hidden md:flex cursor-pointer absolute transform translate-y-[-50%] top-1/2 right-2 justify-center items-center p-2 rounded-md border-black border w-16 h-8'
      >
        Add
      </button>
    </div>
  );
};

export default IconInput;
