import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer/>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      </body>
    </html>
  );
}
