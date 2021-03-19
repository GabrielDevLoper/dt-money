import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';

//acessibilidade
Modal.setAppElement('#root');


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenOrCloseTransactionModal(){
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }


  return (
    <>
      <Header onOpenOrCloseNewTransactionModal={handleOpenOrCloseTransactionModal}/>
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenOrCloseTransactionModal}

      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
