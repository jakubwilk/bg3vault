'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Divider, Menu, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { clsx } from 'clsx'
import { APP_DESKTOP_MENU, MenuIconComponentEnum, renderMenuIconComponent } from 'common/utils'

import classes from './navbar.module.css'

export default function MobileFixedNavbar() {
  const matches = useMediaQuery('(max-width: 62em)')
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className={'flex justify-center items-center'}>
            <Menu width={'90vw'} withinPortal={false} opened={isMenuOpen} onChange={setIsMenuOpen}>
              <Menu.Target>
                <Link
                  className={clsx(
                    'flex items-center flex-col',
                    isMenuOpen ? classes.linkMobileActive : '',
                  )}
                  href={'#'}
                  onClick={(e) => e.preventDefault()}
                >
                  {renderMenuIconComponent(MenuIconComponentEnum.MENU, 28)}
                  <Text fw={500} className={clsx('uppercase', classes.label)}>
                    {'Menu'}
                  </Text>
                </Link>
              </Menu.Target>
              <Menu.Dropdown className={'p-4'}>
                {APP_DESKTOP_MENU.slice(1, APP_DESKTOP_MENU.length).map(
                  ({ id, label, subLabel, href }) => (
                    <Fragment key={id}>
                      <Link
                        href={href}
                        className={clsx(
                          'flex flex-col',
                          href === pathname ? classes.linkCurrentMobile : '',
                          classes.link,
                        )}
                      >
                        <Text>{label}</Text>
                        {subLabel && (
                          <Text className={'opacity-75 uppercase text-xs'}>{subLabel}</Text>
                        )}
                      </Link>
                      {id !== APP_DESKTOP_MENU.length && <Divider my={'xs'} />}
                    </Fragment>
                  ),
                )}
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
    )
  )
}
