import NavbarComponent from "../components/navbars/NavbarComponent";

export default function MemberPageDetailLayout({ children }) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
