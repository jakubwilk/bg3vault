'use client'

import { Fragment, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Text, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBook, IconHelpCircle, IconHome, IconNews } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { IMenu } from 'common/models'

import classes from './navbar.module.css'

const APP_MENU: IMenu[] = [
  {
    id: 1,
    label: 'Home page',
    href: '/',
    icon: <IconHome stroke={1.5} size={18} />,
  },
  {
    id: 2,
    label: 'BG3 Non-Origin Builds',
    subLabel: 'Custom Tav',
    href: '/builds-tav',
    icon: <IconHelpCircle stroke={1.5} size={18} />,
  },
  {
    id: 3,
    label: 'BG3 Guides',
    href: '/guides',
    icon: <IconBook stroke={1.5} size={18} />,
  },
  {
    id: 4,
    label: 'News and information',
    href: '/news',
    icon: <IconNews stroke={1.5} size={18} />,
  },
]

export default function Navbar() {
  const matches = useMediaQuery('(max-width: 62em)')
  const pathname = usePathname()

  const renderMenu = (): ReactNode => {
    return APP_MENU.map(({ id, label, subLabel, href, icon }) => (
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
              {icon}
              <Text className={'font-medium'}>{label}</Text>
            </div>
          </Tooltip>
        ) : (
          <Fragment>
            {icon}
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
