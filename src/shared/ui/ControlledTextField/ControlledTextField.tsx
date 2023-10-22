import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import { Box } from '@/shared/ui/Box/Box'
import { ControllerRenderProps } from 'react-hook-form/dist/types/controller'

type ControlledTextFieldProps = {
  name: ControllerRenderProps['name']
} & Omit<TextFieldProps, 'name'>

export const ControlledTextField: FC<ControlledTextFieldProps> = ({
  name,
  ...rest
}) => {
  const {
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <Box>
      {name && control && (
        <Controller
          name={name}
          control={control as never}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              variant="outlined"
              error={!!errors[`${name}`]}
              helperText={errors[`${name as string}`]?.message as string}
              value={value}
              onChange={onChange}
              {...rest}
            />
          )}
        />
      )}
    </Box>
  )
}
