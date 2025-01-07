'use client'

import { Fragment, ReactNode } from 'react'
import Link from 'next/link'
import { Text } from '@mantine/core'
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
    href: '/',
    icon: <IconHelpCircle stroke={1.5} size={18} />,
  },
  {
    id: 3,
    label: 'BG3 Guides',
    href: '/',
    icon: <IconBook stroke={1.5} size={18} />,
  },
  {
    id: 4,
    label: 'News and information',
    href: '/',
    icon: <IconNews stroke={1.5} size={18} />,
  },
]

export default function DesktopNavbar() {
  const renderMenu = (): ReactNode => {
    return APP_MENU.map(({ id, label, subLabel, href, icon }) => (
      <Link key={id} className={clsx('flex items-center gap-2', classes.link)} href={href}>
        {subLabel ? (
          <div>
            <div className={'flex items-center gap-2'}>
              {icon}
              <Text className={'font-medium'}>{label}</Text>
            </div>
            <Text className={clsx('text-sm text-right', classes.subLabel)}>{subLabel}</Text>
          </div>
        ) : (
          <Fragment>
            {icon}
            <Text className={'font-medium'}>{label}</Text>
          </Fragment>
        )}
      </Link>
    ))
  }

  return <nav className={'flex items-start gap-8 px-4'}>{renderMenu()}</nav>
}
