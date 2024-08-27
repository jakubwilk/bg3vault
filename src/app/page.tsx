import Link from 'next/link'

export default function Home() {
  return (
    <main className={'min-h-full'}>
      <div className={'container mx-auto min-h-[inherit]'}>
        <div className={'min-h-[inherit] flex flex-col gap-6 px-4'}>
          <div className={'flex items-center justify-center gap-4'}>
            <Link href={'/login'}>{'Logowanie'}</Link>
            <Link href={'/register'}>{'Rejestracja'}</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
