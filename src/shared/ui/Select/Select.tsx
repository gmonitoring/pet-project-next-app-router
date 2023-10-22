import React, { FC, useCallback, useRef, useState, LegacyRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { default as MuiSelect, SelectProps } from '@mui/material/Select'
import DownArrow from '@static/icons/downArrow.svg'
import styles from '@/shared/ui/Select/styles.module.css'

export const Select: FC<SelectProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const nodeRef = useRef<HTMLDivElement | null>(null)

  const selectOpenToggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames={{
        enter: styles.arrowEnter,
        enterActive: styles.arrowEnterActive,
        enterDone: styles.arrowEnterDone,
        exit: styles.arrowExit,
        exitActive: styles.arrowExitActive,
        exitDone: styles.arrowExitDone,
      }}
      nodeRef={nodeRef as React.Ref<undefined>}
    >
      <MuiSelect
        {...props}
        onOpen={selectOpenToggle}
        onClose={selectOpenToggle}
        IconComponent={() => (
          <div
            className={styles.arrowContainer}
            ref={nodeRef as LegacyRef<any>}
          >
            <DownArrow />
          </div>
        )}
      />
    </CSSTransition>
  )
}
