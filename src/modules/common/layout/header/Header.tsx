'use client'

import { useMediaQuery } from '@mantine/hooks'
import { clsx } from 'clsx'
import { UserMenuDesktopWrapper } from 'users/components'

import classes from './header.module.css'

export default function Header() {
  const matches = useMediaQuery('(max-width: 62em)')

  return (
    <header className={clsx(classes.header, matches ? 'min-h-36' : 'min-h-72')}>
      <div
        className={
          'container mx-auto px-4 min-h-[inherit] flex flex-col justify-end sm:px-0 md:px-4 md:pb-16'
        }
      >
        <div
          className={
            'flex justify-center items-center gap-4 min-h-[inherit] md:mb-4 md:justify-between md:items-end'
          }
        >
          <div>{'logo'}</div>
          {!matches && <UserMenuDesktopWrapper />}
        </div>
      </div>
    </header>
  )
}
