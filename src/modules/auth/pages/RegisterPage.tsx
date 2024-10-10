'use client'

import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button, Text, Title } from '@mantine/core'
import { RegisterForm } from 'auth/components'
import clsx from 'clsx'

import classes from './pages.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['800'],
})

export default function RegisterPage() {
  const t = useTranslations('AuthPage')

  return (
    <>
      <RegisterForm />
      <section
        className={clsx(
          'p-8 pr-16 flex flex-col gap-6 justify-start items-start',
          classes.loginRegisterSection,
        )}
      >
        <Title
          order={2}
          className={clsx('uppercase font-bold', classes.sectionTitle, barlow.className)}
        >
          {t('Register.Section.title')}
        </Title>
        <Text className={classes.sectionDescription}>{t('Register.Section.description')}</Text>
        <Button
          component={Link}
          href={'/login'}
          className={clsx('self-start rounded-none uppercase duration-75', classes.sectionButton)}
        >
          {t('Register.Action.login')}
        </Button>
      </section>
    </>
  )
}
