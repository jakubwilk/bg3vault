'use client'

import { Control } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { IRegisterFormValues } from 'auth/models'
import { PasswordInputField, TextInputField } from 'common/components'

interface IProps {
  control: Control<IRegisterFormValues, any>
  isLoading?: boolean
}

export default function RegisterFormFields({ control, isLoading }: IProps) {
  const t = useTranslations('AuthPage')

  return (
    <div className={'flex flex-col gap-4'}>
      <TextInputField
        name={'email'}
        label={t('Field.email')}
        description={t('Field.emailDescription')}
        isRequired
        isDisabled={isLoading}
        control={control}
      />
      <TextInputField
        name={'username'}
        label={t('Field.username')}
        isRequired
        isDisabled={isLoading}
        control={control}
      />
      <PasswordInputField
        name={'password'}
        label={t('Field.password')}
        description={t('Field.passwordDescription')}
        isRequired
        isDisabled={isLoading}
        control={control}
      />
    </div>
  )
}
