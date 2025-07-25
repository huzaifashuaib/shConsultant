import "./globals.css";
import { Archivo } from "next/font/google";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});
export const metadata = {
  title: "Business Consultants",
  icons: {
    icon: "/Favicon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`$ ${archivo.variable} antialiased relative `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
