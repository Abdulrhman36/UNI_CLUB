import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-2xl font-medium text-right text-sky-900 max-sm:text-xl">
        {label}
      </label>
      <div className="p-4 w-full bg-white rounded-lg border border-solid border-[#EEE] max-sm:p-3">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full text-xl text-right border-none text-zinc-400 outline-none"
        />
      </div>
    </div>
  );
}

export default InputField;
