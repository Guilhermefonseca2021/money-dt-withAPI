import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/ignite-logo.png';
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransationModal } from "../NewTransationModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={logoImg} alt=""></img>
                    DT Money
                </div>

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