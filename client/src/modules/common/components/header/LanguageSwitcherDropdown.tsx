'use client'

import { useCallback, useTransition } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button, Menu } from '@mantine/core'
import clsx from 'clsx'
import { usePathname, useRouter } from 'i18n/routing'

import classes from './header.module.css'

interface IProps {
  langs: readonly ['en', 'pl']
  value: string
}

export default function LanguageSwitcherDropdown({ value, langs }: IProps) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const t = useTranslations()
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition()

  const handleChangeLanguage = useCallback(
    (lang: string) => {
      startTransition(() => {
        // setCurrentLang(lang)
        // @ts-expect-error -- TypeScript will validate that only known `params`
        router.replace({ pathname, params }, { locale: lang })
      })
    },
    [params, pathname, router],
  )

  return (
    <Menu shadow={undefined} radius={0}>
      <Menu.Target>
        <Button className={clsx('h-16 w-16', classes.languageSwitcherButton)} radius={0}>
          {value.toUpperCase()}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {langs.map((lang) => (
          <Menu.Item key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t('Common.Lang.' + lang)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}
