import type { Metadata } from 'next'
import { Button, Checkbox, PasswordInput, Select, TextInput } from 'common/components'
import { Content } from 'common/layout'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <Content>
      <div className={'flex mb-20 h-screen items-center justify-center md:mb-0'}>
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
    </Content>
  )
}
