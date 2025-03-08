"use client";
import * as React from "react";

interface RadioOption {
  id: string;
  label: string;
}

interface RadioGroupProps {
  title: string;
  options: RadioOption[];
  selectedOption: string | null;
  onChange: (selectedId: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  title,
  options,
  selectedOption,
  onChange,
}) => {
  // Group options into rows of 3
  const rows: RadioOption[][] = [];
  for (let i = 0; i < options.length; i += 3) {
    rows.push(options.slice(i, i + 3));
  }

  return (
    <div className="self-end max-w-full w-[406px]">
      <h3 className="text-2xl font-medium leading-tight text-right text-sky-900">
        {title}
      </h3>
      <div className="flex flex-col items-end mt-4 w-full">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 items-start">
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
                    onClick={() => onChange(option.id)}
                    className={`flex shrink-0 w-7 h-7 bg-white border-2 border-solid border-[#EEE] rounded-[46px] cursor-pointer ${
                      selectedOption === option.id ? "border-blue-800" : ""
                    }`}
                  >
                    {selectedOption === option.id && (
                      <div className="m-auto w-3 h-3 bg-blue-800 rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
