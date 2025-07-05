import { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const Input = ({ value, onChange, placeHolder = '' }: InputProps) => {
  return (
    <input
      id="input-todo"
      className="px-1 outline-black text-base border  h-12 border-black rounded-md w-full"
      alt="input"
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default Input;
