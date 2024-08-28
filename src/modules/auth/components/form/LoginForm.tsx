'use client'

import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { yupResolver } from '@hookform/resolvers/yup'
import { Anchor, Button, Title } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import clsx from 'clsx'
import { object, string } from 'yup'

import { ILoginFormValues } from '../../models'

import LoginFormFields from './LoginFormFields'

import classes from './form.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['800'],
})

export default function LoginForm() {
  const tc = useTranslations('Common')
  const t = useTranslations('AuthPage')

  const form = useForm<ILoginFormValues>({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(
      object({
        username: string().required(tc('Validation.required')),
        password: string().required(tc('Validation.required')),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  const handleSubmit = (values: ILoginFormValues) => {
    console.log('values', values)
  }

  return (
    <section className={'p-8 pl-16 flex flex-col gap-6 justify-start items-end'}>
      <Title
        order={2}
        className={clsx('uppercase font-bold', classes.sectionTitle, barlow.className)}
      >
        {t('Login.Form.title')}
      </Title>
      <FormProvider {...formValues}>
        <form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
          <LoginFormFields control={form.control} />
          <Button
            type={'submit'}
            className={clsx('rounded-none uppercase duration-75', classes.sectionButton)}
          >
            {t('Login.Action.login')}
          </Button>
        </form>
      </FormProvider>
      <Anchor
        component={Link}
        href={'/'}
        className={clsx(
          'flex items-center self-end rounded-none underline duration-75',
          classes.backLink,
        )}
      >
        <IconChevronLeft width={18} stroke={2} className={'mr-2'} />
        {t('Login.Action.back')}
      </Anchor>
    </section>
  )
}
