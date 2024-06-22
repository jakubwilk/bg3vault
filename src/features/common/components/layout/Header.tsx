'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, Tooltip } from '@mantine/core'
import logoUrl from 'assets/bg3logo.png'
import clsx from 'clsx'
import { HEADER_MENU } from 'common/utils'
import { isEqual } from 'lodash'

import Maintenance from './Maintenance'

export default function Header() {
  const pathname = usePathname()

  const isLinkActive = useCallback((url: string): boolean => isEqual(pathname, url), [pathname])

  return (
    <>
      <Maintenance />
      <header className={'px-4 py-4 md:px-8 lg:px-8 w-full bg-zinc-800'}>
        <div className={'container mx-auto'}>
          <div className={'flex justify-between items-center gap-4'}>
            <div className={'flex items-center gap-2'}>
              <Image
                src={logoUrl}
                width={100}
                height={100}
                alt={'Official Baldurs Gate 3 logo'}
                className={'mr-4'}
              />
              {HEADER_MENU.map(({ id, name, href, title }) => (
                <Tooltip label={title} key={id} position={'bottom'}>
                  <Button
                    variant={isLinkActive(href) ? 'transparent' : 'subtle'}
                    color={isLinkActive(href) ? 'yellow' : 'white'}
                    classNames={{ label: clsx('text-base font-light') }}
                    component={Link}
                    href={href}
                  >
                    {name}
                  </Button>
                </Tooltip>
              ))}
            </div>
            <Button
              variant={'subtle'}
              color={'white'}
              classNames={{ label: clsx('text-base font-light') }}
              component={'a'}
              href={'https://github.com/jakubwilk/baldurs-gate-3-fan-web-api'}
              target={'__blank'}
            >
              {'GitHub'}
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
