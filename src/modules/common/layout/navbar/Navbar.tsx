'use client'

import { Fragment, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Text, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { clsx } from 'clsx'
import { APP_DESKTOP_MENU, renderMenuIconComponent } from 'common/utils'

import classes from './navbar.module.css'

export default function Navbar() {
  const matches = useMediaQuery('(max-width: 62em)')
  const pathname = usePathname()

  const renderMenu = (): ReactNode => {
    return APP_DESKTOP_MENU.map(({ id, label, subLabel, href, icon }) => (
      <Link
        key={id}
        className={clsx(
          'flex items-center gap-2',
          href === pathname ? classes.linkCurrent : '',
          classes.link,
        )}
        href={href}
      >
        {subLabel ? (
          <Tooltip label={subLabel} color={'gray'} position={'bottom'}>
            <div className={'flex items-center gap-2'}>
              {icon && renderMenuIconComponent(icon)}
              <Text className={'font-medium'}>{label}</Text>
            </div>
          </Tooltip>
        ) : (
          <Fragment>
            {icon && renderMenuIconComponent(icon)}
            <Text className={'font-medium'}>{label}</Text>
          </Fragment>
        )}
      </Link>
    ))
  }

  return (
    <div className={clsx('sticky top-0', matches ? '' : classes.navbarDesktop)}>
      <div className={'container mx-auto px-4'}>
        <nav className={clsx('flex items-center gap-8 px-4 h-16', classes.navbar)}>
          {renderMenu()}
        </nav>
      </div>
    </div>
  )
}
