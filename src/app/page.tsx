import { Button, TextInput } from 'common/components'

export default function Home() {
  return (
    <div className={'flex h-screen items-center flex-col justify-center gap-2'}>
      <Button>{'abba'}</Button>
      <TextInput label={'Label'} description={'Description'} />
    </div>
  )
}
