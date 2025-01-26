'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { clsx } from 'clsx'
import { MenuIconComponentEnum, renderMenuIconComponent } from 'common/utils'

import classes from './navbar.module.css'

export default function MobileFixedNavbar() {
  const matches = useMediaQuery('(max-width: 62em)')
  const pathname = usePathname()

  return (
    matches && (
      <div className={clsx('fixed bottom-0 left-0 z-[300] w-full', classes.navbar)}>
        <div className={'grid grid-cols-3 gap-4 h-20 container mx-auto px-4'}>
          <div className={'flex justify-center items-center'}>
            <Link
              className={clsx(
                'flex items-center flex-col',
                '/' === pathname ? classes.linkCurrent : '',
                classes.link,
              )}
              href={'/'}
            >
              {renderMenuIconComponent(MenuIconComponentEnum.HOME, 28)}
              <Text fw={500} className={clsx('uppercase', classes.label)}>
                {'Home'}
              </Text>
            </Link>
          </div>
        </div>
      </div>
    )
  )
}
