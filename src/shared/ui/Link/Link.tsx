import React, { FC, PropsWithChildren } from 'react'

export const Link: FC<PropsWithChildren & { to: string }> = ({
  children,
  ...props
}) => {
  return (
    <a {...props} href={props.to}>
      {children}
    </a>
  )
}

export default Link
