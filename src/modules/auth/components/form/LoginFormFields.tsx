import { Control } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { ILoginFormValues } from 'auth/models'
import { PasswordInputField, TextInputField } from 'common/components'

interface IProps {
  control: Control<ILoginFormValues, any>
  isLoading?: boolean
}

export default function LoginFormFields({ control, isLoading }: IProps) {
  const t = useTranslations('AuthPage')

  return (
    <div className={'flex flex-col gap-4'}>
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
        isRequired
        isDisabled={isLoading}
        control={control}
      />
    </div>
  )
}
