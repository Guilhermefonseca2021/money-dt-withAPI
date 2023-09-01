import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
    query: zod.string(),

})

// o infer so para retornar qual a typagem do zod nos campos para gente
type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { 
        register, 
        handleSubmit ,
        formState: { isSubmitting } // retorna true ou false seu estado
    } = useForm<SearchFormInputs>({
       resolver: zodResolver(searchFormSchema),
    })

    // o formato dos nossos dados sao os valores do nosso SearchFormInputs
    async function handleSearchTransactions(data: SearchFormInputs) {
        await new Promise (resolve => setTimeout(resolve, 2000));
        
        console.log(data)
    }

    return (
        // qual funcao executar para validacao
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações"
                {...register('query')} //aqui trato como os dados sao recebidos e nome do campo
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}