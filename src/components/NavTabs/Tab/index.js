import React from "react";
import styles from "./styles";

const Tab = () => {
  return (
    <styles.Tab>
      <styles.Icon />
      <span>index.js</span>
      <styles.Close>
        <span>x</span>
      </styles.Close>
    </styles.Tab>
  );
};

export default Tab;
