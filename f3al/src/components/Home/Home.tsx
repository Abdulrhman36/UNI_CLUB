"use client";
import React from "react";
import Navbar from "./Navbar";
import EventsSection from "./EventsSection";

function Home() {
  return (
    <main className="flex overflow-hidden flex-col pb-52 bg-white max-md:pb-24">
      <Navbar />
      <EventsSection />
    </main>
  );
}

export default Home;
