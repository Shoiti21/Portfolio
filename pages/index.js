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
import Variable from "../src/components/Variable";

export default function HomePage() {
  return (
    <React.Fragment>
      <Comment
        textLine={[
          "Hellow World! Bem-vindo, você está no meu portfolio",
          " ",
          "Componente de atualização do portifolio",
        ]}
        multiLine
      />
      <Function name={"Portfolio"} params={{ name: "Leandro Shoiti Tokunaga" }}>
        <br />
        <p>
          <Variable
            type="const"
            name="LinkedIn"
            href="https://www.linkedin.com/in/leandro-shoiti/"
          />
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
          <Variable
            type="const"
            name="GitHub"
            href="https://github.com/Shoiti21"
          />
          <Text href="https://github.com/Shoiti21" color="orage-medium">
            "https://github.com/Shoiti21
            <SiGithub style={{ marginLeft: 10, marginRight: 4 }} />"
          </Text>
          <Text>{`;`}</Text>
        </p>
        <br />
        <p>
          <Variable type="const" name="ItchIo" href="https://shoiti.itch.io/" />
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
            <Tag tag="div">
              <Tag tag="div">
                <Tag tag="h1">
                  <Text>{`Especialidade`}</Text>
                </Tag>
                <Tag tag="p">
                  <Text>
                    Eu tenho especialização na linguagem JavaScript e TypeScript
                    com as tecnologias em ReactJS/React Native <SiReact /> e
                    NodeJS <SiNodedotjs />, mantenho uma comunicação aberta
                    dentro da equipe onde trabalho, buscando não deixar dúvidas
                    ou questionamentos sem uma resposta, procurando sempre que
                    posso ajudar com os problemas, e sempre aberto a novas
                    oportunidades e desafios, me prontifico em aprender e me
                    adaptar. O meu desejo é de me aprimorar na área mobile tanto
                    front-end e back-end, e sempre aberto para novos desafios e
                    oportunidades na área.
                  </Text>
                </Tag>
              </Tag>
              <Tag tag="div">
                <Tag tag="h1">
                  <Text>{`Resumo`}</Text>
                </Tag>
                <Tag tag="p">
                  <Text>
                    No projeto Starters da GFT, onde tive a oportunidade de
                    ingressar na área de Analista de Sistema, passando por
                    desafios de criação de projetos em MVC com JavaScrpt e C#.
                    Atuando há 6 meses nesse projeto. No projeto Banco Original
                    atuei como desenvolvedor front-end na linguagem JavaScript
                    com AngularJS em um aplicativo mobile no período de 6 meses
                    de atuação. Após um período estudando sobre ReactJs.
                    participei do grupo de estudos de React apresentar uma talk
                    sobre GraphQL, participando semanalmente do grupo de estudos
                    compartilhando experiências do projeto em que atuo.
                    <br />
                    No projeto Share Universe tive a oportunidade e desafio de
                    aprender sobre NodeJS para auxílio da equipe, além de
                    NodeJS, consegui me aperfeiçoar no ReactJS e React Native,
                    aplicando tudo que aprendi e conhecendo novas tecnologias.
                    Atuando há 1 ano 6 meses nesse projeto como desenvolvedor
                    front-end em NodeJS e ReactJS/React Native
                  </Text>
                </Tag>
              </Tag>
            </Tag>
          </TabSpace>
        </Expand>
      </Function>
    </React.Fragment>
  );
}
