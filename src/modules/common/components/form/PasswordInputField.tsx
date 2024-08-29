import { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Barlow } from 'next/font/google'
import { PasswordInput, PasswordInputProps } from '@mantine/core'
import clsx from 'clsx'

import classes from './form.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['400'],
})

type TMantinePasswordInputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  keyof PasswordInputProps | 'disabled' | 'required' | 'pointer' | 'defaultVisible' | 'visible'
>

export interface IPasswordInputFieldProps extends PasswordInputProps, TMantinePasswordInputProps {
  control?: Control<any, any>
  name: string
  isDefaultVisible?: boolean
  isVisible?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  isPointer?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function PasswordInputField({
  control,
  name,
  isDefaultVisible,
  isVisible,
  isDisabled,
  isRequired,
  isPointer,
  onChange,
  ...rest
}: IPasswordInputFieldProps) {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
          <PasswordInput
            classNames={{
              label: 'uppercase tracking-wide text-sm',
              input: clsx('px-2.5 py-0.5 h-[42px]', barlow.className, classes.passwordInput),
            }}
            required={isRequired}
            withAsterisk={isRequired}
            disabled={isDisabled}
            pointer={isPointer}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            defaultVisible={isDefaultVisible}
            visible={isVisible}
            error={error?.message}
            {...rest}
          />
        )}
      />
    )
  }

  return (
    <PasswordInput
      classNames={{
        label: 'uppercase tracking-wide text-sm',
        input: clsx('px-2.5 py-0.5 h-[42px]', barlow.className, classes.passwordInput),
      }}
      name={name}
      required={isRequired}
      withAsterisk={isRequired}
      disabled={isDisabled}
      pointer={isPointer}
      onChange={onChange}
      defaultVisible={isDefaultVisible}
      visible={isVisible}
      {...rest}
    />
  )
}
