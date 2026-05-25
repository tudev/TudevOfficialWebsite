import NavbarComponent from "@/app/_components/navbars/NavbarComponent";

export const metadata = {
  title: "TUDev - Events",
  description: "Details about upcoming TUDev events.",
};

export default function EventDetailLayout({ children }) {
  return (
    <>
      <NavbarComponent forceScrolled />
      {children}
    </>
  );
}
