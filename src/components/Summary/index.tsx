import { Container } from "./styles";

import iconImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionContext";

export function Summary(){
    const { transactions } = useContext(TransactionsContext);


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconImg} alt="entradas"/>
                </header>
                <strong>R$5.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="entradas"/>
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="entradas"/>
                </header>
                <strong>R$4.500,00</strong>
            </div>
        </Container>
    );
}