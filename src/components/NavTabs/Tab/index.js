import Link from "next/link";
import React from "react";
import styles from "./styles";

const Tab = ({ name, href, active }) => {
  return (
    <styles.Tab>
      <styles.Close onClick={() => {}} size="12px" />
      <styles.ButtonLink href={href} active={active}>
        <styles.Icon active={active} />
        <span>{name}.js</span>
      </styles.ButtonLink>
    </styles.Tab>
  );
};

export default Tab;
