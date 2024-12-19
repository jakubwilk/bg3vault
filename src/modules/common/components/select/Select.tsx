import { useMemo } from 'react'
import { Select as MantineSelect, SelectProps as MantineSelectProps } from '@mantine/core'
import { clsx } from 'clsx'

import classes from './styles.module.css'

type TMantineSelectPropsOmit = Omit<MantineSelectProps, 'size' | 'classNames' | 'radius'>

type TSelectClassNames = {
  wrapper?: string
  input?: string
  section?: string
  root?: string
  label?: string
  required?: string
  description?: string
  error?: string
  dropdown?: string
  options?: string
  option?: string
  empty?: string
  group?: string
  groupLabel?: string
}

interface ISelectProps extends TMantineSelectPropsOmit {
  classNames?: TSelectClassNames
}

export default function Select({ classNames = {}, ...rest }: ISelectProps) {
  const selectClasses = useMemo(() => {
    const {
      wrapper,
      input,
      section,
      root,
      label,
      required,
      description,
      error,
      dropdown,
      options,
      option,
      empty,
      group,
      groupLabel,
    } = classNames

    return {
      wrapper: clsx(wrapper ?? ''),
      input: clsx(classes.input, input ?? ''),
      section: clsx(section ?? ''),
      root: clsx(classes.root, root ?? ''),
      label: clsx(classes.label, label ?? ''),
      required: clsx(required ?? ''),
      description: clsx(description ?? ''),
      error: clsx(error ?? ''),
      dropdown: clsx(classes.dropdown, dropdown ?? ''),
      options: clsx(options ?? ''),
      option: clsx(classes.option, option ?? ''),
      empty: clsx(empty ?? ''),
      group: clsx(group ?? ''),
      groupLabel: clsx(groupLabel ?? ''),
    }
  }, [classNames])

  return <MantineSelect radius={0} classNames={selectClasses} {...rest} />
}
