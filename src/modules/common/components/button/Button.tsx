'use client'

import { useMemo } from 'react'
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core'
import { clsx } from 'clsx'

import classes from './styles.module.css'

type TMantineButtonPropsOmit = Omit<MantineButtonProps, 'size' | 'classNames'>

type TButtonSize = 'small' | 'medium' | 'large'

type TButtonClassNames = {
  root?: string
  loader?: string
  inner?: string
  section?: string
  label?: string
}

interface IButtonProps extends TMantineButtonPropsOmit {
  size?: TButtonSize
  classNames?: TButtonClassNames
}

export default function Button({
  children,
  size = 'medium',
  classNames = {},
  ...rest
}: IButtonProps) {
  const buttonClasses = useMemo(() => {
    const { root, loader, inner, section, label } = classNames
    const defaultClasses = {
      loader: clsx(loader ?? ''),
      inner: clsx(inner ?? ''),
      section: clsx(section ?? ''),
      label: clsx(classes.label, label ?? ''),
    }

    if (size === 'small') {
      return {
        root: clsx(classes.root, classes.rootSmall, root ?? ''),
        ...defaultClasses,
      }
    }

    if (size === 'large') {
      return {
        root: clsx(classes.root, classes.rootLarge, root ?? ''),
        ...defaultClasses,
      }
    }

    return {
      root: clsx(classes.root, classes.rootMedium, root ?? ''),
      ...defaultClasses,
    }
  }, [classNames, size])

  return (
    <MantineButton radius={0} classNames={buttonClasses} {...rest}>
      {children}
    </MantineButton>
  )
}
