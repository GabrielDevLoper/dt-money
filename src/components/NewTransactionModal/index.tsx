import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    handleOpenOrCloseTransactionModal: () => void;
}

export function NewTransactionModal({ handleOpenOrCloseTransactionModal, isNewTransactionModalOpen }: NewTransactionModalProps){
    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleOpenOrCloseTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    type="text"
                    placeholder="Titulo"    
                />

                <input 
                    type="number"
                    placeholder="Valor"    
                />
                <input 
                    type="text"
                    placeholder="Categoria"    
                />

                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    );
}