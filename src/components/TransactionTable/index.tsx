import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionProps {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}


export function TransactionTable(){
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);


    useEffect(() => {
        api.get("transactions")
        .then(response => setTransactions(response.data.transactions));
    },[]);


    

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td className="title">{transaction.title}</td>
                        <td className={transaction.type}>{transaction.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                    ))} 
                </tbody>
            </table>
        </Container>
    );
}