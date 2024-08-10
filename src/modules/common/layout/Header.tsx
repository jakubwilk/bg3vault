'use client'

import { useMemo } from 'react'
import { clsx } from 'clsx'
import { useAppSelector } from 'services/config'

import Menu from './Menu'

import classes from './layout.module.css'

export default function Header() {
  const { hasTopRatedBuilds } = useAppSelector((state) => state.builds)

  const headerClassName = useMemo(() => {
    if (hasTopRatedBuilds) {
      return 'md:max-h-[85vh] lg:max-h-[70vh]'
    }

    return 'md:max-h-[30vh] lg:max-h-[25vh]'
  }, [hasTopRatedBuilds])

  return (
    <header className={clsx('h-full md:h-screen', headerClassName, classes.header)}>
      <div className={'container mx-auto'}>
        <div className={'w-full px-4 flex justify-between items-center gap-4'}>
          <div>{'logo'}</div>
          <Menu />
        </div>
      </div>
    </header>
  )
}
