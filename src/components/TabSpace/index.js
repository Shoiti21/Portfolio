import React from "react";
import styles from "./styles";

const TabSpace = ({ children, ...props }) => {
  return <styles.TabSpace props>{children}</styles.TabSpace>;
};

export default TabSpace;
