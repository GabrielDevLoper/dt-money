import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

//acessibilidade
Modal.setAppElement('#root');

toast.configure();

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenOrCloseTransactionModal(){
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }


  return (
    <TransactionProvider>
      <Header onOpenOrCloseNewTransactionModal={handleOpenOrCloseTransactionModal}/>
      <Dashboard />
      <NewTransactionModal handleOpenOrCloseTransactionModal={handleOpenOrCloseTransactionModal} isNewTransactionModalOpen={isNewTransactionModalOpen} />
      <GlobalStyle />
    </TransactionProvider>
  );
}
