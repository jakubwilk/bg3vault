'use client'

import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Title } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import clsx from 'clsx'

import classes from './form.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['800'],
})

export default function LoginForm() {
  const t = useTranslations('AuthPage')

  return (
    <section className={'p-8 pl-16 flex flex-col gap-6 justify-start items-end'}>
      <Title
        order={2}
        className={clsx('uppercase font-bold', classes.sectionTitle, barlow.className)}
      >
        {t('Login.Form.title')}
      </Title>
      <Link
        href={'/'}
        className={clsx(
          'flex items-center self-end rounded-none underline duration-75',
          classes.backLink,
        )}
      >
        <IconChevronLeft width={18} stroke={2} className={'mr-2'} />
        {t('Login.Action.back')}
      </Link>
    </section>
  )
}
