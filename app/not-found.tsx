import React from "react";

export const metadata = {
    title: "Page Not Found - team bi0s | India's No.1 CTF Team & Cyber Security Research Club",
}

const NotFoundPage = () => (
    <section className="min-h-[25vmin] flex items-center py-[5vh] px-6">
        <div>
            <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl mb-7">
                Page Not Found
            </h1>
            <p className="opacity-60">
                We could not find the page you are looking for in our website.
            </p>
        </div>
    </section>
);

export default NotFoundPage;