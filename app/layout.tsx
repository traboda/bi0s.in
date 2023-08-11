import { Metadata } from 'next'
import { Fira_Code as Font } from 'next/font/google'

import './global.css';
import Header from "./header";
import Footer from "./footer";
import React from "react";
import ThemeProvider from "./theme";

const font = Font({ subsets: ['latin'], weight: ['400', '600', '700'] })


export const metadata: Metadata = {
  title: 'Team bi0s - India\'s No.1 Ranked CTF Team & Cyber Security Research Club',
  description: 'Team bi0s is a cyber-security enthusiast club and research group from Amrita Vishwa Vidyapeetham (University), India.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
    <head>
      <meta name="theme-color" content="#000" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:site_name" content="Team bi0s" />
      <meta property="og:locale" content="en_US" />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
    </head>
    <ThemeProvider>
      <body className={font.className}>
      <Header />
      <div className="flex justify-center">
        <div style={{width: '1100px', maxWidth: '100%'}}>
          <div style={{height: '7vh'}}/>
          <main className="p-2">
            {children}
          </main>
          <Footer/>
        </div>
      </div>
      </body>
    </ThemeProvider>
    </html>
);

export default RootLayout;