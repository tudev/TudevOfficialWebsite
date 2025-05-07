import NavbarComponent from "../components/navbars/NavbarComponent";

export const metadata = {
  title: "TUDev - Club Projects",
  description: "This page is projects that have been presented by our members.",
};
export default function ProjectPageDetailLayout({ children }) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
