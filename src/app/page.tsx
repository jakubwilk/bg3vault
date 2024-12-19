import { Button, Checkbox, PasswordInput, TextInput } from 'common/components'

export default function Home() {
  return (
    <div className={'flex h-screen items-center justify-center'}>
      <div className={'w-full max-w-[500px] flex flex-col justify-center gap-2'}>
        <Button>{'abba'}</Button>
        <TextInput label={'Text'} description={'Text description'} />
        <PasswordInput label={'Password'} description={'Password description'} />
        <Checkbox label={'Checkbox'} description={'Checkbox description'} />
      </div>
    </div>
  )
}
