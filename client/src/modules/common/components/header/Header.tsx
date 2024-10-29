'use client'

import { useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { Text } from '@mantine/core'
import clsx from 'clsx'
import { Link } from 'i18n/routing'

import LanguageSwitcher from './LanguageSwitcher'

import classes from './header.module.css'

export default function Header() {
  const t = useTranslations('Common')

  const guestMenu = useMemo(
    () => [
      {
        href: '/login',
        label: t('Navigation.login'),
      },
      {
        href: '/register',
        label: t('Navigation.register'),
      },
    ],
    [t],
  )

  return (
    <header className={clsx('h-72 flex items-end', classes.header)}>
      <div className={'container mx-auto px-4 md:px-8'}>
        <div className={'flex justify-end'}>
          <div className={'flex flex-col'}>
            <Text className={classes.userMenuTitle}>{t('Navigation.guest')}</Text>
            <nav className={clsx('h-16 flex items-center gap-4 px-4', classes.userMenu)}>
              {guestMenu.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'flex flex-col items-center justify-center duration-75',
                    classes.userMenuLink,
                  )}
                >
                  <Text className={''} size={'md'}>
                    {label}
                  </Text>
                </Link>
              ))}
              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
