import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "./context/theme-context";
import ActiveSectionContextProvider from "./context/active-section-context";
import Header from "./components/header";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Raed Baffoun",
  description: "This is my personal portfolio showcasing my knowledge in web developpement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
    <body
      className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </body>
  </html>
  );
}
