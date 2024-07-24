"use client";

import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";
import Link from "next/link";

interface NavLinkProps {
  linkItem: {
    title: string;
    path: string;
  };
}

function NavLink({ linkItem }: NavLinkProps) {
  const pathname = usePathname();
  console.log("this is pathname", pathname);

  return (
    <div>
      <Link
        className={`${styles.container} ${
          pathname === linkItem.path && styles.active
        }`}
        href={linkItem.path as any}
      >
        {linkItem.title}
      </Link>
    </div>
  );
}

export default NavLink;
