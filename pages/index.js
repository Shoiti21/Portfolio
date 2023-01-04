import React from "react";
import Comment from "../src/components/Comment";
import Function from "../src/components/Function";
import Expand from "../src/components/Expand";
import Text from "../src/components/Text";
import TabSpace from "../src/components/TabSpace";
import Tag from "../src/components/Tag";
import {
  SiLinkedin,
  SiGithub,
  SiItchdotio,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

export default function HomePage() {
  return (
    <React.Fragment>
      <div style={{ marginLeft: 25 }}>
        <Comment
          textLine={[
            "Hellow World! Bem-vindo, você está no meu portfolio",
            " ",
            "Componente de atualização do portifolio",
          ]}
          multiLine
        />
        <Function
          name={"Portfolio"}
          params={{ name: "Leandro Shoiti Tokunaga" }}
        >
          <React.Fragment>
            <br />
            <p>
              <Text color="blue-medium">{`const `}</Text>
              <Text
                href="https://www.linkedin.com/in/leandro-shoiti/"
                color="blue-light"
              >
                LinkedIn
              </Text>
              <Text>{` = `}</Text>
              <Text
                href="https://www.linkedin.com/in/leandro-shoiti/"
                color="orage-medium"
              >
                "https://www.linkedin.com/in/leandro-shoiti/
                <SiLinkedin style={{ marginLeft: 10, marginRight: 4 }} />"
              </Text>
              <Text>{`;`}</Text>
            </p>
            <br />
            <p>
              <Text color="blue-medium">{`const `}</Text>
              <Text href="https://github.com/Shoiti21" color="blue-light">
                GitHub
              </Text>
              <Text>{` = `}</Text>
              <Text href="https://github.com/Shoiti21" color="orage-medium">
                "https://github.com/Shoiti21
                <SiGithub style={{ marginLeft: 10, marginRight: 4 }} />"
              </Text>
              <Text>{`;`}</Text>
            </p>
            <br />
            <p>
              <Text color="blue-medium">{`const `}</Text>
              <Text href="https://shoiti.itch.io/" color="blue-light">
                ItchIo
              </Text>
              <Text>{` = `}</Text>
              <Text href="https://shoiti.itch.io/" color="orage-medium">
                "https://shoiti.itch.io/
                <SiItchdotio style={{ marginLeft: 10, marginRight: 4 }} />"
              </Text>
              <Text>{`;`}</Text>
            </p>
            <br />
            <Expand
              initial={<Text color="pink-medium">{`return (`}</Text>}
              final={
                <React.Fragment>
                  <Text color="pink-medium">{`)`}</Text>
                  <Text>{`;`}</Text>
                </React.Fragment>
              }
            >
              <TabSpace>
                <React.Fragment>
                  <Tag tag="React.Fragment">
                    <Tag tag="h1">
                      <Text>{`Especialidade`}</Text>
                    </Tag>
                    <Tag tag="p">
                      <Text>
                        Eu tenho especialização na linguagem JavaScript e
                        TypeScript com as tecnologias em ReactJS/React Native{" "}
                        <SiReact /> e NodeJS <SiNodedotjs />, mantenho uma
                        comunicação aberta dentro da equipe onde trabalho,
                        buscando não deixar dúvidas ou questionamentos sem uma
                        resposta, procurando sempre que posso ajudar com os
                        problemas, e sempre aberto a novas oportunidades e
                        desafios, me prontifico em aprender e me adaptar. O meu
                        desejo é de me aprimorar na área mobile tanto front-end
                        e back-end, e sempre aberto para novos desafios e
                        oportunidades na área.
                      </Text>
                    </Tag>
                  </Tag>
                </React.Fragment>
              </TabSpace>
            </Expand>
          </React.Fragment>
        </Function>
      </div>
    </React.Fragment>
  );
}
