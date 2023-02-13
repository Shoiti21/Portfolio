import React from "react";
import Text from "../Text";

const Variable = ({ type, name, href }) => {
  return (
    <React.Fragment>
      <Text key={`type-${type}`} color="blue-medium">{`${type} `}</Text>
      <Text key={`name-${name}`} color="blue-light" href={href}>
        {name}
      </Text>
      <Text>{` = `}</Text>
    </React.Fragment>
  );
};

export default Variable;
