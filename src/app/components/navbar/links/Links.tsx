import React from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";

interface LinkItem {
  title: string;
  path: string;
}

function Links() {
  const links: LinkItem[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Admin",
      path: "/admin",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink key={link.title} linkItem={link} />
      ))}
    </div>
  );
}

export default Links;
