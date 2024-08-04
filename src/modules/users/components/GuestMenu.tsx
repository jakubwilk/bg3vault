'use client'

import Link from 'next/link'
import { Button } from '@mantine/core'
import clsx from 'clsx'

import classes from './users.module.css'

export default function GuestMenu() {
  return (
    <nav className={'flex items-center gap-4'}>
      <Link href={'/login'}>{'Login'}</Link>
      <Button
        radius={'xs'}
        component={Link}
        href={'/register'}
        className={clsx('uppercase font-medium', classes.register)}
      >
        {'Register'}
      </Button>
    </nav>
  )
}
