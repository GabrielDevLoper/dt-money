import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";

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
      <NewTransactionModal handleOpenOrCloseTransactionModal={handleOpenOrCloseTransactionModal} isNewTransactionModalOpen={isNewTransactionModalOpen} />
      <GlobalStyle />
    </>
  );
}
