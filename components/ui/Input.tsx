import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className, ...props }) => {
  const baseClasses = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e0e1b] focus:outline-0 focus:ring-0 border-none bg-[#e7e7f3] focus:border-none h-14 placeholder:text-[#4e4e97] p-4 text-base font-normal leading-normal";
  return (
    <>
      {label && <label htmlFor={id} className="text-[#0e0e1b] text-base font-medium leading-normal pb-2">{label}</label>}
      <input id={id} className={`${baseClasses} ${className || ''}`} {...props} />
    </>
  );
};
