'use client'

import { useMediaQuery } from '@mantine/hooks'
import { clsx } from 'clsx'

import classes from './header.module.css'

export default function Header() {
  const matches = useMediaQuery('(max-width: 62em)')

  return (
    <header className={clsx(classes.header, matches ? 'min-h-36' : 'min-h-72')}>
      <div className={'container mx-auto px-4 min-h-[inherit] flex flex-col justify-end md:pb-16'}>
        <div className={'flex justify-between gap-4'}>
          <div>{'logo'}</div>
          <div>{'user'}</div>
        </div>
      </div>
    </header>
  )
}
