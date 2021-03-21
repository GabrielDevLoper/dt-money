import Modal from 'react-modal';
import { Container, RadioBox, TrasactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    handleOpenOrCloseTransactionModal: () => void;
}

export function NewTransactionModal({ handleOpenOrCloseTransactionModal, isNewTransactionModalOpen }: NewTransactionModalProps){
    const [type, setType] = useState('deposit');
   
   
    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleOpenOrCloseTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type="button" 
                onClick={handleOpenOrCloseTransactionModal}
                className="react-modal-close"
            >
                <img src={closeImg} alt="fechar modal"/>
            </button>
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

                <TrasactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TrasactionTypeContainer>


                <input 
                    type="text"
                    placeholder="Categoria"    
                />

                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    );
}