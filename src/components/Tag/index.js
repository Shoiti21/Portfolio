import React from "react";
import styles from "./styles";
import Expand from "../Expand";
import Text from "../Text";
import TabSpace from "../TabSpace";

const Tag = ({ tag, children }) => {
  const formatted = React.useMemo(() => {
    const lineInitial = (
      <span>
        <styles.Tag>{`<`}</styles.Tag>
        <Text color="blue-medium">{tag}</Text>
        <styles.Tag>{`>`}</styles.Tag>
      </span>
    );
    const lineFinal = (
      <span>
        <styles.Tag>{`</`}</styles.Tag>
        <Text color="blue-medium">{tag}</Text>
        <styles.Tag>{`>`}</styles.Tag>
      </span>
    );

    return (
      <Expand initial={lineInitial} final={lineFinal}>
        <TabSpace>{children}</TabSpace>
      </Expand>
    );
  }, [tag]);

  return formatted;
};

export default Tag;
