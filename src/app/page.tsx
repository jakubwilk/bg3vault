import { CreateBuildHomeButton } from 'builds/components'

export default function Home() {
  return (
    <main className={'min-h-screen'}>
      <div className={'container mx-auto min-h-[inherit]'}>
        <div className={'min-h-[inherit] flex flex-col px-4'}>
          <CreateBuildHomeButton />
        </div>
      </div>
    </main>
  )
}
