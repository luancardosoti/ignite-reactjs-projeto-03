import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton onClick={() => setOpenModal(true)}>
              Nova Transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal closeModal={() => setOpenModal(false)} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
