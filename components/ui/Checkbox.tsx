import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode; // Changed from string to React.ReactNode
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, ...props }) => {
  return (
    <label htmlFor={id} className="flex gap-x-3 py-3 flex-row items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        className="form-checkbox h-5 w-5 rounded border-[#d0d0e7] border-2 bg-transparent text-[#4747ea] checked:bg-[#4747ea] checked:border-[#4747ea] checked:bg-[image:var(--checkbox-tick-svg)] focus:ring-0 focus:ring-offset-0 focus:border-[#d0d0e7] focus:outline-none"
        {...props}
      />
      {/* Ensure the label is rendered correctly, it might be text or JSX */}
      <span className="text-[#0e0e1b] text-base font-normal leading-normal">{label}</span>
    </label>
  );
};