import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransationContainer, TransationsTable } from "./styles";

interface Transactions {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createAt: string;
}

export function Transations() {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json();

        setTransactions(data);
    }

    useEffect( () => { 
        loadTransactions()
    }, []) 


    return (
        <div>
            <Header />
            <Summary />

            <TransationContainer>
                <SearchForm />
                
                <TransationsTable>
                    <tbody>
                        {transactions.map(transactions => {
                            return (
                                <tr key={transactions.id}>
                                    <td width="58%">{transactions.description}</td>
                                    <td>
                                        <PriceHighLight variant={transactions.type}>
                                            {transactions.price}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transactions.category}</td>
                                    <td>{transactions.createAt}</td>
                                </tr>
                            )
                        })}          
                    </tbody>
                </TransationsTable>
            </TransationContainer>
        </div>
    )
}