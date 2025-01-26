'use client'

import { Fragment, ReactNode } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { clsx } from 'clsx'
import { Navbar } from 'common/layout'

import classes from './wrapper.module.css'

interface IContentProps {
  children: ReactNode
}

export default function Content({ children }: IContentProps) {
  const matches = useMediaQuery('(max-width: 62em)')

  return (
    <Fragment>
      {!matches && <Navbar />}
      <main>
        <div className={'container mx-auto px-0 md:px-4'}>
          <div className={clsx('px-4', classes.content)}>{children}</div>
        </div>
      </main>
    </Fragment>
  )
}
