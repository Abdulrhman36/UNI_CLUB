import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-16 py-6 w-full bg-white shadow-[0px_4px_10px_rgba(238,238,238,0.25)] max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-4 justify-center items-center self-stretch p-2 my-auto text-xl font-medium leading-tight text-sky-900 min-w-60">
        <a href="#" className="self-stretch my-auto">
          اتصل بنا
        </a>
        <a href="#" className="self-stretch my-auto">
          الأسئله الشائعه
        </a>
        <a href="#" className="self-stretch my-auto">
          الرئيسية
        </a>
      </nav>
      <div className="flex gap-3 items-center self-stretch my-auto">
        <button
          type="button"
          className="mt-6 text-xl w-full font-medium text-center text-blue-800 cursor-pointer"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          تسجيل الدخول
        </button>
        <button
          type="button"
          className="mt-6 text-xl w-full font-medium text-center text-blue-800 cursor-pointer"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          إنشاء حساب
        </button>
        <div className="flex gap-2 justify-center items-center self-stretch px-2.5 my-auto rounded-3xl bg-slate-200 h-[50px] min-h-[50px] w-[50px]">
          <div className="flex self-stretch my-auto w-8 min-h-8">
            {/* User icon would go here */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
