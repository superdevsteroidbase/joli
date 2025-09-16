"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const senderPhone = formData.get("senderPhone");
    const senderName = formData.get("senderName");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }
    if (!validateString(senderPhone, 500)) {
        return {
            error: "Invalid phone",
        };
    }
    if (!validateString(senderName, 5000)) {
        return {
            error: "Invalid name",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "JH&T <onboarding@resend.dev>",
            to: "ogunyade.kehinde@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                senderEmail: senderEmail as string,
                senderPhone: senderPhone as string,
                senderName: senderName as string,
                message: message as string,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};