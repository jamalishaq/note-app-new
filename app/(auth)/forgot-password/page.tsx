'use client'

import { useActionState, useEffect, useState } from "react";
import { forgetPassword } from "../../../lib/auth_actions";
import Logo from "@/app/(note)/components/Logo";

type FormState = {
    message?: string;
    errors?: {
        email?: string;
        password?: string;
    };
};

const initialState: FormState = {};

const Page = () => {
    const [email, setEmail] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [state, formAction, pending] = useActionState(forgetPassword, initialState);

    useEffect(() => {
        if (state?.message === "success") {
            setShowSuccessModal(true);
            setEmail("");
        }
    }, [state])

    return (
        <div className="bg-neutral-0 py-12 md:px-12 px-4 flex flex-col gap-4 rounded-xl lg:w-[540px] md:w-[522px] mx-auto dark:bg-neutral-950">
            <header className="flex flex-col items-center gap-4">
                <Logo />
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-neutral-950 text-2xl font-bold dark:text-neutral-0">Forgotten Your Password</h1>
                    <p className="text-neutral-600 text-sm dark:text-neutral-300">Enter your email below, and we’ll send you a link to reset it.</p>
                </div>
            </header>
            <form className="pt-6 flex flex-col gap-4" action={formAction}>
                <div>
                    <label htmlFor="email" className="block text-sm text-neutral-600 font-medium mb-2 dark:text-neutral-0">Email Address</label>
                    <input type="text" id="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} className="px-4 py-3 w-full text-neutral-950 dark:text-neutral-0 border border-neutral-300 dark:border-neutral-600 rounded-lg outline-none placeholder:text-neutral-500 placeholder:text-sm" placeholder="email@example.com" />
                    {/* {state?.errors && <p aria-live="polite">{state.errors.email}</p>} */}
                </div>

                {state?.errors?.email && <div className="flex gap-2 items-center text-red-500 text-sm mt-2">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.5C2 11.8133 4.68605 14.5 8 14.5C11.3139 14.5 14 11.8133 14 8.5C14 5.18605 11.3139 2.5 8 2.5C4.68605 2.5 2 5.18605 2 8.5Z" stroke="#FB3748" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.0038 10.9621V8.09573V10.9621ZM8 6.0695V6.02734V6.0695Z" fill="#FB3748" />
                        <path d="M8.0038 10.9621V8.09573M8 6.0695V6.02734" stroke="#FB3748" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>{state.errors.email}</p>
                </div>}

                <button type="submit" className="text-white font-semibold text-center py-3 bg-blue-500 rounded-lg cursor-pointer">{pending ? "Loading..." : "Send Reset Link"}</button>
            </form>
            {showSuccessModal && <div className="w-full h-screen absolute inset-0 z-10 bg-black/50 text-center text-neutral-0 font-bold pt-20"> <p>Rset link hase been sent to your mail.</p> </div>}
        </div>
    )
}

export default Page