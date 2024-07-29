import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FC } from "react";

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/gallery", name: "gallery" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

interface NavProps {
  containerStyles: string;
}

const Nav: FC<NavProps> = ({ containerStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
