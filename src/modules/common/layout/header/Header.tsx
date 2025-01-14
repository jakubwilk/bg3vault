'use client'

import { useMediaQuery } from '@mantine/hooks'
import { clsx } from 'clsx'
import { Navbar } from 'common/layout'

import classes from './header.module.css'

export default function Header() {
  const matches = useMediaQuery('(max-width: 62em)')

  return (
    <header className={clsx(classes.header, matches ? 'min-h-36' : 'min-h-72')}>
      <div className={'container mx-auto px-0 min-h-[inherit] flex flex-col justify-end md:px-4'}>
        <div className={'flex justify-between gap-4'}>{'...'}</div>
        {!matches && <Navbar />}
      </div>
    </header>
  )
}
