
"use client";

import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface FormState {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<FormState>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState<boolean>(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_qndlbc4", "template_ad4h9k3",
                {
                    from_name: form.name,
                    to_name: "JH&T",
                    phone: form.phone,
                    email: form.email,
                    to_email: "Jolihst.info@gmail.com",
                    message: form.message,
                },
                "mjSLTsq--7oo1sGmT" 
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    toast.error("Ahh, something went wrong. Please try again.");
                }
            );
    };


    return (
        <section
            id="contact"
        >
            <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl text-slate-500'>
                <h1 className="xl:max-w-[220px] text-lg text-gray-10">Get in touch with us now</h1>
                <p className="regular-16 text-gray-10 ">on
                Jolihst.info@gmail.com or fill the form below</p>
                <form
                    className="mt-10 flex flex-col dark:text-black "
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <input
                        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        name="name"
                        type="text"
                        value={form.name}
                        required
                        maxLength={500}
                        placeholder="Your name"
                        onChange={handleChange}
                    />
                    <input
                        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        name="email"
                        value={form.email}
                        type="email"
                        required
                        maxLength={500}
                        placeholder="Your email"
                        onChange={handleChange}
                    />
                    <input
                        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        name="phone"
                        value={form.phone}
                        type="tel"
                        required
                        maxLength={500}
                        placeholder="Your phone"
                        onChange={handleChange}
                    />
                    <textarea
                        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        name="message"
                        value={form.message}
                        placeholder="Your message"
                        required
                        maxLength={5000}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                    >
                        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </section>
    );
}
