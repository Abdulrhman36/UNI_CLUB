"use client";
import React, { useState } from "react";
import InputField from "./InputField";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <article className="p-12 bg-white rounded-3xl shadow-sm w-[644px] max-md:max-w-[644px] max-md:w-[90%] max-sm:p-6 max-sm:w-[95%]">
      <h1 className="mb-16 text-5xl font-medium text-center text-sky-900 max-sm:text-4xl">
        تسجيل الدخول
      </h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <InputField
          label="البريد الإلكتروني/اسم المستخدم"
          type="text"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex flex-col gap-4">
          <InputField
            label="كلمة المرور"
            type="password"
            placeholder="***************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="text-xl font-medium text-right text-blue-800 cursor-pointer"
          >
            نسيت كلمة المرور؟
          </button>
        </div>

        <button
          type="submit"
          className="px-3 py-4 mt-10 w-full text-xl font-medium text-center text-white bg-blue-800 rounded-lg cursor-pointer border-none"
        >
          تسجيل الدخول
        </button>

        <button
          type="button"
          className="mt-6 text-xl font-medium text-center text-blue-800 cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          انشاء حساب جديد
        </button>
      </form>
    </article>
  );
}

export default LoginForm;
