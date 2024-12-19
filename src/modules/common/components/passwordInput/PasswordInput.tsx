'use client'

import { useMemo } from 'react'
import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as MantinePasswordInputProps,
} from '@mantine/core'
import { clsx } from 'clsx'

import classes from './styles.module.css'

type TMantinePasswordInputPropsOmit = Omit<
  MantinePasswordInputProps,
  'size' | 'classNames' | 'radius'
>

type TPasswordInputClassNames = {
  wrapper?: string
  input?: string
  section?: string
  root?: string
  label?: string
  required?: string
  description?: string
  error?: string
}

interface ITextInputProps extends TMantinePasswordInputPropsOmit {
  classNames?: TPasswordInputClassNames
}

export default function PasswordInput({ classNames = {}, ...rest }: ITextInputProps) {
  const passwordInputClasses = useMemo(() => {
    const { wrapper, input, section, root, label, required, description, error } = classNames
    const defaultClasses = {
      wrapper: clsx(wrapper ?? ''),
      section: clsx(section ?? ''),
      root: clsx(classes.root, root ?? ''),
      required: clsx(required ?? ''),
      error: clsx(error ?? ''),
    }

    return {
      input: clsx(classes.input, classes.inputMedium, input ?? ''),
      label: clsx(classes.label, label ?? ''),
      description: clsx(description ?? ''),
      ...defaultClasses,
    }
  }, [classNames])

  return <MantinePasswordInput radius={0} classNames={passwordInputClasses} {...rest} />
}
