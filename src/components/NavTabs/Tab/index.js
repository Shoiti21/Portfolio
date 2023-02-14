import React from "react";
import styles from "./styles";

const Tab = ({ name, href, active, onClose }) => {
  return (
    <React.Fragment>
      <styles.Tab>
        <styles.Close onClick={onClose} size="12px" />
        <styles.ButtonLink href={href} active={!!active}>
          <styles.Icon active={!!active} />
          <span>{name}.js</span>
        </styles.ButtonLink>
      </styles.Tab>
    </React.Fragment>
  );
};

export default Tab;
