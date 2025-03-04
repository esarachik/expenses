"use client";
import Nav from "@components/Nav";
import { FaCog, FaHome, FaUser } from "react-icons/fa";

export default function Home() {
  const links = [
    { label: "Inicio", icon: <FaHome />, href: "/" },
    { label: "Perfil", icon: <FaUser />, href: "/profile" },
    { label: "Configuración", icon: <FaCog />, href: "/settings" },
  ];

  return (
    <div className="flex bg-light-background dark:bg-dark-background dark:bg-background">
      <Nav logo="" links={links} defaultOpen={true} />
      <div className="p-7 text-light-foreground dark:text-dark-foreground">
        Home Page
      </div>
    </div>
  );
}