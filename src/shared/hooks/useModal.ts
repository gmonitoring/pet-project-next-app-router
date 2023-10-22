import React from 'react'

export type ModalProps = {
  open: boolean
  handleClickOpen: () => void
  handleClickClose: () => void
}

export function useModal(): ModalProps {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClickClose = () => {
    setOpen(false)
  }

  return {
    open,
    handleClickOpen,
    handleClickClose,
  }
}
