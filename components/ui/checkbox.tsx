import { ChangeEvent } from 'react';

interface CheckBoxProps {
  checked: boolean;
  changeCompleted: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}
const Checkbox = ({ checked, changeCompleted, label = '' }: CheckBoxProps) => {
  return (
    <>
      <label className="block relative pl-9 mb-3 cursor-pointer text-xl select-none">
        <h3 className="text-base text-gray-900">{label}</h3>
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={changeCompleted}
          className="absolute opacity-0 cursor-pointer h-0 w-0"
        />
        <span className="absolute mt-0.5 top-0 left-0 h-5 w-5 bg-white border border-black rounded hover:bg-white">
          {checked && (
            <span className="absolute left-1.5 top-0.5 w-1.5 h-2.5 border-black border-r-2 border-b-2 transform rotate-45"></span>
          )}
        </span>
      </label>
    </>
  );
};

export default Checkbox;
