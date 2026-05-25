import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/app/_components/BootstrapClient";
import "./globals.css";
import NavbarComponent from "@/app/_components/navbars/NavbarComponent";
import FooterComponent from "@/app/_components/footers/FooterComponent";

export const metadata = {
  title: "TUDev",
  description: "Temple University's community of hackers and makers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent />
        {children}
        <FooterComponent />
        <BootstrapClient />
      </body>
    </html>
  );
}
