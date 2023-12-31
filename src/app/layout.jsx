import "./globals.css";
import NavbarDesktop from "@/components/Fragments/Navbar/NavbarDesktop";
import NavbarMobile from "@/components/Fragments/Navbar/NavbarMobile";

export const metadata = {
  title: "Takapedia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ height: "400vh" }}>
        <nav>
          <NavbarMobile />
          <NavbarDesktop />
        </nav>
        {children}
      </body>
    </html>
  );
}
