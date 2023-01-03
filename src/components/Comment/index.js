import React from "react";
import styles from "./styles";
import Expand from "../Expand";

const Comment = ({ textLine, multiLine }) => {
  const formatted = React.useMemo(() => {
    let formattedLine;
    const tag = multiLine ? `\xa0*` : `//`;

    formattedLine = textLine.map((text, index) => {
      return (
        <p key={`comment-line-${index}`}>
          <styles.Comment>{`${tag}\xa0${text}`}</styles.Comment>
        </p>
      );
    });

    const lineInitial = (
      <styles.Comment key={"comment-opening"}>/*</styles.Comment>
    );
    const lineFinal = (
      <styles.Comment key={"comment-closure"}>&ensp;*/</styles.Comment>
    );

    return (
      <Expand disabled={!multiLine} initial={lineInitial} final={lineFinal}>
        {formattedLine}
      </Expand>
    );
  }, [textLine]);

  return <>{formatted}</>;
};

export default Comment;
