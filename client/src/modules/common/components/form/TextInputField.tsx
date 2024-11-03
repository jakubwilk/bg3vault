'use client'

import { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Barlow } from 'next/font/google'
import { TextInput, TextInputProps } from '@mantine/core'
import clsx from 'clsx'

import classes from './form.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['400'],
})

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
            classNames={{
              label: 'uppercase tracking-wide text-sm',
              input: clsx('px-2.5 py-0.5 h-[auto]', barlow.className, classes.inputInput),
            }}
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
      classNames={{
        input: clsx('px-2.5 py-0.5 h-[auto]', barlow.className, classes.inputInput),
      }}
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
