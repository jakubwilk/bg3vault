'use client'

import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { yupResolver } from '@hookform/resolvers/yup'
import { Anchor, Box, Button, Loader, Overlay, Text, Title } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import { useQueryClient } from '@tanstack/react-query'
import { LoginAccountKey, useCreateAccountMutation, useLoginAccountMutation } from 'auth/api'
import clsx from 'clsx'
import { useNotification } from 'common/hooks'
import { object, string } from 'yup'

import { IRegisterFormValues } from '../../models'

import RegisterFormFields from './RegisterFormFields'

import classes from './form.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['800'],
})

export default function RegisterForm() {
  const router = useRouter()
  const tc = useTranslations('Common')
  const t = useTranslations('AuthPage')
  const queryClient = useQueryClient()
  const { showSuccessNotification } = useNotification()
  const { mutate: createAccount, isPending } = useCreateAccountMutation()
  const { mutate: loginAccount, isPending: isLoginPending } = useLoginAccountMutation()

  const form = useForm<IRegisterFormValues>({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
    resolver: yupResolver(
      object({
        email: string().email(tc('Validation.email')).required(tc('Validation.required')),
        username: string().required(tc('Validation.required')),
        password: string()
          .test('isPasswordCorrect', tc('Validation.password'), (value) => {
            const regex = /^(?=.*\d)(?=.*[A-Z]).{12,}$/

            if (value) {
              return regex.test(value)
            }

            return true
          })
          .required(tc('Validation.required')),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  const handleSubmit = (values: IRegisterFormValues) => {
    createAccount(values, {
      onSuccess: () => {
        showSuccessNotification(t('Register.Success.UserCreated'))

        loginAccount(
          { username: values.username, password: values.password },
          {
            onSuccess: () => {
              showSuccessNotification(t('Login.Success.UserLogged'))
              router.push('/')
            },
          },
        )
      },
    })
  }

  return (
    <section className={'p-8 pl-16 flex flex-col gap-6 justify-start items-end relative'}>
      {isLoginPending && (
        <Overlay
          className={'w-full h-full flex items-center justify-center p-4 md:p-8'}
          color={'#000'}
          backgroundOpacity={0.85}
        >
          <Box className={'flex flex-col items-center gap-4 bg-white px-8 py-4'}>
            <Loader />
            <Text>{t('Register.Success.UserLogInProgress')}</Text>
            <Button
              color={'red'}
              className={clsx('w-full rounded-none uppercase', classes.loginCancelButton)}
              onClick={() => queryClient.cancelQueries({ queryKey: [LoginAccountKey] })}
            >
              {tc('Action.Cancel')}
            </Button>
          </Box>
        </Overlay>
      )}
      <Title
        order={2}
        className={clsx('uppercase font-bold', classes.sectionTitle, barlow.className)}
      >
        {t('Register.Form.title')}
      </Title>
      <FormProvider {...formValues}>
        <form className={'w-full'} onSubmit={form.handleSubmit(handleSubmit)} noValidate>
          <RegisterFormFields control={form.control} isLoading={isPending} />
          <div className={'mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between'}>
            <Button
              disabled={isPending}
              type={'submit'}
              className={clsx(
                'rounded-none uppercase duration-75 w-full md:w-auto',
                classes.sectionButton,
              )}
            >
              {t('Register.Action.create')}
            </Button>
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
        {t('Register.Action.back')}
      </Anchor>
    </section>
  )
}
