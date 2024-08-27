'use client'

import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button, Text, Title } from '@mantine/core'
import clsx from 'clsx'

import classes from './pages.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['800'],
})

export default function LoginPage() {
  const t = useTranslations('AuthPage')

  return (
    <>
      <div>{'1'}</div>
      <section
        className={clsx(
          'p-8 pr-16 flex flex-col gap-6 justify-start',
          classes.loginRegisterSection,
        )}
      >
        <Title
          order={2}
          className={clsx('uppercase font-bold', classes.sectionTitle, barlow.className)}
        >
          {t('Login.Section.title')}
        </Title>
        <Text className={classes.sectionDescription}>{t('Login.Section.description')}</Text>
        <Button
          component={Link}
          href={'/register'}
          className={clsx('self-start rounded-none uppercase duration-75', classes.sectionButton)}
        >
          {'Create account'}
        </Button>
      </section>
    </>
  )
}
