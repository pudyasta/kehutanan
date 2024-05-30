import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Footer from "../../layouts/partials/Footer";
import Navbar from "../../layouts/partials/Navbar";
import localFont from "next/font/local";

export const metadata = {
  title: "Festival Inovasi Kehutanan UGM",
  description: "Festival Inovasi Kehutanan UGM",
};

const NeueMachina = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMachina-Light.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/NeueMachina-Regular.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/NeueMachina-Ultrabold.otf",
      weight: "900",
    },
  ],
  variable: "--font-neumachina",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${NeueMachina.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Festival Inovasi Kehutanan UGM" />
        <meta name="keywords" content="Festival Inovasi Kehutanan UGM" />
        <meta name="author" content="Festival Inovasi Kehutanan UGM" />
        <title>Festival Karya Inovasi Kehutanan UGM</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
