'use client'

import { useMemo } from 'react'
import { Title } from '@mantine/core'
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
      <div className={'container h-full max-h-[inherit] mx-auto'}>
        <div className={'flex flex-col justify-between h-full max-h-[inherit] gap-6'}>
          <div className={'w-full px-4 flex justify-between items-center gap-4'}>
            <div>{'logo'}</div>
            <Menu />
          </div>
          <div className={'px-4 pb-6'}>
            {!hasTopRatedBuilds && (
              <Title order={2} className={'uppercase font-bold text-6xl text-white'}>
                {'Your library of '}
                <span className={'text-amber-200'}>{'the best'}</span>
                {' BG3 builds'}
              </Title>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
