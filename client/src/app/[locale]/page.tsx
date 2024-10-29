import { Header } from 'common/components'
import { getUserSessionData } from 'common/utils'
import { AccountActivationBar } from 'users/components'

export default async function Home() {
  const { data } = await getUserSessionData()

  return (
    <main className={'min-h-full'}>
      <Header />
      <AccountActivationBar data={data} />
      <div className={'container mx-auto min-h-[inherit] px-4 md:px-8'}>{'CONTENT'}</div>
    </main>
  )
}
