"use client";
import * as React from "react";

interface DropdownFieldProps {
  label: string;
  options: string[];
  selectedOption?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div className="w-full font-medium leading-tight text-right">
      <label className="text-2xl text-sky-900 block">{label}</label>
      <div className="relative mt-4">
        <select
          value={selectedOption}
          onChange={onChange}
          className="flex gap-2 items-center p-4 w-full text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-[#EEE] text-zinc-400 appearance-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DropdownField;
