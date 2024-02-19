import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export function Input({ type, placeholder, onChange, value }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-transparent bg-teal-800 rounded-sm text-teal-100 focus:outline-none focus:border-transparent p-2"
      onChange={onChange}
      value={value}
    />
  );
}
