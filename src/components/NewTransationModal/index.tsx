import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransationType, TransationTypeButton} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransationModal() {
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

                    <form action=''>
                        <input type='text' placeholder='Descrição' />
                        <input type='number' placeholder='Preço' />
                        <input type='text' placeholder='Categoria' />

                        <TransationType>
                            
                            <TransationTypeButton variant='income'>
                                <ArrowCircleUp size={24} />
                                Entrada 
                            </TransationTypeButton>

                            <TransationTypeButton variant='outcome'> 
                                <ArrowCircleDown size={24} /> 
                                Saída 
                            </TransationTypeButton>
                        </TransationType>
                        <button type='submit'>
                            Cadastrar
                        </button>
                    </form>

                    <Dialog.Close />
                </Content>
            </Dialog.Portal>
        </div>
    )
}