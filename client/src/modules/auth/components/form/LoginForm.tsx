'use client'

import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { yupResolver } from '@hookform/resolvers/yup'
import { Anchor, Button, Text, Title } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import { useLoginAccountMutation } from 'auth/api'
import clsx from 'clsx'
import { useNotification } from 'common/hooks'
import { object, string } from 'yup'

import { ILoginFormValues } from '../../models'

import LoginFormFields from './LoginFormFields'

import classes from './form.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['800'],
})

export default function LoginForm() {
  const router = useRouter()
  const tc = useTranslations('Common')
  const t = useTranslations('AuthPage')
  const { showSuccessNotification } = useNotification()
  const { loginAccount, isPending } = useLoginAccountMutation()

  const form = useForm<ILoginFormValues>({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(
      object({
        email: string().email().required(tc('Validation.required')),
        password: string().required(tc('Validation.required')),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  const handleSubmit = async (values: ILoginFormValues) => {
    await loginAccount(values)

    showSuccessNotification(t('Login.Success.UserLogged'))
    router.push('/')
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
        <form className={'w-full'} onSubmit={form.handleSubmit(handleSubmit)} noValidate>
          <LoginFormFields control={form.control} isLoading={isPending} />
          <div className={'mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between'}>
            <Button
              disabled={isPending}
              type={'submit'}
              className={clsx(
                'rounded-none uppercase duration-75 w-full md:w-auto',
                classes.sectionButton,
              )}
            >
              {t('Login.Action.login')}
            </Button>
            <Text className={'flex flex-row gap-1 md:gap-0 md:flex-col'}>
              {t('Login.forgotPassword')}
              <Anchor
                component={Link}
                href={'/recover'}
                className={clsx(
                  'flex items-center self-end rounded-none underline duration-75',
                  classes.recoverLink,
                )}
              >
                {t('Login.Action.recover')}
              </Anchor>
            </Text>
          </div>
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
