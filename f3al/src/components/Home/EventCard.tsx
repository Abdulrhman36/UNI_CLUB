import React from "react";

interface EventCardProps {
  title: string;
  time: string;
  date: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, time, date, image }) => {
  return (
    <article className="self-stretch p-4 my-auto bg-white rounded-xl min-w-60 shadow-[0px_4px_10px_rgba(238,238,238,0.25)] w-[296px]">
      <img
        src={image}
        alt={title}
        className="object-contain max-w-full rounded-lg aspect-[1.03] w-[264px]"
      />
      <div className="flex flex-col justify-center mt-6 w-full">
        <h2 className="text-xl font-medium text-sky-900">{title}</h2>
        <div className="flex gap-6 items-center self-end mt-2 text-sm text-neutral-600">
          <div className="flex gap-2 justify-center items-end self-stretch my-auto">
            <p>{time}</p>
            <div className="flex shrink-0 w-6 h-6">
              <ClockIcon />
            </div>
          </div>
          <div className="flex gap-2 justify-center items-end self-stretch my-auto whitespace-nowrap">
            <p>{date}</p>
            <div className="flex shrink-0 w-6 h-6">
              <CalendarIcon />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ClockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2V5"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2V5"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 9.09H20.5"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.6947 13.7H15.7037"
      stroke="#292D32"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.6947 16.7H15.7037"
      stroke="#292D32"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9955 13.7H12.0045"
      stroke="#292D32"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9955 16.7H12.0045"
      stroke="#292D32"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.29431 13.7H8.30329"
      stroke="#292D32"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.29431 16.7H8.30329"
      stroke="#292D32"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EventCard;
