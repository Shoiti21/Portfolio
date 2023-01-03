import Link from "next/link";
import React from "react";
import styles from "./styles";

const Text = ({ color, href, children }) => {
  return !href ? (
    <styles.Text color={color}>{children}</styles.Text>
  ) : (
    <Link href={href} passHref legacyBehavior>
      <styles.Link color={color}>{children}</styles.Link>
    </Link>
  );
};

export default Text;
