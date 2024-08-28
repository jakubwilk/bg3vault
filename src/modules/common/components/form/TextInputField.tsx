import { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInput, TextInputProps } from '@mantine/core'

type TMantineTextInputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  keyof TextInputProps | 'disabled' | 'required' | 'pointer'
>

export interface ITextInputFieldProps extends TextInputProps, TMantineTextInputProps {
  control?: Control<any, any>
  name: string
  isDisabled?: boolean
  isRequired?: boolean
  isPointer?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function TextInputField({
  control,
  name,
  isDisabled,
  isRequired,
  isPointer,
  onChange,
  ...rest
}: ITextInputFieldProps) {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
          <TextInput
            required={isRequired}
            withAsterisk={isRequired}
            disabled={isDisabled}
            pointer={isPointer}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error?.message}
            {...rest}
          />
        )}
      />
    )
  }

  return (
    <TextInput
      name={name}
      required={isRequired}
      withAsterisk={isRequired}
      disabled={isDisabled}
      pointer={isPointer}
      onChange={onChange}
      {...rest}
    />
  )
}
