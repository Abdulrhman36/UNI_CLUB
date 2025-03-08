"use client";
import * as React from "react";

interface CheckboxOption {
  id: string;
  label: string;
}

interface CheckboxGroupProps {
  title: string;
  options: CheckboxOption[];
  selectedOptions: string[];
  onChange: (selectedIds: string[]) => void;
  maxSelections?: number;
  helperText?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  title,
  options,
  selectedOptions,
  onChange,
  maxSelections,
  helperText,
}) => {
  const handleCheckboxChange = (id: string) => {
    if (selectedOptions.includes(id)) {
      onChange(selectedOptions.filter((optionId) => optionId !== id));
    } else {
      if (maxSelections && selectedOptions.length >= maxSelections) {
        return;
      }
      onChange([...selectedOptions, id]);
    }
  };

  // Group options into rows of 3
  const rows: CheckboxOption[][] = [];
  for (let i = 0; i < options.length; i += 3) {
    rows.push(options.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col self-end max-w-full w-[406px]">
      <div className="self-end w-full">
        <h3 className="text-2xl font-medium leading-tight text-right text-sky-900">
          {title}
        </h3>
        <div className="flex flex-col mt-4 w-full">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-4 items-start self-end ${
                rowIndex > 0 ? "mt-3" : ""
              }`}
            >
              {row.map((option) => (
                <div
                  key={option.id}
                  className="flex gap-3 justify-center items-center"
                >
                  <span className="self-stretch my-auto text-base leading-tight text-right text-sky-900">
                    {option.label}
                  </span>
                  <div className="self-stretch my-auto w-7">
                    <div
                      onClick={() => handleCheckboxChange(option.id)}
                      className={`flex shrink-0 w-7 h-7 bg-white rounded-md border-2 border-solid border-[#EEE] cursor-pointer ${
                        selectedOptions.includes(option.id) ? "bg-blue-800" : ""
                      }`}
                    >
                      {selectedOptions.includes(option.id) && (
                        <svg
                          className="m-auto"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3334 4L6.00008 11.3333L2.66675 8"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {helperText && (
        <p className="mt-6 text-base leading-tight text-right text-zinc-400">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default CheckboxGroup;
