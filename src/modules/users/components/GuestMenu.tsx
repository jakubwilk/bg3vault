'use client'

import Link from 'next/link'
import { Button } from '@mantine/core'
import clsx from 'clsx'

import classes from './users.module.css'

export default function GuestMenu() {
  return (
    <nav className={'flex items-center gap-6'}>
      <Link
        href={'/login'}
        className={clsx(
          'uppercase font-medium text-white transition-colors hover:text-amber-200 focus:text-white focus-visible:text-amber-200',
          classes.login,
        )}
      >
        {'Login'}
      </Link>
      <Button
        radius={0}
        component={Link}
        href={'/register'}
        className={clsx(
          'uppercase font-medium h-auto px-6 py-4 bg-amber-200 text-black transition-colors hover:bg-white hover:text-black focus:bg-amber-200 focus:text-black focus-visible:bg-white',
          classes.register,
        )}
      >
        {'Register'}
      </Button>
    </nav>
  )
}
