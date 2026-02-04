import "./globals.css";
import { serif, sans } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className=" font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
 