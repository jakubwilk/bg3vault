import Link from 'next/link'
import { getUserSessionData } from 'common/utils'
import { AccountActivationBar } from 'users/components'

export default async function Home() {
  const { data } = await getUserSessionData()

  return (
    <main className={'min-h-full'}>
      <AccountActivationBar data={data} />
      <div className={'container mx-auto min-h-[inherit]'}>
        <div className={'min-h-[inherit] flex flex-col gap-6 px-4'}>
          <div className={'flex items-center justify-center gap-4'}>
            <Link href={'/login'} className={'text-white'}>
              {'Logowanie'}
            </Link>
            <Link href={'/register'} className={'text-white'}>
              {'Rejestracja'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
