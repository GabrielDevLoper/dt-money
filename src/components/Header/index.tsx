import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenOrCloseNewTransactionModal: () => void;
}


export function Header({ onOpenOrCloseNewTransactionModal }: HeaderProps){
    return(
        <Container>
            <Content>
                <img src={Logo} alt="dt money"/>
                <button type="button" onClick={onOpenOrCloseNewTransactionModal}>
                    Nova transação
                </button>
                
            </Content>
        </Container>
    );
}