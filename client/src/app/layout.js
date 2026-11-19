import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContextProviderWrapper from "./context_provider_wrapper";
import SideBarProvider from "./(with_nav)/_context/sidebar_context";
import NavBar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "rstream",
  description: "stream movies and series",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen h-full">   
        { children } 
      </body>
    </html>
  );
}
