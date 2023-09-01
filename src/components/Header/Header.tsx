import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransationModal } from "../NewTransationModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransationModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}