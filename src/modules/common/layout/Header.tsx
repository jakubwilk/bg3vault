'use client'

import { clsx } from 'clsx'

import Menu from './Menu'

import classes from './layout.module.css'

export default function Header() {
  return (
    <header className={clsx('h-full md:h-screen md:max-h-[85vh] lg:max-h-[70vh]', classes.header)}>
      <div className={'container mx-auto'}>
        <div className={'w-full px-4 flex justify-between items-center gap-4'}>
          <div>{'logo'}</div>
          <Menu />
        </div>
      </div>
    </header>
  )
}
