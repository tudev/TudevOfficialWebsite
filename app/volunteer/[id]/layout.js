import NavbarComponent from "@/app/_components/navbars/NavbarComponent";

export const metadata = {
  title: "TUDev || Job Openings",
  description: "This page is for open positions for students to join our team",
};

export default function JobPageDetailLayout({ children }) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
