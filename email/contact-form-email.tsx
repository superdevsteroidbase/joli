"use client"
import React from "react";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
    senderPhone: string;
    senderName: string;
};

export default function ContactFormEmail({
    senderName,
    senderPhone,
    message,
    senderEmail,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your Travel website</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following message from the contact form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's name is: {senderName}</Text>
                            <Text>The sender's phone is: {senderPhone}</Text>
                            <Text>The sender's email is: {senderEmail}</Text>
                            <Text>The sender's email is: {message}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}