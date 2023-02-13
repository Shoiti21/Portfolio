import React from "react";
import TabSpace from "../TabSpace";
import Text from "../Text";
import Variable from "../Variable";

const Json = ({ parameters }) => {
  return (
    <React.Fragment>
      <Text color="pink-medium">{`{`}</Text>
      <TabSpace>
        {parameters &&
          parameters.map((parameter) => {
            return (
              <p>
                <Text color="blue-lightest">{`${parameter.name}: `}</Text>
                {typeof parameter.value == "string" ? (
                  <Text color="orage-medium">{`"${parameter.value}"`}</Text>
                ) : (
                  <Text color="green-lightest">{parameter.value}</Text>
                )}
                <Text>{`,`}</Text>
              </p>
            );
          })}
      </TabSpace>
      <p>
        <Text color="pink-medium">{`}`}</Text>
        <Text>{`;`}</Text>
      </p>
    </React.Fragment>
  );
};

export default Json;
