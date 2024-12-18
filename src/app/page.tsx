import { Button, Checkbox, PasswordInput, Select, TextInput } from 'common/components'

export default function Home() {
  return (
    <div className={'flex h-screen items-center justify-center'}>
      <div className={'w-full max-w-[500px] flex flex-col justify-center gap-2'}>
        <Button>{'abba'}</Button>
        <TextInput label={'Text'} description={'Text description'} />
        <PasswordInput label={'Password'} description={'Password description'} />
        <Checkbox label={'Checkbox'} description={'Checkbox description'} />
        <Select
          label={'Select'}
          description={'Select description'}
          data={[
            { label: 'Option 1', value: 'Value 1' },
            { label: 'Option 2', value: 'Value 2' },
          ]}
        />
      </div>
    </div>
  )
}
