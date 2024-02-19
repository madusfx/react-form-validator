import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: () => void;
  disabled: boolean;
}

export function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="p-4 bg-teal-900 rounded-md text-teal-100 w-80 hover:duration-700 hover:bg-teal-800 disabled:bg-teal-600"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
