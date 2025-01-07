import { useMemo } from 'react'
import { Checkbox as MantineCheckbox, CheckboxProps as MantineCheckboxProps } from '@mantine/core'
import { clsx } from 'clsx'

import classes from './styles.module.css'

type TMantineCheckboxPropsOmit = Omit<MantineCheckboxProps, 'size' | 'classNames' | 'radius'>

type TCheckboxClassNames = {
  root?: string
  input?: string
  icon?: string
  inner?: string
  body?: string
  labelWrapper?: string
  label?: string
  description?: string
  error?: string
}

interface ICheckboxProps extends TMantineCheckboxPropsOmit {
  classNames?: TCheckboxClassNames
}

export default function Checkbox({ classNames = {}, ...rest }: ICheckboxProps) {
  const checkboxClasses = useMemo(() => {
    const { root, input, icon, inner, body, labelWrapper, label, description, error } = classNames

    return {
      root: clsx(root ?? ''),
      input: clsx(classes.input, input ?? ''),
      icon: clsx(classes.icon, icon ?? ''),
      inner: clsx(inner ?? ''),
      body: clsx(body ?? ''),
      labelWrapper: clsx(labelWrapper ?? ''),
      label: clsx(label ?? ''),
      description: clsx(description ?? ''),
      error: clsx(error ?? ''),
    }
  }, [classNames])

  return <MantineCheckbox radius={0} classNames={checkboxClasses} {...rest} />
}
