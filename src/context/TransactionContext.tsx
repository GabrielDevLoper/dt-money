import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface TransactionProps {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);


    useEffect(() => {
        api.get("transactions")
        .then(response => setTransactions(response.data.transactions));
    },[]);



    function createTransaction(transaction: TransactionInput){
        
        api.post('/transactions', transaction);
    }


    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}