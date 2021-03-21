import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import { Container, RadioBox, TrasactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    handleOpenOrCloseTransactionModal: () => void;
}

export function NewTransactionModal({ handleOpenOrCloseTransactionModal, isNewTransactionModalOpen }: NewTransactionModalProps){
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    

    function handleCreateNewTransaction(e: FormEvent){
        e.preventDefault();
        
        const data = {
            title,
            amount,
            category, 
            type
        };

        api.post('/transactions', data);
    }
   
   
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
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}        

                />

                <input 
                    type="number"
                    placeholder="Valor"
                    value={amount}    
                    onChange={(e) => setAmount(Number(e.target.value))}        

                />

                <TrasactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TrasactionTypeContainer>


                <input 
                    type="text"
                    placeholder="Categoria" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}        

                />

                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    );
}