import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FC } from "react";

const links = [
  { path: "/", name: "home", data_cy: "nav-home" },
  { path: "/about", name: "about", data_cy: "nav-about" },
  { path: "/gallery", name: "gallery", data_cy: "nav-gallery" },
  { path: "/projects", name: "projects", data_cy: "nav-projects" },
  { path: "/contact", name: "contact", data_cy: "nav-contact" },
];

interface NavProps {
  containerStyles: string;
  underlineStyles?: string;
  linkStyles: string;
}

const Nav: FC<NavProps> = ({
  containerStyles,
  underlineStyles,
  linkStyles,
}) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`} id="main-nav">
      {links.map((link, index) => {
        return (
          <Link
            data-cy={link.data_cy}
            href={link.path}
            key={index}
            className={`uppercase ${linkStyles} nav-links`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: "0" }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
