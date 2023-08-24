import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransationContainer, TransationsTable } from "./styles";


export function Transations() {
    return (
        <div>
            <Header />
            <Summary />

            <TransationContainer>
                <TransationsTable>
                    <tbody>
                        <tr>
                            <td width="58%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    RS 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>19/08/23</td>
                        </tr>
                        <tr>
                            <td width="58%">Aparelho ortodontico</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    -RS 48,00
                                </PriceHighLight>
                            </td>
                            <td>alimentacao</td>
                            <td>18/04/23</td>
                        </tr>
                    </tbody>
                </TransationsTable>
            </TransationContainer>
        </div>
    )
}