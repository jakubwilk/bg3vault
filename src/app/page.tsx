import { BuildsHomeWrapper, CreateBuildHomeButton } from 'builds/components'
import { NewsHomeWrapper } from 'news/components'

export default function Home() {
  return (
    <main className={'min-h-full'}>
      <div className={'container mx-auto min-h-[inherit]'}>
        <div className={'min-h-[inherit] flex flex-col gap-6 px-4'}>
          <CreateBuildHomeButton />
          <BuildsHomeWrapper />
          <NewsHomeWrapper />
        </div>
      </div>
    </main>
  )
}
