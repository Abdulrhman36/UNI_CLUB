"use client";
import * as React from "react";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="w-full font-medium leading-tight text-right">
      <label className="text-2xl text-sky-900 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 shrink gap-2 self-stretch p-4 mt-4 w-full text-xl whitespace-nowrap bg-white rounded-lg border border-solid basis-0 border-[#EEE] text-zinc-400"
      />
    </div>
  );
};

export default InputField;
