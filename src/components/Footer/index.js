import React from "react";
import styles from "./styles";

const Footer = () => {
  return (
    <styles.Footer>
      <styles.FooterContainer>
        <styles.FooterHeader>
          <styles.FooterHeaderButton open>TERMINAL</styles.FooterHeaderButton>
          <styles.FooterHeaderButton>TESTE</styles.FooterHeaderButton>
        </styles.FooterHeader>
        <styles.FooterContent>
          <styles.FooterContentLine>{`Website totalmente inspirado no visual da IDE (ambiente de desenvolvimento integrado) Visual Studio Code.`}</styles.FooterContentLine>
          <styles.FooterContentLine>{`O intuito do projeto é de aprendizado e aprimoramento das HardSkills na linguagem JavaScript e TypeScript com React e NextJS, e mostrar o meu portfolio.`}</styles.FooterContentLine>
          <styles.FooterContentLine>
            <span>{`PS C:/>`}&ensp;</span>
            <span
              style={{ color: "yellow" }}
            >{`Criado por Leandro Shoiti`}</span>
            <styles.Point></styles.Point>
          </styles.FooterContentLine>
        </styles.FooterContent>
      </styles.FooterContainer>
    </styles.Footer>
  );
};

export default Footer;
