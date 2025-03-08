import React from "react";

const EventFilter = () => {
  const filters = [
    { id: 1, name: "كل الفعاليات", active: false },
    { id: 2, name: "الفعاليات الحالية", active: true },
    { id: 3, name: "الفعاليات القادمة", active: false },
    { id: 4, name: "الفعاليات السابقة", active: false },
  ];

  return (
    <div className="flex flex-wrap gap-3 items-center self-end text-2xl font-medium text-center text-zinc-400 max-md:max-w-full">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`gap-2 self-stretch px-4 py-1 my-auto ${
            filter.active
              ? "text-blue-800 border-b-2 border-solid border-b-[#0349A1] py-2.5"
              : "min-h-9"
          }`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default EventFilter;
