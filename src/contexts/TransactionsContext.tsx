import { ReactNode, createContext, useState, useEffect } from "react";
import { api } from "../lib/axios";

interface Transactions {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createAt: string;
}

interface TransactionsContextType {
    transactions: Transactions[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionsInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface CreateTransactionsInput {
    description: string,
    price: number,
    category: string,
    type:  'income' | 'outcome',
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transactions[]>([])

    // async function fetchTransactions(query?: string) {
    //     const url = new URL('http://localhost:3333/transactions');
    //     if (query) {
    //         // searchparam (parametro get '?q=) tiver (append), 'q' cai no o query
    //         url.searchParams.append('q', query);
    //     }

    //     const response = await fetch(url);
    //     const data = await response.json();

    //     setTransactions(data);
    // }

    async function fetchTransactions(query?: string) {
        const response = await api.get('/transactions', {
            params: {
                q: query,
            }
        })

        setTransactions(response.data);
    }

    async function createTransactions(data: CreateTransactionsInput) {
        const { description, price, category, type } = data;

        const response = await api.post('transactions', {
            description,
            price,
            category,
            type,
            createAt: new Date(),
        })

        setTransactions(state => [response.data, ...state])
    }

    useEffect( () => { 
        fetchTransactions();
    }, []) 

    return (
        <TransactionsContext.Provider value={{ 
            transactions,
            fetchTransactions,
            createTransactions,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}