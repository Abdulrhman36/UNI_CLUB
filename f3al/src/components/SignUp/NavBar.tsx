"use client";
import * as React from "react";

const NavBar: React.FC = () => {
  return (
    <header className="navigation-bar flex items-center px-16 py-7 w-full text-xl font-medium leading-tight text-sky-900 bg-white min-h-[98px] shadow-[0px_4px_10px_rgba(238,238,238,0.25)] max-md:px-5 max-md:max-w-full">
      <nav className="frame-1 flex gap-4 justify-center items-center self-stretch p-2 my-auto min-w-60">
        <a href="#" className="ittisal-bina self-stretch my-auto">
          اتصل بنا
        </a>
        <a href="#" className="assila-shaia self-stretch my-auto">
          الأسئلة الشائعة
        </a>
        <a href="#" className="raeesiya self-stretch my-auto ">
          الرئيسية
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
