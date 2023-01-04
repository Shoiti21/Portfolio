import React from "react";
import { useRouter } from "next/router";
import styles from "./styles";
import Tab from "./Tab";

const routers = [
  { name: "index", href: "/" },
  { name: "bomberman", href: "/bomberman" },
];

const NavTabs = () => {
  const { asPath } = useRouter();
  return (
    <styles.Nav>
      {routers.map((router) => (
        <Tab
          name={router.name}
          href={router.href}
          active={asPath == router.href}
        />
      ))}
    </styles.Nav>
  );
};

export default NavTabs;
