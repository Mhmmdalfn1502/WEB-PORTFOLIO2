import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Alfan.",
  description: "Website portfolio pribadi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "JetBrainsMono" }} className="bg-[#F5F4FF]]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
