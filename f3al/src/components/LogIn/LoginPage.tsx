"use client";
import * as React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className="w-full min-h-screen bg-white font-['Tajawal']">
        <Header />
        <section className="flex justify-center pt-16">
          <LoginForm />
        </section>
      </main>
    </>
  );
}

export default LoginPage;
