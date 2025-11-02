"use client"
import { useActionState, useState } from "react";
import { login } from "../../../lib/auth_actions";
import Logo from "@/app/(note)/components/Logo";
import Link from "next/link";

type FormState = {
  message?: string;
  errors?: {
    email?: string;
    password?: string
  };
};

const initialState: FormState = {};

const Page = () => {
  const [state, formAction, pending] = useActionState(login, initialState);
  const [showPassword, setShowPassword] = useState(false);

  if (state.message === "success") {
    document.cookie = "isLoggedIn=true; path=/; max-age=3600";  // Cookie valid for 1 hour
  }

  return (
    <div className="bg-neutral-0 py-12 md:px-12 px-4 flex flex-col gap-4 rounded-xl lg:w-[540px] md:w-[522px] mx-auto dark:bg-neutral-950">
      <header className="flex flex-col items-center gap-4">
        <Logo />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-neutral-950 text-2xl font-bold dark:text-neutral-0">Welcome to Note</h1>
          <p className="text-neutral-600 text-sm dark:text-neutral-300">Please log in to continue</p>
        </div>
      </header>

      <form action={formAction} className="pt-6 flex flex-col gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-neutral-600 font-medium mb-2 dark:text-neutral-0">Email Address</label>
          <input type="text" id="name" name="email" className={`px-4 py-3 w-full border border-neutral-300 dark:border-neutral-600 rounded-lg outline-none text-neutral-950 dark:text-neutral-0 placeholder:text-neutral-500 placeholder:text-sm ${state?.errors?.email ? "border-red-500 dark:border-red-500" : ""}`} placeholder="email@example.com" />
          {state?.errors?.email && <div className="flex gap-2 items-center text-red-500 text-sm mt-2">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8.5C2 11.8133 4.68605 14.5 8 14.5C11.3139 14.5 14 11.8133 14 8.5C14 5.18605 11.3139 2.5 8 2.5C4.68605 2.5 2 5.18605 2 8.5Z" stroke="#FB3748" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.0038 10.9621V8.09573V10.9621ZM8 6.0695V6.02734V6.0695Z" fill="#FB3748" />
              <path d="M8.0038 10.9621V8.09573M8 6.0695V6.02734" stroke="#FB3748" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>{state.errors.email}</p>
          </div>}
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between">
            <label htmlFor="password" className="block mb-2 text-sm text-neutral-600 font-medium dark:text-neutral-0">Password</label>
            <a href="" className="text-neutral-600 text-[14px] underline underline-offset-2 hover:text-blue-500 dark:text-neutral-400">Forget</a>
          </div>

          <div className={`flex mb-2 border  border-neutral-300 dark:border-neutral-600 rounded-lg px-4 py-3  ${state?.errors?.password ? "border-red-500 dark:border-red-500" : ""}`}>
            <input type={showPassword ? "text" : "password"} id="password" name="password" className="border-none outline-none grow-1 text-neutral-950 dark:text-neutral-0 text-sm" />
            {!showPassword ? (
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.0022 8.42888C8.89226 8.42888 7.99219 9.2924 7.99219 10.3585C7.99219 11.4239 8.89235 12.2881 10.0022 12.2881C11.112 12.2881 12.0122 11.4239 12.0122 10.3585C12.0122 9.2924 11.1122 8.42888 10.0022 8.42888ZM6.74219 10.3585C6.74219 8.62936 8.20214 7.22888 10.0022 7.22888C11.8023 7.22888 13.2622 8.62936 13.2622 10.3585C13.2622 12.0866 11.8023 13.4881 10.0022 13.4881C8.20201 13.4881 6.74219 12.0866 6.74219 10.3585Z" fill="#717784" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.1466 5.99548C5.64193 4.78181 7.70928 3.91687 10.002 3.91687C12.2942 3.91687 14.3615 4.78113 15.857 5.99451C17.3362 7.19468 18.337 8.80808 18.337 10.3585C18.337 11.9089 17.3362 13.5222 15.857 14.7224C14.3615 15.9358 12.2942 16.8001 10.002 16.8001C7.70928 16.8001 5.64193 15.9351 4.1466 14.7214C2.66762 13.521 1.66699 11.9077 1.66699 10.3585C1.66699 8.80928 2.66762 7.19588 4.1466 5.99548ZM4.95364 6.91186C3.64221 7.97626 2.91699 9.28368 2.91699 10.3585C2.91699 11.4333 3.64221 12.7406 4.95364 13.8051C6.24873 14.8562 8.03638 15.6001 10.002 15.6001C11.9673 15.6001 13.755 14.8567 15.0501 13.8059C16.3615 12.7418 17.087 11.4345 17.087 10.3585C17.087 9.28248 16.3615 7.97506 15.0501 6.91102C13.755 5.8602 11.9673 5.11687 10.002 5.11687C8.03638 5.11687 6.24873 5.86073 4.95364 6.91186Z" fill="#717784" />
                </svg>
                <span className="sr-only">Show Password</span>
              </button>
            ) : (
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.42 17.73c-2.23-1.46-3.67-3.66-3.67-5.59 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71M19.85 8.61c.891 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.799-.13-2.63-.36" /><path stroke="#0E121B" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.766 14.367a3.12 3.12 0 0 1-.925-2.23 3.159 3.159 0 0 1 5.394-2.24M15.11 12.7a3.158 3.158 0 0 1-2.538 2.541M19.892 4.25 4.118 20.024" /></svg>
                <span className="sr-only">Hide Password</span>
              </button>
            )}
          </div>

          {state?.errors?.password && <div className="flex gap-2 items-center text-red-500 text-sm mt-2">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8.5C2 11.8133 4.68605 14.5 8 14.5C11.3139 14.5 14 11.8133 14 8.5C14 5.18605 11.3139 2.5 8 2.5C4.68605 2.5 2 5.18605 2 8.5Z" stroke="#FB3748" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.0038 10.9621V8.09573V10.9621ZM8 6.0695V6.02734V6.0695Z" fill="#FB3748" />
              <path d="M8.0038 10.9621V8.09573M8 6.0695V6.02734" stroke="#FB3748" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>{state.errors.password}</p>
          </div>}
        </div>

        <button type="submit" className="text-white font-semibold text-center py-3 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-700">{pending ? "Saving..." : "Login"}</button>
      </form>

      <div>
        <p className="text-center text-neutral-600 text-[14px] dark:text-neutral-300">Or login with:</p>
        <button className="text-neutral-950 dark:text-neutral-0 flex justify-center gap-4 py-3 mt-4 cursor-pointer rounded-xl border border-neutral-300 w-full hover:bg-neutral-50 hover:border-neutral-300 dark:hover:bg-neutral-800 dark:hover:border-neutral-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
            <path fill="currentColor" fillRule="evenodd" d="M20.838 14.718a8.932 8.932 0 0 0 .086-2.857.558.558 0 0 0-.557-.473h-7.805a.562.562 0 0 0-.562.562v2.206c0 .31.252.562.562.562h4.275c.176 0 .305.18.239.343-.935 2.31-3.39 3.826-6.132 3.32-2.106-.39-3.832-2.06-4.284-4.153a5.477 5.477 0 0 1 8.369-5.776.572.572 0 0 0 .73-.06l1.703-1.733a.559.559 0 0 0-.046-.832 8.897 8.897 0 0 0-5.161-1.815c-4.872-.135-9.091 3.823-9.25 8.694-.167 5.108 3.927 9.302 8.995 9.302 4.383 0 8.037-3.14 8.838-7.29Z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Google</span>
        </button>
      </div>

      <p className="mt-4 text-center text-[14px] text-neutral-600 dark:text-neutral-300 ">No account yet?? <Link href="/signup" className="text-neutral-950 hover:text-blue-500 dark:text-neutral-0">Sign Up</Link></p>

    </div>
  )
}

export default Page;