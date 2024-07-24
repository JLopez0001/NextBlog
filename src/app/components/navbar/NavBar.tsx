import React from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

function NavBar() {
  return (
    <header>
      <nav className={styles.container}>
        <Link href="/" title="Go to homepage">
          <Image src="/logo.jpg" width={200} height={200} alt="Logo" />
        </Link>
        <Links />
      </nav>
    </header>
  );
}

export default NavBar;
