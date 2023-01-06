import React from "react";
import { useRouter } from "next/router";
import styles from "./styles";
import Tab from "./Tab";
import Modal from "../Modal";

const routers = [
  { name: "index", href: "/" },
  { name: "bomberman", href: "/bomberman" },
];

const NavTabs = () => {
  const { asPath } = useRouter();

  const [showModal, setShowModal] = React.useState(false);
  const [triedClose, setTriedClose] = React.useState(false);

  const onClose = () => {
    setShowModal(false);
    setTriedClose(false);
  };

  const buttons = React.useMemo(() => {
    const data = [
      { name: "Cancelar", secondary: true, onClick: () => onClose() },
    ];

    if (!triedClose) {
      data.unshift({
        name: "Certeza",
        onClick: () => setTriedClose(true),
      });
    }

    return data;
  }, [triedClose]);

  return (
    <React.Fragment>
      <styles.Nav>
        {routers.map((router) => (
          <Tab
            name={router.name}
            href={router.href}
            active={asPath == router.href}
            onClose={() => setShowModal(true)}
          />
        ))}
      </styles.Nav>
      <Modal
        show={showModal}
        onClose={() => onClose()}
        title="Visual Studio Code"
        subTitle={
          triedClose
            ? "Felizmente, você não consegui fazer isso"
            : "Você deseja realmente fechar essa página?"
        }
        description={triedClose ? "Boa tentativa." : "O código será perdido."}
        buttons={buttons}
      />
    </React.Fragment>
  );
};

export default NavTabs;
