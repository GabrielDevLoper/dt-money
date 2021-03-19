import Modal from 'react-modal';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    handleOpenOrCloseTransactionModal: () => void;
}

export function NewTransactionModal({ handleOpenOrCloseTransactionModal, isNewTransactionModalOpen }: NewTransactionModalProps){
    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleOpenOrCloseTransactionModal}
        >
        <h2>Cadastrar transação</h2>
      </Modal>
    );
}