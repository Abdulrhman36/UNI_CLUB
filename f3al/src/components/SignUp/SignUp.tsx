"use client";
import * as React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import InputField from "./InputField";
import DropdownField from "./DropdownField";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";
import Button from "./Button";

const SignUp: React.FC = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("مشرف");
  const [selectedCollege, setSelectedCollege] = useState<string | null>(null);
  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);

  // Club options
  const clubOptions = [
    { id: "integrity", label: "نزاهة" },
    { id: "talent", label: "الموهبة والابتكار" },
    { id: "cyber", label: "الأمن السيبراني" },
    { id: "reading", label: "القراءة" },
    { id: "robot", label: "الروبوت" },
  ];

  // College options
  const collegeOptions = [
    { id: "management", label: "الإدارة والاقتصار" },
    { id: "computer", label: "الحاسب" },
    { id: "agriculture", label: "الزراعة والأغدية" },
  ];

  // Role options
  const roleOptions = ["مشرف", "طالب", "مدير"];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({
      email,
      username,
      password,
      role,
      selectedCollege,
      selectedClubs,
    });
  };

  return (
    <main className="flex overflow-hidden flex-col pb-52 bg-white max-md:pb-24">
      <NavBar />

      <section className="frame-41125396 self-center p-12 mt-16 w-full bg-white rounded-3xl max-w-[1312px] shadow-[0px_4px_10px_rgba(238,238,238,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="hesab-jadeed text-5xl font-medium leading-tight text-right text-sky-900 max-md:max-w-full max-md:text-4xl">
          حساب جديد
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-10 mt-12 w-full max-md:mt-10 max-md:max-w-full"
        >
          {/* Left Column */}
          <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <CheckboxGroup
                title="الأندية المركزية"
                options={clubOptions}
                selectedOptions={selectedClubs}
                onChange={setSelectedClubs}
                maxSelections={3}
                helperText="بإمكانك اختيار ثلاث أندية فقط"
              />

              <div className="mt-6 w-full">
                <DropdownField
                  label="اختار دورك"
                  options={roleOptions}
                  selectedOption={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-28 max-md:mt-10">
              <Button text="تسجيل" type="submit" />
            </div>
            <button
              type="button"
              className="mt-6 text-xl w-full font-medium text-center text-blue-800 cursor-pointer"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              تملك حساب؟
            </button>
          </div>

          {/* Divider */}
          <div className="shrink-0 w-0 border-r border-zinc-100"></div>

          {/* Right Column */}
          <div className="flex flex-col flex-1 shrink justify-center self-start basis-0 min-w-60 max-md:max-w-full">
            <InputField
              label="البريد الإلكتروني"
              placeholder="your@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="mt-6">
              <InputField
                label="اسم المستخدم"
                placeholder="your"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <InputField
                label="كلمة المرور"
                placeholder="***************"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <RadioGroup
                title="الكلية"
                options={collegeOptions}
                selectedOption={selectedCollege}
                onChange={setSelectedCollege}
              />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
