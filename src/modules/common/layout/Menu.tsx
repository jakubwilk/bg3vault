'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useAppSelector } from 'services/config'
import { GuestMenu, UserMenu } from 'users/components'

import classes from './layout.module.css'

export default function Menu() {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div className={'flex items-center gap-6'}>
      <Link
        href={'/'}
        className={clsx(
          'uppercase font-medium text-white hover:text-amber-200 focus:text-white focus-visible:text-amber-200',
          classes.menuLink,
        )}
      >
        {'Home'}
      </Link>
      <Link
        href={'/builds'}
        className={clsx(
          'uppercase font-medium text-white hover:text-amber-200 focus:text-white focus-visible:text-amber-200',
          classes.menuLink,
        )}
      >
        {'Builds'}
      </Link>
      <Link
        href={'/news'}
        className={clsx(
          'uppercase font-medium text-white hover:text-amber-200 focus:text-white focus-visible:text-amber-200',
          classes.menuLink,
        )}
      >
        {'News'}
      </Link>
      <div className={'h-[20px] w-[1px] bg-gray-500'} />
      {user ? <UserMenu /> : <GuestMenu />}
    </div>
  )
}
