import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransationContainer, TransationsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../components/utils/formatter";

export function Transations() {
    const { transactions } = useContext(TransactionsContext);
    console.log(transactions)

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
                                            {transactions.type == 'outcome' && '- '}
                                            {priceFormatter.format(transactions.price)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transactions.category}</td>
                                    <td>{dateFormatter.format(new Date(transactions.createAt))}</td>
                                </tr>
                            )
                        })}          
                    </tbody>
                </TransationsTable>
            </TransationContainer>
        </div>
    )
}