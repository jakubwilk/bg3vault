import { Control } from 'react-hook-form'
import { ILoginFormValues } from 'auth/models'
import { PasswordInputField, TextInputField } from 'common/components'

interface IProps {
  control: Control<ILoginFormValues, any>
  isLoading?: boolean
}

export default function LoginFormFields({ control, isLoading }: IProps) {
  return (
    <div className={'flex flex-col gap-4'}>
      <TextInputField
        name={'username'}
        label={'Username'}
        isRequired
        isDisabled={isLoading}
        control={control}
      />
      <PasswordInputField
        name={'password'}
        label={'Password'}
        isRequired
        isDisabled={isLoading}
        control={control}
      />
    </div>
  )
}
