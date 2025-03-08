import React from "react";
import EventFilter from "./EventFilter";
import EventCard from "./EventCard";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "تحدي الدكاء الاصطناعي",
      time: "10:00 AM",
      date: "02-02-2025",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/55fdc364a14f00b523b8d7871aa1a194c17b4e6eff8d1e5fc37904242189f48e?placeholderIfAbsent=true&apiKey=0f9dff8c357f4bdab8308de3ac5b674f",
    },
    {
      id: 2,
      title: "معرض المشاريع الإلكتروني",
      time: "11:00 AM",
      date: "05-02-2025",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c4654d1f822d8030b923cfa0f8bbf61e2ec0386c1dd0c47bbb89cd99974992cb?placeholderIfAbsent=true&apiKey=0f9dff8c357f4bdab8308de3ac5b674f",
    },
    {
      id: 3,
      title: "بطولة الألعاب الإلكتروني",
      time: "9:00 AM",
      date: "10-02-2025",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/599af63940ae2e94c31053b7dec0e19d7e3ef8a1c4dd78f7f87a4c4607d8e2b5?placeholderIfAbsent=true&apiKey=0f9dff8c357f4bdab8308de3ac5b674f",
    },
  ];

  return (
    <section className="self-center p-12 mt-16 w-full leading-tight bg-white rounded-3xl max-w-[1312px] shadow-[0px_4px_10px_rgba(238,238,238,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-5xl font-medium text-right text-sky-900 max-md:max-w-full max-md:text-4xl">
        الفعاليات
      </h1>
      <div className="flex flex-col justify-center mt-8 w-full max-md:max-w-full">
        <EventFilter />
        <div className="flex flex-wrap gap-10 items-center mt-12 w-full text-right max-md:mt-10 max-md:max-w-full">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              time={event.time}
              date={event.date}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
