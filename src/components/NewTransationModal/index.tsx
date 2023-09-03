import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransationType, TransationTypeButton} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from "react-hook-form";
import * as zod from 'zod'
// zod tambem funciona tbm para definicao de schema qual q é o fromato do objeto que evnio pelo usuario
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

// fazemos a tipagem com zod de como devemos receber do user 
const newTransactionFormSchema = zod.object ({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    // enum zod mostra que so pode andar dentro de certas opcoes por array
    type: zod.enum(['income', 'outcome']),
})

// tipagem para voce ver as propriedades que inferem  nossa constante no zod
type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>;

export function NewTransationModal() {
    const { createTransactions } = useContext(TransactionsContext)
    const { 
        control,       // estado react hook form (monitorar sempre q for atualizado) q nao vem de input nativo do html
        register,      // estado que useform recebe com a formacao que INFERIMOS
        handleSubmit,  // funcao do useform para butao enviar estados
        formState: { isSubmitting },
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction (data: NewTransactionFormInputs) {
        // await api.post('transactions', {
        //     discription: data.description,
        //     category: data.category,
        //     price: data.price,
        //     type: data.type
        // })
        const { description, price, category, type } = data;

        await createTransactions({
            description,
            price,
            category,
            type,
        })

        reset()
    }

    return (
        <div>
            <Dialog.Portal>
                <Overlay />

                <Content >
                    <Dialog.Title>
                        Header Content
                    </Dialog.Title>

                    <CloseButton>
                        <X size={24} />
                    </CloseButton>

                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input 
                            type='text' 
                            placeholder='Descrição' 
                            required
                            // react rook form usa register funciona p compartilhar estados com useform
                            {...register('description')}
                        />
                        <input 
                            type='number' 
                            placeholder='Preço' 
                            required    // valueAsNumber converte valor do input para numero ao handlesubmit
                            {...register('price', { valueAsNumber: true})}
                        />
                        <input 
                            type='text' 
                            placeholder='Categoria'
                            required 
                            {...register('category')}
                        />

                        <Controller   
                            control={control} // propriedade q nos declaramos no estado
                            name='type'       // aqui ja ver quais propriedades que vamos controlar
                            render={({ field }) => {   // traz uma funcao q retorna qual o conteudo fieldstate relacionado ao campo type
                                console.log(field)

                                return (
                                    // onvaluechange traz o valor do type
                                    <TransationType onValueChange={field.onChange} value={field.value}>  
                            
                                        <TransationTypeButton variant='income' value='income'>
                                            <ArrowCircleUp size={24} />
                                            Entrada 
                                        </TransationTypeButton>

                                        <TransationTypeButton variant='outcome' value='outcome'> 
                                            <ArrowCircleDown size={24} /> 
                                            Saída 
                                        </TransationTypeButton>
                                    </TransationType>
                                )
                            }}
                        />

                        <button type='submit' disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>

                    <Dialog.Close />
                </Content>
            </Dialog.Portal>
        </div>
    )
}