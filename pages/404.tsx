import React from "react";
import styled from "@emotion/styled";
import Layout from "../src/layout";


const HeaderSection = styled('section')`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh 1rem;
`;

const NotFoundPage = () => (
    <Layout title="Page Not Found - team bi0s | India's No.1 CTF Team & Cyber Security Research Club">
        <HeaderSection>
            <div>
                <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl mb-7">
                    Page Not Found
                </h1>
                <p className="opacity-60">
                    We could not find the page you are looking for in our website.
                </p>
            </div>
        </HeaderSection>
    </Layout>
);

export default NotFoundPage;