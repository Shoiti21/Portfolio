import { isEmpty } from "lodash";
import React from "react";
import Expand from "../Expand";
import TabSpace from "../TabSpace";
import Text from "../Text";

const Function = ({ params = {}, name = "test", children, returnText }) => {
  const formatted = React.useMemo(() => {
    let formattedParam = [];

    if (!isEmpty(params)) {
      Object.keys(params).forEach((key, index) => {
        formattedParam.push(
          <Text
            key={`param-key-${index}`}
            color="blue-lightest"
          >{`${key}`}</Text>
        );
        if (params[key]) {
          formattedParam.push(
            <Text key={`param-equal-${index}`}>{` = `}</Text>
          );
          formattedParam.push(
            <Text key={`param-value-${index}`} color="orage-medium">
              {typeof params[key] == "string"
                ? `"${params[key]}"`
                : params[key]}
            </Text>
          );
        }
        if (Object.keys(params).at(-1) != key) {
          formattedParam.push(<Text key={`param-comma-${index}`}>{`, `}</Text>);
        }
      });
      formattedParam.unshift(
        <Text key={`param-opening`} color="pink-medium">{`{ `}</Text>
      );
      formattedParam.push(
        <Text key={`param-closure`} color="pink-medium">{` }`}</Text>
      );
    }
    const lineInitial = (
      <>
        <Text key={`function-const`} color="blue-medium">{`const `}</Text>
        <Text key={`function-name`} color="yellow-light">
          {name}
        </Text>
        <Text key={`function-equal`}>{` = `}</Text>
        <Text
          key={`function-bracket-opening`}
          color="yellow-medium"
        >{`(`}</Text>
        <Text>{formattedParam}</Text>
        <Text
          key={`function-bracket-closure`}
          color="yellow-medium"
        >{`)`}</Text>
        <Text key={`function-array`} color="blue-light">{` => `}</Text>
        <Text key={`function-opening`} color="yellow-medium">{`{`}</Text>
      </>
    );
    const lineFinal = (
      <Text key={`function-closure`} color="yellow-medium">{`}`}</Text>
    );
    return (
      <Expand initial={lineInitial} final={lineFinal}>
        <TabSpace>{children}</TabSpace>
      </Expand>
    );
  }, [name, params]);

  return <>{formatted}</>;
};

export default Function;
