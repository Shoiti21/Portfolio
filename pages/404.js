import { useRouter } from "next/router";
import React from "react";
import Comment from "../src/components/Comment";
import Function from "../src/components/Function";
import Json from "../src/components/Json";
import TabSpace from "../src/components/TabSpace";
import Text from "../src/components/Text";
import Variable from "../src/components/Variable";

export default function Error404Page() {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 5000);
  });
  return (
    <React.Fragment>
      <Comment textLine={["Redirecionamento do usuário"]} multiLine />
      <Function name={"Redirect"}>
        <p>
          <Text color="pink-medium">{`try `}</Text>
          <Text color="yellow-medium">{`{`}</Text>
        </p>
        <TabSpace>
          <p>
            <Variable type="var" name="xhttp" />
            <Text color="blue-medium">{`new `}</Text>
            <Text color="pink-medium">{`XMLHttpRequest`}</Text>
            <Text color="yellow-medium">{`()`}</Text>
            <Text>{`;`}</Text>
          </p>
          <p>
            <Text color="blue-lightest">{`xhttp`}</Text>
            <Text>{`.`}</Text>
            <Text color="yellow-light">{`open`}</Text>
            <Text color="yellow-medium">{`(`}</Text>
            <Text color="orage-medium">{`"GET"`}</Text>
            <Text>{`, `}</Text>
            <Text color="orage-medium">{`"/404"`}</Text>
            <Text>{`, `}</Text>
            <Text color="blue-medium">{`false`}</Text>
            <Text color="yellow-medium">{`)`}</Text>
            <Text>{`;`}</Text>
          </p>
          <p>
            <Text color="blue-lightest">{`xhttp`}</Text>
            <Text>{`.`}</Text>
            <Text color="yellow-light">{`send`}</Text>
            <Text color="yellow-medium">{`()`}</Text>
            <Text>{`;`}</Text>
          </p>
        </TabSpace>
        <p>
          <Text color="yellow-medium">{`} `}</Text>
          <Text color="pink-medium">{`catch `}</Text>
          <Text color="yellow-medium">{`(`}</Text>
          <Text color="blue-lightest">{`error`}</Text>
          <Text color="yellow-medium">{`) `}</Text>
          <Text color="yellow-medium">{`{`}</Text>
        </p>
        <TabSpace>
          <Variable type="const" name="Error" />
          <Json
            parameters={[
              { name: "status", value: 404 },
              {
                name: "message",
                value: "Esta página não pôde ser encontrada.",
              },
            ]}
          />
          <p>
            <Text color="blue-lightest">{`window`}</Text>
            <Text>{`.`}</Text>
            <Text color="blue-lightest">{`location`}</Text>
            <Text>{`.`}</Text>
            <Text color="blue-lightest">{`href`}</Text>
            <Text>{` = `}</Text>
            <Text color="orage-medium">{`"/"`}</Text>
            <Text>{`;`}</Text>
          </p>
        </TabSpace>
        <p>
          <Text color="yellow-medium">{`}`}</Text>
        </p>
      </Function>
    </React.Fragment>
  );
}
