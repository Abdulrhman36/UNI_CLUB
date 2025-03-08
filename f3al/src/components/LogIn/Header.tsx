import React from "react";

function Header() {
  return (
    <header className="flex justify-start items-center px-16 py-6 w-full bg-white shadow-sm h-[98px] max-md:px-8 max-md:py-6 max-sm:p-4 max-sm:h-auto">
      <nav className="flex gap-4 max-sm:hidden">
        <button className="text-xl font-medium text-sky-900 cursor-pointer">
          اتصل بنا
        </button>
        <button className="text-xl font-medium text-sky-900 cursor-pointer">
          الأسئلة الشائعة
        </button>
        <button className="text-xl font-medium text-sky-900 cursor-pointer">
          الرئيسية
        </button>
      </nav>
    </header>
  );
}

export default Header;
