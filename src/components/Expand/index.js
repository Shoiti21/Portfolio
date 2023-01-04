import React from "react";
import styles from "./styles";
import { FiChevronDown } from "react-icons/fi";

const Expand = ({ disabled, children, initial, final }) => {
  const [open, setOpen] = React.useState(true);
  const content = React.useRef();

  const scrollHeight = React.useMemo(() => {
    return content.current?.scrollHeight;
  }, [children]);

  return (
    <div style={{ display: "flex", widht: "100%" }}>
      {!disabled && <styles.Icon open={open} onClick={() => setOpen(!open)} />}
      <div style={{ flex: 1 }}>
        {initial && (
          <styles.LineInitial open={open}>
            {initial}
            <styles.Ellipsis open={open} onClick={() => setOpen(!open)}>
              ···
            </styles.Ellipsis>
          </styles.LineInitial>
        )}
        <styles.Item
          ref={content}
          style={{
            maxHeight: open ? scrollHeight : "0px",
          }}
        >
          {children}
        </styles.Item>
        {final && final}
      </div>
    </div>
  );
};

export default Expand;
