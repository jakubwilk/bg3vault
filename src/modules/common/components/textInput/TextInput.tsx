'use client'

import { useMemo } from 'react'
import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from '@mantine/core'
import { clsx } from 'clsx'

import classes from './styles.module.css'

type TMantineTextInputPropsOmit = Omit<MantineTextInputProps, 'size' | 'classNames'>

type TTextInputSize = 'medium' | 'large'

type TTextInputClassNames = {
  wrapper?: string
  input?: string
  section?: string
  root?: string
  label?: string
  required?: string
  description?: string
  error?: string
}

interface ITextInputProps extends TMantineTextInputPropsOmit {
  size?: TTextInputSize
  classNames?: TTextInputClassNames
}

export default function TextInput({ size = 'medium', classNames = {}, ...rest }: ITextInputProps) {
  const textInputClasses = useMemo(() => {
    const { wrapper, input, section, root, label, required, description, error } = classNames
    const defaultClasses = {
      wrapper: clsx(wrapper ?? ''),
      section: clsx(section ?? ''),
      root: clsx(root ?? ''),
      required: clsx(required ?? ''),
      error: clsx(error ?? ''),
    }

    if (size === 'large') {
      return {
        input: clsx(classes.input, classes.inputLarge, input ?? ''),
        label: clsx(classes.label, classes.labelLarge, label ?? ''),
        description: clsx(classes.descriptionLarge, description ?? ''),
        ...defaultClasses,
      }
    }

    return {
      input: clsx(classes.input, classes.inputMedium, input ?? ''),
      label: clsx(classes.label, label ?? ''),
      description: clsx(description ?? ''),
      ...defaultClasses,
    }
  }, [size, classNames])

  return <MantineTextInput radius={0} classNames={textInputClasses} {...rest} />
}
